import type { Meta, StoryObj } from '@storybook/html';
import { RadioProps, renderRadio } from './Radio.renderer';

const meta: Meta<RadioProps> = {
  title: 'Forms/Radio',
  render: (props) => renderRadio(props),
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'danger', 'success', 'warning']
    },
    checked: { control: 'boolean' },
  }
};

export default meta;

type Story = StoryObj<RadioProps>;

export const Default: Story = {
  args: {
    id: 'radio-default',
    label: 'Default Radio'
  }
};

export const Checked: Story = {
  args: {
    id: 'radio-checked',
    label: 'Checked Radio',
    checked: true,
  }
};

export const Disabled: Story = {
  args: {
    id: 'radio-disabled',
    label: 'Disabled Radio',
    disabled: true,
  }
};

export const DisabledChecked: Story = {
  args: {
    id: 'radio-disabled-checked',
    label: 'Disabled Radio',
    disabled: true,
    checked: true,
  }
};

export const Primary: Story = {
  args: {
    id: 'radio-primary',
    label: 'Primary colors',
    checked: true,
    variant: 'primary'
  }
};

export const Secondary: Story = {
  args: {
    id: 'radio-secondary',
    label: 'Secondary colors',
    checked: true,
    variant: 'secondary'
  }
};

export const Danger: Story = {
  args: {
    id: 'radio-danger',
    label: 'Danger colors',
    checked: true,
    variant: 'danger'
  }
};

export const Warning: Story = {
  args: {
    id: 'radio-warning',
    label: 'Warning colors',
    checked: true,
    variant: 'warning'
  }
};

export const Success: Story = {
  args: {
    id: 'radio-success',
    label: 'Success colors',
    checked: true,
    variant: 'success'
  }
};
