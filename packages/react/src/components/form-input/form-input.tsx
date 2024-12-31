import { createElement } from 'react';
import { forwardRef, HTMLProps } from '../../core';

export type FormInputProps = HTMLProps<'input'>;

export const FormInput = forwardRef(({ as, ...props }: FormInputProps, ref) => {
  return createElement(as || 'input', {
    ...props,
    ref,
  });
});
