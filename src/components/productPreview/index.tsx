import PropTypes from 'prop-types';

import CardImage from "components/card/cardImage"
import { productDataFormat, productTitleFormat } from "data"
import { useTranslation } from 'react-i18next';
import { priceFormater } from 'utils';
import { CartButton } from 'components/icon/cart';
import RoundButton from 'components/roundButton';
import { BookmarkButton } from 'components/icon/bookmark';

type ProductPreviewProps = {
	className?: string,
	product: productDataFormat,
	isInCart: boolean,
	isBookmarked: boolean,
	onSelect?: (product: productDataFormat) => void,
	cartAction?: () => void,
	bookmarkAction?: (isBookmarked: boolean) => void,
	width?: string,
	height?: string,
	[x: string]: any,
}

const ProductPreview = ({
	className,
	product,
	isInCart,
	isBookmarked,
	cartAction,
	bookmarkAction,
	width,
	height,
	onSelect,
	...rest
}: ProductPreviewProps) => {

	const { i18n } = useTranslation()

	let titleLang = "title" + i18n.language.charAt(0).toUpperCase() + i18n.language.slice(1)

	console.log(bookmarkAction)

	return (
		<div
			className={`relative group hover:scale-105 ${onSelect ? "cursor-pointer" : ""} ${className}`}
			style={{ width: `${width}px`, height: `${height}px` }}
			onClick={onSelect ? () => onSelect(product) : () => {}}
			{...rest}
		>
			<CardImage src={product.img} width={width} height={height}/>
			<div className="absolute invisible group-hover:visible bg-transparent bg-opacity-70 top-2 right-2">
				<div className="flex flex-col">
					{!!cartAction ?
						<div className="">
							<div className={`${isInCart ? "bg-red-700" : "bg-green-700"} cursor-pointer text-white rounded-full p-1`} onClick={(e:React.MouseEvent|React.TouchEvent) => {e.stopPropagation();cartAction()}}>
								<CartButton className="w-[25px] h-[25px]"/>
							</div>
						</div>
						:
						null
					}
					{!!bookmarkAction ?
						<div className="mt-1">
							<div className={`${isBookmarked ? "bg-red-700" : "bg-green-700"} cursor-pointer text-white rounded-full p-1`} onClick={(e:React.MouseEvent|React.TouchEvent) => {e.stopPropagation();bookmarkAction(!isBookmarked)}}>
								<BookmarkButton className="w-[25px] h-[25px]"/>
							</div>
						</div>
						:
						null
					}
				</div>
			</div>
			<div className="absolute invisible group-hover:visible rounded-b-lg bg-slate-800 bg-opacity-70 top-2/3 left-0 w-full h-1/3">
				<div className="w-full h-full flex justify-between px-4 items-center text-white">
					<span>{!!product.title[titleLang as keyof productTitleFormat] ? product.title[titleLang as keyof productTitleFormat] : product.title.titleEn}</span>
					<span className="text-sm">{priceFormater(product.pricing.price)}</span>
				</div>
			</div>
		</div>
	)
}

ProductPreview.propTypes = {
	className: PropTypes.string,	
	product: PropTypes.object,
	isInCart: PropTypes.bool,
	isBookmarked: PropTypes.bool,
	width: PropTypes.string,
	height: PropTypes.string,
	onSelect: PropTypes.func,
	cartAction: PropTypes.func,
	bookmarkAction: PropTypes.func,
}

ProductPreview.defaultProps = {
	className: "",
	product: null,
	isInCart: false,
	isBookmarked: false,
	width: "300",
	height: "200",
	onSelect: null,
	cartAction: null,
	bookmarkAction: null,
}

export default ProductPreview