import { createSpinner } from "./spinner";

export default {
  title: "Components/Spinner",
  argTypes: {
    color: {
      control: "color",
      description: "the color of the spinner component.",
    },
    size: {
      control: {
        type: "number",
        min: 16,
        step: 1,
      },
      description: "the size of the spinner component.",
    },
    width: {
      control: {
        type: "number",
        min: 1,
        step: 1,
      },
      description: "the border width of the spinner circle.",
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
