import { executeAfterTransition, reflow } from '../../utils/transitions';
import { Backdrop } from '../Backdrop';
import { ClickTriggerComponent } from '../../base/ClickTriggerComponent';

export const CLASS_NAME_MODAL_SHOW = 'show';

export class Modal implements ClickTriggerComponent {
  private element!: HTMLElement;
  private backdrop!: Backdrop;
  public isTransitioning = false;

  public constructor(modalElement: HTMLElement) {
    if (!modalElement.id) {
      throw new Error('modal element has not id.');
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

    this.element.classList.add(CLASS_NAME_MODAL_SHOW);
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
    this.element.classList.remove(CLASS_NAME_MODAL_SHOW);
  }

  get isVisible() {
    return window.getComputedStyle(this.element).display === 'block';
  }

  toggle() {
    if (this.isVisible) {
      return this.hide();
    }
    return this.show();
  }

  executeByClick(ev: Event) {
    this.toggle();
  }
}
