import type { Meta, StoryObj } from "@storybook/react";
import { LastTransactions } from ".";

const meta = {
  title: "Components/LastTransactions",
  component: LastTransactions,
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
} satisfies Meta<typeof LastTransactions>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    transactions: [
      { date: "2023-10-01", amount: 100, type: "deposit" },
      { date: "2023-10-02", amount: 50, type: "transfer" },
      { date: "2023-10-03", amount: 200, type: "deposit" },
      { date: "2023-10-04", amount: -150, type: "transfer" },
    ],
  },
};
