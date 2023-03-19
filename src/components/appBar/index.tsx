import FullPageLoader from "components/FullPageLoader"
import { CloseButton } from "components/icon/close"
import { MenuButton } from "components/icon/menu"
import { SearchButton } from "components/icon/search"
import RoundInputProps from "components/roundInput"
import SearchBarProps from "components/roundInput/searchBar"
import SideBar from "components/sideBar"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const AppBar = () => {

	const navigate = useNavigate()

	const [searchInput, setSearchInput] = useState("")

	const [openSearch, setOpenSearch] = useState(false)
	const [openMenu, setOpenMenu] = useState(false)

	const toHomepage = () => {
		navigate("home")
	}

	return (
		<div className={`
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
					<SearchBarProps
						className="mr-2"
						iconOnLeft={false}
						placeholder="Search goods you want..."
						searchInput={searchInput}
						onChange={(e:any) => setSearchInput(e.target.value)}
					/>
					{/* <div className={`${openSearch ? "w-[175px] md:w-[250px] opacity-100 transition-all" : "w-0 opacity-0"}  mx-2`}>
						<RoundInput
							className="w-full"
							placeholder="Search goods you want..."
							value={searchInput}
							onChange={(e:any) => setSearchInput(e.target.value)}
						/>
					</div>
					{openSearch ?
							<span
								className="p-2 mr-2 cursor-pointer rounded-lg hover:shadow-md bg-green-700"
								onClick={(e) => setOpenSearch(false)}
							>
								<CloseButton className="w-[25px] h-[25px]"/>
							</span>
						:
							<span
								className="p-2 mr-2 cursor-pointer rounded-lg hover:shadow-md bg-green-700"
								onClick={(e) => setOpenSearch(true)}
							>
								<SearchButton className="w-[25px] h-[25px]"/>
							</span>
					} */}
					<span
						className="p-2 cursor-pointer rounded-lg hover:shadow-md bg-green-700"
						onClick={(e) => setOpenMenu(!openMenu)}
					>
						<MenuButton className="w-[25px] h-[25px]"/>
					</span>
				</div>
			</span>
			<FullPageLoader
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
			</FullPageLoader>
		</div>
	)
}

export default AppBar