import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { GLASS_IMAGES, PLANT_IMAGES, productDataFormat, RING_IMAGES } from 'data/images'
import { RootState } from './store'
import { fakeGetDashboard } from 'request/dashboard'
import { fakeGetProducts } from 'request/allProducts'

export type ProductCategoryType = "newArrivals" | "limitedOffers" | "rings" | "glasses" | "plants"

export type CurrentProductData = {
	category: ProductCategoryType,
	products: productDataFormat[],
}

export type AllProductsStatus = {
	loading: boolean,
	error: string | null
}

export type AllProductsState = CurrentProductData & AllProductsStatus

const initialState: AllProductsState = {
	category: "newArrivals",
	products: [],
	loading: false,
	error: null,
}

export const getProducts = createAsyncThunk("allProducts/getProducts", async (data: any, thunkAPI) => {
	try {
		console.log("getFakeGetProducts")
		let res = await fakeGetProducts(data.category)

		console.log(res)

		return res
	}
	catch (err: any) {
		return thunkAPI.rejectWithValue(err.message)
	}
})

export const AllProductsSlice = createSlice({
	name: 'allProducts',
	initialState,
	reducers: {
		selectCategory: (state, action: PayloadAction<ProductCategoryType>) => {
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
				state.products = action.payload.products
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