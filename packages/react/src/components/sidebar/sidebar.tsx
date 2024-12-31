import { HTMLAttributes } from 'react';

export interface SidebarProps extends HTMLAttributes<HTMLDivElement> {};

export const Sidebar = ({ className, ...divProps }: SidebarProps) => {

  return (
    <div className={`${className} sidebar`} {...divProps} />
  )
};

export interface SidebarInnerProps extends HTMLAttributes<HTMLDivElement> {};

export const SidebarInner = ({ className, ...divProps }: SidebarProps) => {

  return (
    <div className={`${className} sidebar-inner`} {...divProps} />
  )
};
