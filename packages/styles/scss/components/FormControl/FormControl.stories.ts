import { FormControlProps, createFormControl } from './FormControl';

export default {
  title: 'Forms/FormControl',
  render: ({ ...args }: FormControlProps) => {
    return createFormControl({ ...args });
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

export const Default = {
  args: {
    label: 'What is your name?',
    id: 'input-def',
    disabled: false,
    value: 'John doe'
  }
};

export const Valid = {
  args: {
    label: 'What is your value?',
    id: 'input-valid',
    disabled: false,
    helperText: 'This is a example of valid input value.',
    value: 'valid example',
    variant: 'valid',
  }
};

export const Invalid = {
  args: {
    label: 'What is your value?',
    id: 'input-invalid',
    disabled: false,
    value: 'invalid example',
    helperText: 'This is a example of invalid input value.',
    variant: 'invalid',
  }
};

export const WithHelperText = {
  args: {
    label: 'What is your email?',
    id: 'input-with-helper',
    disabled: false,
    type: 'email',
    helperText: 'E-mail for support contact.',
    value: 'example@example.com.br'
  }
};

export const Text = {
  args: {
    label: 'What is your name?',
    id: 'input-text-name',
    disabled: false,
    value: 'John doe',
    type: 'text',
  }
};

export const Password = {
  args: {
    label: 'Enter your password?',
    id: 'input-password',
    disabled: false,
    value: 'password',
    type: 'password',
  }
};

export const Email = {
  args: {
    label: 'What is your email?',
    id: 'input-email-email',
    disabled: false,
    value: 'example@example.com.br',
    type: 'email'
  }
};

export const Date = {
  args: {
    label: 'Select the birth date',
    id: 'input-date',
    disabled: false,
    type: 'date'
  }
};

export const DateTimeLocal = {
  args: {
    label: 'Select the date and time to schedule',
    id: 'input-datetime',
    disabled: false,
    type: 'datetime-local'
  }
};

export const Color = {
  args: {
    label: 'Select the detail color',
    id: 'input-color',
    disabled: false,
    type: 'color'
  }
};

export const File = {
  args: {
    label: 'Select the attachment',
    id: 'input-file',
    disabled: false,
    type: 'file'
  }
};

export const Month = {
  args: {
    label: 'Select the month',
    id: 'input-month',
    disabled: false,
    type: 'month'
  }
};

export const Week = {
  args: {
    label: 'Select the week',
    id: 'input-week',
    disabled: false,
    type: 'week'
  }
};

export const Disabled = {
  args: {
    disabled: true,
    label: 'Your e-mail',
    id: 'input-disabled-email',
    type: 'email',
    value: 'example@example.com',
    helperText: 'Your can\'t change your e-mail.'
  }
};

export const DisabledValid = {
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

export const DisabledInvalid = {
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

export const Placeholder = {
  args: {
    disabled: false,
    label: 'What is your name?',
    id: 'input-placeholder',
    placeholder: 'e.g: John Doe',
  }
};

export const PlaceholderValid = {
  args: {
    disabled: false,
    label: 'What is your name?',
    id: 'input-placeholder-valid',
    variant: 'valid',
    placeholder: 'e.g: John Doe',
  }
};

export const PlaceholderInvalid = {
  args: {
    disabled: false,
    label: 'What is your name?',
    id: 'input-placeholder-invalid',
    variant: 'invalid',
    placeholder: 'e.g: John Doe',
  }
};
