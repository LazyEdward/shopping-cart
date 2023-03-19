import { DownButton } from 'components/icon/down'
import { UpButton } from 'components/icon/up'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { getError, getLoading, getSites } from "store/accessableSiteMap"
import { RootState } from "store/store"

type SideBarProps = {
	onSelect?: (pathName?: string) => void,
}

const useSideBarData = () => {
	const {
		sites,
		loading,
		error,
	} = useSelector((state: RootState) => ({
		sites: getSites(state.accessableSiteMap),
		loading: getLoading(state.accessableSiteMap),
		error: getError(state.accessableSiteMap),
	}))

	return {
		sites,
		loading,
		error,
	}
}


const SideBar = ({
	onSelect,
}: SideBarProps) => {

	const [showLanguage, setShowLanguage] = useState(false)

	const { t, i18n } = useTranslation()
	const navigate = useNavigate()

	const {
		sites,
		loading,
		error,
	} = useSideBarData()

	const toPage = (e: React.MouseEvent | React.TouchEvent<HTMLDivElement>, pageName: string) => {
		e.stopPropagation()
		navigate(pageName)

		if(!!onSelect)
			onSelect(pageName)
	}

	return (
		<div className={`
			bg-slate-800 z-40 shadow-md
			w-full md:w-[300px] h-full py-4 flex flex-col overflow-auto
		`}>
			{sites && sites.map(site => (
				<div
					key={site}
					className={`w-full cursor-pointer h-[50px] flex justify-end items-center text-white border-green-400 ${window.location.pathname === `/${site}` ? "text-green-200 border-l-4 bg-slate-600" : "hover:text-green-200 hover:border-l-4 hover:bg-slate-600"}`}
					onClick={(e: React.MouseEvent | React.TouchEvent<HTMLDivElement>) => toPage(e, site)}
				>
					<span className="px-4">{t(`general.navigation.${site}`)}</span>
				</div>
			))}
			<hr className='m-2'/>
			<div
				className={`w-full cursor-pointer h-[50px] flex justify-end items-center text-white border-green-400 ${showLanguage ? "text-green-200 border-l-4 bg-slate-600" : "hover:text-green-200 hover:border-l-4 hover:bg-slate-600"}`}
				onClick={() => setShowLanguage(!showLanguage)}
			>
					<span className="px-4">{t(`general.lang`)}</span>
					<span className="pr-4">{showLanguage ? <UpButton className="w-[15px] h-[15px]"/> : <DownButton className="w-[15px] h-[15px]"/>}</span>
			</div>
			<div className={`w-full flex flex-col bg-opacity-90 ${showLanguage ? "h-auto visible" : "h-0 invisible"}`}>
				<div
					className={`w-full cursor-pointer h-[50px] flex justify-end items-center text-white border-green-400 hover:text-green-200 hover:border-l-4 hover:bg-slate-600`}
					onClick={() => {i18n.changeLanguage("en"); if(!!onSelect) onSelect()}}
				>
					<span className="px-4">English</span>
				</div>
				<div
					className={`w-full cursor-pointer h-[50px] flex justify-end items-center text-white border-green-400 hover:text-green-200 hover:border-l-4 hover:bg-slate-600`}
					onClick={() => {i18n.changeLanguage("ja"); if(!!onSelect) onSelect()}}
				>
					<span className="px-4">日本語</span>
				</div>
				<div
					className={`w-full cursor-pointer h-[50px] flex justify-end items-center text-white border-green-400 hover:text-green-200 hover:border-l-4 hover:bg-slate-600`}
					onClick={() => {i18n.changeLanguage("zhCHT"); if(!!onSelect) onSelect()}}
				>
					<span className="px-4">中文</span>
				</div>
			</div>
		</div>
	)
}

SideBar.propTypes = {
	onSelect: PropTypes.func,
}

SideBar.defaultProps = {
	onSelect: null,
}

export default SideBar