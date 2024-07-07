import { expect, vi } from 'vitest';
import userEvent from '@testing-library/user-event'
import { } from '@testing-library/dom';
import { getCollapseObjects, CLASS_NAME_COLLAPSING, CLASS_NAME_SHOW, CLASS_NAME_COLLAPSED } from './collapse.helpers';
import { createCollapse } from '../../../stories/Collapse/Collapse';
import './collapse.browser';

describe("Collapse", () => {
  const renderCollapseBase = (horizontal: boolean = false) => {
    const user = userEvent.setup();
    const id = 'my-collapse-id';
    const triggerContent = 'my-trigger';
    const content = 'my-content';

    const element = createCollapse({ id, triggerContent, content, horizontal });
    document.body.appendChild(element);

    document.dispatchEvent(new Event("DOMContentLoaded", {
      bubbles: true,
      cancelable: true
    }));

    return { user, id, triggerContent, content, horizontal, element };
  };

  test('should add and remove the correct classes when click on trigger', async () => {
    const { user } = renderCollapseBase();

    const toggleSelector = '[data-toggle="collapse"]';
    const toggle = document.querySelector<HTMLElement>(toggleSelector) as HTMLElement;
    const { content: contentElement } = getCollapseObjects(toggle);

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
});
