import { render } from "@testing-library/react"

import Card from "."

describe('<Card/> Test', () => {
	it('Display', () => {
		const { queryByTestId } = render(
			<Card className={`test-components-card`}/>
		)
		expect(queryByTestId('components-card')).toHaveClass(`shadow-md test-components-card`);
	})
})

