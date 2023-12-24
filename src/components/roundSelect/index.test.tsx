import { fireEvent, screen, render, waitFor } from "@testing-library/react"
import RoundSelect from ".";

describe('<RoundSelect/> Test', () => {
	it('Display', () => {
		const { queryByTestId } = render(
			<RoundSelect value={"roundSelect"} options={[{
				"label": "Test RoundSelect",
				"value": "roundSelect",
			}]}/>
		)

		waitFor(() => expect(queryByTestId('components-RoundSelect')).toBeInTheDocument());
		waitFor(() => expect(queryByTestId('components-RoundSelect-options')).toBeInTheDocument());
		waitFor(() => expect(queryByTestId('components-RoundSelect-options')).not.toBeInTheDocument());
		waitFor(() => expect(queryByTestId('components-RoundSelect-current')).toHaveTextContent("Test RoundSelect"));
	})

	it('Focus', () => {
		const { queryByTestId } = render(
			<RoundSelect
				value={"roundSelect"} options={[{
					"label": "Test RoundSelect",
					"value": "roundSelect",
				}]}
			/>
		)
		
		queryByTestId('components-RoundSelect')?.focus()
		waitFor(() => expect(queryByTestId('components-RoundSelect-options')).toBeVisible());
		queryByTestId('components-RoundSelect')?.blur()
		waitFor(() => expect(queryByTestId('components-RoundSelect-options')).not.toBeVisible());
	})

	it('Change', async() => {
		let value = ""
		
		const { queryByTestId } = render(
			<RoundSelect value={"roundSelect"} options={[
				{
					"label": "Test RoundSelect",
					"value": "roundSelect",
				},
				{
					"label": "Test RoundSelect 2",
					"value": "roundSelect2",
				}
			]}/>
		)
		
		waitFor(() => expect(queryByTestId('components-RoundSelect-current')).toHaveTextContent("Test RoundSelect"));

		queryByTestId('components-RoundSelect')?.focus()
		waitFor(() => expect(queryByTestId('components-RoundSelect-options')).toBeVisible());

		screen.getByText('Test RoundSelect 2')?.click()
		waitFor(() => expect(queryByTestId('components-RoundSelect-current')).toHaveTextContent("Test RoundSelect 2"));
	})

	it('Placeholder', () => {
		const { queryByTestId } = render(
			<RoundSelect
				placeholder={"Test RoundSelect placeholder"}
			/>
		)
		
		waitFor(() => expect(queryByTestId('components-RoundSelect-current')).toHaveTextContent("Test RoundSelect placeholder"));
	})
})

