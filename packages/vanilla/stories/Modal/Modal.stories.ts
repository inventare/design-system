import { createModal, ModalProps } from './Modal';

export default {
  title: 'Vanilla JavaScript/Modal',
  render: ({ ...args }: ModalProps) => {
    return createModal({ ...args });
  },
  argTypes: {
    id: { control: 'text', },
    center: { control: 'boolean', },
  },
};

export const Default = {
  args: {
    id: 'example-modal',
    center: true,
  }
};