import { executeAfterTransition } from '../../utils/transitions';
import {
  getCollapseObjects,
  CLASS_NAME_SHOW,
  CLASS_NAME_COLLAPSE,
  CLASS_NAME_COLLAPSING,
  CLASS_NAME_COLLAPSED,
  CLASS_NAME_HORIZONTAL,
} from './collapse.helpers';

const DIMENSION_VERTICAL = 'VERTICAL'
const DIMENSION_HORIZONTAL = 'HORIZONTAL'
type DIMENSION_TYPE = 'VERTICAL' | 'HORIZONTAL';
const DIMENSIONS: Record<DIMENSION_TYPE, 'width' | 'height'> = {
  'VERTICAL': 'height',
  'HORIZONTAL': 'width',
}

function capFirst(text: string) {
  return text[0].toUpperCase() + text.substring(1).toLowerCase();
}

function getContentSize(content: HTMLElement, isOpen: boolean): {
  value: string;
  property: 'width' | 'height',
} {
  const dimension: DIMENSION_TYPE = content.classList.contains(CLASS_NAME_HORIZONTAL)
    ? DIMENSION_HORIZONTAL
    : DIMENSION_VERTICAL;
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

function clickOnCollapse(target?: HTMLElement | null) {
  const { toggle, content } = getCollapseObjects(target);
  if (!toggle || !content) {
    return;
  }
  if (content.classList.contains(CLASS_NAME_COLLAPSING)) {
    return;
  }

  const isOpenAttr = toggle.getAttribute('aria-expanded');
  let isOpen = true;
  if (isOpenAttr) {
    isOpen = Boolean(JSON.parse(isOpenAttr));
  }

  const { value, property } = getContentSize(content, isOpen);

  content.style[property] = value;
  content.offsetHeight; // reset animation

  content.classList.add(CLASS_NAME_COLLAPSING);
  content.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW)
  content.classList.toggle(CLASS_NAME_COLLAPSED, isOpen);
  toggle.setAttribute('aria-expanded', JSON.stringify(!isOpen));

  const complete = () => {
    content.classList.remove(CLASS_NAME_COLLAPSING);
    content.classList.add(CLASS_NAME_COLLAPSE);
    if (!isOpen) {
      content.classList.add(CLASS_NAME_SHOW);
    }
  };
  executeAfterTransition(complete, content);

  const { value: destValue } = getContentSize(content, !isOpen);

  content.style[property] = destValue;
}

function handleDocumentBodyClick(ev: MouseEvent) {
  clickOnCollapse(ev.target as HTMLElement);
}

document.addEventListener('DOMContentLoaded', () => {
  document.body.removeEventListener('click', handleDocumentBodyClick);
  document.body.addEventListener('click', handleDocumentBodyClick);
});
