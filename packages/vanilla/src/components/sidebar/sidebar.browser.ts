import { executeAfterTransition } from '../../utils/transitions';
import {
  getCollapseObjects,
  TRIGGER_SELECTOR as COLLAPSE_TRIGGER_SELECTOR,
  CLASS_NAME_COLLAPSING,
  CLASS_NAME_SHOW,
  CLASS_NAME_COLLAPSE,
} from '../collapse/collapse.helpers';

const TRIGGER_SELECTOR = '[data-toggle="sidebar"]';

function isExpanded(sidebar: HTMLElement) {
  return !sidebar.classList.contains('collapsed');
}

function expandSidebar(sidebar: HTMLElement) {
  sidebar.classList.remove('collapsed', 'collapsed-complete');
}

function collapseSidebar(sidebar: HTMLElement) {
  const collapseTriggers = [...sidebar.querySelectorAll<HTMLElement>(COLLAPSE_TRIGGER_SELECTOR)];
  collapseTriggers.forEach((item) => {
    const { toggle, content } = getCollapseObjects(item);

    toggle?.setAttribute('aria-expanded', 'false');
    content?.classList.remove(CLASS_NAME_COLLAPSING);
    content?.classList.add(CLASS_NAME_COLLAPSE);
    content?.classList.remove(CLASS_NAME_SHOW);
  });

  const complete = () => {
    sidebar.classList.add('collapsed-complete');
  };

  sidebar.classList.remove('collapsed-complete');
  sidebar.classList.add('collapsed');
  executeAfterTransition(complete, sidebar);
}

function toggleSidebar(sidebar: HTMLElement) {
  if (isExpanded(sidebar)) {
    return collapseSidebar(sidebar);
  }
  expandSidebar(sidebar);
}

function clickOnSidebarCollapse(target: HTMLElement) {
  const sidebar = target.closest<HTMLElement>('.sidebar');
  if (!sidebar) {
    return;
  }
  const { toggle, content } = getCollapseObjects(target);
  if (!toggle || !content) {
    return;
  }
  if (isExpanded(sidebar)) {
    return;
  }
  expandSidebar(sidebar);
};

function clickOnSidebarToggle(target: HTMLElement) {
  const trigger = target.closest<HTMLElement>(TRIGGER_SELECTOR);
  if (!trigger) {
    return;
  }
  const targetQuery = trigger.getAttribute('data-target');
  if (!targetQuery) {
    return;
  }
  const sidebar = document.querySelector<HTMLElement>(targetQuery);
  if (!sidebar) {
    return;
  }
  toggleSidebar(sidebar);
};

function handleSidebarDocumentBodyClick(ev: MouseEvent) {
  const target = ev.target as HTMLElement;

  clickOnSidebarCollapse(target);
  clickOnSidebarToggle(target);
}

document.addEventListener('DOMContentLoaded', () => {
  document.body.removeEventListener('click', handleSidebarDocumentBodyClick);
  document.body.addEventListener('click', handleSidebarDocumentBodyClick);
});
