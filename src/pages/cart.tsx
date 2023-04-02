import Loader from "components/loader"
import PageLoading from "components/loader/pageLoading"
import BookmarkDetails from "components/productPreview/bookmarkDetails"
import CartDetails from "components/productPreview/cartDetails"
import ProductModal from "components/productPreview/productModal"
import { NoNewProducts } from "components/warning"
import { productDataFormat } from "data"
import { useAppDispatch } from "hooks/storeTypedHook"
import { useEffect } from "react"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import { getProducts, getCartProducts, getError, getLoading, getCart, removeFormCart, addCartCount, subtractCartCount } from "store/cart"
import { getOtherProducts, selectProduct } from "store/productDetails"
import { RootState } from "store/store"
import { priceFormater } from "utils"

const useCart = () => {
	const {
		productRecord,
		products,
		loading,
		error,
	} = useSelector((state: RootState) => ({
		productRecord: getCart(state.cart),
		products: getProducts(state.cart),
		loading: getLoading(state.cart),
		error: getError(state.cart),
	}))

	return {
		productRecord,
		products,
		loading,
		error,
	}
}

const Cart = () => {

	const { t, i18n } = useTranslation()
	const dispatch = useAppDispatch()

	const {
		productRecord,
		products,
		loading,
		error,
	} = useCart()

	const selectModalProduct = (product:productDataFormat) => {
		dispatch(getOtherProducts({product: product}))
	}

	const getTotal = () => {
		return products.reduce((total, product) => (total + product.pricing.price * productRecord[product.id]), 0)
	}

	useEffect(() => {
		console.log("getCartProducts")
		dispatch(getCartProducts())
	}, [dispatch])

	return (
		<>
			<div className="w-full h-full px-4 overflow-hidden">
				<div className="w-full flex items-center justify-between h-[56px]">
					<span className="px-2 py-4 text-lg font-semibold text-neutral-700">{t("cart.title")}</span>
				</div>
				<div className="w-full h-[calc(100%-56px)] overflow-hidden">
					{loading ?
						<PageLoading/>
						:
						products && products.length > 0 ? 
							<div className="flex h-full flex-col lg:flex-row lg:justify-between">
								<div className="flex flex-col flex-1 flex-shrink-0 overflow-auto">
									{products.map((product, index) => (
										<CartDetails
											key={product.id}
											product={product}
											count={productRecord[product.id] ?? 0}
											onSelect={(product) => selectModalProduct(product)}
											onAddCount={(id) => dispatch(addCartCount(id))}
											onSubtractCount={(id) => dispatch(subtractCartCount(id))}
											onRemove={(id) => dispatch(removeFormCart(id))}
										/>
									))}
								</div>
								<div className="flex border-t-2 w-full min-h-[200px] lg:w-[300px] lg:h-auto lg:border-t-0 lg:border-l-2 p-2">
									{`total = ${priceFormater(getTotal())}`}
								</div>
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

export default Cart