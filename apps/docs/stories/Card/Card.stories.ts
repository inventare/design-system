import { renderCard, CardProps } from './Card';

export default {
  title: 'Surfaces/Card',
  render: ({ ...args }: CardProps) => {
    return renderCard({ ...args });
  },
  argTypes: {
    title: { control: 'title' },
    text: { control: 'text' },
    footerRight: { control: 'boolean' },
    iconed: { control: 'boolean' },
  },
};

export const Base = {
  args: {
    title: 'CRM',
    text: 'Manage your customers all in one place.'
  },
};

export const RightFooter = {
  args: {
    title: 'Customer Support',
    text: 'Add people to your team and control what they can access.',
    footerRight: true,
  },
}

export const Iconed = {
  args: {
    title: 'Customer Support',
    text: 'Add people to your team and control what they can access.',
    iconed: true,
  },
}
