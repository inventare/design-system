import type { Meta, StoryObj } from '@storybook/html';
import { renderModal, ModalProps } from './Modal.renderer';

const meta: Meta<ModalProps> = {
  title: 'Overlays/Modal',
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

export const Small: Story = {
  args: {
    id: 'modal-small',
    center: false,
    title: 'Add your company',
    subtitle: 'Create your company profile in less than 5 minutes.',
    size: 'sm',
    buttonText: 'Open Small',
  }
};

export const Medium: Story = {
  args: {
    id: 'modal-medium',
    center: false,
    title: 'Add your company',
    subtitle: 'Create your company profile in less than 5 minutes.',
    size: 'md',
    buttonText: 'Open Medium',
  }
};

export const Large: Story = {
  args: {
    id: 'modal-large',
    center: false,
    title: 'Add your company',
    subtitle: 'Create your company profile in less than 5 minutes.',
    size: 'lg',
    buttonText: 'Open Large',
  }
};

export const ExtraLarge: Story = {
  args: {
    id: 'modal-extra-large',
    center: false,
    title: 'Add your company',
    subtitle: 'Create your company profile in less than 5 minutes.',
    size: 'xl',
    buttonText: 'Open Extra Large',
  }
};

export const Centered: Story = {
  args: {
    id: 'modal-centered',
    center: true,
    title: 'Add your company',
    subtitle: 'Create your company profile in less than 5 minutes.',
    buttonText: 'Open Centered Modal',
  }
}
