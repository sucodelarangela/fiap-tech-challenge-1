import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from ".";
import { useState } from "react";

const meta = {
  title: "Components/Modal",
  component: Modal,
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
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    isOpen: false,
    onClose: () => {},
    children: <div>Modal</div>,
  },
  render: function PrimaryStory(args) {
    const [isOpen, setIsOpen] = useState(args.isOpen);

    return (
      <>
        <button onClick={() => setIsOpen(true)}>Nova transação</button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          {args.children}
        </Modal>
      </>
    );
  },
};
