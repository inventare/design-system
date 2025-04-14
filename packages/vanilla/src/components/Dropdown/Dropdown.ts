import { executeAfterTransition, reflow } from '../../utils/transitions';
import { ClickTriggerComponent } from '../../base/ClickTriggerComponent';

export const CLASS_NAME_DROPDOWN_SHOW = 'show';

export class Dropdown implements ClickTriggerComponent {
  private element!: HTMLElement;
  private triggerElement!: HTMLElement;

  public isTransitioning = false;

  get isVisible() {
    return window.getComputedStyle(this.element).display === 'block';
  }

  public constructor(dropdownElement: HTMLElement) {
    const element = dropdownElement.querySelector<HTMLElement>('.dropdown-menu');
    const triggerElement = dropdownElement.querySelector<HTMLElement>('.dropdown-toggle');
    if (!element || !triggerElement) {
      throw new Error('.dropdown-menu and .dropdown-toggle should be encapsuled by .dropdown')
    }
    this.element = element;
    this.triggerElement = triggerElement;
    this.element.addEventListener('click', this.handleDropdownClick);
  }

  private handleAutoFocus() {
    const autoFocusElement = this.element.querySelector<HTMLElement>('[autofocus]');
    if (!autoFocusElement) {
      return;
    }
    autoFocusElement.focus();
  }

  private handleDropdownClick(event: Event) {
    if (this.isTransitioning) {
      return;
    }
    /*
    const isContent = !!(event.target as HTMLElement).closest('.dropdown-menu')
    if (isContent) {
      return;
    }
    */
  }

  show() {
    if (this.isTransitioning) {
      return;
    }

    const toggleBox = this.triggerElement.getBoundingClientRect();

    this.element.style.display = 'block'
    this.element.removeAttribute('aria-hidden')
    //this.element.setAttribute('aria-modal', String(true))
    //this.element.setAttribute('role', 'dialog')

    reflow(this.element);

    const complete = () => {
      this.isTransitioning = false;
    };
    executeAfterTransition(complete, this.element);

    this.element.classList.add(CLASS_NAME_DROPDOWN_SHOW);
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
      //this.element.removeAttribute('aria-modal');
      //this.element.removeAttribute('role');
      this.isTransitioning = false;
    };
    executeAfterTransition(complete, this.element);

    this.isTransitioning = true;
    this.element.classList.remove(CLASS_NAME_DROPDOWN_SHOW);
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
