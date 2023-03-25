import PropTypes from 'prop-types';

import CardImage from "components/card/cardImage"
import { productDataFormat, productDescriptionFormat, productTitleFormat } from "data"
import { useTranslation } from 'react-i18next';
import { priceFormater } from 'utils';
import RoundButton, { RoundButtonTheme } from 'components/roundButton';
import { CartButton } from 'components/icon/cart';
import { BookmarkButton } from 'components/icon/bookmark';
import ProductList from './productList';
import Loader from 'components/Loader';

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

	const { t, i18n } = useTranslation()

	let titleLang = "title" + i18n.language.charAt(0).toUpperCase() + i18n.language.slice(1)
	let descLang = "description" + i18n.language.charAt(0).toUpperCase() + i18n.language.slice(1)

	const getFilteredProductList = () => {
		return productList.filter(p => p.id !== product.id)
	}

	let filteredProductList = getFilteredProductList()

	return (
		<div
			className={`relative w-full h-hull flex flex-wrap ${className}`}
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
					<span className="pl-2">{priceFormater(product.pricing.price)}</span>
				</span>
				<RoundButton disabled={loading} className="m-2 w-[225px]">
					<CartButton className="w-[25px] h-[25px]"/>
					<span className="pl-2">{t("productDetails.cart.add")}</span>
				</RoundButton>
				<RoundButton disabled={loading} theme={RoundButtonTheme.framed} className="m-2 w-[225px]">
					<BookmarkButton className="w-[25px] h-[25px]"/>
					<span className="pl-2">{t("productDetails.bookmarks.add")}</span>
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
					<ProductList title={`${t(`general.options.more`)}${t(`general.title.${product.tags[0]}`)}`} products={filteredProductList} onSelectProduct={onSelect ? (product:productDataFormat) => onSelect(product) : () => {}}/>
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