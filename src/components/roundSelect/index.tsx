import React, { useState } from "react";
import PropTypes from 'prop-types';
import { UpButton } from "components/icon/up";
import { DownButton } from "components/icon/down";
import { useTranslation } from "react-i18next";
import { useForwardRef } from "hooks/useForwardRef";

export type OptionListProps = {
	label?: string,
	value?: string
}

type RoundSelectProps = {
	className?: string,
	placeholder?: string,
	value?: string,
	options?: OptionListProps[],
	onChange?: (e: any, ...rest: any) => void,
	[x:string]: any
}

const RoundSelect = React.forwardRef<HTMLDivElement, RoundSelectProps>(
	({
		className,
		placeholder,
		value,
		options,
		onChange,
		...rest
	}: RoundSelectProps, ref) => {

		const containerRef = useForwardRef<HTMLDivElement>(ref)

		const { t, i18n } = useTranslation()

		const [showAbove, setShowAbove] = useState(false)
		const [showOptions, setShowOptions] = useState(false)

		const getLabelFromOption = (value: string) => {
			if(!options)
				return ""

			let index = options?.findIndex(option => option.value === value)

			return index === -1 ? "" : options[index].label
		}

		const handleSelect = (e: React.MouseEvent | React.TouchEvent<HTMLSpanElement>, value: string | undefined) => {
			if(!onChange)
				return

			let combineEvent:any = {}

			if(e && e.target)
				combineEvent = e
			else
				combineEvent.target = {}
			
			combineEvent.target.value = value

			onChange(combineEvent)

			if (document.activeElement instanceof HTMLElement)
				document.activeElement.blur();
		}

		const handleFocus = (e: React.FocusEvent<HTMLDivElement>) => {
			setShowOptions(true)
			const { y } = e.target.getBoundingClientRect()
			setShowAbove(y > window.innerHeight / 2)
		}

		const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
			setShowOptions(false)
			// console.log(e.target)
		}

		console.log(value)

		return (
			<div
				ref={ref}
				tabIndex={0}
				className={`relative flex justify-center items-center rounded-full outline-none bg-slate-300 text-sm text-black h-9 ${className}`}
				onClick={() => console.log("test")}
				onFocus={handleFocus}
				onBlur={handleBlur}
				{...rest}				
			>
				<div className={`w-full z-[2] truncate bg-transparent outline-none mx-6 ${value ? "text-black" : "text-slate-500"} `}>
					<div className="flex justify-between items-center">
						<span>{value ? getLabelFromOption(value) : placeholder}</span>
						{showOptions ? <UpButton className="w-[15px] h-[15px]"/> : <DownButton className="w-[15px] h-[15px]"/>}
					</div>
					<div className={`absolute w-full z-[2] min-h-[0px] max-h-[50vh] left-0 ${showAbove ? "bottom-full" : "top-full"} ${showOptions ? "flex" : "hidden"}`}>
						<div className="mx-2 w-full flex flex-col bg-white shadow-md overflow-auto text-black">
							{/* option elements */}
							{options && options?.length > 0 ?
								options.map((option, index) => (
									<span key={`${option.value}-${index}`} className="px-4 py-2 hover:bg-slate-200" onClick={(e: React.MouseEvent | React.TouchEvent<HTMLSpanElement>) => handleSelect(e, option.value)}>{option.label}</span>	
								))
								:
								<span className="px-4 py-2 italic text-slate-500">{t("general.options.noOptions")}</span>	
							}

						</div>
					</div>
				</div>
			</div>			
		)
	})

RoundSelect.propTypes = {
	className: PropTypes.string,
	placeholder: PropTypes.string,
	value: PropTypes.string,
	options: PropTypes.arrayOf(PropTypes.object),
	onChange: PropTypes.func,
}

RoundSelect.defaultProps = {
	className: "",
	placeholder: "",
	value: undefined,
	option: [],
	onChange: null,
}

export default RoundSelect;