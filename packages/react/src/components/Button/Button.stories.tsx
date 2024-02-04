import type { Meta, StoryObj } from "@storybook/react";
import { Button as ButtonBase } from "./Button";
import { ButtonProps } from "./Button.types";

const Button = (props: ButtonProps) => <ButtonBase {...props} />;

const meta: Meta<typeof ButtonBase> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    as: {
      control: false,
      description:
        "The `as` is used to change the HTML Element output of `<Button />` component.",
    },
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

export const Default: Story = {
  args: {
    children: "Button",
  },
};

export const Primary: Story = {
  args: {
    children: "Primary Button",
    variant: "primary",
  },
};

export const PrimaryLarge: Story = {
  args: {
    children: "Large Button",
    variant: "primary",
    size: "large",
  },
};

export const Danger: Story = {
  args: {
    children: "Danger Button",
    variant: "danger",
  },
};

export const DangerSmall: Story = {
  args: {
    children: "Small Button",
    variant: "danger",
    size: "small",
  },
};

export const PrimaryOutline: Story = {
  args: {
    children: "Outline Button",
    variant: "primary",
    outline: true,
  },
};

export const SquareDanger: Story = {
  args: {
    children: "Square Danger Button",
    variant: "danger",
    square: true,
  },
};

export const SquareDangerOutline: Story = {
  args: {
    children: "Square Danger Button",
    variant: "danger",
    square: true,
    outline: true,
  },
};

export const Loading: Story = {
  args: {
    children: "Button",
    variant: "primary",
    square: true,
    isLoading: true,
  },
};

export const LoadingCustom: Story = {
  args: {
    children: "Button",
    variant: "danger",
    square: true,
    isLoading: true,
    loadingText: "Deleting...",
  },
};

export const LoadingSpinner: Story = {
  args: {
    children: "Button",
    variant: "primary",
    square: true,
    isLoading: true,
    loadingType: "spinner",
  },
};

export const Disabled: Story = {
  args: {
    children: "Button",
    variant: "primary",
    disabled: true,
  },
};
