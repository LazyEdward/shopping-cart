import { productTagFormat } from "data"
import { fakeGetProductsByIds } from "./general"

export const fakeGetCartProducts = (ids: string[]) => {
	return fakeGetProductsByIds(ids)
}