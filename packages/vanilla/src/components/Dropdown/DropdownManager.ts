import { ComponentManager } from '../../base/ComponentManager';
import { ClickTriggerComponentManager } from '../../base/ClickTriggerComponent';
import { Dropdown } from './Dropdown';

export const DROPDOWN_DISMISS_SELECTOR = '[data-dismiss="dropdown"]';

export const DROPDOWN_TOGGLE_SELECTOR = '[data-toggle="dropdown"]';

export class DropdownManager extends ComponentManager<HTMLElement, Dropdown> {
  protected createInstance(element: HTMLElement): Dropdown {
    return new Dropdown(element);
  }

  protected getElement(target?: HTMLElement | null): HTMLElement | null {
    if (!target) {
      return null;
    }
    let toggleClosest = target.closest<HTMLElement>(DROPDOWN_TOGGLE_SELECTOR);
    let isDismiss = false;
    if (!toggleClosest) {
      toggleClosest = target.closest<HTMLElement>(DROPDOWN_DISMISS_SELECTOR);
      isDismiss = true;
    }
    if (!toggleClosest) {
      return null;
    }
    return toggleClosest.closest<HTMLElement>('.dropdown');
  }
}

ClickTriggerComponentManager.register(new DropdownManager());
