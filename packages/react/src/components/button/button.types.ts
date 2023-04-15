import { HTMLProps } from "../../core";

export type ButtonVariant = "default" | "primary" | "danger";

export type ButtonSize = "normal" | "small" | "large";

export interface ButtonProps extends HTMLProps<"button"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  square?: boolean;
}
