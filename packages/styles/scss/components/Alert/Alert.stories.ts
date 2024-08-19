import { createAlert, AlertProps } from './Alert';

export default {
  title: 'Feedback/Alert',
  render: ({ ...args }: AlertProps) => {
    return createAlert({ ...args });
  },
  argTypes: {
    text: { control: 'text' },
  },
};

export const Base = {
  args: {
    text: 'this is a base alert text'
  },
};

export const Danger = {
  args: {
    text: 'this is a base alert text',
    variant: 'danger',
  },
};

export const Success = {
  args: {
    text: 'This is a text indicating success!',
    variant: 'success',
  },
};

export const Error = {
  args: {
    text: 'This is a text indicating error!',
    variant: 'error',
  },
};

export const Warning = {
  args: {
    text: 'This is a text indicating warning!',
    variant: 'warning',
  },
};
