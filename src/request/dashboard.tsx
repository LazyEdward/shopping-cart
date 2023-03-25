import { productTagFormat } from "data"
import { fakeGetProducts } from "./general"

export const fakeGetDashboard = () => {
	let categories: productTagFormat[] = ["newArrivals" , "limitedOffers", "rings", "glasses", "plants"]
	return fakeGetProducts(categories, 5)
}