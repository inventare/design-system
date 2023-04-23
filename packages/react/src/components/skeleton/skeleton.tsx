import { createElement } from "react";
import clsx from "clsx";
import { forwardRef } from "../../core";
import { SkeletonProps } from "./skeleton.types";

export const Skeleton = forwardRef<SkeletonProps, "div">((props, ref) => {
  const {
    as,
    startColor,
    endColor,
    className: rawClassName,
    style: rawStyle,
    children,
    width = "100%",
    height,
    radius,
    isLoading = true,
    ...rest
  } = props;

  const className = clsx({
    skeleton: isLoading,
    [rawClassName || ""]: true,
  });

  const style: any = {
    ...(rawStyle || {}),
    width,
    height,
  };
  if (startColor) {
    style["--inventare-skeleton-start-color"] = startColor;
  }
  if (endColor) {
    style["--inventare-skeleton-end-color"] = endColor;
  }
  if (radius) {
    style["--inventare-skeleton-radius"] = `${radius}px`;
  }

  if (!isLoading) {
    return <>{children}</>;
  }

  return createElement(as || "div", {
    ...rest,
    ref,
    children,
    className,
    style,
  });
});
