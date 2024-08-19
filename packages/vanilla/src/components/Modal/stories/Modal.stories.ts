import type { Meta, StoryObj } from '@storybook/html';
import { renderModal, ModalProps } from './Modal.renderer';

const meta: Meta<ModalProps> = {
  title: 'Feedback/Modal',
  render: (props: ModalProps) => renderModal(props, { addEvents: true }),
  argTypes: {
    id: { control: 'text', },
    center: { control: 'boolean', },
    title: { control: 'text', },
    subtitle: { control: 'text', },
  },
};

export default meta;

type Story = StoryObj<ModalProps>;

export const Default: Story = {
  args: {
    id: 'example-modal',
    center: false,
    title: 'Add your company',
    subtitle: 'Create your company profile in less than 5 minutes.',
  }
};

export const CenteredModal: Story = {
  args: {
    id: 'centered-modal',
    center: true,
    title: 'Add your company',
    subtitle: 'Create your company profile in less than 5 minutes.',
  }
}
