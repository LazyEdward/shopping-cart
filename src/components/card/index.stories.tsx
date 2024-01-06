import type { Meta, StoryObj } from "@storybook/react";
import Card from "."
import { PRODUCT_DATA } from "data";

const meta: Meta = {
  title: "Components/Card",
  component: Card,
  args: { ...Card.defaultProps },
};

export default meta

type Story = StoryObj<typeof Card>;

export const Default: Story = {
	args: {
		className: "rounded-lg relative flex items-center justify-center shrink-0 overflow-hidden bg-slate-300",
		style: { width: `120px`, height: `120px` },
		children: <div className="p-6 text-white">Example</div>,
	}
}

export const Clickable: Story = {
	args: {
		className: "rounded-lg relative flex items-center justify-center shrink-0 overflow-hidden hover:opacity-70 cursor-pointer bg-slate-300",
		style: { width: `120px`, height: `120px` },
		onClick: () => alert('Card is clicked'),
		children: <div className="p-6 text-white">Example</div>,
	}
}

export const Image: Story = {
	args: {
		className: `rounded-lg relative flex items-center justify-center shrink-0 overflow-hidden bg-slate-300 `,
		style: { width: `120px`, height: `120px` },
		// onClick: () => alert('Card is clicked'),
		children: <div className="p-2 text-white">
					<img
						className={`w-auto h-auto rounded-lg object-cover hover:bg-black`}
						style={{ minWidth: `100px`, minHeight: `100px` }}
						src={PRODUCT_DATA[0].img}
						alt="Image not found"
						draggable={false}
					/>
				</div>,
	}
}