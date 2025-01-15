import type { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
    tags: ["autodocs"],
    backgrounds: {
      default: "white",
      values: [
        { name: "white", value: "#ffffff" },
        { name: "primary", value: "#004D61" },
      ],
    },
  },
  args: {
    children: "Button",
    variant: "primary",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Button",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Button",
    variant: "secondary",
  },
};

export const Tertiary: Story = {
  args: {
    children: "Button",
    variant: "tertiary",
  },
};
