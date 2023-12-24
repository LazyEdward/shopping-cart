import { fireEvent, render, waitFor } from "@testing-library/react"
import RoundInput from ".";

describe('<RoundInput/> Test', () => {
	it('Display', () => {
		const { queryByTestId } = render(
			<RoundInput value={"Test RoundInput"}/>
		)
		expect(queryByTestId('components-roundInput')).toHaveClass(`w-full truncate bg-transparent outline-none`);
		expect(queryByTestId('components-roundInput')).toHaveValue("Test RoundInput");
	})

	it('Change', async() => {
		let value = ""
		const mock = vi.fn((e) => value = e.target.value);

		const { queryByTestId } = render(
			<RoundInput
				value={value}
				onChange={mock}
			/>
		)
		const input = queryByTestId('components-roundInput')!;
		fireEvent.change(input, {target: {value: 'Test RoundInput'}})
		waitFor(() => expect(queryByTestId('components-roundInput')).toHaveValue("Test RoundInput"));
		expect(mock).toHaveBeenCalledTimes(1);
		expect(value).toEqual('Test RoundInput')
	})

	it('Placeholder', () => {
		const { queryByTestId } = render(
			<RoundInput
				placeholder={"Test RoundInput placeholder"}
			/>
		)
		
		expect(queryByTestId('components-roundInput')?.getAttribute("placeholder")).toBe("Test RoundInput placeholder");
	})
})

