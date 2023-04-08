import { createButton } from "./button";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/html/writing-stories/introduction
export default {
  title: "Component/Button",
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    onClick: { action: "onClick" },
    disabled: { control: "boolean" },
    variant: {
      control: { type: "select" },
      options: ["default", "primary", "danger"],
    },
  },
};

const Template = ({ ...args }) => createButton({ ...args });

export const Base = Template.bind();
Base.args = {
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
