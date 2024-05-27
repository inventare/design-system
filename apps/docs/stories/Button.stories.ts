import { fn } from '@storybook/test';
import { createButton } from './Button';

export default {
  title: 'Inventare/Button',
  render: ({ label, ...args }) => {
    return createButton({ label, ...args });
  },
  argTypes: {
    label: { control: 'text' },
    onClick: { action: 'onClick' },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'danger'],
    },
    sizing: {
      control: { type: 'select' },
      options: ['default', 'small', 'large'],
    },
    square: { control: 'boolean', },
    disabled: { control: 'boolean', }
  },
  args: { onClick: fn() },
};

export const Primary = {
  args: {
    variant: 'primary',
    label: 'Primary',
  },
};

export const PrimaryLarge = {
  args: {
    variant: 'primary',
    label: 'Button',
    sizing: 'large',
  },
};

export const PrimarySmall = {
  args: {
    variant: 'primary',
    label: 'Button',
    sizing: 'small',
  },
};

export const PrimaryDisabled = {
  args: {
    variant: 'primary',
    label: 'Button',
    disabled: true,
  },
};

export const Danger = {
  args: {
    variant: 'danger',
    label: 'Danger',
  },
};

export const DangerLarge = {
  args: {
    variant: 'danger',
    label: 'Button',
    sizing: 'large',
  },
};

export const DangerSmall = {
  args: {
    variant: 'danger',
    label: 'Button',
    sizing: 'small',
  },
};

export const DangerDisabled = {
  args: {
    variant: 'danger',
    label: 'Button',
    disabled: true,
  },
};

export const DangerSquare = {
  args: {
    variant: 'danger',
    label: 'Button',
    sizing: 'small',
    square: true,
  },
};
