import { createSpinner } from "./spinner";

export default {
  title: "Components/Spinner",
  argTypes: {
    color: { control: "color" },
    size: {
      control: {
        type: "number",
        min: 16,
        step: 1,
      },
    },
    width: {
      control: {
        type: "number",
        min: 1,
        step: 1,
      },
    },
  },
};

const Template = ({ ...args }) => createSpinner({ ...args });

export const Default = Template.bind();
Default.args = {
  color: "#000000",
  size: 32,
  width: 4,
};
