import ProductModal from "components/productPreview/productModal"
import { productDataFormat } from "data"
import { useAppDispatch } from "hooks/storeTypedHook"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import { getDashboardNews, getError, getProducts, getCategories, getLoading } from "store/dashboard"
import { RootState } from "store/store"
import ProductList from "../components/productPreview/productList"
import { getOtherProducts, selectProduct } from "store/productDetails"
import { getBookmarks } from "store/bookmarks"
import { getCart } from "store/cart"

const useCart = () => {
	const {
		productRecord,
	} = useSelector((state: RootState) => ({
		productRecord: getCart(state.cart),
	}))

	return {
		productRecord,
	}
}

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

const useDashboardData = () => {
	const {
		categories,
		products,
		loading,
		error,
	} = useSelector((state: RootState) => ({
		categories: getCategories(state.dashboard),
		products: getProducts(state.dashboard),
		loading: getLoading(state.dashboard),
		error: getError(state.dashboard),
	}))

	return {
		categories,
		products,
		loading,
		error,
	}
}

const Home = () => {
	const { t, i18n } = useTranslation()
	const dispatch = useAppDispatch()

	console.log(i18n.language)

	const {
		categories,
		products,
		loading,
		error,
	} = useDashboardData()

	const {
		productRecord,
	} = useCart()

	const {
		bookmarks,
	} = useBookmarks()

	const categoryMap = {
		"newArrivals": products.newArrivals,
		"limitedOffers": products.limitedOffers,
		"rings": products.rings,
		"glasses": products.glasses,
		"plants": products.plants,
	}

	const selectModalProduct = (product:productDataFormat) => {
		dispatch(selectProduct({product: product, products: categoryMap[product.tags[0] as keyof typeof categoryMap]}))
	}


	useEffect(() => {
		console.log("getDashboardNews")
		dispatch(getDashboardNews())
	}, [dispatch])

	// configurable language test
	// useEffect(() => {
	// 	setTimeout(() => i18n.changeLanguage("ja"), 1000)
	// }, [])

	return (
		<>
			<div className="w-full h-full px-4">
				<div className="flex flex-col">
					{/* configurable language test */}
					{/* <ProductList title={t("test.first")} products={newArrivals} loading={loading}/> */}
					{categories.map(category => (
						<ProductList bookmarks={bookmarks} carts={productRecord} key={`dashboard-${category}`} title={t(`general.title.${category}`)} products={categoryMap[category]} loading={loading} onSelectProduct={(product:productDataFormat) => selectModalProduct(product)}/>
					))}
				</div>
			</div>
			<ProductModal
				onSelectOtherProduct={(product) => selectModalProduct(product)}
				closeModal={() => dispatch(selectProduct({product: null, products: []}))}
			/>
		</>
	)
}

export default Home