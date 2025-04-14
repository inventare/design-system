import { renderSkeleton, SkeletonProps } from './Skeleton';

export default {
  title: 'Feedback/Skeleton',
  render: (props: SkeletonProps) => {
    return renderSkeleton(props);
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

export const NoRounded = {
  args: {
    width: 200,
    height: 200,
  },
};

export const Rounded = {
  args: {
    width: 200,
    height: 200,
    borderRadius: 'rounded',
  },
};

export const RoundedMedium = {
  args: {
    width: 200,
    height: 200,
    borderRadius: 'medium',
  },
};

export const RoundedLarge = {
  args: {
    width: 200,
    height: 200,
    borderRadius: 'large',
  },
};

export const RoundedXLarge = {
  args: {
    width: 200,
    height: 200,
    borderRadius: 'xlarge',
  },
};

export const RoundedPill = {
  args: {
    width: 300,
    height: 100,
    borderRadius: 'pill',
  },
};

export const RoundedCircle = {
  args: {
    width: 200,
    height: 200,
    borderRadius: 'circle',
  },
};
