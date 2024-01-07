import React from "react";
import PropTypes from 'prop-types';

export const RoundButtonTheme = Object.freeze({
	"filled": `bg-green-700 text-white disabled:bg-slate-500`,
	"framed": `border-[2px] border-green-700 bg-white text-green-700 disabled:text-slate-500 disabled:border-slate-500 `,
	"removeFilled": `bg-red-700 text-white disabled:bg-slate-500`,
	"removeFramed": `border-[2px] border-red-700 bg-white text-red-700 disabled:text-slate-500 disabled:border-slate-500 `,
})

type RoundButtonProps = {
	disabled: boolean,
	/** `RoundButton` button style */
	theme: typeof RoundButtonTheme,
	/** `RoundButton` button extra/override style */
	className?: string,
	/** `RoundButton` content (text, icon...) */
	children?: React.ReactNode,
	/** `RoundButton` button `onclick` action */
	onClick?: (e: React.MouseEvent | React.TouchEvent<HTMLButtonElement>, ...rest: any) => void,
	[x:string]: any
}

const RoundButton = React.forwardRef<HTMLButtonElement, RoundButtonProps>(
	({
		disabled,
		theme,
		className,
		children,
		onClick,
		...rest
	}: RoundButtonProps, ref) => (
		<button
			ref={ref}
			data-testid={`components-roundButton`}
			className={`
				flex justify-center items-center rounded-full 
				text-sm h-9 truncate outline-none
				${theme}
				${className} 
			`}
			disabled={disabled}
			onClick={onClick}
			{...rest}
		>
			{children}
		</button>
	))

RoundButton.propTypes = {
	disabled: PropTypes.bool,
	theme: PropTypes.string,
	className: PropTypes.string,
	children: PropTypes.node,
	onClick: PropTypes.func,
}

RoundButton.defaultProps = {
	disabled: false,
	theme: RoundButtonTheme.filled,
	className: "",
	children: null,
	onClick: null,
}

RoundButton.displayName = 'RoundButton'

export default RoundButton;