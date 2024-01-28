import clsx from "clsx";
import { createElement } from "react";
import { ButtonProps } from "./Button.types";
import { forwardRef } from "../../core";
import { Spinner } from "../spinner";

export const Button = forwardRef<ButtonProps, "button">((props, ref) => {
  const {
    as,
    children: rawChildren,
    className: rawClassName,
    disabled: rawDisabled,
    variant = "default",
    size = "normal",
    square = false,
    outline = false,
    isLoading = false,
    loadingType = "text",
    loadingText = "Loading...",
    loadingSpinnerSize = 24,
    loadingSpinnerWidth = 3,
    ...rest
  } = props;

  let disabled = rawDisabled;
  let children = rawChildren;
  if (isLoading) {
    disabled = true;

    if (loadingType === "text") {
      children = <>{loadingText}</>;
    }
    if (loadingType === "spinner") {
      children = (
        <Spinner size={loadingSpinnerSize} width={loadingSpinnerWidth} />
      );
    }
  }

  const className = clsx({
    btn: true,
    [size]: true,
    [variant]: true,
    square: square,
    disabled: disabled,
    outline: outline,
    [rawClassName || ""]: true,
  });

  return createElement(as || "button", {
    ...rest,
    ref,
    disabled,
    children,
    className,
  });
});
