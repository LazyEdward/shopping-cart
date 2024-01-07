
import PropTypes from 'prop-types';
import React from 'react';

type CardProps = {
	/** `Card` container style */
	className?: string,
	/** Children in `Card` container */
	children?: React.ReactNode,
	/** Extra properties */
	[x:string]: any
}

const Card = React.forwardRef<HTMLDivElement,CardProps>(
	({
		className,
		children,
		...rest
	} : CardProps, ref) => (
		<div
			ref={ref}
			data-testid={`components-card`}
			className={`shadow-md ${className}`}
			{...rest}
		>
			{children}
		</div>
))

Card.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node,
}

Card.defaultProps = {
	className: "",
	children: null,
}

Card.displayName = 'Card'

export default Card