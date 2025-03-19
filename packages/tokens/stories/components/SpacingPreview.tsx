import React from 'react';

export interface SpacingPreviewProps {
  spacing: string;
  vertical?: boolean;
  horizontal?: boolean;
}

export const SpacingPreview = ({ spacing, vertical, horizontal }: SpacingPreviewProps) => {

  if (vertical || horizontal) {
    return (
      <div
        style={{
          width: vertical ? 16 : `var(${spacing})`,
          height: vertical ? `var(${spacing})` : 16,
          background: 'var(--color-primary-opacity-25)',
        }}
      />
    );
  }

  return (
    <div>
      <div
        style={{
          width: `calc(75px + 2 * var(${spacing}))`,
          height: `calc(75px + 2 * var(${spacing}))`,
          background: 'var(--color-primary-opacity-25)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg
          style={{ textAnchor: 'middle', fontSize: '1.125rem' }}
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
      </div>
    </div>
  );
};
