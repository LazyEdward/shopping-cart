import { createSlice } from '@reduxjs/toolkit'
// import { fakeGetAccessableSiteMap } from 'request/AccessableSiteMap'

export type AccessableSiteMapData = {
	sites: string[]
}

export type AccessableSiteMapStatus = {
	loading: boolean,
	error: string | null
}

export type AccessableSiteMapState = AccessableSiteMapData & AccessableSiteMapStatus

const initialState: AccessableSiteMapState = {
	sites: ["allProducts", "bookmarks", "cart"],
	loading: false,
	error: null,
}

// export const getAccessableSiteMapNews = createAsyncThunk("AccessableSiteMap/getAccessableSiteMapNews", async (data, thunkAPI) => {
// 	try {
// 		console.log("getAccessableSiteMapNews")
// 		let res = await fakeGetAccessableSiteMap()

// 		console.log(res)

// 		return res
// 	}
// 	catch (err: any) {
// 		return thunkAPI.rejectWithValue(err.message)
// 	}
// })

export const AccessableSiteMapSlice = createSlice({
	name: 'AccessableSiteMap',
	initialState,
	reducers: {},
	// extraReducers(builder) {
	// 	builder
	// 		.addCase(getAccessableSiteMapNews.pending, (state, action) => {
	// 			state.loading = true
	// 			state.error = null
	// 		})
	// 		.addCase(getAccessableSiteMapNews.fulfilled, (state, action: PayloadAction<any>) => {
	// 			state.loading = false
	// 			state.error = null
	// 			state.newArrivals = action.payload.newArrivals
	// 			state.limitedOffers = action.payload.limitedOffers
	// 			state.rings = action.payload.rings
	// 			state.glasses = action.payload.glasses
	// 			state.plants = action.payload.plants
	// 		}).addCase(getAccessableSiteMapNews.rejected, (state, action: PayloadAction<any>) => {
	// 			state.loading = false
	// 			state.error = action.payload
	// 		})
	// }
})

export const getSites = (state: AccessableSiteMapState) => state.sites
export const getLoading = (state: AccessableSiteMapState) => state.loading
export const getError = (state: AccessableSiteMapState) => state.error


export default AccessableSiteMapSlice.reducer