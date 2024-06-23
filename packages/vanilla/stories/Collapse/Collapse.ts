export interface CollapseProps {
  id: string;
  triggerContent: string;
  content: string;
  horizontal?: boolean;
}

export const createCollapse = ({
  id,
  triggerContent,
  content,
  horizontal = false,
}: CollapseProps) => {
  const container = document.createElement('div');

  const triggerDiv = document.createElement('div');
  triggerDiv.innerHTML = triggerContent;
  triggerDiv.setAttribute('data-toggle', 'collapse')
  triggerDiv.setAttribute('data-target', `#${id}`);
  triggerDiv.setAttribute('aria-expanded', 'true');
  triggerDiv.style.background = 'var(--color-primary-500)'
  container.appendChild(triggerDiv);

  const contentDiv = document.createElement('div');
  contentDiv.innerHTML = content;
  contentDiv.className = 'collapse show';
  if (horizontal) {
    contentDiv.classList.add('horizontal');
  }
  contentDiv.id = id;
  contentDiv.style.background = 'var(--color-primary-100)'
  container.appendChild(contentDiv);

  return container;
};
