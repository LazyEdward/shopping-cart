import SearchContainer from "components/card/searchContainer"
import FullPageModal from "components/fullPageModal"
import { CloseButton } from "components/icon/close"
import { MenuButton } from "components/icon/menu"
import { SearchButton } from "components/icon/search"
import ProductListInDetails from "components/productPreview/productListInDetails"
import ProductModal from "components/productPreview/productModal"
import SearchBar from "components/roundInput/searchBar"
import SideBar from "components/sideBar"
import Warning from 'components/warning';
import { productDataFormat, productDescriptionFormat, productTitleFormat } from "data"
import { useAppDispatch } from "hooks/storeTypedHook"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { getSearchProduct, clearSearchProduct, getProducts, getLoading, getError } from "store/appBar"
import { getOtherProducts, selectProduct } from "store/productDetails"
import { RootState } from "store/store"

const useSearchProductsData = () => {
	const {
		products,
		loading,
		error,
	} = useSelector((state: RootState) => ({
		products: getProducts(state.appBar),
		loading: getLoading(state.appBar),
		error: getError(state.appBar),
	}))

	return {
		products,
		loading,
		error,
	}
}

const AppBar = () => {

	const { t, i18n } = useTranslation()
	const dispatch = useAppDispatch()

	const navigate = useNavigate()

	const [searchInput, setSearchInput] = useState("")

	const [openSearch, setOpenSearch] = useState(false)
	const [openMenu, setOpenMenu] = useState(false)

	let titleLang = "title" + i18n.language.charAt(0).toUpperCase() + i18n.language.slice(1)
	let descLang = "description" + i18n.language.charAt(0).toUpperCase() + i18n.language.slice(1)

	const {
		products,
		loading,
		error,
	} = useSearchProductsData()

	const toHomepage = () => {
		navigate("home")
		setOpenMenu(false)
	}

	const selectModalProduct = (product:productDataFormat) => {
		dispatch(getOtherProducts({product: product}))
	}

	const searchContainerSizeByProducts = (count: number) => {
		if(count > 3)
			return 'h-[80vh]'

		if(count < 1)
			return 'h-[25vh]'

		return `h-[${count * 32}vh]`
	}

	useEffect(() => {
		let searchTimeout = setTimeout(() => {
			if(searchInput.length > 0)
				dispatch(getSearchProduct({searchInput, titleLang, descLang}))
		}, 500)

		if(searchInput.length < 1)
			dispatch(clearSearchProduct())

		return () => {
			clearTimeout(searchTimeout)
		}
	}, [dispatch, searchInput])

	useEffect(() => {
		if(!openSearch)
			setSearchInput('')
	}, [dispatch, openSearch])

	return (
		<div className={`
			relative
			bg-transparent md:bg-green-700 z-50 shadow-md
			w-full h-[56px] flex rounded-none
		`}>
			<span className="px-4 w-full h-full flex items-center justify-between text-white">
				<div className="flex">
					<span className="p-2 cursor-pointer rounded-lg shadow-md bg-green-700 md:hidden" onClick={() => toHomepage()}>
						<div className="w-[25px] h-[25px] font-bold text-lg flex justify-center items-center">F</div>
					</span>
					<span className="p-2 font-semibold text-green-700 md:text-white hidden md:block cursor-pointer" onClick={() => toHomepage()}>Flea Master</span>
				</div>
				<div className="flex items-center">
					<SearchBar
						className="relative mr-2"
						iconOnLeft={false}
						placeholder="Search goods you want..."
						searchInput={searchInput}
						openSearch={openSearch}
						setOpenSearch={setOpenSearch}
						onChange={(e:any) => setSearchInput(e.target.value)}
					>
						{openSearch &&
							<SearchContainer className={`hidden md:block w-[500px] md:right-2 ${searchContainerSizeByProducts(products.length)}`} loading={loading}>
								{products.length > 0 && products.map((product, index) => (
									<ProductListInDetails
										key={product.id}
										product={product}
										onSelect={selectModalProduct}
									></ProductListInDetails>
								))}
								{products.length < 1 &&
									<Warning warningMessage={`general.options.noOptions`}/>
								}
							</SearchContainer>
						}
					</SearchBar>
					<span
						className="p-2 cursor-pointer rounded-lg hover:shadow-md bg-green-700"
						onClick={(e) => setOpenMenu(!openMenu)}
					>
						<MenuButton className="w-[25px] h-[25px]"/>
					</span>
				</div>
			</span>
			{openSearch &&
				<SearchContainer className={`block md:hidden top-[56px] right-0 w-full ${searchContainerSizeByProducts(products.length)}`} loading={loading}>
					{products.length > 0 && products.map((product, index) => (
						<ProductListInDetails
							key={product.id}
							product={product}
							onSelect={selectModalProduct}
						></ProductListInDetails>
					))}
					{products.length < 1 &&
						<Warning warningMessage={`general.options.noOptions`}/>
					}
				</SearchContainer>				
			}
			<FullPageModal
				active={openMenu}
				level="z-[5000]"
				className="portal-content"
			>
				{/* site map */}
				<div className="w-full h-full flex justify-end">
					<SideBar
						onSelect={() => setOpenMenu(false)}
					/>
				</div>
			</FullPageModal>
			<ProductModal
				onSelectOtherProduct={(product) => selectModalProduct(product)}
				closeModal={() => dispatch(selectProduct({product: null, products: []}))}
			/>
		</div>
	)
}

export default AppBar