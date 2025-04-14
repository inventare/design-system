import type { Meta, StoryObj } from '@storybook/html';
import { SwitchProps, renderSwitch } from './Switch.renderer';

const meta: Meta<SwitchProps> = {
  title: 'Forms/Switch',
  render: (props) => renderSwitch(props),
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'danger', 'success', 'warning']
    },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  }
};

export default meta;

type Story = StoryObj<SwitchProps>;

export const Default: Story = {
  args: {
    id: 'switch-default',
    label: 'Default Switch'
  }
};

export const Checked: Story = {
  args: {
    id: 'switch-checked',
    label: 'Checked Switch',
    checked: true,
  }
};

export const Disabled: Story = {
  args: {
    id: 'switch-disabled',
    label: 'Disabled Switch',
    disabled: true,
  }
};

export const DisabledChecked: Story = {
  args: {
    id: 'switch-disabled-checked',
    label: 'Disabled Switch',
    disabled: true,
    checked: true,
  }
};

export const Primary: Story = {
  args: {
    id: 'switch-primary',
    label: 'Primary colors',
    checked: true,
    variant: 'primary'
  }
};

export const Secondary: Story = {
  args: {
    id: 'switch-secondary',
    label: 'Secondary colors',
    checked: true,
    variant: 'secondary'
  }
};

export const Danger: Story = {
  args: {
    id: 'switch-danger',
    label: 'Danger colors',
    checked: true,
    variant: 'danger'
  }
};

export const Warning: Story = {
  args: {
    id: 'switch-warning',
    label: 'Warning colors',
    checked: true,
    variant: 'warning'
  }
};

export const Success: Story = {
  args: {
    id: 'switch-success',
    label: 'Success colors',
    checked: true,
    variant: 'success'
  }
};
