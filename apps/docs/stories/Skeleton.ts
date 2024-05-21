export interface SkeletonProps {
  circle?: boolean;
}

export const createSkeleton = ({
  circle = false,
}: SkeletonProps) => {
  const skeleton = document.createElement('div');
  skeleton.style.width = '200px'

  if (circle) {
    skeleton.style.height = '200px'
    skeleton.style.borderRadius = '50%'
  } else {
    skeleton.style.height = '60px'
  }

  skeleton.className = 'skeleton';

  return skeleton;
}
