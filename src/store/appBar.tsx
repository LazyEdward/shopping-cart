import type { PayloadAction } from '@reduxjs/toolkit'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { productDataFormat } from 'data'
import { fakeGetProductsBySearch } from 'request/general'
import { DefaultAsyncStatus } from 'types'

export type AppBarData = {
	products: productDataFormat[],
}

export type AppBarState = AppBarData & DefaultAsyncStatus

const initialState: AppBarState = {
	products: [],
	loading: false,
	error: null,
}

export const getSearchProduct = createAsyncThunk("appBar/getSearchProduct", async (data: any, thunkAPI) => {
	try {
		console.log("getSearchProduct")
		let res = await fakeGetProductsBySearch(data.searchInput, data.titleLang, data.descLang, 5)

		console.log(res)

		return res
	}
	catch (err: any) {
		return thunkAPI.rejectWithValue(err.message)
	}
})

export const AppBarSlice = createSlice({
	name: 'appBar',
	initialState,
	reducers: {
		clearSearchProduct: (state) => {
			state.products = []
		}
	},
	extraReducers(builder) {
		builder
			.addCase(getSearchProduct.pending, (state, action) => {
				state.loading = true
				state.error = null
			})
			.addCase(getSearchProduct.fulfilled, (state, action: PayloadAction<any>) => {
				state.loading = false
				state.error = null
				state.products = action.payload.products
			}).addCase(getSearchProduct.rejected, (state, action: PayloadAction<any>) => {
				state.loading = false
				state.error = action.payload
			})
	}
})

export const { clearSearchProduct } = AppBarSlice.actions;

export const getProducts = (state: AppBarState) => state.products
export const getLoading = (state: AppBarState) => state.loading
export const getError = (state: AppBarState) => state.error


export default AppBarSlice.reducer