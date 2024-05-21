import React from 'react';

export const BorderPreview = ({ radius }) => {

  return (
    <div
      style={{
        width: 64,
        height: 32,
        backgroundColor: 'var(--color-primary-600)',
        borderRadius: `var(${radius})`
      }}
    />
  )
};
