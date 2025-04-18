import { SelectManager } from "../../../../../packages/vanilla/src/components/Select";

export interface SelectProps {
  items?: number;
  fitParent?: boolean;
  preventCloseOnSelect?: boolean;
  filterStyle?: boolean;
}

export interface SelectOptions {
  addEvents?: boolean;
  customRenderItems?: () => string;
}

export const renderSelect = (props: SelectProps, options: SelectOptions) => {
  const { fitParent, preventCloseOnSelect, filterStyle, items = 10 } = props;
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
    <div class="select-container${fitParent ? ' select-fixed-fit' : ' '}" id="my-select">
      <input class="default-control" type="hidden" value="7" />

      <div
        class="select input ${filterStyle ? ' select-filter-style' : ' '}"
        role="combobox"
        tabindex="0"
        aria-haspopup="true"
        aria-expanded="false"
        aria-disabled="false"
        aria-controls="select-display"
        ${preventCloseOnSelect ? 'data-prevent="1"' : ''}
      >
        ${filterStyle ? '<span class="select-label">Filter Label</span>' : ''}
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
          ${filterStyle ? '<i class="icon-caret-right arrow" role="presentation"></i>' : '<i class="icon-caret-down arrow" role="presentation"></i>'}
        </button>
      </div>

      <div class="select-dropdown${fitParent ? ' select-dropdown-fixed-fit' : ' '}">
        <div class="select-dropdown-inner">
          ${fitParent ? `
            <header>
              <button type="button" class="close-button">
                <i class="icon-caret-left"></i>
                Back
              </button>
            </header>
          ` : ''}
          <div class="select-dropdown-search">
            <input type="text" placeholder="Pesquisar..." />
          </div>
          <div class="select-dropdown-items">
            <button data-value="" class="select-item" type="button" role="option">No Value</button>
            ${buttons}
          </div>
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

