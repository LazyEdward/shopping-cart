import PropTypes from 'prop-types';
import Card from "components/card"
import CardImage from "components/card/cardImage"
import Loader from "components/loader"
import Scrollable from "components/scrollable"
import ScrollHelper from "components/scrollable/scrollHelper"
import { productDataFormat } from "data"
import { useRef, useState } from "react"
import ProductPreview from 'components/productPreview';
import ProductModal from './productModal';
import { useSelector } from 'react-redux';
import { addBookmark, getBookmarks, removeBookmark } from 'store/bookmarks';
import { RootState } from 'store/store';
import PageLoading from 'components/loader/pageLoading';
import { NoNewProducts } from 'components/warning';
import { useAppDispatch } from 'hooks/storeTypedHook';
import { addToCart, removeFormCart } from 'store/cart';

type ProductListProps = {
	title?: string | null,
	bookmarks?: string[],
	carts?: {[key: string]: number},
	products?: productDataFormat[],
	onSelectProduct: (product: productDataFormat) => void,
	loading?: boolean,
}

const ProductList = ({
	title,
	bookmarks,
	carts,
	products,
	onSelectProduct,
	loading
} : ProductListProps) => {

	const dispatch = useAppDispatch()

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

	let bookmarksSet = new Set(bookmarks)

	const handleCart = (product:productDataFormat) => {
		if(!carts)
			return;

		if(!!carts[product.id])
			dispatch(removeFormCart(product.id))
		else
			dispatch(addToCart({id: product.id, product: product}))
	}

	const handleBookmark = (bookmark:boolean, product:productDataFormat) => {
		if(bookmark)
			dispatch(addBookmark({id: product.id, product: product}))
		else
			dispatch(removeBookmark(product.id))
	}

	return (
		<>
			<span className="px-2 py-4 text-lg font-semibold text-neutral-700">{title}</span>
			{loading ?
					<PageLoading/>
				:			
					products && products.length > 0 ?
						<Card className="rounded-lg relative p-3 sm:p-4 w-full bg-white">
							<Scrollable ref={scrollRef} handleHorizontal={(on: boolean) => setScrollHelper(on)} className="w-full h-[230px] flex items-center overflow-x-auto">
								{products.map((product, index) => (
									// <CardImage key={`${title}-${index}`} src={product.img} width="300" height="200"/>
									<ProductPreview
										key={`${title}-${index}`}
										className={`mx-4 my-2`}
										isInCart={!!carts && !!carts[product.id]}
										cartAction={() => handleCart(product)}
										isBookmarked={bookmarksSet.has(product.id)}
										bookmarkAction={(bookmark:boolean) => handleBookmark(bookmark, product)}
										product={product}
										onSelect={(product) => onSelectProduct(product)}
									/>
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
	carts: PropTypes.object,
	products: PropTypes.arrayOf(PropTypes.object),
	onSelectProduct: PropTypes.func,
	loading: PropTypes.bool,
}

ProductList.defaultProps ={
	title: "",
	carts: {},
	products: [],
	onSelectProduct: null,
	loading: false,
}

export default ProductList