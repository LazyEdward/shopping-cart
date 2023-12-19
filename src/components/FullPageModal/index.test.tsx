import { render } from "@testing-library/react"

import FullPageModal from "."

describe('<FullPageModal/> Test', () => {
	it('Display', () => {
		render(<div className="test-components-fullPageModal"/>)

		const { queryByTestId } = render(
			<FullPageModal className={`test-components-fullPageModal`}/>
		)
		expect(queryByTestId('components-fullPageModal')).toBeVisible();
		expect(queryByTestId('components-fullPageModal')).toHaveClass(`absolute z-[9999] bg-opacity-50`);
	})

	it('Inactive', () => {
		render(<div className="test-components-fullPageModal"/>)

		const { queryByTestId } = render(
			<FullPageModal active={false} className={`test-components-fullPageModal`}/>
		)
		expect(queryByTestId('components-fullPageModal')).toBeNull();
	})

	it('Display Level', () => {
		render(<div className="test-components-fullPageModal"/>)

		const { queryByTestId } = render(
			<FullPageModal level={`z-[2]`} className={`test-components-fullPageModal`}/>
		)
		expect(queryByTestId('components-fullPageModal')).toBeVisible();
		expect(queryByTestId('components-fullPageModal')).toHaveClass(`absolute z-[2] bg-opacity-50`);
	})

})

