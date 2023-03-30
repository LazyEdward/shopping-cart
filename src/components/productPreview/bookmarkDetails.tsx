import PropTypes from 'prop-types';

import CardImage from "components/card/cardImage"
import { productDataFormat, productDescriptionFormat, productTitleFormat } from "data"
import { useTranslation } from 'react-i18next';
import { priceFormater } from 'utils';
import RoundButton, { RoundButtonTheme } from 'components/roundButton';
import { CartButton } from 'components/icon/cart';
import { BookmarkButton } from 'components/icon/bookmark';
import ProductList from './productList';
import Loader from 'components/loader';
import { CloseButton } from 'components/icon/close';

type BookmarkDetailsProps = {
	className?: string,
	product: productDataFormat,
	width?: string,
	height?: string,
	onSelect?: (product: productDataFormat) => void,
	onRemove?: (id: string) => void,
	[x: string]: any,
}

const BookmarkDetails = ({
	className,
	product,
	width,
	height,
	onSelect,
	onRemove,
	...rest
}: BookmarkDetailsProps) => {

	const { t, i18n } = useTranslation()

	let titleLang = "title" + i18n.language.charAt(0).toUpperCase() + i18n.language.slice(1)

	return (
		<div
			className={`relative w-full h-hull flex items-center sm:justify-between bg-transparent group hover:bg-slate-300 cursor-pointer rounded ${className}`}
			onClick={onSelect ? () => onSelect(product) : () => {}}
			{...rest}
		>
			<div className="flex items-center pl-4">
				<div className='px-4 py-2'>
					<CardImage src={product.img} width={width} height={height}/>
				</div>
				<div className='p-2 px-4 shrink-0 flex flex-col'>
					<span className="p-2 text-lg font-bold text-neutral-700">{!!product.title[titleLang as keyof productTitleFormat] ? product.title[titleLang as keyof productTitleFormat] : product.title.titleEn}</span>
					<span className="px-2 pb-2 text-sm flex justify-between items-center">
						<span className="font-semibold">{t("productDetails.price")}</span>
						<span className="pl-2">{priceFormater(product.pricing.price)}</span>
					</span>
				</div>
			</div>
			<div className="absolute top-0 right-0 flex sm:hidden sm:static group-hover:flex items-center p-4 sm:pr-4">
				<div className="mx-1">
					<div className={`bg-green-700 cursor-pointer text-white rounded-full p-1`} onClick={(e:React.MouseEvent|React.TouchEvent) => {e.stopPropagation()}}>
						<CartButton className="w-[25px] h-[25px]"/>
					</div>
				</div>
				<div className="mx-1">
					<div className={`bg-red-700 cursor-pointer text-white rounded-full p-1`} onClick={(e:React.MouseEvent|React.TouchEvent) => {e.stopPropagation();if(!!onRemove)onRemove(product.id)}}>
						<CloseButton className="w-[25px] h-[25px]"/>
					</div>
				</div>
			</div>
		</div>
	)
}

BookmarkDetails.propTypes = {
	className: PropTypes.string,	
	product: PropTypes.object,
	width: PropTypes.string,
	height: PropTypes.string,
	onSelect: PropTypes.func,
	onRemove: PropTypes.func,
}

BookmarkDetails.defaultProps = {
	className: "",
	product: null,
	width: "100",
	height: "100",
	onSelect: null,
	onRemove: null,
}

export default BookmarkDetails