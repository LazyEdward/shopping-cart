import { productTagFormat } from "data"
import { fakeGetProducts } from "./general"

export const fakeGetProductByCategory = (category: productTagFormat, maxRows:number=0) => {
	let categories = [category]
	return fakeGetProducts(categories, maxRows)
}