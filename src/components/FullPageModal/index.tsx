import { createPortal } from 'react-dom';
import { useEffect } from "react"
import PropTypes from 'prop-types';

type FullPageLoaderProps = {
	active?: boolean,
	className: string,
	level?: string,
	children?: React.ReactNode | null,
}

const FullPageModal = ({
	active,
	className,
	level,
	children
}: FullPageLoaderProps) => {

	let element = document.querySelector(`.${className}`)

	return (
		active && element ?
			createPortal(
				<div data-testid={`components-fullPageModal`} className={`absolute w-full h-full top-0 left-0 bg-black bg-opacity-50 ${level}`}>
					{children}
				</div>
				,
				element
			)
		:
		 null
	)
}

FullPageModal.propTypes = {
	active: PropTypes.bool,
	className: PropTypes.string,
	level: PropTypes.string,
	children: PropTypes.node,
}

FullPageModal.defaultProps = {
	active: true,
	className: "",
	level: "z-[9999]",
	children: null,
}

export default FullPageModal