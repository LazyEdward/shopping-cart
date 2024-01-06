import type { Meta, StoryObj } from "@storybook/react";
import Card from "."

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
};

export default meta

type Story = StoryObj<typeof Card>;

export const Default: Story = {
	args: {
		className: "rounded-lg relative flex items-center justify-center shrink-0 overflow-hidden bg-slate-200",
		children: <div className="p-2 text-white">Example</div>
	}
}