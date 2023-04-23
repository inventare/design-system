import { HTMLProps } from "../../core";

export interface SkeletonProps extends HTMLProps<"div"> {
  startColor?: string;
  endColor?: string;
  width?: number | string;
  height?: number | string;
  radius?: number;
  isLoading?: boolean;
}
