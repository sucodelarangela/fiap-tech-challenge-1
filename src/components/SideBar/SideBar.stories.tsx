import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Sidebar } from ".";

const meta = {
  title: "Components/Sidebar",
  component: Sidebar,
  parameters: {
    layout: "fullscreen",
    tags: ["autodocs"],
    backgrounds: {
      default: "white",
      values: [
        { name: "white", value: "#ffffff" },
        { name: "gray", value: "#f0f0f0" },
      ],
    },
  },
  argTypes: {
    isMobile: {
      control: "boolean",
      description: "Define se o sidebar está no modo mobile.",
      defaultValue: false,
    },
    isOpen: {
      control: "boolean",
      description: "Controla a visibilidade do sidebar no modo mobile.",
      defaultValue: false,
    },
    onClose: {
      action: "closed",
      description: "Callback acionado ao fechar o sidebar no modo mobile.",
    },
  },
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Desktop: Story = {
  args: {
    isMobile: false,
    isOpen: true,
  },
};

export const MobileOpen: Story = {
  render: function MobileOpenComponent() {
    const [isOpen, setIsOpen] = useState(true);

    return (
      <Sidebar
        isMobile={true}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    );
  },
};

export const MobileClosed: Story = {
  args: {
    isMobile: true,
    isOpen: false,
  },
};
