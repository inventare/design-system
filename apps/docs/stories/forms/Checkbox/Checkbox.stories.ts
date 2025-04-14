import type { Meta, StoryObj } from '@storybook/html';
import { CheckboxProps, renderCheckbox } from './Checkbox.renderer';

const meta: Meta<CheckboxProps> = {
  title: 'Forms/Checkbox',
  render: (props) => renderCheckbox(props),
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'danger', 'success', 'warning']
    },
    checked: { control: 'boolean' },
  }
};

export default meta;

type Story = StoryObj<CheckboxProps>;

export const Default: Story = {
  args: {
    id: 'checkbox-default',
    label: 'Default checkbox'
  }
};

export const Checked: Story = {
  args: {
    id: 'checkbox-checked',
    label: 'Checked Checkbox',
    checked: true,
  }
};

export const Disabled: Story = {
  args: {
    id: 'checkbox-disabled',
    label: 'Disabled Checkbox',
    disabled: true,
  }
};

export const DisabledChecked: Story = {
  args: {
    id: 'checkbox-disabled-checked',
    label: 'Disabled Checkbox',
    disabled: true,
    checked: true,
  }
};

export const Primary: Story = {
  args: {
    id: 'checkbox-primary',
    label: 'Primary colors',
    checked: true,
    variant: 'primary'
  }
};

export const Secondary: Story = {
  args: {
    id: 'checkbox-secondary',
    label: 'Secondary colors',
    checked: true,
    variant: 'secondary'
  }
};

export const Danger: Story = {
  args: {
    id: 'checkbox-danger',
    label: 'Danger colors',
    checked: true,
    variant: 'danger'
  }
};

export const Warning: Story = {
  args: {
    id: 'checkbox-warning',
    label: 'Warning colors',
    checked: true,
    variant: 'warning'
  }
};

export const Success: Story = {
  args: {
    id: 'checkbox-success',
    label: 'Success colors',
    checked: true,
    variant: 'success'
  }
};
