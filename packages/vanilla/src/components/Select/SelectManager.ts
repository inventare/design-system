import { ComponentManager } from '../../base/ComponentManager';
import { InitializeTriggerComponentManager } from '../../base/InitializerTriggerComponent';
import { Select } from './Select';
import { SelectElement } from './SelectElement';

export class SelectManager extends ComponentManager<SelectElement, Select> {
  protected createInstance(element: SelectElement): Select {
    return new Select(element);
  }

  protected getElement(target?: HTMLElement | null): SelectElement | null {
    if (!target) {
      return null;
    }
    const element = target.closest<HTMLElement>('.select-container');
    if (!element) {
      return null;
    }
    const selectCombobox = element.querySelector<HTMLElement>('.select')
    if (!selectCombobox) {
      return null;
    }
    const selectDropDown = element.querySelector<HTMLElement>('.select-dropdown');
    if (!selectDropDown) {
      return null;
    }
    const selectDropDownInner = selectDropDown.querySelector<HTMLElement>('.select-dropdown-inner');
    if (!selectDropDownInner) {
      return null;
    }
    return { id: element.id, element, selectCombobox, selectDropDown, selectDropDownInner };
  }

  initializeInstanceList(element?: HTMLElement) {
    if (!element) {
      this.initializeInstanceList(document.body);
      return;
    }

    const selects = [...element.querySelectorAll<HTMLElement>('.select-container')];
    for (const select of selects) {
      this.getInstance(select);
    }
  }
}

InitializeTriggerComponentManager.register(new SelectManager());
