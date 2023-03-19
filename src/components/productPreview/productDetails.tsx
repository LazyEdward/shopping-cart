import PropTypes from 'prop-types';

import CardImage from "components/card/cardImage"
import { productDataFormat, productDescriptionFormat, productTitleFormat } from "data/images"
import { useTranslation } from 'react-i18next';
import { priceFormater } from 'utils';
import RoundButton, { RoundButtonTheme } from 'components/roundButton';
import { CartButton } from 'components/icon/cart';
import { BookmarkButton } from 'components/icon/bookmark';

type ProductDetailsProps = {
	className?: string,
	product: productDataFormat,
	onSelect?: (product: productDataFormat) => void,
	width?: string,
	height?: string,
	[x: string]: any,
}

const ProductDetails = ({
	className,
	product,
	width,
	height,
	onSelect,
	...rest
}: ProductDetailsProps) => {

	const { t, i18n } = useTranslation()

	let titleLang = "title" + i18n.language.charAt(0).toUpperCase() + i18n.language.slice(1)
	let descLang = "description" + i18n.language.charAt(0).toUpperCase() + i18n.language.slice(1)

	return (
		<div
			className={`w-full h-hull flex flex-wrap ${className}`}
			onClick={onSelect ? () => onSelect(product) : () => {}}
			{...rest}
		>
			<div className='px-4 py-2'>
				<CardImage src={product.img} width={width} height={height}/>
			</div>
			<div className='p-2 px-4 shrink-0 flex flex-col'>
				<span className="p-2 text-lg font-bold text-neutral-700">{!!product.title[titleLang as keyof productTitleFormat] ? product.title[titleLang as keyof productTitleFormat] : product.title.titleEn}</span>
				<span className="p-2 pb-4 text-sm flex justify-between items-center">
					<span className="font-semibold">{t("productDetails.price")}</span>
					<span className="pl-2">{priceFormater(product.pricing.price)}</span>
				</span>
				<RoundButton className="m-2 w-[225px]">
					<CartButton className="w-[25px] h-[25px]"/>
					<span className="pl-2">{t("productDetails.cart.add")}</span>
				</RoundButton>
				<RoundButton theme={RoundButtonTheme.framed} className="m-2 w-[225px]">
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
		</div>
	)
}

ProductDetails.propTypes = {
	className: PropTypes.string,	
	product: PropTypes.object,
	width: PropTypes.string,
	height: PropTypes.string,
	onSelect: PropTypes.func,
}

ProductDetails.defaultProps = {
	className: "",
	product: null,
	width: "300",
	height: "200",
	onSelect: null,
}

export default ProductDetails