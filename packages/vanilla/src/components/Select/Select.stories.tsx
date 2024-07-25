import { Select } from './Select';

export default {
  title: 'Vanilla JavaScript/Select',
  render: ({}) => {
    const container = document.createElement('div');
    container.className = 'form-control';

    container.innerHTML = `
      <div class="select-container">
        <div class="select input" role="combobox">
          <input type="text" class="default select-value" />
          <button type="button" class="dropdown-button" role="presentation">
            <i class="icon-caret-down arrow" role="presentation"></i>
          </button>
        </div>

        <div class="select-dropdown">
          <div class="select-dropdown-inner">
            <button class="select-item" type="button">Item 1</button>
            <button class="select-item" type="button">Item 2</button>
            <button class="select-item" type="button">Item 3</button>
            <button class="select-item" type="button">Item 4</button>
            <button class="select-item" type="button">Item 5</button>
            <button class="select-item" type="button">Item 6</button>
            <button class="select-item" type="button">Item 7</button>
            <button class="select-item" type="button">Item 8</button>
            <button class="select-item" type="button">Item 9</button>
            <button class="select-item" type="button">Item 10</button>
            <button class="select-item" type="button">Item 11</button>
            <button class="select-item" type="button">Item 12</button>
            <button class="select-item" type="button">Item 13</button>
            <button class="select-item" type="button">Item 14</button>
            <button class="select-item" type="button">Item 15</button>
          </div>
        </div>
      </div>
    `;

    const select = new Select(container.querySelector('.select-container') as HTMLElement);

    return container;
  },
  argTypes: {
  },
};

export const Default = {
  args: {
  }
};