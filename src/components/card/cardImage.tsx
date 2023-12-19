import React, { useState } from "react";
import PropTypes from 'prop-types';
import Card from ".";

type CardImageProps = {
	src?: string,
	width?: string,
	height?: string,
	canHover?: boolean,
	onClick?: (e: React.MouseEvent | React.TouchEvent<HTMLElement>, ...rest: any) => void,
}

const CardImage = ({
	src,
	width,
	height,
	canHover,
	onClick,
}: CardImageProps) => (
	<Card
		className={`rounded-lg relative flex items-center justify-center shrink-0 overflow-hidden ${canHover ? "hover:opacity-70 cursor-pointer" : ""} `}
		style={{ width: `${width}px`, height: `${height}px` }}
		onClick={onClick ? (e: React.MouseEvent | React.TouchEvent<HTMLElement>) => onClick(e) : () => {}}
	>
		<img
			className={`w-auto h-auto rounded-lg object-cover hover:bg-black`}
			style={{ minWidth: `${width}px`, minHeight: `${height}px` }}
			src={src}
			alt="Image not found"
			draggable={false}
		/>
	</Card>
)

CardImage.propTypes = {
	src: PropTypes.string,
	width: PropTypes.string,
	height: PropTypes.string,
	canHover: PropTypes.bool,
	onClick: PropTypes.func,
}

CardImage.defaultProps = {
	src: "",
	width: "",
	height: "",
	canHover: false,
	onClick: null,
}

export default CardImage