import PropTypes from 'prop-types';

import CardImage from "components/card/cardImage";
import { CloseButton } from 'components/icon/close';
import { MinusButton } from 'components/icon/minus';
import { PlusButton } from 'components/icon/plus';
import { productDataFormat, productDescriptionFormat, productTitleFormat } from "data";
import { useTranslation } from 'react-i18next';
import { priceFormater } from 'utils';
import Counter from 'components/counter';

type CartDetailsProps = {
	className?: string,
	product: productDataFormat,
	count: number,
	width?: string,
	height?: string,
	onSelect?: (product: productDataFormat) => void,
	onAddCount?: (id: string) => void,
	onSubtractCount?: (id: string) => void,
	onRemove?: (id: string) => void,
	[x: string]: any,
}

const CartDetails = ({
	className,
	product,
	count,
	width,
	height,
	onSelect,
	onAddCount,
	onSubtractCount,
	onRemove,
	...rest
}: CartDetailsProps) => {

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
						<span className="pl-2 truncate">{priceFormater(product.pricing.price)}</span>
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
						<Counter
							count={count}
							canSubtract={count > 1}
							onSubtractCount={() => onSubtractCount && onSubtractCount(product.id)}
							onAddCount={() => onAddCount && onAddCount(product.id)}
						/>
						<div className="mx-1"/>
						<div className="mx-1">
							<div className={`bg-red-700 cursor-pointer text-white rounded-full p-1`} onClick={(e:React.MouseEvent|React.TouchEvent) => {e.stopPropagation();if(!!onRemove)onRemove(product.id)}}>
								<CloseButton className="w-[25px] h-[25px]"/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="hidden sm:flex items-center p-2 sm:pr-4">
				<Counter
					count={count}
					canSubtract={count > 1}
					onSubtractCount={() => onSubtractCount && onSubtractCount(product.id)}
					onAddCount={() => onAddCount && onAddCount(product.id)}
				/>
				<div className="mx-1"/>
				<div className="mx-1">
					<div className={`bg-red-700 cursor-pointer text-white rounded-full p-1`} onClick={(e:React.MouseEvent|React.TouchEvent) => {e.stopPropagation();if(!!onRemove)onRemove(product.id)}}>
						<CloseButton className="w-[25px] h-[25px]"/>
					</div>
				</div>
			</div>
		</div>
	)
}

CartDetails.propTypes = {
	className: PropTypes.string,	
	product: PropTypes.object,
	count: PropTypes.number,
	width: PropTypes.string,
	height: PropTypes.string,
	onSelect: PropTypes.func,
	onAddCount: PropTypes.func,
	onSubtractCount: PropTypes.func,
	onRemove: PropTypes.func,
}

CartDetails.defaultProps = {
	className: "",
	product: null,
	count: 0,
	width: "100",
	height: "100",
	onSelect: null,
	onAddCount: null,
	onSubtractCount: null,
	onRemove: null,
}

export default CartDetails