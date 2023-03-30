import PropTypes from 'prop-types';

import Card from 'components/card';
import FullPageModal from 'components/fullPageModal';
import { CloseButton } from 'components/icon/close';
import { productDataFormat } from "data";
import { useSelector } from 'react-redux';
import { getCurrentProduct, getCurrentProducts, getError, getLoading } from 'store/productDetails';
import { RootState } from 'store/store';
import ProductDetails from './productDetails';
import { useEffect, useRef } from 'react';

const useProductDetails = () => {
	const {
		product,
		productList,
		loading,
		error,
	} = useSelector((state: RootState) => ({
		product: getCurrentProduct(state.productDetails),
		productList: getCurrentProducts(state.productDetails),
		loading: getLoading(state.productDetails),
		error: getError(state.productDetails),
	}))

	return {
		product,
		productList,
		loading,
		error,
	}
}

type ProductModalProps = {
	onSelectOtherProduct?: (product: productDataFormat) => void,
	closeModal?: () => void,
}

const ProductModal = ({
	onSelectOtherProduct,
	closeModal,
}: ProductModalProps) => {

	const {
		product,
		productList,
		loading,
		error
	} = useProductDetails()

	const detailRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if(detailRef.current){
			detailRef.current.scrollTop = 0
		}
	}, [product])

	return (
		<FullPageModal
			active={!!product}
			level="z-[1000]"
			className="portal-layout"
		>
			{!product ?
					null
				:
					<div className="w-full h-full flex justify-center items-center">
						<Card className="md:rounded-lg relative p-4 w-full h-full md:w-[80vw] md:h-[80vh] md:max-w-[768px] bg-white">
							<div className='w-full h-[35px] flex justify-end'>
								<span className="p-2 cursor-pointer" onClick={closeModal}><CloseButton className="w-[25px] h-[25px]"/></span>
							</div>
							<div ref={detailRef} className='w-full h-[calc(100%-35px)] flex flex-col overflow-y-auto'>
								<ProductDetails loading={loading} onSelect={onSelectOtherProduct} product={product} productList={productList}/>
							</div>
						</Card>
					</div>
			}
		</FullPageModal>	
	)
}

ProductModal.propTypes = {
	onSelectOtherProduct: PropTypes.func,
	closeModal: PropTypes.func,
}

ProductModal.defaultProps = {
	onSelectOtherProduct: null,
	closeModal: null,
}

export default ProductModal