import type { Meta, StoryObj } from '@storybook/html';
import { FormControlProps, renderFormControl } from './FormControl';

const meta: Meta<FormControlProps> = {
  title: 'Forms/FormControl',
  render: ({ ...args }: FormControlProps) => {
    return renderFormControl({ ...args });
  },
  argTypes: {
    id: { control: 'text', },
    label: { control: 'text' },
    disabled: { control: 'boolean', },
    helperText: { control: 'text', },
    variant: {
      control: { type: 'select' },
      options: ['default', 'valid', 'invalid'],
    },
  },
};

export default meta;

type Story = StoryObj<FormControlProps>;

export const Default: Story = {
  args: {
    label: 'What is your name?',
    id: 'input-def',
    disabled: false,
    value: 'John doe'
  }
};

export const Valid: Story = {
  args: {
    label: 'What is your value?',
    id: 'input-valid',
    disabled: false,
    helperText: 'This is a example of valid input value.',
    value: 'valid example',
    variant: 'valid',
  }
};

export const Invalid: Story = {
  args: {
    label: 'What is your value?',
    id: 'input-invalid',
    disabled: false,
    value: 'invalid example',
    helperText: 'This is a example of invalid input value.',
    variant: 'invalid',
  }
};

export const WithHelperText: Story = {
  args: {
    label: 'What is your email?',
    id: 'input-with-helper',
    disabled: false,
    type: 'email',
    helperText: 'E-mail for support contact.',
    value: 'example@example.com.br'
  }
};

export const WithHelperTextAdornments: Story = {
  args: {
    label: 'With is the price?',
    id: 'input-with-helper',
    disabled: false,
    type: "number",
    helperText: 'Monthly price.',
    placeholder: '290',
    value: '500',
    leftAdornment: 'R$',
    rightAdornment: '/month',
  }
};

export const LeftAdornments: Story = {
  args: {
    label: 'What is the price?',
    id: 'input-with-helper',
    disabled: false,
    type: 'number',
    placeholder: '290',
    value: '500',
    leftAdornment: 'R$',
  }
};

export const RightAdornments: Story = {
  args: {
    label: 'What is the price?',
    id: 'input-with-helper',
    disabled: false,
    type: 'number',
    placeholder: '290',
    value: '500',
    rightAdornment: '/year',
  }
};

export const Text: Story = {
  args: {
    label: 'What is your name?',
    id: 'input-text-name',
    disabled: false,
    value: 'John doe',
    type: 'text',
  }
};

export const Password: Story = {
  args: {
    label: 'Enter your password?',
    id: 'input-password',
    disabled: false,
    value: 'password',
    type: 'password',
  }
};

export const Email: Story = {
  args: {
    label: 'What is your email?',
    id: 'input-email-email',
    disabled: false,
    value: 'example@example.com.br',
    type: 'email'
  }
};

export const Date: Story = {
  args: {
    label: 'Select the birth date',
    id: 'input-date',
    disabled: false,
    type: 'date'
  }
};

export const DateTimeLocal: Story = {
  args: {
    label: 'Select the date and time to schedule',
    id: 'input-datetime',
    disabled: false,
    type: 'datetime-local'
  }
};

export const Color: Story = {
  args: {
    label: 'Select the detail color',
    id: 'input-color',
    disabled: false,
    type: 'color'
  }
};

export const File: Story = {
  args: {
    label: 'Select the attachment',
    id: 'input-file',
    disabled: false,
    type: 'file'
  }
};

export const Month: Story = {
  args: {
    label: 'Select the month',
    id: 'input-month',
    disabled: false,
    type: 'month'
  }
};

export const Week: Story = {
  args: {
    label: 'Select the week',
    id: 'input-week',
    disabled: false,
    type: 'week'
  }
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Your e-mail',
    id: 'input-disabled-email',
    type: 'email',
    value: 'example@example.com',
    helperText: 'Your can\'t change your e-mail.'
  }
};

export const DisabledValid: Story = {
  args: {
    variant: 'valid',
    disabled: true,
    label: 'Your e-mail',
    id: 'input-disabled-valid',
    type: 'email',
    value: 'example@example.com',
    helperText: 'Your can\'t change your e-mail.'
  }
};

export const DisabledInvalid: Story = {
  args: {
    variant: 'invalid',
    disabled: true,
    label: 'Your e-mail',
    id: 'input-disabled-invalid',
    type: 'email',
    value: 'example@example.com',
    helperText: 'Your can\'t change your e-mail.'
  }
};

export const Placeholder: Story = {
  args: {
    disabled: false,
    label: 'What is your name?',
    id: 'input-placeholder',
    placeholder: 'e.g: John Doe',
  }
};

export const PlaceholderValid: Story = {
  args: {
    disabled: false,
    label: 'What is your name?',
    id: 'input-placeholder-valid',
    variant: 'valid',
    placeholder: 'e.g: John Doe',
  }
};

export const PlaceholderInvalid: Story = {
  args: {
    disabled: false,
    label: 'What is your name?',
    id: 'input-placeholder-invalid',
    variant: 'invalid',
    placeholder: 'e.g: John Doe',
  }
};
