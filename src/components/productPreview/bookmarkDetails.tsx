import PropTypes from 'prop-types';

import CardImage from "components/card/cardImage";
import { CartButton } from 'components/icon/cart';
import { CloseButton } from 'components/icon/close';
import { discountTypeFormat, productDataFormat, productDescriptionFormat, productTitleFormat } from "data";
import { useTranslation } from 'react-i18next';
import { priceFormater } from 'utils';
import ProductListInDetails from './productListInDetails';

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
}: BookmarkDetailsProps) => (
	<ProductListInDetails
		product={product}
		onSelect={onSelect}
	>
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
	</ProductListInDetails>
)

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