import { InputProps, createInput } from './Input';

export default {
  title: 'Inventare/Input',
  tags: ['autodocs'],
  render: ({ ...args }: InputProps) => {
    return createInput({ ...args });
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
    label: 'Input',
    id: 'input-def',
    disabled: false,
  }
};

export const WithHelperText = {
  args: {
    label: 'Input',
    id: 'input-with-helper',
    disabled: false,
    helperText: 'This is a example of object.',
  }
};

export const Invalid = {
  args: {
    label: 'Input',
    id: 'input-invalid',
    disabled: false,
    helperText: 'This is a example of object.',
    variant: 'invalid',
  }
};

export const Valid = {
  args: {
    label: 'Input',
    id: 'input-valid',
    disabled: false,
    helperText: 'This is a example of object.',
    variant: 'valid',
  }
};
