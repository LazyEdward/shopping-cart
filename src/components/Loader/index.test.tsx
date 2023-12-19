import { render } from "@testing-library/react"

import Loader from "."

describe('<Loader/> Test', () => {
	it('Display', () => {
		const { queryByTestId } = render(
			<Loader width="w-[20]"/>
		)
		expect(queryByTestId('components-loader')).toHaveClass(`dots-3 w-[20]`);
	})

})

