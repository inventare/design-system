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
    buttonText: 'Open Dropdown',
  }
};

export const Left: Story = {
  args: {
    buttonText: 'Left',
    align: 'left',
    hideContent: true,
  }
};

export const Center: Story = {
  args: {
    buttonText: 'Center',
    align: 'center',
    hideContent: true,
    containerAlign: 'center',
  }
};

export const Right: Story = {
  args: {
    buttonText: 'Right',
    align: 'right',
    hideContent: true,
    containerAlign: 'flex-end',
  }
};
