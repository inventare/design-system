import clsx from "clsx";
import { forwardRef, createElement } from "react";
import { ButtonProps } from "./button.types";

export const Button = forwardRef<any, ButtonProps>((props, ref) => {
  const {
    as,
    children,
    className: rawClassName,
    variant = "default",
    size = "normal",
    square = false,
    ...rest
  } = props;

  const className = clsx({
    btn: true,
    [size]: true,
    [variant]: true,
    square: square,
    [rawClassName || ""]: true,
  });

  return createElement(as || "button", { ...rest, ref, children, className });
});
