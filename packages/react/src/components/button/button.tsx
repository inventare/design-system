import { forwardRef, createElement } from "react";
import { ButtonProps } from "./button.types";

export const Button = forwardRef<any, ButtonProps>((props, ref) => {
  const { as, children, className, ...rest } = props;

  return createElement(as || "button", { ...rest, ref, children });
});
