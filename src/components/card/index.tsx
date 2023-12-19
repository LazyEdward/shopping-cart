
import PropTypes from 'prop-types';
import React from 'react';

type CardProps = {
	className?: string,
	children?: React.ReactNode,
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

export default Card