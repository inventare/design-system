import { renderAlert, AlertProps } from './Alert.renderer';

export default {
  title: 'Feedback/Alert',
  render: (props: AlertProps) => {
    return renderAlert(props);
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
