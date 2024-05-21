import { createSkeleton } from './Skeleton';

export default {
  title: 'Inventare/Skeleton',
  tags: ['autodocs'],
  render: ({ ...args }) => {
    return createSkeleton({ ...args });
  },
  argTypes: {
    circle: { control: 'boolean', },
  },
};

export const Default = { args: {} };

export const CircleSkeleton = {
  args: {
    circle: true,
  },
};
