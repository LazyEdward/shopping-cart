import PropTypes from 'prop-types';

import CardImage from "components/card/cardImage"
import { productDataFormat, productTitleFormat } from "data/images"
import { useTranslation } from 'react-i18next';

type ProductPreviewProps = {
	className?: string,
	product: productDataFormat,
	onSelect?: (product: productDataFormat) => void,
	width?: string,
	height?: string,
	[x: string]: any,
}

const ProductPreview = ({
	className,
	product,
	width,
	height,
	onSelect,
	...rest
}: ProductPreviewProps) => {

	const { i18n } = useTranslation()

	let titleLang = "title" + i18n.language.charAt(0).toUpperCase() + i18n.language.slice(1)

	return (
		<div
			className={`relative group hover:scale-105 ${onSelect ? "cursor-pointer" : ""} ${className}`}
			style={{ width: `${width}px`, height: `${height}px` }}
			onClick={onSelect ? () => onSelect(product) : () => {}}
			{...rest}
		>
			<CardImage src={product.img} width={width} height={height}/>
			<div className="absolute invisible group-hover:visible rounded-b-lg bg-slate-800 bg-opacity-70 top-2/3 left-0 w-full h-1/3">
				<div className="w-full h-full flex justify-between px-4 items-center text-white">
					<span>{!!product.title[titleLang as keyof productTitleFormat] ? product.title[titleLang as keyof productTitleFormat] : product.title.titleEn}</span>
					<span className="text-sm">{Intl.NumberFormat("en", { style: 'currency', currency: 'USD' }).format(product.pricing.price)}</span>
				</div>
			</div>
		</div>
	)
}

ProductPreview.propTypes = {
	className: PropTypes.string,	
	product: PropTypes.object,
	width: PropTypes.string,
	height: PropTypes.string,
	onSelect: PropTypes.func,
}

ProductPreview.defaultProps = {
	className: "",
	product: null,
	width: "300",
	height: "200",
	onSelect: null,
}

export default ProductPreview