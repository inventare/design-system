import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      control: "boolean",
      description: "indicate if the button is disabled",
    },
    variant: {
      control: { type: "select" },
      options: ["default", "primary", "danger"],
      description: "the button style",
    },
    size: {
      control: { type: "select" },
      options: ["normal", "small", "large"],
      description: "the button size variant",
    },
    square: {
      control: "boolean",
      description: "indicate if button border round is square",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Button",
  },
};

export const PrimaryLink: Story = {
  args: {
    children: "Button",
    variant: "primary",
  },
  render: ({ ...args }) => <Button {...args} as="a" href="#" />,
};
