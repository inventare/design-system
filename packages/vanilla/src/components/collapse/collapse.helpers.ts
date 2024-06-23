export interface CollapseObjects {
  toggle: HTMLElement | null;
  content: HTMLElement | null;
}

export const TRIGGER_SELECTOR = '[data-toggle="collapse"]';

export const CLASS_NAME_SHOW = 'show';
export const CLASS_NAME_COLLAPSE = 'collapse';
export const CLASS_NAME_COLLAPSING = 'collapsing';
export const CLASS_NAME_COLLAPSED = 'collapsed';
export const CLASS_NAME_HORIZONTAL = 'horizontal';

export function getCollapseObjects(target?: HTMLElement | null): CollapseObjects {
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
