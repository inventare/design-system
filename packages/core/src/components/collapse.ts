import { capFirst } from '../capFirst';

const DIMENSION_VERTICAL = 'VERTICAL'

const DIMENSION_HORIZONTAL = 'HORIZONTAL'

type DIMENSION_TYPE = 'VERTICAL' | 'HORIZONTAL';

const DIMENSIONS: Record<DIMENSION_TYPE, 'width' | 'height'> = {
  'VERTICAL': 'height',
  'HORIZONTAL': 'width',
}

export interface CollapseContentSize {
  property: 'width' | 'height';
  value: string;
}

export const getCollapseContentSize = (
  content: HTMLElement,
  isHorizontal: boolean,
  isOpen: boolean,
): CollapseContentSize => {
  const dimension: DIMENSION_TYPE = isHorizontal ? DIMENSION_HORIZONTAL : DIMENSION_VERTICAL;
  const property = `scroll${capFirst(DIMENSIONS[dimension])}`;
  if (!isOpen) {
    return {
      value: '',
      property: DIMENSIONS[dimension],
    };
  }
  return {
    value: `${(content as any)[property]}px`,
    property: DIMENSIONS[dimension],
  };
}
