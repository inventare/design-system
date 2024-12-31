import { HTMLAttributes } from 'react';
import clsx from 'clsx';

export interface SidebarLabelProps extends HTMLAttributes<HTMLSpanElement> {}

export const SidebarLabel = ({ className, ...spanProps }: SidebarLabelProps) => (
  <span className={clsx(className, 'sidebar-label')} {...spanProps} />
);
