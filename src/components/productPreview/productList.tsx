import PropTypes from 'prop-types';
import Card from "components/card"
import CardImage from "components/card/cardImage"
import Loader from "components/Loader"
import Scrollable from "components/scrollable"
import ScrollHelper from "components/scrollable/scrollHelper"
import { productDataFormat } from "data"
import { useRef, useState } from "react"
import ProductPreview from 'components/productPreview';
import ProductModal from './productModal';

type ProductListProps = {
	title?: string | null,
	products?: productDataFormat[],
	onSelectProduct: (product: productDataFormat) => void,
	loading?: boolean,
}

const Loading = () => <div className="p-4 w-full flex justify-center items-center"><span className="p-4 italic text-gray-500"><Loader/></span></div>
const NoNewProducts = () => <div className="p-4 w-full flex justify-center items-center"><span className="p-4 italic text-gray-500">No existing products</span></div>

const ProductList = ({
	title,
	products,
	onSelectProduct,
	loading
} : ProductListProps) => {

	const scrollRef = useRef<HTMLDivElement>(null)
	const [scrollHelper, setScrollHelper] = useState(false)

	const scrollToLeft = (e: React.MouseEvent | React.TouchEvent<HTMLElement>) => {
		if(scrollRef.current)
			scrollRef.current.scrollLeft -= 300
	}

	const scrollToRight = (e: React.MouseEvent | React.TouchEvent<HTMLElement>) => {
		if(scrollRef.current)
			scrollRef.current.scrollLeft += 300
	}

	return (
		<>
			<span className="px-2 py-4 text-lg font-semibold text-neutral-700">{title}</span>
			{loading ?
					<Loading/>
				:			
					products && products.length > 0 ?
						<Card className="rounded-lg relative p-4 w-full bg-white">
							<Scrollable ref={scrollRef} handleHorizontal={(on: boolean) => setScrollHelper(on)} className="w-full h-[230px] flex items-center overflow-x-auto">
								{products.map((product, index) => (
									// <CardImage key={`${title}-${index}`} src={product.img} width="300" height="200"/>
									<ProductPreview key={`${title}-${index}`} className="mx-4 my-2" product={product} onSelect={(product) => onSelectProduct(product)}/>
								))}
								{scrollHelper ?
										<ScrollHelper
											onClickLeft={scrollToLeft}
											onClickRight={scrollToRight}
										/>
									:
										null
								}
							</Scrollable>
						</Card>
					:
						<NoNewProducts/>
			}
		</>
	)

}

ProductList.propTypes ={
	title: PropTypes.string,
	products: PropTypes.arrayOf(PropTypes.object),
	onSelectProduct: PropTypes.func,
	loading: PropTypes.bool,
}

ProductList.defaultProps ={
	title: "",
	products: [],
	onSelectProduct: null,
	loading: false,
}

export default ProductList