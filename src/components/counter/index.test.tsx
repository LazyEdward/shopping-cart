import { render } from "@testing-library/react"
import Counter from "."

describe('<Counter/> Test', () => {
	it('Display', () => {
		const { queryByTestId } = render(
			<Counter/>
		)
		expect(queryByTestId('components-counter-value')).toHaveTextContent('0');
	})
	
	it('Add', () => {
	
		let count = 1

		const { rerender, queryByTestId } = render(
			<Counter
				count={count}
				onAddCount={() => {count = count + 1}}
			/>
		)
	
		expect(queryByTestId('components-counter-value')).toHaveTextContent('1');

		queryByTestId('components-counter-add')?.click()

		rerender(
			<Counter
				count={count}
				onAddCount={() => {count = count + 1}}
			/>
		)

		expect(queryByTestId('components-counter-value')).toHaveTextContent('2');

		queryByTestId('components-counter-add')?.click()
		queryByTestId('components-counter-add')?.click()

		rerender(
			<Counter
				count={count}
				onAddCount={() => {count = count + 1}}
			/>
		)

		expect(queryByTestId('components-counter-value')).toHaveTextContent('4');
	})

	it('Delete', () => {
	
		let count = 2
	
		const { rerender, queryByTestId } = render(
			<Counter
				count={count}
				onSubtractCount={() => {count = count - 1}}
			/>
		)
	
		expect(queryByTestId('components-counter-value')).toHaveTextContent('2');

		queryByTestId('components-counter-subtract')?.click()

		rerender(
			<Counter
				count={count}
				onSubtractCount={() => {count = count - 1}}
			/>
		)

		expect(queryByTestId('components-counter-value')).toHaveTextContent('1');

		queryByTestId('components-counter-subtract')?.click()
		queryByTestId('components-counter-subtract')?.click()

		rerender(
			<Counter
				count={count}
				onSubtractCount={() => {count = count - 1}}
			/>
		)

		expect(queryByTestId('components-counter-value')).toHaveTextContent('-1');

	})
	
	it('Add Under Constraint', () => {
	
		let count = 1
		
		const { rerender, queryByTestId } = render(
			<Counter
				count={count}
				canAdd={count < 1}
				onAddCount={() => {count = count + 1}}
			/>
		)
	
		expect(queryByTestId('components-counter-value')).toHaveTextContent('1');

		queryByTestId('components-counter-add')?.click()
		queryByTestId('components-counter-add')?.click()

		rerender(
			<Counter
				count={count}
				canAdd={count < 1}
				onAddCount={() => {count = count + 1}}
			/>
		)

		expect(queryByTestId('components-counter-value')).toHaveTextContent('1');
	})

	it('Delete Under Constraint', () => {
	
		let count = 0

		const { rerender, queryByTestId } = render(
			<Counter
				count={count}
				canSubtract={count > 0}
				onSubtractCount={() => {count = count - 1}}
			/>
		)
	
		expect(queryByTestId('components-counter-value')).toHaveTextContent('0');

		queryByTestId('components-counter-subtract')?.click()
		queryByTestId('components-counter-subtract')?.click()

		rerender(
			<Counter
				count={count}
				canSubtract={count > 0}
				onSubtractCount={() => {count = count - 1}}
			/>
		)

		expect(queryByTestId('components-counter-value')).toHaveTextContent('0');
	})
})

