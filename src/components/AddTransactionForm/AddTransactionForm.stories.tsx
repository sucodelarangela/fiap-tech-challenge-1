import type { Meta, StoryObj } from "@storybook/react";
import { AddTransactionForm } from ".";

const meta = {
  title: "Components/AddTransactionForm",
  component: AddTransactionForm,
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
} satisfies Meta<typeof AddTransactionForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    initialType: "deposit",
    initialAmount: 123,
    initialDate: "10/10/2025",
    onSubmit: () => {},
    title: "Adicionar Nova Transação",
    buttonText: "Criar Transação",
  },
};
