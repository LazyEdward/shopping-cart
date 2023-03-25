import type { PayloadAction } from '@reduxjs/toolkit'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { productTagFormat, productDataFormat } from 'data'
import { fakeGetProductByCategory } from 'request/allProducts'
import { DefaultAsyncStatus } from 'types'

export type CurrentProductData = {
	category: productTagFormat,
	products: productDataFormat[],
}

export type AllProductsState = CurrentProductData & DefaultAsyncStatus

const initialState: AllProductsState = {
	category: "newArrivals",
	products: [],
	loading: false,
	error: null,
}

export const getProducts = createAsyncThunk("allProducts/getProducts", async (data: any, thunkAPI) => {
	try {
		console.log("getFakeGetProducts")
		let res = await fakeGetProductByCategory(data.category, 10)

		console.log(res)

		return {category: data.category, res: res}
	}
	catch (err: any) {
		return thunkAPI.rejectWithValue(err.message)
	}
})

export const AllProductsSlice = createSlice({
	name: 'allProducts',
	initialState,
	reducers: {
		selectCategory: (state, action: PayloadAction<productTagFormat>) => {
			state.category = action.payload
		}
	},
	extraReducers(builder) {
		builder
			.addCase(getProducts.pending, (state, action) => {
				state.loading = true
				state.error = null
			})
			.addCase(getProducts.fulfilled, (state, action: PayloadAction<any>) => {
				state.loading = false
				state.error = null
				state.category = action.payload.category
				state.products = action.payload.res.products[action.payload.category]
			}).addCase(getProducts.rejected, (state, action: PayloadAction<any>) => {
				state.loading = false
				state.error = action.payload
			})
	}
})

export const getCurrentCategory = (state: AllProductsState) => state.category
export const getCurrentProducts = (state: AllProductsState) => state.products
export const getLoading = (state: AllProductsState) => state.loading
export const getError = (state: AllProductsState) => state.error


export default AllProductsSlice.reducer