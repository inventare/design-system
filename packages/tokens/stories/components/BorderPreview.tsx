import React, { ReactNode, CSSProperties } from 'react';

export type Size = "75x75" | "150x75";

export interface BorderPreviewProps {
  radius: number;
  size?: Size;
}

const Placeholders: Record<Size, (styles: CSSProperties) => ReactNode> = {
  "75x75": (styles) => (
    <svg
      style={{ textAnchor: 'middle', fontSize: '1.125rem', ...styles }}
      width="75"
      height="75"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      focusable="false"
      preserveAspectRatio="xMidYMid slice"
    >
      <rect width="100% " height="100% " fill="#868e96"></rect>
      <text x="50%" y="50%" fill="#dee2e6" dy=".3em">75x75</text>
    </svg>
  ),
  "150x75": (styles) => (
    <svg
      style={{ textAnchor: 'middle', fontSize: '1.125rem', ...styles }}
      width="150"
      height="75"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      focusable="false"
      preserveAspectRatio="xMidYMid slice"
    >
      <rect width="100% " height="100% " fill="#868e96"></rect>
      <text x="50%" y="50%" fill="#dee2e6" dy=".3em">150x75</text>
    </svg>
  )
}

export const BorderPreview = ({ radius, size = "75x75" }: BorderPreviewProps) => {

  return <>{Placeholders[size]({ borderRadius: `var(${radius})` })}</>;
};
