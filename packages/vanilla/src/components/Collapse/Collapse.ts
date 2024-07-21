import { ClickTriggerComponent } from '../../base';
import { capFirst } from '../../utils/text';
import { executeAfterTransition } from '../../utils/transitions';
import { CollapseElement } from './CollapseElement';

export interface CollapseContentSize {
  property: 'width' | 'height';
  value: string;
}

export const CLASS_NAME_SHOW = 'show';
export const CLASS_NAME_COLLAPSE = 'collapse';
export const CLASS_NAME_COLLAPSING = 'collapsing';
export const CLASS_NAME_COLLAPSED = 'collapsed';
export const CLASS_NAME_HORIZONTAL = 'horizontal';

export const DIMENSION_VERTICAL = 'VERTICAL'
export const DIMENSION_HORIZONTAL = 'HORIZONTAL'
export type DIMENSION_TYPE = 'VERTICAL' | 'HORIZONTAL';
export const DIMENSIONS: Record<DIMENSION_TYPE, 'width' | 'height'> = {
  'VERTICAL': 'height',
  'HORIZONTAL': 'width',
}

export class Collapse implements ClickTriggerComponent {
  element: CollapseElement;
  
  constructor(element: CollapseElement) {
    this.element = element;
  }

  getContentSize(content: HTMLElement, isOpen: boolean): CollapseContentSize {
    const dimension: DIMENSION_TYPE = content.classList.contains(CLASS_NAME_HORIZONTAL)
      ? DIMENSION_HORIZONTAL
      : DIMENSION_VERTICAL;
    const property = `scroll${capFirst(DIMENSIONS[dimension])}`;
    if (!isOpen) {
      return {
        value: '',
        property: DIMENSIONS[dimension],
      };
    }
    return {
      value: `${(content as any)[property]}px`,
      property: DIMENSIONS[dimension],
    };
  }

  hide() {
    const { toggle, content } = this.element;
    if (content.classList.contains(CLASS_NAME_COLLAPSING)) {
      return;
    }

    const isOpenAttr = toggle.getAttribute('aria-expanded');
    let isOpen = true;
    if (isOpenAttr) {
      isOpen = Boolean(JSON.parse(isOpenAttr));
    }

    if (!isOpen) {
      return;
    }

    const { value, property } = this.getContentSize(content, isOpen);

    content.style[property] = value;
    content.offsetHeight; // reset animation

    content.classList.add(CLASS_NAME_COLLAPSING);
    content.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW)
    content.classList.toggle(CLASS_NAME_COLLAPSED, isOpen);
    toggle.setAttribute('aria-expanded', JSON.stringify(!isOpen));

    const complete = () => {
      content.classList.remove(CLASS_NAME_COLLAPSING);
      content.classList.add(CLASS_NAME_COLLAPSE);
    };
    executeAfterTransition(complete, content);

    const { value: destValue } = this.getContentSize(content, !isOpen);

    content.style[property] = destValue;    
  }

  toggle() {
    const { toggle, content } = this.element;

    if (content.classList.contains(CLASS_NAME_COLLAPSING)) {
      return;
    }

    const isOpenAttr = toggle.getAttribute('aria-expanded');
    let isOpen = true;
    if (isOpenAttr) {
      isOpen = Boolean(JSON.parse(isOpenAttr));
    }

    const { value, property } = this.getContentSize(content, isOpen);

    content.style[property] = value;
    content.offsetHeight; // reset animation

    content.classList.add(CLASS_NAME_COLLAPSING);
    content.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW)
    content.classList.toggle(CLASS_NAME_COLLAPSED, isOpen);
    toggle.setAttribute('aria-expanded', JSON.stringify(!isOpen));

    const complete = () => {
      content.classList.remove(CLASS_NAME_COLLAPSING);
      content.classList.add(CLASS_NAME_COLLAPSE);
      if (!isOpen) {
        content.classList.add(CLASS_NAME_SHOW);
      }
    };
    executeAfterTransition(complete, content);

    const { value: destValue } = this.getContentSize(content, !isOpen);

    content.style[property] = destValue;
  }

  executeByClick(ev: Event) {
    this.toggle();
  }
}
