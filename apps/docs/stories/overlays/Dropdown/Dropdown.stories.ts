import type { Meta, StoryObj } from '@storybook/html';
import { renderDropdown, DropdownProps } from './Dropdown.renderer';

const meta: Meta<DropdownProps> = {
  title: 'Overlays/Dropdown',
  render: (props) => renderDropdown(props, { addEvents: true }),
  argTypes: {
  },
};

export default meta;

type Story = StoryObj<DropdownProps>;

export const Default: Story = {
  args: {
    buttonText: 'Open Menu',
  }
};