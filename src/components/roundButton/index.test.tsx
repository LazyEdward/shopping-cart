import { render } from "@testing-library/react"
import RoundButton, { RoundButtonTheme } from ".";

describe('<RoundButton/> Test', () => {
	it('Display', () => {
		const { queryByTestId } = render(
			<RoundButton>Test RoundButton</RoundButton>
		)
		expect(queryByTestId('components-roundButton')).toHaveTextContent('Test RoundButton');
		expect(queryByTestId('components-roundButton')).toHaveClass(RoundButtonTheme.filled);
	})

	it('Framed', () => {
		const { queryByTestId } = render(
			<RoundButton theme={RoundButtonTheme.framed}>Test Framed RoundButton</RoundButton>
		)
		expect(queryByTestId('components-roundButton')).toHaveTextContent('Test Framed RoundButton');
		expect(queryByTestId('components-roundButton')).toHaveClass(RoundButtonTheme.framed);
	})

	it('removeFilled', () => {
		const { queryByTestId } = render(
			<RoundButton theme={RoundButtonTheme.removeFilled}>Test Remove Filled</RoundButton>
		)
		expect(queryByTestId('components-roundButton')).toHaveTextContent('Test Remove Filled');
		expect(queryByTestId('components-roundButton')).toHaveClass(RoundButtonTheme.removeFilled);
	})

	it('removeFramed', () => {
		const { queryByTestId } = render(
			<RoundButton theme={RoundButtonTheme.removeFramed}>Test Remove Framed</RoundButton>
		)
		expect(queryByTestId('components-roundButton')).toHaveTextContent('Test Remove Framed');
		expect(queryByTestId('components-roundButton')).toHaveClass(RoundButtonTheme.removeFramed);
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

