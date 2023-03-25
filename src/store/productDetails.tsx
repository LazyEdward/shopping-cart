import type { PayloadAction } from '@reduxjs/toolkit'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { productDataFormat } from 'data'
import { fakeGetProductByCategory } from 'request/allProducts'

export type CurrentProductData = {
	product: productDataFormat | null,
	products: productDataFormat[],
}

export type AllProductsStatus = {
	loading: boolean,
	error: string | null
}

export type AllProductsState = CurrentProductData & AllProductsStatus

const initialState: AllProductsState = {
	product: null,
	products: [],
	loading: false,
	error: null,
}

export const getOtherProducts = createAsyncThunk("productDetails/getOtherProducts", async (data: any, thunkAPI) => {
	try {
		console.log("getFakeGetProducts")
		let res = await fakeGetProductByCategory(data.product.tags[0])

		console.log(res)

		return {...res as any, product: data.product}
	}
	catch (err: any) {
		return thunkAPI.rejectWithValue(err.message)
	}
})

export const ProductDetails = createSlice({
	name: 'productDetails',
	initialState,
	reducers: {
		selectProduct: (state, action: PayloadAction<CurrentProductData>) => {
			state.product = action.payload.product
			state.products = action.payload.products
		}
	},
	extraReducers(builder) {
		builder
			.addCase(getOtherProducts.pending, (state, action) => {
				state.loading = true
				state.error = null
			})
			.addCase(getOtherProducts.fulfilled, (state, action: PayloadAction<any>) => {
				state.loading = false
				state.error = null
				state.product = action.payload.product
				state.products = state.product ? action.payload.products[state.product.tags[0]] : []
			}).addCase(getOtherProducts.rejected, (state, action: PayloadAction<any>) => {
				state.loading = false
				state.error = action.payload
			})
	}
})

export const { selectProduct } = ProductDetails.actions;

export const getCurrentProduct = (state: AllProductsState) => state.product
export const getCurrentProducts = (state: AllProductsState) => state.products
export const getLoading = (state: AllProductsState) => state.loading
export const getError = (state: AllProductsState) => state.error

export default ProductDetails.reducer