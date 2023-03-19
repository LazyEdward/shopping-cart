import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { GLASS_IMAGES, PLANT_IMAGES, productDataFormat, RING_IMAGES } from 'data/images'
import { RootState } from './store'
import { fakeGetDashboard } from 'request/dashboard'

export type DashboardData = {
	newArrivals: productDataFormat[],
	limitedOffers: productDataFormat[],
	rings: productDataFormat[],
	glasses: productDataFormat[],
	plants: productDataFormat[],
}

export type DashboardStatus = {
	loading: boolean,
	error: string | null
}

export type DashboardState = DashboardData & DashboardStatus

const initialState: DashboardState = {
	newArrivals: [],
	limitedOffers: [],
	rings: [],
	glasses: [],
	plants: [],
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
				state.newArrivals = action.payload.newArrivals
				state.limitedOffers = action.payload.limitedOffers
				state.rings = action.payload.rings
				state.glasses = action.payload.glasses
				state.plants = action.payload.plants
			}).addCase(getDashboardNews.rejected, (state, action: PayloadAction<any>) => {
				state.loading = false
				state.error = action.payload
			})
	}
})

export const getNewArrivals = (state: DashboardState) => state.newArrivals
export const getLimitedOffers = (state: DashboardState) => state.limitedOffers
export const getRings = (state: DashboardState) => state.rings
export const getGlasses = (state: DashboardState) => state.glasses
export const getPlants = (state: DashboardState) => state.plants
export const getLoading = (state: DashboardState) => state.loading
export const getError = (state: DashboardState) => state.error


export default DashboardSlice.reducer