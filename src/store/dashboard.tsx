import type { PayloadAction } from '@reduxjs/toolkit'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { productDataFormat, productTagFormat } from 'data'
import { fakeGetDashboard } from 'request/dashboard'
import { DefaultAsyncStatus } from 'types'

export type DashboardData = {
	categories: productTagFormat[],
	products: {[key:string]: productDataFormat[]},
}

export type DashboardState = DashboardData & DefaultAsyncStatus

const initialState: DashboardState = {
	categories: ["newArrivals" , "limitedOffers", "rings", "glasses", "plants"],
	products: { "newArrivals": [] , "limitedOffers": [], "rings": [], "glasses": [], "plants": [] },
	loading: false,
	error: null,
}

export const getDashboardNews = createAsyncThunk("dashboard/getDashboardNews", async (data, thunkAPI) => {
	try {
		console.log("getDashboardNews")
		let res = await fakeGetDashboard()

		console.log(res)

		return res
	}
	catch (err: any) {
		return thunkAPI.rejectWithValue(err.message)
	}
})

export const DashboardSlice = createSlice({
	name: 'dashboard',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(getDashboardNews.pending, (state, action) => {
				state.loading = true
				state.error = null
			})
			.addCase(getDashboardNews.fulfilled, (state, action: PayloadAction<any>) => {
				state.loading = false
				state.error = null
				state.products = action.payload.products
			}).addCase(getDashboardNews.rejected, (state, action: PayloadAction<any>) => {
				state.loading = false
				state.error = action.payload
			})
	}
})

export const getCategories = (state: DashboardState) => state.categories
export const getProducts = (state: DashboardState) => state.products
export const getLoading = (state: DashboardState) => state.loading
export const getError = (state: DashboardState) => state.error


export default DashboardSlice.reducer