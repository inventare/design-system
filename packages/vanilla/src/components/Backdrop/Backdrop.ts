import { reflow, executeAfterTransition } from '../../utils/transitions';

export class Backdrop {
  private element: HTMLDivElement;
  private isTransitioning = false;

  CLASS_NAME_SHOW = 'show';

  constructor() {
    this.element = this.createElement();
  }

  private createElement(): HTMLDivElement {
    const el = document.createElement('div');
    el.className = 'modal-backdrop fade';
    el.style.display = 'none';

    return el;
  }

  show() {
    if (this.isTransitioning) {
      return;
    }

    if (!this.element.parentElement) {
      document.body.appendChild(this.element);
    }
    this.element.style.display = 'block';

    reflow(this.element);

    executeAfterTransition(() => {
      this.isTransitioning = false;
    }, this.element);

    this.element.classList.add(this.CLASS_NAME_SHOW);
    this.isTransitioning = true;
  }

  hide() {
    if (this.isTransitioning) {
      return;
    }

    executeAfterTransition(() => {
      this.isTransitioning = false;
      this.element.style.display = 'none';

      this.element.parentElement?.removeChild(this.element);
    }, this.element);

    this.element.classList.remove(this.CLASS_NAME_SHOW);
    this.isTransitioning = true;
  }
}
