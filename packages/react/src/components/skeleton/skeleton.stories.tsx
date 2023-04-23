import type { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from "./skeleton";

const meta: Meta<typeof Skeleton> = {
  title: "Components/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
  argTypes: {
    isLoading: {
      control: "boolean",
      description: "indicate if the skeleton is visible",
    },
    startColor: {
      control: { type: "color" },
      description: "the starting color of the skeleton animation",
    },
    endColor: {
      control: { type: "color" },
      description: "the end color of the skeleton animation",
    },
    radius: {
      control: { type: "range", min: 1, max: 50, step: 1 },
      description: "the border-radius of the skeleton",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    width: 50,
    height: 50,
  },
};

export const WrappingChild: Story = {
  args: {
    width: "100%",
  },
  render: ({ ...props }) => (
    <Skeleton {...props}>
      <div style={{ padding: 20 }}>
        <div>This is the text.</div>
        <div>This is the another line.</div>
        <div>This is the another line.</div>
        <div
          style={{
            height: 120,
            width: 120,
            margin: "0 auto",
            backgroundColor: "red",
          }}
        />
      </div>
    </Skeleton>
  ),
};
