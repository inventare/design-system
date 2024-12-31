import { createElement } from 'react';
import { forwardRef, HTMLProps } from '../../core';

export type FormLabelProps = HTMLProps<'label'>;

export const FormLabel = forwardRef(({ as, ...props }: FormLabelProps, ref) => {
  return createElement(as || 'label', {
    ...props,
    ref,
  });
});
