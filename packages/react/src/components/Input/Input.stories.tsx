import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  argTypes: {
    disabled: {
      control: "boolean",
      description: "indicate if the button is disabled",
    },
    label: {
      control: 'text'
    }
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 'name',
    label: 'Your Name'
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    id: 'disabled-name',
    label: 'Your Name'
  },
};
