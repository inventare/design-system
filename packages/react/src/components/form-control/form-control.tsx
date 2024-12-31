import { createElement } from 'react';
import clsx from 'clsx';
import { forwardRef, HTMLProps } from '../../core';

export type FormControlProps = HTMLProps<'div'>;

export const FormControl = forwardRef(({ as, className, ...props }: FormControlProps, ref) => {
  return createElement(as || 'div', {
    ...props,
    className: clsx({
      [className || '']: true,
      'form-control': true,
    }),
    ref,
  });
});
