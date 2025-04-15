import { DropdownManager } from "../../../../../packages/vanilla/src/components";

export interface DropdownProps {
  buttonText?: string;
  align?: 'left' | 'center' | 'right';
  hideContent?: boolean;
  containerAlign?: 'flex-start' | 'center' | 'flex-end';
}

export interface DropdownRenderOptions {
  addEvents?: boolean;
}

export const renderDropdown = (props: DropdownProps, options: DropdownRenderOptions) => {
  const {
    align = 'left',
    buttonText = 'Open',
    containerAlign = 'flex-start',
    hideContent,
  } = props;
  const { addEvents } = options;

  const container = document.createElement('div');

  const alignClass = {
    'left': 'dropdown-menu-start',
    'center': 'dropdown-menu-center',
    'right': 'dropdown-menu-end',
  }[align];

  const content = hideContent ? '' : `<div>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempus nulla quis lorem posuere tincidunt. Aliquam lobortis tellus et viverra feugiat. In hac habitasse platea dictumst. Cras consectetur odio at eros vulputate, sit amet scelerisque enim aliquet. Cras finibus vestibulum malesuada. Nunc ipsum velit, efficitur eget nulla in, cursus ornare tellus. Vivamus lobortis tincidunt ante, ac condimentum sapien ornare vitae. Ut sit amet nulla lacus. Cras nec ornare nibh, vitae porta nisl. Vestibulum viverra nisl nec ligula consequat elementum scelerisque ut nibh. Integer blandit a nisi vel feugiat. Nulla auctor ullamcorper consectetur. Suspendisse ac leo non dui sodales consectetur. Aliquam consectetur, enim in tincidunt varius, tortor orci semper massa, eu consequat est urna id tortor. Nullam molestie nunc non nunc interdum, sit amet venenatis diam commodo. Proin egestas mi in auctor pretium.</p>
  </div>`

  container.innerHTML = `
    <div class="dropdown">
      <button
        class="btn primary dropdown-toggle"
        type="button"
        data-toggle="dropdown"
        aria-expanded="false"
      >${buttonText}</button>
      <ul class="dropdown-menu ${alignClass} primary">
        <li><a class="dropdown-item">Action</a></li>
        <li><a class="dropdown-item">Another action</a></li>
        <li><a class="dropdown-item">Something else here</a></li>
      </ul>
    </div>
  `;

  if (addEvents) {
    const manager = new DropdownManager();
    container.addEventListener('click', (ev) => manager.getInstance(ev.target as HTMLElement)?.executeByClick(ev));
  }

  container.style.display = 'flex';
  container.style.justifyContent = containerAlign;
  container.style.minHeight = '200px';

  return container;
};
