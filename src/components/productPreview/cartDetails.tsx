import PropTypes from 'prop-types';

import CardImage from "components/card/cardImage";
import { CloseButton } from 'components/icon/close';
import { MinusButton } from 'components/icon/minus';
import { PlusButton } from 'components/icon/plus';
import { discountTypeFormat, productDataFormat, productDescriptionFormat, productTitleFormat } from "data";
import { useTranslation } from 'react-i18next';
import { priceFormater } from 'utils';
import Counter from 'components/counter';
import ProductListInDetails from './productListInDetails';

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
}: CartDetailsProps) => (
	<ProductListInDetails
		product={product}
		onSelect={onSelect}
	>
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
	</ProductListInDetails>
)

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