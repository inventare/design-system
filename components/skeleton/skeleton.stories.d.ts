import type { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from "./skeleton";
declare const meta: Meta<typeof Skeleton>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const WrappingChild: Story;
