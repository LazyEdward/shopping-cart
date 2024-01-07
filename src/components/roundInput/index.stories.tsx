import type { Meta, StoryObj } from "@storybook/react";
import RoundInput from "."
import { useArgs } from '@storybook/preview-api';

/** 
 * `RoundInput` component example
 */
const meta: Meta = {
	title: "Components/RoundInput",
	component: RoundInput,
	args: { ...RoundInput.defaultProps },
};

export default meta

type Story = StoryObj<typeof RoundInput>;

/** 
 * `RoundInput` component default example
 */
export const Default: Story = {
	args: {
		className: "w-[250px]",
		placeholder: "Example",
		value: "",
	},
	render: (args) => {
		const [, updateArgs] = useArgs();

		return (
			<div className="flex items-center">
				<RoundInput
					{...args}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateArgs({ value: e.target.value })}
				/>
			</div>
		)
	}
}

/** 
 * `RoundInput` component disabled example
 */
export const Disabled: Story = {
	args: {
		className: "w-[250px]",
		placeholder: "Example",
		disabled: true,
		value: "",
	},
	render: (args) => {
		const [{ value }, updateArgs] = useArgs();

		return (
			<div className="flex items-center">
				<RoundInput
					{...args}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateArgs({ value: e.target.value })}
				/>
			</div>
		)
	}
}
