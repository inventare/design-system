import { Meta } from '@storybook/html';
import { fn } from '@storybook/test';
import { withActions } from '@storybook/addon-actions/decorator';
import { Select } from './Select';

const meta: Meta = {
  title: 'Vanilla JavaScript/Select',
  render: ({}) => {
    const container = document.createElement('div');
    container.className = 'form-control';

    container.innerHTML = `
      <div class="select-container">
        <input class="default-control" type="hidden" value="7" />

        <div
          class="select input"
          role="combobox"
          tabindex="0"
          aria-haspopup="true"
          aria-expanded="false"
          aria-disabled="false"
          aria-controls="select-display"
        >
          <span
            class="select-value"
            role="textbox"
            aria-readonly="true"
            id="select-display"
          >
            Item 7
          </span>
          <button
            type="button"
            class="dropdown-button"
            role="presentation"
          >
            <i class="icon-caret-down arrow" role="presentation"></i>
          </button>
        </div>

        <div class="select-dropdown">
          <div class="select-dropdown-inner">
            <button data-value="1" class="select-item" type="button">Item 1</button>
            <button data-value="2" class="select-item" type="button">Item 2</button>
            <button data-value="3" class="select-item" type="button">Item 3</button>
            <button data-value="4" class="select-item" type="button">Item 4</button>
            <button data-value="5" class="select-item" type="button">Item 5</button>
            <button data-value="6" class="select-item" type="button">Item 6</button>
            <button data-value="7" class="select-item active" type="button">Item 7</button>
            <button data-value="8" class="select-item" type="button">Item 8</button>
            <button data-value="9" class="select-item" type="button">Item 9</button>
            <button data-value="10" class="select-item" type="button">Item 10</button>
            <button data-value="11" class="select-item" type="button">Item 11</button>
            <button data-value="12" class="select-item" type="button">Item 12</button>
            <button data-value="13" class="select-item" type="button">Item 13</button>
            <button data-value="14" class="select-item" type="button">Item 14</button>
            <button data-value="15" class="select-item" type="button">Item 15</button>
          </div>
        </div>
      </div>
    `;

    const select = new Select(container.querySelector('.select-container') as HTMLElement);

    return container;
  },
  args: {
    'load-more': fn(),
  },
  parameters: {
    actions: {
      handles: ['load-more'],
    },
  },
  argTypes: {
  },
  decorators: [withActions],
};

export const Default = {
  args: {
  }
};

export default meta;
