import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';

type RoundInputProps = {
	className?: string,
	placeholder?: string,
	value?: string,
	onChange?: (e: React.ChangeEvent<HTMLInputElement>, ...rest: any) => void,
	[x:string]: any
}

const RoundInput = React.forwardRef<HTMLInputElement, RoundInputProps>(
	({
		className,
		placeholder,
		value,
		onChange,
		...rest
	}: RoundInputProps, ref) => (
		<div
			className={`relative flex justify-center items-center rounded-full bg-slate-300 text-sm text-black h-9 ${className}`}
		>
			<input
				ref={ref}
				data-testid={`components-roundInput`}
				className="w-full truncate bg-transparent outline-none mx-6 placeholder:text-slate-500"
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				{...rest}
			/>
		</div>
	))

RoundInput.propTypes = {
	className: PropTypes.string,
	placeholder: PropTypes.string,
	value: PropTypes.string,
	onChange: PropTypes.func,
}

RoundInput.defaultProps = {
	className: "",
	placeholder: "",
	value: undefined,
	onChange: null,
}

export default RoundInput;