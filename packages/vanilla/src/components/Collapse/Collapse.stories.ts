import { CollapseManager } from './CollapseManager';

interface CollapseProps {
  id: string;
  triggerContent: string;
  content: string;
  horizontal?: boolean;
}

export default {
  title: 'Vanilla JavaScript/Collapse',
  render: ({
    id,
    triggerContent,
    content,
    horizontal = false,
  }: CollapseProps) => {
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

    const collapseManager = new CollapseManager();
    container.addEventListener('click', (ev) => {
      collapseManager.getInstance(ev.target as HTMLElement)?.executeByClick();
    });

    return container;
  },
  argTypes: {
    id: { control: 'text', },
    triggerContent: { control: 'text' },
    content: { control: 'text', },
  },
};

export const Default = {
  args: {
    id: 'example-default-collapse',
    triggerContent: 'Click here to toggle',
    content: 'John doe<br/>John doe<br/>John doe<br/>John doe<br/>John doe<br/>John doe<br/>'
  }
};

export const Horizontal = {
  args: {
    id: 'example-horizontal-collapse',
    triggerContent: 'Click here to toggle',
    content: 'John doe<br/>John doe<br/>John doe<br/>John doe<br/>John doe<br/>John doe<br/>',
    horizontal: true,
  }
};
