import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';

type RoundInputProps = {
	disabled: boolean,
	className?: string,
	placeholder?: string,
	value?: string,
	onChange?: (e: React.ChangeEvent<HTMLInputElement>, ...rest: any) => void,
	[x:string]: any
}

const RoundInput = React.forwardRef<HTMLInputElement, RoundInputProps>(
	({
		disabled,
		className,
		placeholder,
		value,
		onChange,
		...rest
	}: RoundInputProps, ref) => (
		<div
			className={`relative flex justify-center items-center rounded-full ${disabled ? "bg-slate-200" : "bg-slate-300"} text-sm text-black h-9 ${className}`}
		>
			<input
				ref={ref}
				data-testid={`components-roundInput`}
				className="w-full truncate bg-transparent outline-none mx-6 placeholder:text-slate-500 disabled:text-slate-400 disabled:placeholder-slate-400"
				placeholder={placeholder}
				value={value}
				disabled={disabled}
				onChange={onChange}
				{...rest}
			/>
		</div>
	))

RoundInput.propTypes = {
	disabled: PropTypes.bool,
	className: PropTypes.string,
	placeholder: PropTypes.string,
	value: PropTypes.string,
	onChange: PropTypes.func,
}

RoundInput.defaultProps = {
	disabled: false,
	className: "",
	placeholder: "",
	value: undefined,
	onChange: null,
}

export default RoundInput;