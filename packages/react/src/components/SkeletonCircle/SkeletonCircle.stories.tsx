import type { Meta, StoryObj } from "@storybook/react";
import { SkeletonCircle } from "./SkeletonCircle";

(SkeletonCircle as any).displayName = "SkeletonCircle";

const meta: Meta<typeof SkeletonCircle> = {
  title: "Components/SkeletonCircle",
  component: SkeletonCircle,
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
    size: {
      control: { type: "range", min: 1, max: 300, step: 1 },
      description: "the size of the skeleton",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 200,
  },
};

export const WrappingChild: Story = {
  args: {},
  render: ({ ...props }) => (
    <SkeletonCircle {...props}>
      <div style={{ width: 120, height: 120, backgroundColor: "red" }} />
    </SkeletonCircle>
  ),
};
