import type { Meta, StoryObj } from "@storybook/react";
import { LastTransactions } from ".";
import { TransactionType } from "@/models/Transaction";

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
      {
        id: "1",
        date: new Date("2023-10-01"),
        amount: 100,
        type: "deposit",
        userId: "",
        toJSON: function (): {
          id: string;
          type: TransactionType;
          amount: number;
          date: string;
          userId: string;
        } {
          throw new Error("Function not implemented.");
        },
        getBalanceChange: function (): number {
          throw new Error("Function not implemented.");
        },
      },
      {
        id: "2",
        date: new Date("2023-10-02"),
        amount: 50,
        type: "transfer",
        userId: "",
        toJSON: function (): {
          id: string;
          type: TransactionType;
          amount: number;
          date: string;
          userId: string;
        } {
          throw new Error("Function not implemented.");
        },
        getBalanceChange: function (): number {
          throw new Error("Function not implemented.");
        },
      },
      {
        id: "3",
        date: new Date("2023-10-03"),
        amount: 200,
        type: "deposit",
        userId: "",
        toJSON: function (): {
          id: string;
          type: TransactionType;
          amount: number;
          date: string;
          userId: string;
        } {
          throw new Error("Function not implemented.");
        },
        getBalanceChange: function (): number {
          throw new Error("Function not implemented.");
        },
      },
      {
        id: "4",
        date: new Date("2023-10-04"),
        amount: -150,
        type: "transfer",
        userId: "",
        toJSON: function (): {
          id: string;
          type: TransactionType;
          amount: number;
          date: string;
          userId: string;
        } {
          throw new Error("Function not implemented.");
        },
        getBalanceChange: function (): number {
          throw new Error("Function not implemented.");
        },
      },
    ],
  },
};
