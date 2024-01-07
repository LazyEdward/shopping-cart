import type { Meta, StoryObj } from "@storybook/react";
import Counter from "."
import { useArgs } from '@storybook/preview-api';

/** 
 * `Counter` component example
 */
const meta: Meta = {
	title: "Components/Counter",
	component: Counter,
	args: { ...Counter.defaultProps },
};

export default meta

type Story = StoryObj<typeof Counter>;

/** 
 * `Counter` component in a flexbox example
 */
export const FlexContainer: Story = {
	args: {},
	render: (args) => {
		const [{ count }, updateArgs] = useArgs();

		return (
			<div className="flex items-center">
				<Counter
					{...args}
					onSubtractCount={() => updateArgs({ count: count - 1 })}
					onAddCount={() => updateArgs({ count: count + 1 })}
				/>
			</div>
		)
	}
}

/** 
 * `Counter` component with constraints example
 */
export const Constraint: Story = {
	args: {
		count: 1,
	},
	render: (args) => {
		const [{ count }, updateArgs] = useArgs();

		return (
			<div className="flex items-center">
				<Counter
					{...args}
					canSubtract={count > 0}
					canAdd={count < 99}
					onSubtractCount={() => updateArgs({ count: count - 1 })}
					onAddCount={() => updateArgs({ count: count + 1 })}
				/>
			</div>
		)
	}
}
