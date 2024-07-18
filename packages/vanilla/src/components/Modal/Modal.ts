import { executeAfterTransition, reflow } from '../../utils/transitions';
import { Backdrop } from '../Backdrop';

export const TOGGLE_SELECTOR = '[data-toggle="modal"]';
export const DISMISS_SELECTOR = '[data-dismiss="modal"]';

class Modal {
  private static instances: Record<string, Modal> = {};

  private static getModalElement(target?: HTMLElement): HTMLElement | null {
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

  public static getInstance(target?: HTMLElement): Modal | null {
    const modalElement = Modal.getModalElement(target);
    if (!modalElement) {
      return null;
    }
    if (Modal.instances[modalElement.id]) {
      return Modal.instances[modalElement.id];
    }
    return new Modal(modalElement);
  };

  private element!: HTMLElement;
  private backdrop!: Backdrop;
  private isTransitioning = false;

  private constructor(modalElement: HTMLElement) {
    if (!modalElement.id) {
      return;
    }
    if (Modal.instances[modalElement.id]) {
      throw new Error('already initialized.');
    }
    Modal.instances[modalElement.id] = this;

    this.element = modalElement;
    this.backdrop = new Backdrop();
  }

  show() {
    if (this.isTransitioning) {
      return;
    }

    this.element.style.display = 'block'
    this.element.removeAttribute('aria-hidden')
    this.element.setAttribute('aria-modal', String(true))
    this.element.setAttribute('role', 'dialog')
    this.element.scrollTop = 0

    reflow(this.element);

    const complete = () => {
      this.isTransitioning = false;
    };
    executeAfterTransition(complete, this.element);

    this.element.classList.add('show');
    this.backdrop.show();
    this.isTransitioning = true;
  }

  hide() {
    if (this.isTransitioning) {
      return;
    }

    const complete = () => {
      this.element.style.display = 'none';
      this.element.setAttribute('aria-hidden', String(true));
      this.element.removeAttribute('aria-modal');
      this.element.removeAttribute('role');
      this.isTransitioning = false;
    };
    executeAfterTransition(complete, this.element);

    this.backdrop.hide();
    this.isTransitioning = true;
    this.element.classList.remove('show');
  }

  toggle() {
    const isVisible = window.getComputedStyle(this.element).display === 'block';

    if (isVisible) {
      return this.hide();
    }
    return this.show();
  }
}

function clickOnModalTrigger(element: HTMLElement) {
  const modal = Modal.getInstance(element);
  if (!modal) {
    return;
  }
  modal.toggle();
}

function handleDocumentBodyClick(ev: MouseEvent) {
  clickOnModalTrigger(ev.target as HTMLElement);
};

document.addEventListener('DOMContentLoaded', () => {
  document.body.removeEventListener('click', handleDocumentBodyClick);
  document.body.addEventListener('click', handleDocumentBodyClick);
});
