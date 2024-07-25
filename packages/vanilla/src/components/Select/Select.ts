import { SelectItem } from './SelectItem';

export class Select {
  items: Array<SelectItem>;
  activeItem: SelectItem | null = null;
  
  element: HTMLElement;
  selectCombobox: HTMLElement;
  selectDropDown: HTMLElement;

  get isExpanded() {
    return this.element.classList.contains('expanded');
  }

  private getItems() {
    const buttons = [...this.element.querySelectorAll<HTMLElement>('button.select-item')];
    const items: Array<SelectItem> = [];
    for (const button of buttons) {
      items.push(new SelectItem(button, items.length > 0 ? items[items.length - 1] : null));
    }
    return items;
  }

  constructor(element: HTMLElement) {
    this.element = element;

    this.comboBoxClick = this.comboBoxClick.bind(this);
    this.documentClick = this.documentClick.bind(this);
    this.dropDownKeyUp = this.dropDownKeyUp.bind(this);

    const selectCombobox = this.element.querySelector<HTMLElement>('.select')
    if (!selectCombobox) {
      throw new Error('invalid');
    }
    this.selectCombobox = selectCombobox;
    this.selectCombobox.addEventListener('click', this.comboBoxClick);

    const selectDropDown = this.element.querySelector<HTMLElement>('.select-dropdown');
    if (!selectDropDown) {
      throw new Error('invalid');
    }
    this.selectDropDown = selectDropDown;
    this.selectDropDown.addEventListener('keyup', this.dropDownKeyUp);

    this.items = this.getItems();
  };

  comboBoxClick() {
    if (this.isExpanded) {
      return this.hide();
    }
    this.show();
  }

  onArrowDown() {
    if (!this.activeItem && this.items.length) {
      this.activeItem = this.items[0];
      return this.activeItem.focus();
    }
    if (this.activeItem && this.activeItem.next) {
      const next = this.activeItem.next;
      this.activeItem.blur();
      this.activeItem.focusNext();
      this.activeItem = next;
    }
  }

  onArrowUp() {
    if (this.activeItem && this.activeItem.previous) {
      const previous = this.activeItem.previous;
      this.activeItem.blur();
      this.activeItem.focusPrevious();
      this.activeItem = previous;
    } else if (this.activeItem) {
      this.activeItem.blur();
      this.activeItem = null;
      this.selectDropDown.querySelector<HTMLInputElement>('input[type=text]')?.focus();
    }
  }

  dropDownKeyUp(e: KeyboardEvent) {
    if (e.key === 'ArrowDown') {
      this.onArrowDown();
    }
    if (e.key === 'ArrowUp') {
      this.onArrowUp();
    }
  }

  documentClick(evt: Event) {
    const target = evt.target as HTMLElement;
    if (target.closest('.select-container') === this.element) {
      return;
    }
    this.hide();
  }

  show() {
    this.element.classList.add('expanded');
    document.body.addEventListener('click', this.documentClick);

    this.selectDropDown.querySelector<HTMLInputElement>('input[type=text]')?.focus();
    this.selectDropDown.querySelector('.select-dropdown-inner')?.scrollTo({ top: 0 });
  }

  hide() {
    this.element.classList.remove('expanded');
    document.body.removeEventListener('click', this.documentClick);
  }
}
