
import { LeftButton } from 'components/icon/left';
import { RightButton } from 'components/icon/right';
import PropTypes from 'prop-types';
import { useRef } from 'react';

type CardProps = {
	buttonSize?: string,
	offsetLeft?: string,
	offsetRight?: string,
	showLeft?: boolean,
	showRight?: boolean,
	onClickLeft?: (e: React.MouseEvent | React.TouchEvent<HTMLElement>, ...rest: any) => void,
	onClickRight?: (e: React.MouseEvent | React.TouchEvent<HTMLElement>, ...rest: any) => void,
}

const ScrollHelper = ({buttonSize, offsetLeft, offsetRight, showLeft, showRight, onClickLeft, onClickRight} : CardProps) => {

	return (
		<>
			<div className={`absolute top-1/2 ${offsetLeft} -translate-y-1/2 flex items-center justify-center`}>
				<span className={`cursor-pointer opacity-70 rounded-full bg-slate-500 text-white ${buttonSize}`} onClick={onClickLeft ? (e: React.MouseEvent | React.TouchEvent<HTMLElement>) => onClickLeft(e) : () => {}}><LeftButton/></span>
			</div>
			<div className={`absolute top-1/2 ${offsetRight} -translate-y-1/2 flex items-center justify-center`}>
				<span className={`cursor-pointer opacity-70 rounded-full bg-slate-500 text-white ${buttonSize}`} onClick={onClickRight ? (e: React.MouseEvent | React.TouchEvent<HTMLElement>) => onClickRight(e) : () => {}}><RightButton/></span>
			</div>
		</>
	)
}

ScrollHelper.propTypes = {
	buttonSize: PropTypes.string,
	offsetLeft: PropTypes.string,
	offsetRight: PropTypes.string,
	showLeft: PropTypes.bool,
	showRight: PropTypes.bool,
	onClickLeft: PropTypes.func,
	onClickRight: PropTypes.func,
}

ScrollHelper.defaultProps = {
	buttonSize: "w-[35px] h-[35px]",
	offsetLeft: "left-[25px]",
	offsetRight: "right-[25px]",
	showLeft: false,
	showRight: false,
	onClickLeft: null,
	onClickRight: null,
}

export default ScrollHelper