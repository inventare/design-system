import { createElement } from 'react';
import clsx from 'clsx';
import { forwardRef, HTMLProps } from '../../core';
import { ButtonColor, ButtonSize } from '../button';

export type SidebarButtonColor = ButtonColor;

export type SidebarButtonSize = ButtonSize;

export type SidebarButtonType = 'default' | 'expandable' | 'child';

export type SidebarButtonItemIndicatorAlign = 'start' | 'middle' | 'end';

export interface SidebarButtonProps extends HTMLProps<"button"> {
  color?: SidebarButtonColor;
  outline?: boolean;
  size?: SidebarButtonSize;
  isActive?: boolean;
  buttonType?: SidebarButtonType;
  itemIndicatorAlign?: SidebarButtonItemIndicatorAlign;
}

export const SidebarButton = forwardRef<SidebarButtonProps, "button">((props, ref) => {
  const {
    as,
    isActive = false,
    buttonType = 'default',
    itemIndicatorAlign = 'start',
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
        'btn-sidebar': true,
        'active': isActive,
        'dropdown': buttonType === 'expandable',
        'child': buttonType === 'child',
        [itemIndicatorAlign]: buttonType === 'child',
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
