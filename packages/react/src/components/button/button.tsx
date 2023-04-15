import clsx from "clsx";
import { createElement } from "react";
import { ButtonProps } from "./button.types";
import { forwardRef } from "../../core";

export const Button = forwardRef<ButtonProps, "button">((props, ref) => {
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

const el = () => (
  <Button as="a" href="#">
    Q?
  </Button>
);
