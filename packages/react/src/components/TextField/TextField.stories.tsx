import type { Meta, StoryObj } from "@storybook/react";
import { TextField } from "./TextField";

(TextField as any).displayName = "TextField";

const meta: Meta<typeof TextField> = {
  title: "Components/TextField",
  component: TextField,
  argTypes: {
    disabled: {
      control: "boolean",
      description: "indicate if the TextField is disabled",
    },
    label: {
      control: "text",
      description: "determines the label of the TextField",
    },
    helperText: {
      control: "text",
      description: "determines the helper text of the TextField",
    },
    validFeedback: {
      control: "text",
      description:
        "determines the valid feedback text of the TextField. If this is set, the state colors of the TextField goes to success.",
    },
    invalidFeedback: {
      control: "text",
      description:
        "determines the invalid feedback text of the TextField. If this is set, the state colors of the TextField goes to error.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "name",
    label: "E-mail address",
    type: "email",
    placeholder: "example@example.com",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    id: "disabled-name",
    label: "E-mail address",
    type: "email",
    placeholder: "example@example.com",
  },
};

export const Invalid: Story = {
  args: {
    id: "email-invalid",
    label: "E-mail address",
    type: "email",
    placeholder: "example@example.com",
    invalidFeedback: "The e-mail is required.",
  },
};

export const Valid: Story = {
  args: {
    id: "email-valid",
    label: "E-mail address",
    type: "email",
    value: "example@example.com",
    validFeedback: "Looks good.",
  },
};

export const WithHelp: Story = {
  args: {
    id: "username-help",
    label: "Username",
    helperText: "A username to signup.",
    value: "example#122",
  },
};
