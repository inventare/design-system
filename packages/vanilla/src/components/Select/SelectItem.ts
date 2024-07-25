export class SelectItem {
  element: HTMLElement;
  previous: SelectItem | null;
  next: SelectItem | null;

  get isActive() {
    return this.element.classList.contains('active');
  }

  constructor(element: HTMLElement, previous: SelectItem | null) {
    this.element = element;
    this.previous = previous;
    if (this.previous) {
      this.previous.next = this;
    }

    this.next = null;
  }

  blur() {
    if (!this.isActive) {
      return;
    }

    this.element.blur();
    this.element.classList.remove('active');
  }

  focus() {
    if (this.isActive) {
      return;
    }

    this.element.focus();
    this.element.classList.add('active');
  }

  focusNext() {
    this.next?.focus()
  }

  focusPrevious() {
    this.previous?.focus();
  }
}
