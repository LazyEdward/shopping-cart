import { MinusButton } from 'components/icon/minus';
import { PlusButton } from 'components/icon/plus';
import PropTypes from 'prop-types';

type CounterProps = {
	count: number,
	canSubtract: boolean,
	canAdd: boolean,
	onSubtractCount: () => void,
	onAddCount: () => void,
}

const Counter = ({
	count,
	canSubtract,
	canAdd,
	onSubtractCount,
	onAddCount
}: CounterProps) => {

	const handleAdd = () => {
		
	}

	return (
		<>
			<div className="mx-1">
				<div data-testid="components-counter-subtract" className={`border-red-700 border-2 text-red-700 rounded-full p-[2px] ${canSubtract ? "cursor-pointer" : "opacity-50"}`} onClick={(e:React.MouseEvent|React.TouchEvent) => {e.stopPropagation();if(!!onSubtractCount && canSubtract)onSubtractCount()}}>
					<MinusButton className="w-[20px] h-[20px]"/>
				</div>
			</div>
			<div data-testid="components-counter-value" className="mx-1 text-sm">
				{count}
			</div>
			<div className="mx-1">
				<div data-testid="components-counter-add" className={`bg-green-700 text-white rounded-full p-1 ${canAdd ? "cursor-pointer" : "opacity-50"}`} onClick={(e:React.MouseEvent|React.TouchEvent) => {e.stopPropagation();if(!!onAddCount && canAdd)onAddCount()}}>
					<PlusButton className="w-[20px] h-[20px]"/>
				</div>
			</div>
		</>
	)
}

Counter.propTypes = {
	count: PropTypes.number,
	canSubtract: PropTypes.bool,
	canAdd: PropTypes.bool,
	onSubtractCount: PropTypes.func,
	onAddCount: PropTypes.func,
}

Counter.defaultProps = {
	count: 0,
	canSubtract: true,
	canAdd: true,
	onSubtractCount: null,
	onAddCount: null,
}

export default Counter