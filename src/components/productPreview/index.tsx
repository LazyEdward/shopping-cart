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
	isBookmarked: boolean,
	onSelect?: (product: productDataFormat) => void,
	bookmarkAction?: (isBookmarked: boolean) => void,
	width?: string,
	height?: string,
	[x: string]: any,
}

const ProductPreview = ({
	className,
	product,
	isBookmarked,
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
					<div className="">
						<div className={`bg-green-700 cursor-pointer text-white rounded-full p-1`} onClick={(e:React.MouseEvent|React.TouchEvent) => {e.stopPropagation()}}>
							<CartButton className="w-[25px] h-[25px]"/>
						</div>
					</div>
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
	isBookmarked: PropTypes.bool,
	width: PropTypes.string,
	height: PropTypes.string,
	onSelect: PropTypes.func,
	bookmarkAction: PropTypes.func,
}

ProductPreview.defaultProps = {
	className: "",
	product: null,
	isBookmarked: false,
	width: "300",
	height: "200",
	onSelect: null,
	bookmarkAction: null,
}

export default ProductPreview