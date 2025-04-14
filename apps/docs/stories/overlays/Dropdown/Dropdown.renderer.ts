import { DropdownManager } from "../../../../../packages/vanilla/src/components";

export interface DropdownProps {
  buttonText?: string;
}

export interface DropdownRenderOptions {
  addEvents?: boolean;
}

export const renderDropdown = (props: DropdownProps, options: DropdownRenderOptions) => {
  const { buttonText = 'Open' } = props;
  const { addEvents } = options;

  const container = document.createElement('div');

  container.innerHTML = `
    <div class="dropdown">
      <button
        class="btn primary dropdown-toggle"
        type="button"
        data-toggle="dropdown"
        aria-expanded="false"
      >
        ${buttonText}
      </button>
      <ul class="dropdown-menu primary">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
      </ul>
    </div>

    <div>
    <p>Hi this is a paragraph</p>
    </div>
  `;

  if (addEvents) {
    const manager = new DropdownManager();
    container.addEventListener('click', (ev) => manager.getInstance(ev.target as HTMLElement)?.executeByClick(ev));
  }

  return container;
};
