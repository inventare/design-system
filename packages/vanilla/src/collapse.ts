import { executeAfterTransition } from './utils/transitions';

interface CollapseObjects {
  toggle: HTMLElement | null;
  content: HTMLElement | null;
}

const CLASS_NAME_SHOW = 'show';
const CLASS_NAME_COLLAPSE = 'collapse';
const CLASS_NAME_COLLAPSING = 'collapsing';
const CLASS_NAME_COLLAPSED = 'collapsed';
const CLASS_NAME_HORIZONTAL = 'horizontal';

const TRIGGER_SELECTOR = '[data-toggle="collapse"]';

const DIMENSION_VERTICAL = 'VERTICAL'
const DIMENSION_HORIZONTAL = 'HORIZONTAL'
type DIMENSION_TYPE = 'VERTICAL' | 'HORIZONTAL';
const DIMENSIONS: Record<DIMENSION_TYPE, 'width' | 'height'> = {
  'VERTICAL': 'height',
  'HORIZONTAL': 'width',
}

function getCollapseObjects(target?: HTMLElement | null): CollapseObjects {
  if (!target) {
    return { toggle: null, content: null };
  }
  const toggleClosest = target.closest<HTMLElement>(TRIGGER_SELECTOR);
  if (!toggleClosest) {
    return { toggle: null, content: null };
  }
  const contentQuery = toggleClosest.getAttribute('data-target');
  if (!contentQuery) {
    return { toggle: toggleClosest, content: null };
  }
  const contentEl = document.querySelector<HTMLElement>(contentQuery);
  if (!contentEl) {
    return { toggle: toggleClosest, content: null };
  }
  return {
    toggle: toggleClosest,
    content: contentEl,
  };
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
