export interface SkeletonProps {
  borderRadius: 'none' | 'rounded' | 'medium' | 'large' | 'xlarge' | 'pill' | 'circle';
  width: number;
  height: number;
}

export const createSkeleton = ({
  borderRadius = 'none',
  width,
  height,
}: SkeletonProps) => {
  const div = document.createElement('div');
  div.style.width = width ? `${width}px` : '200px';
  div.style.height = height ? `${height}px` : '200px';
  div.className = 'skeleton';

  if (borderRadius !== 'none') {
    if (borderRadius === 'rounded') {
      div.classList.add('rounded');
    } else {
      div.classList.add(`rounded-${borderRadius}`);
    }
  }

  return div;
};
