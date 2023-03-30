import type { PayloadAction } from '@reduxjs/toolkit'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { productDataFormat } from 'data'
import { fakeGetProductByCategory } from 'request/allProducts'
import { fakeGetBookmarkedProducts } from 'request/bookmarks'
import { DefaultAsyncStatus } from 'types'

export type NewBookmarkData = {
	id: string,
	product: productDataFormat,
}

export type BookmarkData = {
	bookmarkIds: string[],
	products: productDataFormat[],
}

export type AllProductsState = BookmarkData & DefaultAsyncStatus

const getBookmarkIds = () => {
	let bookmarksStr:string = localStorage.getItem("bookmarks") ?? "";
	return bookmarksStr ? JSON.parse(bookmarksStr) : []
}

const initialState: AllProductsState = {
	bookmarkIds: getBookmarkIds(),
	products: [],
	loading: false,
	error: null,
}

export const getBookmarkProducts = createAsyncThunk("productDetails/getBookmarkProducts", async (data, thunkAPI) => {
	try {
		console.log("getBookmarkProducts")
		let res = await fakeGetBookmarkedProducts(getBookmarkIds())

		console.log(res)

		return res
	}
	catch (err: any) {
		return thunkAPI.rejectWithValue(err.message)
	}
})

export const Bookmarks = createSlice({
	name: 'bookmarks',
	initialState,
	reducers: {
		addBookmark: (state, action: PayloadAction<NewBookmarkData>) => {
			state.bookmarkIds = [...state.bookmarkIds, action.payload.id]
			state.products = [...state.products, action.payload.product]

			localStorage.setItem("bookmarks", JSON.stringify(state.bookmarkIds))
		},
		removeBookmark: (state, action: PayloadAction<string>) => {
			state.bookmarkIds = state.bookmarkIds.filter(id => id !== action.payload)
			state.products = state.products.filter(product => product.id !== action.payload)

			localStorage.setItem("bookmarks", JSON.stringify(state.bookmarkIds))
		},
	},
	extraReducers(builder) {
		builder
			.addCase(getBookmarkProducts.pending, (state, action) => {
				state.loading = true
				state.error = null
			})
			.addCase(getBookmarkProducts.fulfilled, (state, action: PayloadAction<any>) => {
				state.loading = false
				state.error = null
				state.products = action.payload
			}).addCase(getBookmarkProducts.rejected, (state, action: PayloadAction<any>) => {
				state.loading = false
				state.error = action.payload
			})
	}
})

export const { addBookmark, removeBookmark } = Bookmarks.actions;

export const getBookmarks = (state: AllProductsState) => state.bookmarkIds
export const getProducts = (state: AllProductsState) => state.products
export const getLoading = (state: AllProductsState) => state.loading
export const getError = (state: AllProductsState) => state.error

export default Bookmarks.reducer