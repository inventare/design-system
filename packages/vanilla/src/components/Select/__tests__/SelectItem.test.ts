import { vi } from 'vitest';
import { SelectItem } from '../SelectItem';
import { Select } from '../Select';

describe('SelectItem', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  })

  it('should isActive be true when the active class is found on element', () => {
    const element = document.createElement('span');
    element.classList.add('active');
    const item = new SelectItem({} as Select, element, null);

    expect(item.isActive).toEqual(true);
  });

  it('should isActive be false when the active class is not found on element', () => {
    const element = document.createElement('span');
    const item = new SelectItem({} as Select, element, null);

    expect(item.isActive).toEqual(false);
  });

  it('should value returns the data-value attribute', () => {
    const value = '100';

    const element = document.createElement('span');
    element.setAttribute('data-value', value);
    const item = new SelectItem({} as Select, element, null);

    expect(item.value).toEqual(value);
  });

  it('should isFocused returns false if the document.activeElement is not equals element', () => {
    const element = document.createElement('button');
    const anotherElement = document.createElement('button');
    document.body.appendChild(element);
    document.body.appendChild(anotherElement);
    anotherElement.focus();

    const item = new SelectItem({} as Select, element, null);
    expect(item.isFocused).toEqual(false);
  })

  it('should isFocused returns true if the document.activeElement is equals element', () => {
    const element = document.createElement('button');
    document.body.appendChild(element);
    element.focus();

    const item = new SelectItem({} as Select, element, null);
    expect(item.isFocused).toEqual(true);
  });

  it('should blur() not call element.blur() if is not focused', () => {
    const blur = vi.fn();

    const element = document.createElement('button');
    element.blur = blur;
    document.body.appendChild(element);

    const item = new SelectItem({} as Select, element, null);
    item.blur()
    expect(blur).not.toHaveBeenCalled();
  })

  it('should blur() call element.blur() if is focused', () => {
    const blur = vi.fn();

    const element = document.createElement('button');
    element.blur = blur;
    document.body.appendChild(element);
    element.focus();

    const item = new SelectItem({} as Select, element, null);
    item.blur()
    expect(blur).toHaveBeenCalledTimes(1);
  })

  it('should focus() not call element.focus() and element.scrollIntoView() if is focused', () => {
    const focus = vi.fn();
    const scrollIntoView = vi.fn();

    const element = document.createElement('button');
    document.body.appendChild(element);
    element.focus();

    element.focus = focus;
    element.scrollIntoView = scrollIntoView;

    const item = new SelectItem({} as Select, element, null);
    item.focus()
    expect(focus).not.toHaveBeenCalled();
    expect(scrollIntoView).not.toHaveBeenCalled();
  })

  it('should focus() call element.focus() and element.scrollIntoView() if is not focused', () => {
    const focus = vi.fn();
    const scrollIntoView = vi.fn();

    const element = document.createElement('button');
    document.body.appendChild(element);

    element.focus = focus;
    element.scrollIntoView = scrollIntoView;

    const item = new SelectItem({} as Select, element, null);
    item.focus()
    expect(focus).toHaveBeenCalledTimes(1);
    expect(scrollIntoView).toHaveBeenCalledTimes(1);
  });

  it('should focusNext() call next.focus()', () => {
    const focus = vi.fn();

    const element1 = document.createElement('button');
    const element2 = document.createElement('button');

    const item1 = new SelectItem({} as Select, element1, null);
    const item2 = new SelectItem({} as Select, element2, item1);

    item2.focus = focus;
    item1.focusNext();

    expect(focus).toHaveBeenCalledTimes(1);
  });

  it('should focusPrevious() call previous.focus()', () => {
    const focus = vi.fn();

    const element1 = document.createElement('button');
    const element2 = document.createElement('button');

    const item1 = new SelectItem({} as Select, element1, null);
    const item2 = new SelectItem({} as Select, element2, item1);

    item1.focus = focus;
    item2.focusPrevious();

    expect(focus).toHaveBeenCalledTimes(1);
  });
});
