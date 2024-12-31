import { PropsWithChildren } from 'react';
import { SidebarButton, SidebarButtonProps } from '../sidebar-button';
import { Collapse, CollapseTrigger, CollapseContent } from '../collapse';

export type SidebarButtonGroupProps = PropsWithChildren<{
  triggerButtonProps?: Partial<SidebarButtonProps>;
  initialOpen?: boolean;
  isDisabled?: boolean;
}>;

export const SidebarButtonGroup = ({
  children,
  initialOpen = false,
  isDisabled = false,
}: SidebarButtonGroupProps) => (
  <Collapse isOpen={initialOpen} isDisabled={isDisabled}>
    {children}
  </Collapse>
);

export type SidebarButtonGroupTriggerProps = Omit<SidebarButtonProps, 'buttonType'>;

export const SidebarButtonGroupTrigger = (props: SidebarButtonGroupTriggerProps) => (
  <CollapseTrigger as={SidebarButton} buttonType="expandable" {...props} />
);

export type SidebarButtonGroupItemsProps = PropsWithChildren<{}>;

export const SidebarButtonGroupItems = ({ children }: SidebarButtonGroupItemsProps) => (
  <CollapseContent>
    <div className='sidebar-childs'>
      {children}
    </div>
  </CollapseContent>
);
