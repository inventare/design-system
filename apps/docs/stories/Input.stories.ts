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
    disabled: { control: 'boolean', }
  },
};

export const Default = {
  args: {
    label: 'Input',
    id: 'input-def',
    disabled: false,
  }
};
