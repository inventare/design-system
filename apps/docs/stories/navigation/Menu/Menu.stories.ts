import type { Meta, StoryObj } from '@storybook/html';
import { MenuProps, renderMenu } from './Menu.renderer';

const meta: Meta<MenuProps> = {
  title: 'Navigation/Menu',
  render: (props) => renderMenu(props),
  argTypes: {
  }
};

export default meta;

type Story = StoryObj<MenuProps>;

export const Default: Story = {
  args: {
    items: [
      { label: 'Home' },
      { label: 'Contacts' },
    ]
  }
};
