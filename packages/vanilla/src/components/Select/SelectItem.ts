import { Select } from './Select';

export class SelectItem {
  select: Select;
  element: HTMLElement;
  previous: SelectItem | null;
  next: SelectItem | null;

  get isFocused() {
    return this.element === document.activeElement;
  }

  get isActive() {
    return this.element.classList.contains('active');
  }

  get value() {
    return this.element.getAttribute('data-value') || '';
  }

  constructor(select: Select, element: HTMLElement, previous: SelectItem | null) {
    this.select = select;
    this.element = element;
    this.previous = previous;
    if (this.previous) {
      this.previous.next = this;
    }

    this.next = null;
  }

  blur() {
    if (!this.isFocused) {
      return;
    }

    this.element.blur();
  }

  focus() {
    if (this.isFocused) {
      return;
    }

    this.element.focus();
    this.element.scrollIntoView({ behavior: 'instant' });
  }

  focusNext() {
    this.next?.focus()
  }

  focusPrevious() {
    this.previous?.focus();
  }
}
