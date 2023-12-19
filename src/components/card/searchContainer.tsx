
import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import Card from '.';
import Loader from 'components/loader';
import Scrollable from 'components/scrollable';

type SearchContainerProps = {
	className?: string,
	loading?: boolean,
	children?: React.ReactNode,
	[x:string]: any
}

const SearchContainer = ({
	className,
	loading,
	children,
	...rest
} : SearchContainerProps) => {
		
	const scrollRef = useRef<HTMLDivElement>(null)

	return (
		<div className={`absolute p-4 ${className}`}>
			<Card className="w-full h-full overflow-hidden rounded-lg relative p-3 bg-white">
				<Scrollable ref={scrollRef} className="w-full h-full overflow-auto flex flex-col items-center overflow-y-auto">
					{children}
				</Scrollable>
				{loading &&
					<div className='absolute top-0 left-0 rounded-lg flex justify-center items-center w-full h-full bg-slate-400 opacity-50 z-[2]'>
						<Loader/>
					</div>
				}
			</Card>
		</div>
	)
}

SearchContainer.propTypes = {
	className: PropTypes.string,
	loading: PropTypes.bool,
	children: PropTypes.node,
}

SearchContainer.defaultProps = {
	className: "",
	loading: false,
	children: null,
}

export default SearchContainer