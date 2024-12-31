import { createElement } from 'react';
import clsx from 'clsx';
import { forwardRef, HTMLProps } from '../../core';

export type FormRowProps = HTMLProps<'div'>;

export const FormRow = forwardRef<FormRowProps, 'div'>(({ as, className, ...props }, ref) => {
  return createElement(as || 'div', {
    ...props,
    className: clsx(className, 'form-row'),
    ref,
  });
});
