import { PropsWithChildren } from "react";

interface SvgProps extends PropsWithChildren {
  size?: string | number;
  viewBox?: string;
}

export const Svg = (props: SvgProps) => {
  const { size = 14, viewBox = "0 0 14 14", children } = props;

  return (
    <svg
      role="img"
      focusable="false"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      width={size}
      height={size}
    >
      {children}
    </svg>
  );
};

interface PathProps {
  color?: string;
  d: string;
}

export const Path = (props: PathProps) => {
  const { d, color = "currentColor" } = props;

  return <path d={d} fill={color} />;
};
