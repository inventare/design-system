import { getByRole, queryByRole } from '@testing-library/dom';
import { userEvent } from '@testing-library/user-event';
import { renderSelect } from '../stories/Select.renderer';
import { SELECT_EXPANDED_CLASS } from '../Select.constants';

describe('Select', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  const isExpanded = (container: HTMLElement) => {
    return container
      .querySelector('.select-container')
      ?.classList
      .contains(SELECT_EXPANDED_CLASS);
  }

  it('should render a combobox role', () => {
    const container = renderSelect({ items: 5 }, { addEvents: true });

    const combobox = queryByRole(container, 'combobox');
    expect(combobox).not.toBeNull();
  });

  it('should init with hidden dropdown', () => {
    const container = renderSelect({ items: 5, }, { addEvents: true });
    document.body.appendChild(container);

    expect(isExpanded(container)).toBeFalsy();
  });

  it('click on the combobox should open dropdown', async () => {
    const container = renderSelect({ items: 5, }, { addEvents: true });
    document.body.appendChild(container);

    const combobox = getByRole(container, 'combobox');
    await userEvent.click(combobox)

    expect(isExpanded(container)).toBeTruthy();
  });

  it('click on the combobox when the dropdown is opened should close dropdown', async () => {
    const container = renderSelect({ items: 5, }, { addEvents: true });
    document.body.appendChild(container);

    const combobox = getByRole(container, 'combobox');
    await userEvent.click(combobox)

    await userEvent.click(combobox)

    expect(isExpanded(container)).toBeFalsy();
  });

  it('click on the document body should close dropdown', async () => {
    const container = renderSelect({ items: 5, }, { addEvents: true });
    document.body.appendChild(container);

    const combobox = getByRole(container, 'combobox');
    await userEvent.click(combobox)

    await userEvent.click(document.body);

    expect(isExpanded(container)).toBeFalsy();
  });

  it('click on a item should set the value of the input', async () => {
    const container = renderSelect({ items: 5, }, { addEvents: true });
    document.body.appendChild(container);

    const combobox = getByRole(container, 'combobox');
    await userEvent.click(combobox);

    const listItem = getByRole(container, 'option', { name: 'Item 3' });
    await userEvent.click(listItem);

    expect(isExpanded(container)).toBeFalsy();

    const input = container.querySelector<HTMLInputElement>('input');
    expect(input?.value).toEqual('3');
    expect(combobox.textContent?.trim()).toEqual('Item 3');
  });

  it('click on a item should set the data-display to textContent', async () => {
    const value = '10';
    const display = 'Custom Data-Display';
    const name = 'DropDown Text';
    const customRenderItems = () => {
      return `<button data-value="${value}" data-display="${display}" class="select-item" type="button" role="option">${name}</button>`;
    };
    const container = renderSelect({}, { addEvents: true, customRenderItems });
    document.body.appendChild(container);

    const combobox = getByRole(container, 'combobox');
    await userEvent.click(combobox);

    const listItem = getByRole(container, 'option', { name });
    await userEvent.click(listItem);

    expect(isExpanded(container)).toBeFalsy();

    const input = container.querySelector<HTMLInputElement>('input');
    expect(input?.value).toEqual(value);
    expect(combobox.textContent?.trim()).toEqual(display);
  });

  it('click on the dropdown element should close dropdown', async () => {
    const container = renderSelect({ items: 5, }, { addEvents: true });
    document.body.appendChild(container);

    const combobox = getByRole(container, 'combobox');
    await userEvent.click(combobox)

    const dropdown = container.querySelector('.select-dropdown');
    if (!dropdown) {
      throw new Error('not found');
    }

    await userEvent.click(dropdown);

    expect(isExpanded(container)).toBeFalsy();
  });

  it('arrow up on combobox should open dropdown', async () => {
    const container = renderSelect({ items: 5, }, { addEvents: true });
    document.body.appendChild(container);

    const combobox = getByRole(container, 'combobox');
    combobox.focus();
    await userEvent.keyboard('[ArrowUp]');

    expect(isExpanded(container)).toBeTruthy();
  });

  it('arrow down on combobox should open dropdown', async () => {
    const container = renderSelect({ items: 5, }, { addEvents: true });
    document.body.appendChild(container);

    const combobox = getByRole(container, 'combobox');
    combobox.focus();
    await userEvent.keyboard('[ArrowDown]');

    expect(isExpanded(container)).toBeTruthy();
  });
});
