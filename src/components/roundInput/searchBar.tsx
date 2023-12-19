import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import RoundInputProps from ".";
import { CloseButton } from "components/icon/close";
import { SearchButton } from "components/icon/search";
import RoundInput from ".";

type SearchBarProps = {
	className?: string,
	iconOnLeft?: boolean,
	placeholder?: string,
	searchInput?: string,
	openSearch?: boolean,
	setOpenSearch: (openSearch: boolean) => void
	children?: React.ReactNode,
	onChange?: (e: React.ChangeEvent<HTMLInputElement>, ...rest: any) => void,
	[x:string]: any
}

const SearchBar = ({
	className,
	iconOnLeft,
	placeholder,
	searchInput,
	openSearch,
	setOpenSearch,
	children,
	onChange
}: SearchBarProps) => (
	<div
		className={`flex items-center ${className}`}
	>
		{iconOnLeft ?
			openSearch ?
				<span
					className="p-2 cursor-pointer rounded-lg hover:shadow-md bg-green-700"
					onClick={(e) => setOpenSearch(false)}
				>
					<CloseButton className="w-[25px] h-[25px]"/>
				</span>
			:
				<span
					className="p-2 cursor-pointer rounded-lg hover:shadow-md bg-green-700"
					onClick={(e) => setOpenSearch(true)}
				>
					<SearchButton className="w-[25px] h-[25px]"/>
				</span>
			:
				null
		}
		<div className={`${openSearch ? "w-[175px] md:w-[250px] opacity-100 transition-all" : "w-0 opacity-0"}  mx-2`}>
			<RoundInput
				className="w-full"
				placeholder={placeholder}
				value={searchInput}
				onChange={onChange}
			/>
			{children}
		</div>
		{iconOnLeft ?
				null
			:
				openSearch ?
					<span
						className="p-2 cursor-pointer rounded-lg hover:shadow-md bg-green-700"
						onClick={(e) => setOpenSearch(false)}
					>
						<CloseButton className="w-[25px] h-[25px]"/>
					</span>
				:
					<span
						className="p-2 cursor-pointer rounded-lg hover:shadow-md bg-green-700"
						onClick={(e) => setOpenSearch(true)}
					>
						<SearchButton className="w-[25px] h-[25px]"/>
					</span>
		}
	</div>
)

SearchBar.propTypes = {
	className: PropTypes.string,
	iconOnLeft: PropTypes.bool,
	placeholder: PropTypes.string,
	searchInput: PropTypes.string,
	openSearch: PropTypes.bool,
	setOpenSearch: PropTypes.func,
	children: PropTypes.node,
	onChange: PropTypes.func,
}

SearchBar.defaultProps = {
	className: "",
	iconOnLeft: false,
	placeholder: "",
	searchInput: "",
	openSearch: false,
	setOpenSearch: () => {},
	children: null,
	onChange: null,
}

export default SearchBar;