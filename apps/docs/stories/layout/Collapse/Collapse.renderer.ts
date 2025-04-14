import { CollapseManager } from "../../../../../packages/vanilla/src/components/Collapse/CollapseManager";

export interface CollapseProps {
  id: string;
  triggerContent: string;
  content: string;
  horizontal?: boolean;
}

export interface CollapseRenderOptions {
  addEvents?: boolean;
}

export const renderCollapse = (props: CollapseProps, options: CollapseRenderOptions) => {
  const { id, triggerContent, content, horizontal } = props;
  const { addEvents } = options;

  const container = document.createElement('div');
  container.style.display = 'flex';
  container.style.alignItems = 'stretch';

  if (!horizontal) {
    container.style.flexDirection = 'column';
    container.style.width = '300px';
  } else {
    container.style.height = '200px';
  }

  const triggerDiv = document.createElement('div');
  triggerDiv.innerHTML = triggerContent;
  triggerDiv.setAttribute('data-toggle', 'collapse')
  triggerDiv.setAttribute('data-target', `#${id}`);
  triggerDiv.setAttribute('aria-expanded', 'true');
  triggerDiv.style.background = 'var(--color-primary-500)'
  if (horizontal) {
    triggerDiv.style.textOrientation = 'mixed'
    triggerDiv.style.writingMode = 'vertical-rl';
  }

  container.appendChild(triggerDiv);

  const contentDiv = document.createElement('div');
  contentDiv.className = 'collapse show';
  if (horizontal) {
    contentDiv.classList.add('horizontal');

    const childDiv = document.createElement('div');
    childDiv.style.width = '300px';
    childDiv.innerHTML = content;
    contentDiv.append(childDiv);
  } else {
    contentDiv.innerHTML = content;
  }

  contentDiv.id = id;
  contentDiv.style.background = 'var(--color-primary-100)'
  container.appendChild(contentDiv);

  if (addEvents) {
    const collapseManager = new CollapseManager();
    container.addEventListener('click', (ev) => {
      collapseManager.getInstance(ev.target as HTMLElement)?.executeByClick(new Event('click'));
    });
  }

  return container;
};
