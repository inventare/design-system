import type { Meta, StoryObj } from '@storybook/html';
import { renderSidebarLabel, SidebarLabelProps } from './SidebarLabel.renderer';

const meta: Meta<SidebarLabelProps> = {
  title: 'Navigation/SidebarLabel',
  render: renderSidebarLabel,
  argTypes: {
    label: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<SidebarLabelProps>;

export const Default: Story = {
  args: {
    label: `Navigation`,
  },
};
