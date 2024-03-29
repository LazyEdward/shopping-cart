import PropTypes from 'prop-types';

import CardImage from "components/card/cardImage";
import { discountTypeFormat, productDataFormat, productDescriptionFormat, productTitleFormat } from "data";
import { useTranslation } from 'react-i18next';
import { priceFormater } from 'utils';

type ProductListInDetailsProps = {
	className?: string,
	product: productDataFormat,
	width?: string,
	height?: string,
	children?: React.ReactNode[] | null,
	onSelect?: (product: productDataFormat) => void,
	[x: string]: any,
}

const ProductListInDetails = ({
	className,
	product,
	width,
	height,
	children,
	onSelect,
	...rest
}: ProductListInDetailsProps) => {

	const { t, i18n } = useTranslation()

	let titleLang = "title" + i18n.language.charAt(0).toUpperCase() + i18n.language.slice(1)
	let descLang = "description" + i18n.language.charAt(0).toUpperCase() + i18n.language.slice(1)

	return (
		<div
			className={`relative w-full h-hull flex items-center sm:justify-between bg-transparent group hover:bg-slate-300 cursor-pointer rounded ${className}`}
			onClick={onSelect ? () => onSelect(product) : () => {}}
			{...rest}
		>
			<div className="flex items-center overflow-hidden pl-4">
				<div className='px-4 py-2'>
					<CardImage src={product.img} width={width} height={height}/>
				</div>
				<div className='p-2 px-4 flex flex-col min-w-0 truncate'>
					<span className="p-2 pb-1 text-lg font-bold text-neutral-700 truncate">{!!product.title[titleLang as keyof productTitleFormat] ? product.title[titleLang as keyof productTitleFormat] : product.title.titleEn}</span>
					<span className="px-2 text-sm flex items-center truncate text-black">
						<span className="font-semibold hidden sm:block">{t("productDetails.price")}</span>
						{product.pricing.discount ? 
								<span className="sm:pl-2 flex items-center">
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
								<span className="sm:pl-2 truncate">{priceFormater(product.pricing.price)}</span>
						}
					</span>
					{!!product.description[descLang as keyof productDescriptionFormat] || !!product.description.descriptionEn ?
						<span className="pl-2 text-sm truncate text-gray-500">{
							product.description[descLang as keyof productDescriptionFormat] ?
								product.description[descLang as keyof productDescriptionFormat] 
								:
								product.description.descriptionEn
						}</span>
						:
						null
					}
					{children ? children[0] : null}
				</div>
			</div>
			{children ? children[1] : null}
		</div>
	)
}

ProductListInDetails.propTypes = {
	className: PropTypes.string,	
	product: PropTypes.object,
	width: PropTypes.string,
	height: PropTypes.string,
	children: PropTypes.node,
	onSelect: PropTypes.func,
}

ProductListInDetails.defaultProps = {
	className: "",
	product: null,
	width: "100",
	height: "100",
	children: null,
	onSelect: null,
}

export default ProductListInDetails