import Card from "components/card"
import CardImage from "components/card/cardImage"
import Scrollable from "components/scrollable"
import Loader from "components/loader"
import { useAppDispatch } from "hooks/storeTypedHook"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { getProducts, getError, getLoading, } from "store/allProducts"
import { RootState } from "store/store"
import ScrollHelper from "components/scrollable/scrollHelper"
import ProductList from "../components/productPreview/productList"
import { getCurrentCategory, getCurrentProducts } from "store/allProducts"
import RoundSelect, { OptionListProps } from "components/roundSelect"
import { useTranslation } from "react-i18next"
import ProductPreview from "components/productPreview"
import { productDataFormat } from "data"
import ProductModal from "components/productPreview/productModal"
import { getOtherProducts, selectProduct } from "store/productDetails"
import { addBookmark, getBookmarks, removeBookmark } from "store/bookmarks"
import PageLoading from "components/loader/pageLoading"
import { NoNewProducts } from "components/warning"

const useBookmarks = () => {
	const {
		bookmarks,
	} = useSelector((state: RootState) => ({
		bookmarks: getBookmarks(state.bookmarks),
	}))

	return {
		bookmarks,
	}
}

const useAllProductsData = () => {
	const {
		products,
		category,
		loading,
		error,
	} = useSelector((state: RootState) => ({
		products: getCurrentProducts(state.allProducts),
		category: getCurrentCategory(state.allProducts),
		loading: getLoading(state.allProducts),
		error: getError(state.allProducts),
	}))

	return {
		products,
		category,
		loading,
		error,
	}
}

const AllProducts = () => {
	const { t, i18n } = useTranslation()
	const dispatch = useAppDispatch()

	const categoryNameMap = {
		"newArrivals": t("general.title.newArrivals") ?? "newArrivals",
		"limitedOffers": t("general.title.limitedOffers") ?? "limitedOffers",
		"rings": t("general.title.rings") ?? "rings",
		"glasses": t("general.title.glasses") ?? "glasses",
		"plants": t("general.title.plants") ?? "plants",
	}

	const categoryListOptions: OptionListProps[] = [
		{
			label: categoryNameMap["newArrivals"],
			value: "newArrivals"
		},
		{
			label: categoryNameMap["limitedOffers"],
			value: "limitedOffers"
		},
		{
			label: categoryNameMap["rings"],
			value: "rings"
		},
		{
			label: categoryNameMap["glasses"],
			value: "glasses"
		},
		{
			label: categoryNameMap["plants"],
			value: "plants"
		},
	]
	

	const {
		products,
		category,
		loading,
		error,
	} = useAllProductsData()

	const {
		bookmarks,
	} = useBookmarks()

	const selectModalProduct = (product:productDataFormat) => {
		dispatch(getOtherProducts({product: product}))
	}

	const handleBookmark = (bookmark:boolean, product:productDataFormat) => {
		if(bookmark)
			dispatch(addBookmark({id: product.id, product: product}))
		else
			dispatch(removeBookmark(product.id))
	}

	useEffect(() => {
		console.log("getProducts")
		dispatch(getProducts({category: category}))
	}, [dispatch])

	console.log(category)

	let bookmarksSet = new Set(bookmarks)

	return (
		<>
			<div className="w-full h-full px-4 overflow-hidden">
				{/* select element 56px */}
				<div className="w-full flex items-center justify-between h-[56px]">
					<span className="hidden sm:block px-2 py-4 text-lg font-semibold text-neutral-700">{`${t("allProducts.title")}${categoryNameMap[category]}`}</span>
					<RoundSelect
						className="mx-4 w-full sm:w-[250px]"
						placeholder="Select category"
						value={category}
						options={categoryListOptions}
						onChange={(e: any) => dispatch(getProducts({category: e.target.value}))}
					/>
				</div>
				<div className="w-full h-[calc(100%-56px)] overflow-auto">
					{loading ?
						<PageLoading/>
						:
						products && products.length > 0 ? 
							<div className="flex flex-wrap">
								{products.map((product, index) => (
									<div
										className="py-2"
										key={`${category}-${index}`}
									>
										{/* <CardImage src={product.img} width="300" height="200"/> */}
										<ProductPreview isBookmarked={bookmarksSet.has(product.id)} bookmarkAction={(bookmark:boolean) => handleBookmark(bookmark, product)} className="mx-4 my-2" product={product} onSelect={(product) => selectModalProduct(product)}/>
									</div>
								))}
							</div>
						:
							<NoNewProducts/>
					}
				</div>
			</div>
			<ProductModal
				onSelectOtherProduct={(product) => selectModalProduct(product)}
				closeModal={() => dispatch(selectProduct({product: null, products: []}))}
			/>
		</>
	)
}

export default AllProducts