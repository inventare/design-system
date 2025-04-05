import type { Meta, StoryObj } from '@storybook/html';
import { SelectProps, renderSelect } from './Select.renderer';

const meta: Meta<SelectProps> = {
  title: 'Forms/Select',
  render: (props) => renderSelect(props, { addEvents: true }),
  argTypes: {
    items: { type: 'number', min: 10, max: 1000, step: 1, },
  }
};

type Story = StoryObj<SelectProps>;

export const Default: Story = {
  args: {
    items: 42
  }
};

export default meta;
