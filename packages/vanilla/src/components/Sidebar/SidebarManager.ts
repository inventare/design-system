import { ComponentManager, ClickTriggerComponentManager } from '../../base';
import { Sidebar, SidebarCollapse, SIDEBAR_TRIGGER_SELECTOR } from './Sidebar';
import { SidebarElement } from './SidebarElement';
import { COLLAPSE_TRIGGER_SELECTOR, CollapseElement } from '../Collapse';

export class SidebarManager extends ComponentManager<SidebarElement, Sidebar> {
  protected getElement(target?: HTMLElement | null): SidebarElement | null {
    if (!target) {
      return null;
    }
    const toggleClosest = target.closest<HTMLElement>(SIDEBAR_TRIGGER_SELECTOR);
    if (!toggleClosest) {
      return null;
    }
    const contentQuery = toggleClosest.getAttribute('data-target');
    if (!contentQuery) {
      return null;
    }
    const contentEl = document.querySelector<HTMLElement>(contentQuery);
    if (!contentEl) {
      return null;
    }
    return {
      id: contentEl.id,
      toggle: toggleClosest,
      content: contentEl,
    };
  }

  protected createInstance(element: SidebarElement): Sidebar {
    return new Sidebar(element);
  }
}

export class SidebarCollapseManager extends ComponentManager<CollapseElement, SidebarCollapse> {
  protected getElement(target?: HTMLElement | null): CollapseElement | null {
    if (!target) {
      return null;
    }
    const toggleClosest = target.closest<HTMLElement>(COLLAPSE_TRIGGER_SELECTOR);
    if (!toggleClosest) {
      return null;
    }
    const contentQuery = toggleClosest.getAttribute('data-target');
    if (!contentQuery) {
      return null;
    }
    const contentEl = document.querySelector<HTMLElement>(contentQuery);
    if (!contentEl) {
      return null;
    }
    if (!contentEl.closest('.sidebar')) {
      return null;
    }
    return {
      id: contentEl.id,
      toggle: toggleClosest,
      content: contentEl,
    };
  }

  protected createInstance(element: CollapseElement): SidebarCollapse {
    const sidebar = element.content.closest('.sidebar') as HTMLElement;
    return new SidebarCollapse(sidebar);
  }
}

ClickTriggerComponentManager.register(new SidebarManager());
ClickTriggerComponentManager.register(new SidebarCollapseManager());
