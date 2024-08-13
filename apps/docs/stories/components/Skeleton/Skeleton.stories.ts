import { createSkeleton, SkeletonProps } from './Skeleton';

export default {
  title: 'Components/Skeleton',
  render: ({ ...args }: SkeletonProps) => {
    return createSkeleton({ ...args });
  },
  argTypes: {
    borderRadius: {
      control: { type: 'select' },
      options: ['none', 'rounded', 'medium', 'large', 'xlarge', 'pill', 'circle'],
    },
    width: { type: 'range', min: 10, max: 1000, step: 1, },
    height: { type: 'range', min: 10, max: 1000, step: 1, },
  },
};

export const Default = {
  args: {
    width: 200,
    height: 200,
  },
};
