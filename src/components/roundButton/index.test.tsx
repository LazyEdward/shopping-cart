import { render } from "@testing-library/react"
import RoundButton from ".";

describe('<RoundButton/> Test', () => {
	it('Display', () => {
		const { queryByTestId } = render(
			<RoundButton>Test RoundButton</RoundButton>
		)
		expect(queryByTestId('components-roundButton')).toHaveTextContent('Test RoundButton');
	})

	it('Click', () => {
		const mock = vi.fn();

		const { queryByTestId } = render(
			<RoundButton
				onClick={mock}
			/>
		)
		queryByTestId('components-roundButton')?.click();
		expect(mock).toHaveBeenCalledTimes(1);
	})

	it('Disabled', () => {
		const { queryByTestId } = render(
			<RoundButton
				disabled
			/>
		)
		
		expect(queryByTestId('components-roundButton')).toBeDisabled();
	})
})

