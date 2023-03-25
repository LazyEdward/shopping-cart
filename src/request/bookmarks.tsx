import { productTagFormat } from "data"
import { fakeGetProductsByIds } from "./general"

export const fakeGetBookmarkedProducts = (ids: string[]) => {
	return fakeGetProductsByIds(ids)
}