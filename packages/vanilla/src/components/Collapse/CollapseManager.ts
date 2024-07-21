import { ComponentManager, ClickTriggerComponentManager } from '../../base';
import { CollapseElement } from './CollapseElement';
import { Collapse } from './Collapse';

const TRIGGER_SELECTOR = '[data-toggle="collapse"]';

export class CollapseManager extends ComponentManager<CollapseElement, Collapse> {
  protected getElement(target?: HTMLElement | null): CollapseElement | null {
    if (!target) {
      return null;
    }
    const toggleClosest = target.closest<HTMLElement>(TRIGGER_SELECTOR);
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

  protected createInstance(element: CollapseElement): Collapse {
    return new Collapse(element);
  }
}

ClickTriggerComponentManager.register(new CollapseManager());
