import type { StoryObj } from '@storybook/react';
import { Sidebar, SidebarInner } from '../sidebar';
import {
  SidebarButtonGroup,
  SidebarButtonGroupItems,
  SidebarButtonGroupTrigger,
} from './sidebar-button-group';
import { SidebarButton } from '../sidebar-button';

const meta = {
  title: 'Navigation/SidebarButtonGroup',
  render: () => (
    <div style={{ width: 300 }}>
      <Sidebar>
        <SidebarInner>
          <SidebarButtonGroup initialOpen>
            <SidebarButtonGroupTrigger>
              Sales
            </SidebarButtonGroupTrigger>
            <SidebarButtonGroupItems>
              <SidebarButton buttonType="child">Sales Summary</SidebarButton>
              <SidebarButton buttonType="child" itemIndicatorAlign="middle">Sales Trends</SidebarButton>
              <SidebarButton buttonType="child" itemIndicatorAlign="middle" isActive>Item Sales</SidebarButton>
              <SidebarButton buttonType="child" itemIndicatorAlign="end">Emploee Sales</SidebarButton>
            </SidebarButtonGroupItems>
          </SidebarButtonGroup>
        </SidebarInner>
      </Sidebar>
    </div>
  ),
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  },
};
