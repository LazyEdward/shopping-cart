import PropTypes from 'prop-types';

import CardImage from "components/card/cardImage"
import { productDataFormat, productDescriptionFormat, productTitleFormat } from "data/images"
import { useTranslation } from 'react-i18next';
import { priceFormater } from 'utils';
import ProductDetails from './productDetails';
import FullPageModal from 'components/FullPageModal';
import Card from 'components/card';
import { CloseButton } from 'components/icon/close';
import RoundButton, { RoundButtonTheme } from 'components/roundButton';
import { CartButton } from 'components/icon/cart';
import { BookmarkButton } from 'components/icon/bookmark';

type ProductModalProps = {
	product: productDataFormat | null,
	closeModal?: () => void,
}

const ProductModal = ({
	product,
	closeModal,
}: ProductModalProps) => {

	const { t, i18n } = useTranslation()

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
							<div className='w-full h-[calc(100%-35px)] flex flex-col overflow-y-auto'>
								<ProductDetails product={product}/>
							</div>
						</Card>
					</div>
			}
		</FullPageModal>	
	)
}

ProductModal.propTypes = {
	product: PropTypes.object,
	closeModal: PropTypes.func,
}

ProductModal.defaultProps = {
	product: null,
	closeModal: null,
}

export default ProductModal