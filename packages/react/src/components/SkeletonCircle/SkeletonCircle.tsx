import { forwardRef } from "../../core";
import { Skeleton } from "../Skeleton";
import { SkeletonCircleProps } from "./SkeletonCircle.types";

export const SkeletonCircle = forwardRef<SkeletonCircleProps, "div">(
  (props, ref) => {
    const { size, style: rawStyle, ...rest } = props;

    const width = size;
    const height = size;
    const style = {
      ...(rawStyle || {}),
      "--inventare-skeleton-radius": "50%",
    };

    return (
      <Skeleton
        ref={ref}
        width={width}
        height={height}
        style={style as any}
        {...rest}
      />
    );
  }
);
