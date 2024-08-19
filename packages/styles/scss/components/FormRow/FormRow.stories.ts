import { FormRowProps, createFormRow } from './FormRow';
import * as FormControlStories from '../FormControl/FormControl.stories';

export default {
  title: 'Forms/FormRow',
  render: ({ ...args }: FormRowProps) => {
    return createFormRow({ ...args });
  },
  argTypes: {
    submitRow: { control: 'boolean', },
    submitRowStretch: { control: 'boolean', },
    submitRowAlign: {
      control: { type: 'select' },
      options: ['left', 'center', 'right'],
    },
  },
};

export const LoginExample = {
  args: {
    rows: [
      FormControlStories.Email.args,
      FormControlStories.Password.args,
    ],
    submitRow: true,
    submitRowAlign: 'center',
  }
};
