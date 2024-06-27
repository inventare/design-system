export interface SidebarLabelProps {
  label?: string;
  withParent?: boolean;
}

export const createSidebarLabel = ({
  label = 'Button',
  withParent = true,
}: SidebarLabelProps) => {
  const span = document.createElement('span');
  span.innerHTML = label;
  span.className = 'sidebar-label';

  if (withParent) {
    const div = document.createElement('div');
    div.style.backgroundColor = '#222';
    div.style.width = '300px';
    div.style.padding = '16px';
    div.style.display = 'flex';
    div.style.flexDirection = 'column';
    div.style.alignItems = 'stretch';

    div.appendChild(span);

    return div;
  }

  return span;
};
