
import { useForwardRef } from 'hooks/useForwardRef';
import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';

type DragCoord = {
	x: number,
	y: number,
}

type CardProps = {
	className?: string,
	handleHorizontal?: (on: boolean) => void,
	handleVertical?: (on: boolean) => void,
	children?: React.ReactNode,
	[x:string]: any
}

const Scrollable = React.forwardRef<HTMLDivElement, CardProps>(
	({
		className,
		handleHorizontal,
		handleVertical,
		children,
		...rest
	} : CardProps, ref) => {

	let dragControl : DragCoord | null = null;

	const scrollRef = useForwardRef<HTMLDivElement>(ref)

	const handleScrollable = () => {
		if(scrollRef.current){
			if(handleHorizontal && scrollRef.current.scrollWidth > scrollRef.current.clientWidth)
				handleHorizontal(true)
				
			if(handleVertical && scrollRef.current.scrollHeight > scrollRef.current.clientHeight)
				handleVertical(true)
		}
	}

	const cancelScrollable = () => {
		if(handleHorizontal)
			handleHorizontal(false)
			
		if(handleVertical)
			handleVertical(false)
	}

	const wheelListener = (e: WheelEvent) => {
		if(scrollRef.current.scrollWidth > scrollRef.current.clientWidth){
			e.preventDefault();
			scrollRef.current.scrollBy(e.deltaY * scrollRef.current.clientWidth / scrollRef.current.clientHeight, 0);
		}
	}

	useEffect(() => {
		if(scrollRef.current){
			scrollRef.current.addEventListener('wheel', wheelListener);
		}

		return () => {
			if(scrollRef.current)
				scrollRef.current.removeEventListener('wheel', wheelListener);
		}

	}, [ref])

	return (
		<div
			ref={scrollRef}
			className={`scrollable ${className}`}
			onMouseEnter={() => handleScrollable()}
			onMouseLeave={() => cancelScrollable()}
			{...rest}
		>
			{children}
		</div>
	)
})

Scrollable.propTypes = {
	className: PropTypes.string,
	handleHorizontal: PropTypes.func,
	handleVertical: PropTypes.func,
	children: PropTypes.node,
}

Scrollable.defaultProps = {
	className: "",
	handleHorizontal: null,
	handleVertical: null,
	children: null,
}

export default Scrollable