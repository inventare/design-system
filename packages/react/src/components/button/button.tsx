import { createElement } from 'react';
import clsx from 'clsx';
import { forwardRef, HTMLProps } from '../../core';

export type ButtonColor = 'primary' | 'danger';

export type ButtonSize = 'small' | 'normal' | 'large';

export interface ButtonProps extends HTMLProps<"button"> {
  color?: ButtonColor;
  outline?: boolean;
  size?: ButtonSize;
}

export const Button = forwardRef<ButtonProps, "button">((props, ref) => {
  const {
    as,
    color = 'primary',
    outline = false,
    size = 'normal',
    className,
    ...buttonProps
  } = props;

  return createElement(
    as || 'button', {
      className: clsx({
        [className || '']: true,
        btn: true,
        [color]: true,
        [size]: true,
        outline: outline,
      }),
      ref,
      ...buttonProps,
    }
  );
});
