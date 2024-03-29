import PropTypes from 'prop-types';

import CardImage from "components/card/cardImage"
import { productDataFormat, productDescriptionFormat, productTitleFormat, discountTypeFormat } from "data"
import { useTranslation } from 'react-i18next';
import { priceFormater } from 'utils';
import RoundButton, { RoundButtonTheme } from 'components/roundButton';
import { CartButton } from 'components/icon/cart';
import { BookmarkButton } from 'components/icon/bookmark';
import ProductList from './productList';
import Loader from 'components/loader';
import { useSelector } from 'react-redux';
import { addBookmark, getBookmarks, removeBookmark } from 'store/bookmarks';
import { RootState } from 'store/store';
import { useAppDispatch } from 'hooks/storeTypedHook';
import { addCartCount, addToCart, getCart, removeFormCart, subtractCartCount } from 'store/cart';
import { MinusButton } from 'components/icon/minus';
import { PlusButton } from 'components/icon/plus';
import Counter from 'components/counter';

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

type ProductDetailsProps = {
	className?: string,
	product: productDataFormat,
	productList: productDataFormat[],
	width?: string,
	height?: string,
	loading: boolean,
	onSelect?: (product: productDataFormat) => void,
	[x: string]: any,
}

const ProductDetails = ({
	className,
	product,
	productList,
	width,
	height,
	loading,
	onSelect,
	...rest
}: ProductDetailsProps) => {
	
	const dispatch = useAppDispatch()
	const { t, i18n } = useTranslation()

	const {
		productRecord,
	} = useCart()

	const {
		bookmarks,
	} = useBookmarks()

	let titleLang = "title" + i18n.language.charAt(0).toUpperCase() + i18n.language.slice(1)
	let descLang = "description" + i18n.language.charAt(0).toUpperCase() + i18n.language.slice(1)

	const getFilteredProductList = () => {
		return productList.filter(p => p.id !== product.id)
	}

	let filteredProductList = getFilteredProductList()

	let isInCart = !!productRecord[product.id]
	let isBookmarked = bookmarks.includes(product.id)

	const onSubtractCount = (id:string) => {
		dispatch(subtractCartCount(id))
	}

	const onAddCount = (id:string) => {
		dispatch(addCartCount(id))
	}

	const handleCart = () => {
		if(isInCart)
			dispatch(removeFormCart(product.id))
		else
			dispatch(addToCart({id: product.id, product: product}))
	}

	const handleBookmark = (bookmark:boolean) => {
		if(bookmark)
			dispatch(addBookmark({id: product.id, product: product}))
		else
			dispatch(removeBookmark(product.id))
	}

	return (
		<div
			className={`relative w-full h-hull flex flex-wrap justify-center ${className}`}
			// onClick={onSelect ? () => onSelect(product) : () => {}}
			{...rest}
		>
			<div className={`absolute top-0 left-0 justify-center items-center w-full h-full z-[2] ${loading ? "flex" : "hidden"}`}>
				<Loader/>
			</div>
			<div className='px-4 py-2'>
				<CardImage src={product.img} width={width} height={height}/>
			</div>
			<div className='p-2 px-4 shrink-0 flex flex-col'>
				<span className="p-2 text-lg font-bold text-neutral-700">{!!product.title[titleLang as keyof productTitleFormat] ? product.title[titleLang as keyof productTitleFormat] : product.title.titleEn}</span>
				<span className="p-2 pb-4 text-sm flex justify-between items-center">
					<span className="font-semibold">{t("productDetails.price")}</span>
					{product.pricing.discount ? 
							<span className="pl-2 flex items-center">
								<span className="line-through truncate">{priceFormater(product.pricing.price)}</span>
								<span className="pl-2 text-base font-bold text-green-700">
									{product.pricing.discount.type === discountTypeFormat.percentage ?
										<span>{priceFormater(product.pricing.price * (product.pricing.discount.amount / 100))}</span>
										:
										<span>{priceFormater(product.pricing.discount.amount)}</span>
									}
								</span>					
							</span>
						:
							<span className="pl-2">{priceFormater(product.pricing.price)}</span>
					}
				</span>
				{isInCart ?
						<div className="mx-2 mb-2 flex items-center w-[250px]">	
							<Counter
								count={productRecord[product.id]}
								canSubtract={productRecord[product.id] > 1}
								onSubtractCount={() => onSubtractCount && onSubtractCount(product.id)}
								onAddCount={() => onAddCount && onAddCount(product.id)}
							/>
						</div>
					:
						null
				}
				<RoundButton disabled={loading} theme={isInCart ? RoundButtonTheme.removeFilled : RoundButtonTheme.filled} className="m-2 w-[250px]" onClick={(e:React.MouseEvent|React.TouchEvent) => {e.stopPropagation();handleCart()}}>
					<CartButton className="w-[25px] h-[25px]"/>
					<span className="pl-2">{isInCart ? t("productDetails.cart.remove") : t("productDetails.cart.add")}</span>
				</RoundButton>
				<RoundButton disabled={loading} theme={isBookmarked ? RoundButtonTheme.removeFramed : RoundButtonTheme.framed} className="m-2 w-[250px]" onClick={(e:React.MouseEvent|React.TouchEvent) => {e.stopPropagation();handleBookmark(!isBookmarked)}}>
					<BookmarkButton className="w-[25px] h-[25px]"/>
					<span className="pl-2">{isBookmarked ? t("productDetails.bookmarks.remove") : t("productDetails.bookmarks.add")}</span>
				</RoundButton>
			</div>
			{!!product.description[descLang as keyof productDescriptionFormat] || !!product.description.descriptionEn ?
				<span className="w-full p-2 px-4 flex flex-col">
					<span className="py-2 font-semibold">{t("productDetails.description")}</span>
					<span className="text-sm whitespace-pre-wrap">{
						product.description[descLang as keyof productDescriptionFormat] ?
							product.description[descLang as keyof productDescriptionFormat] 
							:
							product.description.descriptionEn
					}</span>
				</span>
				:
				null
			}
			{filteredProductList.length > 0 &&
				<span className="w-full p-2 px-4 flex flex-col">
					<hr/>
					<ProductList bookmarks={bookmarks} carts={productRecord} title={`${t(`general.options.more`)}${t(`general.title.${product.tags[0]}`)}`} products={filteredProductList} onSelectProduct={onSelect ? (product:productDataFormat) => onSelect(product) : () => {}}/>
				</span>
			}
		</div>
	)
}

ProductDetails.propTypes = {
	className: PropTypes.string,	
	product: PropTypes.object,
	productList: PropTypes.arrayOf(PropTypes.object),
	width: PropTypes.string,
	height: PropTypes.string,
	loading: PropTypes.bool,
	onSelect: PropTypes.func,
}

ProductDetails.defaultProps = {
	className: "",
	product: null,
	productList: [],
	width: "300",
	height: "200",
	loading: false,
	onSelect: null,
}

export default ProductDetails