import type { Meta, StoryObj } from "@storybook/react";
import { SkeletonCircle } from "./skeleton-circle";
declare const meta: Meta<typeof SkeletonCircle>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const WrappingChild: Story;
