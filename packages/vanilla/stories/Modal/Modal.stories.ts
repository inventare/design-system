import { createModal, ModalProps } from './Modal';

export default {
  title: 'Vanilla JavaScript/Modal',
  render: ({ ...args }: ModalProps) => {
    return createModal({ ...args });
  },
  argTypes: {
    id: { control: 'text', },
  },
};

export const Default = {
  args: {
    id: 'example-modal',
  }
};