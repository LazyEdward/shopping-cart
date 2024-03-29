import type { Meta, StoryObj } from "@storybook/react";
import RoundButton, { RoundButtonTheme } from "."
import { useArgs } from '@storybook/preview-api';
import { CartButton } from "components/icon/cart";

/** 
 * `RoundButton` component example
 */
const meta: Meta = {
	title: "Components/RoundButton",
	component: RoundButton,
	args: { ...RoundButton.defaultProps },
};

export default meta

type Story = StoryObj<typeof RoundButton>;

/** 
 * `RoundButton` component default example
 */
export const Default: Story = {
	args: {
		className: "w-[250px]",
		children: <div>Default</div>,
		onClick: () => alert("onclick"),
	}
}

/** 
 * `RoundButton` component framed example
 */
export const Framed: Story = {
	args: {
		className: "w-[250px]",
		theme: RoundButtonTheme.framed,
		children: <div>Framed</div>,
		onClick: () => alert("onclick"),
	}
}

/** 
 * `RoundButton` component disabled example
 */
export const Disabled: Story = {
	args: {
		className: "w-[250px]",
		disabled: true,
		children: <div>Disabled</div>,
		onClick: () => alert("onclick"),
	}
}

/** 
 * `RoundButton` component with icon example
 */
export const WithIcon: Story = {
	args: {
		className: "w-[250px]",
		children: <><CartButton className="w-[25px] h-[25px]" /><span className="pl-2">With Icon</span></>,
		onClick: () => alert("onclick"),
	}
}
