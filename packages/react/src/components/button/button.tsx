import { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

export type ButtonColor = 'primary' | 'danger';

export type ButtonSize = 'small' | 'normal' | 'large';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: ButtonColor;
  outline?: boolean;
  size?: ButtonSize;
}

export const Button = ({
  color = 'primary',
  outline = false,
  size = 'normal',
  className,
  ...buttonProps
}: ButtonProps) => (
  <button
    className={clsx({
      [className || '']: true,
      btn: true,
      [color]: true,
      [size]: true,
      outline: outline,
    })}
    {...buttonProps}
  />
);
