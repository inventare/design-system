import { executeAfterTransition, reflow } from '../../utils/transitions';
import { Backdrop } from '../Backdrop';
import { ComponentManager } from '../../base/ComponentManager';
import { ClickTriggerComponent, ClickTriggerComponentManager } from '../../base/ClickTriggerComponent';

export const TOGGLE_SELECTOR = '[data-toggle="modal"]';
export const DISMISS_SELECTOR = '[data-dismiss="modal"]';

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

export class Modal implements ClickTriggerComponent {
  private element!: HTMLElement;
  private backdrop!: Backdrop;
  private isTransitioning = false;

  public constructor(modalElement: HTMLElement) {
    if (!modalElement.id) {
      return;
    }
    this.handleBackdropClick = this.handleBackdropClick.bind(this);
    this.element = modalElement;
    this.element.addEventListener('click', this.handleBackdropClick);
    this.backdrop = new Backdrop();
  }

  private handleBackdropClick(event: Event) {
    if (this.isTransitioning) {
      return;
    }
    const isContent = !!(event.target as HTMLElement).closest('.modal-content')
    if (isContent) {
      return;
    }

    const complete = () => {
      this.isTransitioning = false;
      setTimeout(() => this.element.classList.remove('modal-static'), 400);
    }

    this.isTransitioning = true;
    executeAfterTransition(complete, this.element);
    this.element.classList.add('modal-static');
  }

  private handleAutoFocus() {
    const autoFocusElement = this.element.querySelector<HTMLElement>('[autofocus]');
    if (!autoFocusElement) {
      return;
    }
    autoFocusElement.focus();
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
    this.handleAutoFocus();
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

  executeByClick(ev: Event) {
    this.toggle();
  }
}

ClickTriggerComponentManager.register(new ModalManager());
