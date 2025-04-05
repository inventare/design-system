import { SelectManager } from "../../../../packages/vanilla/src/components/Select";

export interface SelectProps {
  items?: number;
}

export interface SelectOptions {
  addEvents?: boolean;
  customRenderItems?: () => string;
}

export const renderSelect = (props: SelectProps, options: SelectOptions) => {
  const { items = 10 } = props;
  const { addEvents, customRenderItems } = options;

  const container = document.createElement('div');
  container.className = 'form-control';

  const buttons = customRenderItems ? customRenderItems() : Array
    .from({ length: items })
    .map((_, index) => {
      return `<button data-value="${index + 1}" class="select-item" type="button" role="option">Item ${index + 1}</button>`;
    })
    .join('');

  container.innerHTML = `
    <div class="select-container" id="my-select">
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
          <div class="select-dropdown-search">
            <input type="text" placeholder="Pesquisar..." />
          </div>
          <button data-value="" class="select-item" type="button" role="option">No Value</button>
          ${buttons}
        </div>
      </div>
    </div>
  `;

  if (addEvents) {
    new SelectManager().initializeInstanceList(container);
  }

  const wrapper = document.createElement('div');
  wrapper.style.height = '300px';
  wrapper.appendChild(container);

  return wrapper;
};

