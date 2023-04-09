import PropTypes from 'prop-types';

import CardImage from "components/card/cardImage";
import { CartButton } from 'components/icon/cart';
import { CloseButton } from 'components/icon/close';
import { discountTypeFormat, productDataFormat, productDescriptionFormat, productTitleFormat } from "data";
import { useTranslation } from 'react-i18next';
import { priceFormater } from 'utils';

type BookmarkDetailsProps = {
	className?: string,
	product: productDataFormat,
	inCart: boolean,
	width?: string,
	height?: string,
	onSelect?: (product: productDataFormat) => void,
	onAddCart?: (product: productDataFormat) => void,
	onRemove?: (id: string) => void,
	onRemoveCart?: (id: string) => void,
	[x: string]: any,
}

const BookmarkDetails = ({
	className,
	product,
	inCart,
	width,
	height,
	onSelect,
	onAddCart,
	onRemove,
	onRemoveCart,
	...rest
}: BookmarkDetailsProps) => {

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
					<span className="px-2 text-sm flex items-center truncate">
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
								<span className="pl-2 truncate">{priceFormater(product.pricing.price)}</span>
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
					<div className="flex sm:hidden items-center p-2">
						<div className="mx-1">
							{inCart ? 
									<div className={`bg-red-700 cursor-pointer text-white rounded-full p-1`} onClick={(e:React.MouseEvent|React.TouchEvent) => {e.stopPropagation();if(!!onRemoveCart)onRemoveCart(product.id)}}>
										<CartButton className="w-[25px] h-[25px]"/>
									</div>
								:
									<div className={`bg-green-700 cursor-pointer text-white rounded-full p-1`} onClick={(e:React.MouseEvent|React.TouchEvent) => {e.stopPropagation();if(onAddCart)onAddCart(product)}}>
										<CartButton className="w-[25px] h-[25px]"/>
									</div>
							}
						</div>
						<div className="mx-1">
							<div className={`bg-red-700 cursor-pointer text-white rounded-full p-1`} onClick={(e:React.MouseEvent|React.TouchEvent) => {e.stopPropagation();if(!!onRemove)onRemove(product.id)}}>
								<CloseButton className="w-[25px] h-[25px]"/>
							</div>
						</div>						
					</div>
				</div>
			</div>
			<div className="hidden sm:flex items-center p-2 sm:pr-4">
				<div className="mx-1">
					{inCart ? 
							<div className={`bg-red-700 cursor-pointer text-white rounded-full p-1`} onClick={(e:React.MouseEvent|React.TouchEvent) => {e.stopPropagation();if(!!onRemoveCart)onRemoveCart(product.id)}}>
								<CartButton className="w-[25px] h-[25px]"/>
							</div>
						:
							<div className={`bg-green-700 cursor-pointer text-white rounded-full p-1`} onClick={(e:React.MouseEvent|React.TouchEvent) => {e.stopPropagation();if(onAddCart)onAddCart(product)}}>
								<CartButton className="w-[25px] h-[25px]"/>
							</div>
					}
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
	inCart: PropTypes.bool,
	width: PropTypes.string,
	height: PropTypes.string,
	onSelect: PropTypes.func,
	onAddCart: PropTypes.func,
	onRemove: PropTypes.func,
	onRemoveCart: PropTypes.func,
}

BookmarkDetails.defaultProps = {
	className: "",
	product: null,
	inCart: false,
	width: "100",
	height: "100",
	onSelect: null,
	onAddCart: null,
	onRemove: null,
	onRemoveCart: null,
}

export default BookmarkDetails