import { ComponentManager } from '../../base/ComponentManager';
import { ClickTriggerComponentManager } from '../../base/ClickTriggerComponent';
import { Modal } from './Modal';

export const DISMISS_SELECTOR = '[data-dismiss="modal"]';

export const TOGGLE_SELECTOR = '[data-toggle="modal"]';

export class ModalManager extends ComponentManager<HTMLElement, Modal> {
  protected createInstance(element: HTMLElement): Modal {
    return new Modal(element);
  }

  protected getElement(target?: HTMLElement | null): HTMLElement | null {
    if (!target) {
      return null;
    }
    let toggleClosest = target.closest<HTMLElement>(TOGGLE_SELECTOR);
    let isDismiss = false;
    if (!toggleClosest) {
      toggleClosest = target.closest<HTMLElement>(DISMISS_SELECTOR);
      isDismiss = true;
    }
    if (!toggleClosest) {
      return null;
    }
    if (isDismiss) {
      return toggleClosest.closest<HTMLElement>('.modal');
    }

    const modalQuery = toggleClosest.getAttribute('data-target');
    if (!modalQuery) {
      return null;
    }
    return document.querySelector<HTMLElement>(modalQuery); 
  }
}

ClickTriggerComponentManager.register(new ModalManager());
