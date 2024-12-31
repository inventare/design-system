import clsx from 'clsx';
import { Button, ButtonProps } from '../button';

export type SidebarButtonType = 'default' | 'expandable' | 'child';

export type SidebarButtonItemIndicatorAlign = 'start' | 'middle' | 'end';

export interface SidebarButtonProps extends ButtonProps {
  isActive?: boolean;
  buttonType?: SidebarButtonType;
  itemIndicatorAlign?: SidebarButtonItemIndicatorAlign;
}

export const SidebarButton = ({
  isActive = false,
  buttonType = 'default',
  itemIndicatorAlign = 'start',
  className,
  ...buttonProps
}: SidebarButtonProps) => (
  <Button
    className={clsx(
      {
        [className || '']: true,
        'btn-sidebar': true,
        'active': isActive,
        'dropdown': buttonType === 'expandable',
        'child': buttonType === 'child',
        [itemIndicatorAlign]: buttonType === 'child',
      }
    )}
    {...buttonProps}
  />
);
