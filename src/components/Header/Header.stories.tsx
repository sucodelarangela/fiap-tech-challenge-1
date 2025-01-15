import type { Meta, StoryObj } from "@storybook/react";
import { Header } from ".";

const meta = {
  title: "Components/Header",
  component: Header,
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
  args: {},
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
