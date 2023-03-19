import { GLASS_IMAGES, PLANT_IMAGES, RING_IMAGES } from "data/images"
import { DashboardData } from "store/dashboard"

export const fakeGetProducts = (category: "newArrivals" | "limitedOffers" | "rings" | "glasses" | "plants") => {
	return new Promise((resolve, reject) => {
		let data: DashboardData = {
			newArrivals: [],
			limitedOffers: [],
			rings: RING_IMAGES,
			glasses: GLASS_IMAGES,
			plants: PLANT_IMAGES,
		}

		data.newArrivals = [...data.newArrivals, RING_IMAGES[0], RING_IMAGES[1], GLASS_IMAGES[2], PLANT_IMAGES[0], PLANT_IMAGES[1]]
		data.limitedOffers = [...data.limitedOffers, RING_IMAGES[0], RING_IMAGES[2], GLASS_IMAGES[2], GLASS_IMAGES[3], PLANT_IMAGES[0], PLANT_IMAGES[1]]
		
		// use rejectWithValue or error
		// if(error)
		// 	return setTimeout(() => {
		// 		reject(new Error("error"))
		// 	}, 500)

		setTimeout(() => {
			console.log(data[category])
			resolve({category, products: data[category]})
		}, 500)
	})
}