import { SelectElement } from './SelectElement';
import { SelectItem } from './SelectItem';
import { SELECT_EXPANDED_CLASS } from './Select.constants';

export class Select {
  activeItem: SelectItem | null = null;

  element: HTMLElement;
  selectCombobox: HTMLElement;
  selectDropDown: HTMLElement;
  selectDropDownInner: HTMLElement;

  get isExpanded() {
    return this.element.classList.contains(SELECT_EXPANDED_CLASS);
  }

  get items() {
    const buttons = [...this.element.querySelectorAll<HTMLElement>('button.select-item')];
    const items: Array<SelectItem> = [];
    for (const button of buttons) {
      items.push(new SelectItem(this, button, items.length > 0 ? items[items.length - 1] : null));
    }
    return items;
  }

  getItemByElement(element: HTMLElement) {
    return this.items.find((item) => item.element === element) || null;
  }

  constructor(selectElement: SelectElement) {
    const { element, selectCombobox, selectDropDown, selectDropDownInner } = selectElement;

    this.element = element;

    this.comboBoxKeyUp = this.comboBoxKeyUp.bind(this);
    this.comboBoxClick = this.comboBoxClick.bind(this);
    this.documentClick = this.documentClick.bind(this);
    this.dropDownKeyUp = this.dropDownKeyUp.bind(this);
    this.dropDownClick = this.dropDownClick.bind(this);

    this.selectCombobox = selectCombobox;
    this.selectCombobox.addEventListener('keyup', this.comboBoxKeyUp);
    this.selectCombobox.addEventListener('click', this.comboBoxClick);

    this.selectDropDown = selectDropDown;
    this.selectDropDownInner = selectDropDownInner;

    this.selectDropDown.addEventListener('keyup', this.dropDownKeyUp);
    this.selectDropDown.addEventListener('click', this.dropDownClick)

    this.activeItem = this.items.find((item) => item.isActive) || null;
  };

  comboBoxClick() {
    if (this.isExpanded) {
      return this.hide();
    }
    this.show();
  }

  comboBoxKeyUp(e: KeyboardEvent) {
    if (e.key === 'ArrowDown') {
      if (!this.isExpanded) {
        this.show();
      }

      this.onArrowDown();
    }
    if (e.key === 'ArrowUp') {
      if (!this.isExpanded) {
        this.show();
      }

      this.onArrowUp();
    }
    if (e.key === 'Escape' && this.isExpanded) {
      this.hide();
    }
  }

  onArrowDown() {
    const items = this.items;

    if (!this.activeItem && items.length) {
      this.activeItem = items[0];
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
    if (e.key === 'Escape') {
      this.hide();
    }
  }

  dropDownClick(e: MouseEvent) {
    const target = e.target as HTMLElement;

    const isInInput = !!target.closest('input');
    const isCloseButton = !!target.closest('.close-button');
    if (isInInput) {
      return;
    }

    const selectItemButton = target.closest<HTMLElement>('.select-item');
    if (!selectItemButton) {
      if (this.selectCombobox.dataset.prevent === '1' && !isCloseButton) {
        return;
      }
      return this.hide();
    }

    const selectItem = this.getItemByElement(selectItemButton);
    if (selectItem) {
      this.applyValue(selectItem);
    }

    if (this.selectCombobox.dataset.prevent === '1') {
      return;
    }
    this.hide();
  }

  documentClick(evt: Event) {
    const target = evt.target as HTMLElement;
    if (target.closest('.select-container') === this.element) {
      return;
    }
    this.hide();
  }

  show() {
    this.element.classList.add(SELECT_EXPANDED_CLASS);
    document.addEventListener('click', this.documentClick);

    this.selectDropDown.querySelector('.select-dropdown-inner')?.scrollTo({ top: 0 });

    setTimeout(() => {
      this.selectDropDown.querySelector<HTMLInputElement>('input[type=text]')?.focus();
    }, 100);

    //this.activeItem = this.items.find((item) => item.isActive) || null;
    //this.activeItem?.element.scrollIntoView({ behavior: 'instant' });

    const evt = new CustomEvent('opened', { bubbles: true, cancelable: true, composed: true });
    this.selectDropDown.dispatchEvent(evt);
  }

  hide() {
    this.element.classList.remove(SELECT_EXPANDED_CLASS);
    document.removeEventListener('click', this.documentClick);
  }

  applyValue(item: SelectItem) {
    this.activeItem = item;
    this.items.forEach((item) => item.element.classList.remove('active'));
    item.element.classList.add('active');

    const inputControl = this.element.querySelector<HTMLInputElement>('input.default-control');
    if (!inputControl) {
      return;
    }

    inputControl.value = item.value;

    const evt = new CustomEvent('selected', { bubbles: true, cancelable: true, composed: true });
    this.element.dispatchEvent(evt);

    const displayValue = this.element.querySelector<HTMLElement>('.select-value');
    if (!displayValue) {
      return;
    }
    if (item.element.getAttribute('data-display')) {
      displayValue.innerHTML = item.element.getAttribute('data-display') || '';
      return;
    }
    displayValue.innerHTML = item.element.innerHTML;
  }
}
