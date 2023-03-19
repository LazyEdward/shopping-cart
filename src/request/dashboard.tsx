import { GLASS_IMAGES, PLANT_IMAGES, RING_IMAGES } from "data/images"
import { DashboardData } from "store/dashboard"

export const fakeGetDashboard = () => {
	return new Promise((resolve, reject) => {
		let data: DashboardData = {
			newArrivals: [],
			limitedOffers: [],
			rings: RING_IMAGES.slice(0, 5),
			glasses: GLASS_IMAGES.slice(0, 5),
			plants: PLANT_IMAGES.slice(0, 5),
		}

		data.newArrivals = [...data.newArrivals, RING_IMAGES[0], RING_IMAGES[1], GLASS_IMAGES[2], PLANT_IMAGES[0], PLANT_IMAGES[1]]
		data.limitedOffers = [...data.limitedOffers, RING_IMAGES[0], RING_IMAGES[2], GLASS_IMAGES[2], GLASS_IMAGES[3], PLANT_IMAGES[0], PLANT_IMAGES[1]]
		
		// use rejectWithValue or error
		// if(error)
		// 	return setTimeout(() => {
		// 		reject(new Error("error"))
		// 	}, 500)

		setTimeout(() => {
			console.log(data)
			resolve(data)
		}, 500)
	})
}