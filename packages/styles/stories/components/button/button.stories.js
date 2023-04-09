import { createButton } from "./button";

export default {
  title: "Components/Button",
  argTypes: {
    label: {
      control: "text",
      description: "the button display text",
    },
    onClick: {
      action: "onClick",
      description: "event raised when clicks on the button",
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
    square: {
      control: "boolean",
      description: "indicate if button border round is square",
    },
  },
};

const Template = ({ ...args }) => createButton({ ...args });

export const Default = Template.bind();
Default.args = {
  label: "Button",
  variant: "default",
  disabled: false,
};

export const Primary = Template.bind();
Primary.args = {
  label: "Button",
  variant: "primary",
  disabled: false,
};

export const PrimarySquare = Template.bind();
PrimarySquare.args = {
  label: "Button",
  variant: "primary",
  disabled: false,
  square: true,
};

export const PrimaryDisabled = Template.bind();
PrimaryDisabled.args = {
  label: "Button",
  variant: "primary",
  disabled: true,
};

export const Danger = Template.bind();
Danger.args = {
  label: "Button",
  variant: "danger",
  disabled: false,
};

export const DangerDisabled = Template.bind();
DangerDisabled.args = {
  label: "Button",
  variant: "danger",
  disabled: true,
};

export const DangerSquare = Template.bind();
DangerSquare.args = {
  label: "Button",
  variant: "danger",
  square: true,
};
