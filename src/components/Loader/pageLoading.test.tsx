import { render } from "@testing-library/react"

import PageLoading from "./pageLoading"

describe('<Loader/> Test', () => {
	it('Display', () => {
		const { queryByTestId } = render(
			<PageLoading/>
		)
		expect(queryByTestId(`components-loader`)).toBeVisible();
		expect(queryByTestId('components-pageLoading')).toHaveClass(`w-full flex justify-center items-center`);
	})

})

