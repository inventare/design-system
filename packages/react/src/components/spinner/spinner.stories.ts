import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "./spinner";

const meta: Meta<typeof Spinner> = {
  title: "Components/Spinner",
  component: Spinner,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "number", min: 1 },
    },
    width: {
      control: { type: "number", min: 1 },
    },
    color: {
      control: { type: "color" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: "#000000",
    size: 48,
    width: 6,
  },
};
