import ProductModal from "components/productPreview/productModal"
import { productDataFormat } from "data/images"
import { useAppDispatch } from "hooks/storeTypedHook"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import { getDashboardNews, getError, getGlasses, getLimitedOffers, getLoading, getNewArrivals, getPlants, getRings } from "store/dashboard"
import { RootState } from "store/store"
import ProductList from "../components/productPreview/productList"

const useDashboardData = () => {
	const {
		newArrivals,
		limitedOffers,
		rings,
		glasses,
		plants,
		loading,
		error,
	} = useSelector((state: RootState) => ({
		newArrivals: getNewArrivals(state.dashboard),
		limitedOffers: getLimitedOffers(state.dashboard),
		rings: getRings(state.dashboard),
		glasses: getGlasses(state.dashboard),
		plants: getPlants(state.dashboard),
		loading: getLoading(state.dashboard),
		error: getError(state.dashboard),
	}))

	return {
		newArrivals,
		limitedOffers,
		rings,
		glasses,
		plants,
		loading,
		error,
	}
}

const Home = () => {
	const { t, i18n } = useTranslation()
	const dispatch = useAppDispatch()

	console.log(i18n.language)

	const {
		newArrivals,
		limitedOffers,
		rings,
		glasses,
		plants,
		loading,
		error,
	} = useDashboardData()

	const [selectedProduct, setSelectedProduct] = useState<productDataFormat | null>(null)

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
					<ProductList title={t("general.title.newArrivals")} products={newArrivals} loading={loading} onSelectProduct={(product:productDataFormat) => setSelectedProduct(product)}/>
					<ProductList title={t("general.title.limitedOffers")} products={limitedOffers} loading={loading} onSelectProduct={(product:productDataFormat) => setSelectedProduct(product)}/>
					<ProductList title={t("general.title.rings")} products={rings} loading={loading} onSelectProduct={(product:productDataFormat) => setSelectedProduct(product)}/>
					<ProductList title={t("general.title.glasses")} products={glasses} loading={loading} onSelectProduct={(product:productDataFormat) => setSelectedProduct(product)}/>
					<ProductList title={t("general.title.plants")} products={plants} loading={loading} onSelectProduct={(product:productDataFormat) => setSelectedProduct(product)}/>
				</div>
			</div>
			<ProductModal
				product={selectedProduct}
				closeModal={() => setSelectedProduct(null)}
			/>
		</>
	)
}

export default Home