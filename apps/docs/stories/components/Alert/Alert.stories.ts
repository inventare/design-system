import { createAlert, AlertProps } from './Alert';

export default {
  title: 'Components/Alert',
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
