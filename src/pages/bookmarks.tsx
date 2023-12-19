import Loader from "components/loader"
import PageLoading from "components/loader/pageLoading"
import BookmarkDetails from "components/productPreview/bookmarkDetails"
import ProductModal from "components/productPreview/productModal"
import Warning from 'components/warning';
import { productDataFormat } from "data"
import { useAppDispatch } from "hooks/storeTypedHook"
import { useEffect } from "react"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import { getBookmarkProducts, getBookmarks, getError, getLoading, getProducts, removeBookmark } from "store/bookmarks"
import { addToCart, getCart, removeFormCart } from "store/cart"
import { getOtherProducts, selectProduct } from "store/productDetails"
import { RootState } from "store/store"

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
		products,
		loading,
		error,
	} = useSelector((state: RootState) => ({
		products: getProducts(state.bookmarks),
		loading: getLoading(state.bookmarks),
		error: getError(state.bookmarks),
	}))

	return {
		products,
		loading,
		error,
	}
}

const Bookmarks = () => {

	const { t, i18n } = useTranslation()
	const dispatch = useAppDispatch()

	const {
		productRecord,
	} = useCart()

	const {
		products,
		loading,
		error,
	} = useBookmarks()

	const selectModalProduct = (product:productDataFormat) => {
		dispatch(getOtherProducts({product: product}))
	}

	useEffect(() => {
		console.log("getProducts")
		dispatch(getBookmarkProducts())
	}, [dispatch])

	return (
		<>
			<div className="w-full h-full px-4 overflow-hidden">
				<div className="w-full flex items-center justify-between h-[56px]">
					<span className="px-2 py-4 text-lg font-semibold text-neutral-700">{t("bookmarks.title")}</span>
				</div>
				<div className="w-full h-[calc(100%-56px)] overflow-auto">
					{loading ?
						<PageLoading/>
						:
						products && products.length > 0 ? 
							<div className="flex flex-col">
								{products.map((product, index) => (
									<BookmarkDetails
										key={product.id}
										product={product}
										inCart={!!productRecord[product.id]}
										onSelect={(product) => selectModalProduct(product)}
										onAddCart={(product) => dispatch(addToCart({id: product.id, product}))}
										onRemoveCart={(id) => dispatch(removeFormCart(id))}
										onRemove={(id) => dispatch(removeBookmark(id))}
									/>
								))}
							</div>
						:
							<Warning warningMessage={`general.empty.products`}/>
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

export default Bookmarks