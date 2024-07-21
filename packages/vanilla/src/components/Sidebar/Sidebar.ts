import { ClickTriggerComponent } from '../../base';
import { executeAfterTransition } from '../../utils/transitions';
import { COLLAPSE_TRIGGER_SELECTOR, CollapseManager } from '../Collapse';
import { SidebarElement } from './SidebarElement';

export const SIDEBAR_TRIGGER_SELECTOR = '[data-toggle="sidebar"]';

export class Sidebar implements ClickTriggerComponent {
  element: SidebarElement;
  manager: CollapseManager;

  get isExpanded() {
    return !this.element.content.classList.contains('collapsed');
  }

  constructor(element: SidebarElement) {
    this.element = element;
    this.manager = new CollapseManager();
  }
  
  collapse() {
    const collapseTriggers = [
      ...this.element.content.querySelectorAll<HTMLElement>(COLLAPSE_TRIGGER_SELECTOR)
    ];
    collapseTriggers.forEach((item) => {
      this.manager.getInstance(item)?.hide()
    });

    const complete = () => {
      this.element.content.classList.add('collapsed-complete');
    };

    this.element.content.classList.remove('collapsed-complete');
    this.element.content.classList.add('collapsed');
    executeAfterTransition(complete, this.element.content);
  }

  expand() {
    this.element.content.classList.remove('collapsed', 'collapsed-complete');
  }

  toggle() {
    if (this.isExpanded) {
      return this.collapse();
    }
    this.expand();
  }

  executeByClick(ev: Event) {
    console.log(ev);
    this.toggle();
  }
}

export class SidebarCollapse implements ClickTriggerComponent {
  sidebar: Sidebar;
  
  constructor(sidebarElement: HTMLElement) {
    this.sidebar = new Sidebar({
      id: sidebarElement.id,
      toggle: sidebarElement,
      content: sidebarElement,
    })
  }

  executeByClick(ev: Event): void {
    if (this.sidebar.isExpanded) {
      return;
    }
    this.sidebar.expand();
  }
}
