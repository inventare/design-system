import { expect, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { CLASS_NAME_COLLAPSED, CLASS_NAME_COLLAPSING, CLASS_NAME_SHOW, Collapse } from './Collapse'
import { CollapseManager } from './CollapseManager';

describe('Collapse', () => {
  const renderCollapseBase = (horizontal: boolean = false) => {
    const user = userEvent.setup();
    const id = 'my-collapse-id';
    const triggerContent = 'my-trigger';
    const content = 'my-content';

    const container = document.createElement('div');
    container.innerHTML = `
      <div data-toggle="collapse" data-target="#${id}" aria-expanded="true">
        ${triggerContent}
      </div>
      <div id="${id}" class="collapse show">${content}</div>
    `;

    document.body.appendChild(container);

    const manager = new CollapseManager();
    container.addEventListener('click', (ev) => manager.getInstance(ev.target as HTMLElement)?.executeByClick());

    const collapse = manager.getInstance(container.querySelector('[data-toggle]') as HTMLElement) as Collapse;

    return { user, id, triggerContent, content, horizontal, container, collapse };
  };

  test('should add and remove the correct classes when click on trigger', async () => {
    const { user, collapse } = renderCollapseBase();

    const toggleSelector = '[data-toggle="collapse"]';
    const toggle = document.querySelector<HTMLElement>(toggleSelector) as HTMLElement;
    const { content: contentElement } = collapse.element;

    await user.click(toggle);
    expect(contentElement?.classList.contains(CLASS_NAME_COLLAPSING)).toBeTruthy();
    await vi.waitFor(() => {
      expect(contentElement?.classList.contains(CLASS_NAME_COLLAPSING)).toBeFalsy();
      expect(contentElement?.classList.contains(CLASS_NAME_SHOW)).toBeFalsy();
      expect(contentElement?.classList.contains(CLASS_NAME_COLLAPSED)).toBeTruthy();
      expect(toggle.getAttribute('aria-expanded')).toEqual('false');
    });

    await user.click(toggle);
    expect(contentElement?.classList.contains(CLASS_NAME_COLLAPSING)).toBeTruthy();
    await vi.waitFor(() => {
      expect(contentElement?.classList.contains(CLASS_NAME_COLLAPSING)).toBeFalsy();
      expect(contentElement?.classList.contains(CLASS_NAME_COLLAPSED)).toBeFalsy();
      expect(contentElement?.classList.contains(CLASS_NAME_SHOW)).toBeTruthy();
      expect(toggle.getAttribute('aria-expanded')).toEqual('true');
    });
  });
})
