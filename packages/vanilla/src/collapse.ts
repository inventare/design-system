import { executeAfterTransition } from './utils/transitions';

interface CollapseObjects {
  toggle: HTMLElement | null;
  content: HTMLElement | null;
}

const CLASS_NAME_SHOW = 'show';
const CLASS_NAME_COLLAPSE = 'collapse'
const CLASS_NAME_COLLAPSING = 'collapsing'
const CLASS_NAME_COLLAPSED = 'collapsed'

const TRIGGER_SELECTOR = '[data-toggle="collapse"]'

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

  let initialHeight: string = `${content.scrollHeight}px`;
  if (!isOpen) {
    initialHeight = '';
  }

  content.style.height = initialHeight;
  content.offsetHeight; // reset animation

  content.classList.add(CLASS_NAME_COLLAPSING);
  content.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW)
  toggle.setAttribute('aria-expanded', JSON.stringify(!isOpen));
  content.classList.toggle(CLASS_NAME_COLLAPSED, isOpen);

  const complete = () => {
    content.classList.remove(CLASS_NAME_COLLAPSING);
    content.classList.add(CLASS_NAME_COLLAPSE);
    if (!isOpen) {
      content.classList.add(CLASS_NAME_SHOW);
    }
  };
  executeAfterTransition(complete, content);

  let newHeight: string = '';
  if (!isOpen) {
    newHeight = `${content.scrollHeight}px`;
  }

  content.style.height = newHeight;
}

function handleDocumentBodyClick(ev: MouseEvent) {
  clickOnCollapse(ev.target as HTMLElement);
}

document.addEventListener('DOMContentLoaded', () => {
  document.body.removeEventListener('click', handleDocumentBodyClick);
  document.body.addEventListener('click', handleDocumentBodyClick);
});
