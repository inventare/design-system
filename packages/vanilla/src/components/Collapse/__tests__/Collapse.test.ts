import { expect, vi } from 'vitest';
import {
  CLASS_NAME_COLLAPSE,
  CLASS_NAME_COLLAPSED,
  CLASS_NAME_COLLAPSING,
  CLASS_NAME_HORIZONTAL,
  CLASS_NAME_SHOW,
  Collapse,
} from '../Collapse'
import { CollapseManager } from '../CollapseManager';
import { renderCollapse } from '../stories/Collapse.renderer';

describe('Collapse', () => {
  const renderCollapseBase = (horizontal: boolean = false) => {
    const id = 'my-collapse-id';
    const triggerContent = 'my-trigger';
    const content = 'my-content';

    const container = renderCollapse({ id, triggerContent, content, horizontal }, { addEvents: false });

    document.body.appendChild(container);

    const manager = new CollapseManager();
    const collapse = manager.getInstance(container.querySelector('[data-toggle]') as HTMLElement) as Collapse;

    return { id, triggerContent, content, horizontal, container, collapse };
  };

  beforeEach(() => {
    document.body.innerHTML = '';
  });

  test('hide() should add collapsing, remove the collapse and show, set aria-expanded and finish', async () => {
    const { collapse } = renderCollapseBase();
    const { content, toggle } = collapse.element;

    collapse.hide();
    expect(content.classList.contains(CLASS_NAME_COLLAPSING)).toBeTruthy();
    expect(content.classList.contains(CLASS_NAME_COLLAPSED)).toBeTruthy();
    expect(content.classList.contains(CLASS_NAME_COLLAPSE)).toBeFalsy();
    expect(content.classList.contains(CLASS_NAME_SHOW)).toBeFalsy();
    expect(toggle.getAttribute('aria-expanded')).toEqual('false');
    await vi.waitFor(() => {
      expect(content.classList.contains(CLASS_NAME_COLLAPSING)).toBeFalsy();
    });
    expect(content.classList.contains(CLASS_NAME_COLLAPSED)).toBeTruthy();
    expect(content.classList.contains(CLASS_NAME_COLLAPSE)).toBeTruthy();
    expect(content.classList.contains(CLASS_NAME_SHOW)).toBeFalsy();
  });

  test('hide() should not call getContentSize() if isOpen is false', async () => {
    const { collapse } = renderCollapseBase();
    const { toggle } = collapse.element;
    toggle.setAttribute('aria-expanded', 'false');

    const getContentSize = vi.fn();
    collapse.getContentSize = getContentSize;
    collapse.hide();

    expect(getContentSize).toHaveBeenCalledTimes(0);
  });

  test('hide() should not call getContentSize() if is collapsing', async () => {
    const { collapse } = renderCollapseBase();
    const { content } = collapse.element;
    content.classList.add(CLASS_NAME_COLLAPSING);

    const getContentSize = vi.fn();
    collapse.getContentSize = getContentSize;
    collapse.hide();

    expect(getContentSize).toHaveBeenCalledTimes(0);
  });

  test('executeByClick() should call toggle', () => {
    const { collapse } = renderCollapseBase();

    const toggle = vi.fn();
    collapse.toggle = toggle;
    collapse.executeByClick(new Event('click'));

    expect(toggle).toHaveBeenCalledOnce();
  });

  test('getContentSize() should get scrollWidth if collapse is horizontal', () => {
    const { collapse } = renderCollapseBase(true);
    const { content } = collapse.element;
    content.classList.add(CLASS_NAME_HORIZONTAL);

    Object.defineProperty(content, 'scrollWidth', { value: 369 });

    const value = collapse.getContentSize(content, true);
    expect(value.property).toEqual('width');
    expect(value.value).toEqual('369px');
  });

  test('toggle() should manipulate the correctly classes', async () => {
    const { collapse } = renderCollapseBase();

    const toggleSelector = '[data-toggle="collapse"]';
    const toggle = document.querySelector<HTMLElement>(toggleSelector) as HTMLElement;
    const { content: contentElement } = collapse.element;

    collapse.toggle();
    expect(contentElement?.classList.contains(CLASS_NAME_COLLAPSING)).toBeTruthy();
    await vi.waitFor(() => {
      expect(contentElement?.classList.contains(CLASS_NAME_COLLAPSING)).toBeFalsy();
      expect(contentElement?.classList.contains(CLASS_NAME_SHOW)).toBeFalsy();
      expect(contentElement?.classList.contains(CLASS_NAME_COLLAPSED)).toBeTruthy();
      expect(toggle.getAttribute('aria-expanded')).toEqual('false');
    });

    collapse.toggle();
    expect(contentElement?.classList.contains(CLASS_NAME_COLLAPSING)).toBeTruthy();
    await vi.waitFor(() => {
      expect(contentElement?.classList.contains(CLASS_NAME_COLLAPSING)).toBeFalsy();
      expect(contentElement?.classList.contains(CLASS_NAME_COLLAPSED)).toBeFalsy();
      expect(contentElement?.classList.contains(CLASS_NAME_SHOW)).toBeTruthy();
      expect(toggle.getAttribute('aria-expanded')).toEqual('true');
    });
  });
})
