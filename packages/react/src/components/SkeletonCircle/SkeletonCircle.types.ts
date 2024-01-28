import { HTMLProps } from "../../core";

export interface SkeletonCircleProps extends HTMLProps<"div"> {
  startColor?: string;
  endColor?: string;
  size?: number;
  isLoading?: boolean;
}
