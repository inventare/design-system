import { createElement } from 'react';
import clsx from 'clsx';
import { forwardRef, HTMLProps } from '../../core';

export type ContainerBreakpoint = 'all' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'fluid';

export interface ContainerProps extends HTMLProps<"div"> {
  breakpoint?: ContainerBreakpoint;
}

export const Container = forwardRef<ContainerProps, "div">((props, ref) => {
  const {
    as,
    breakpoint = 'all',
    className,
    ...buttonProps
  } = props;

  return createElement(
    as || 'div', {
      className: clsx({
        container: breakpoint === 'all',
        [`container-${breakpoint}`]: breakpoint !== 'all',
        [className || '']: true,
      }),
      ref,
      ...buttonProps,
    }
  );
});
