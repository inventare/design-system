export interface SidebarButtonProps {
  label?: string;
  disabled?: boolean;
  variant?: 'primary' | 'danger';
  dropDown?: boolean;
  expanded?: boolean;
  child?: boolean;
  childPosition?: 'start' | 'middle' | 'end';
  active?: boolean;
  withParent?: boolean;
}

export const renderSidebarButton = ({
  variant = 'primary',
  label = 'Button',
  disabled = false,
  dropDown = false,
  expanded = false,
  child = false,
  childPosition = 'start',
  active = false,
  withParent = true,
}: SidebarButtonProps) => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerHTML = label;

  if (disabled) {
    btn.disabled = true;
  }
  btn.setAttribute('aria-expanded', String(expanded))

  btn.className = [
    'btn btn-sidebar',
    `${variant}`,
    `${dropDown ? 'dropdown' : ''}`,
    `${child ? `child ${childPosition}` : ''}`,
    `${active ? 'active' : ''}`,
  ].join(' ').trim();

  if (withParent) {
    const div = document.createElement('div');
    div.style.backgroundColor = '#222';
    div.style.width = '300px';
    div.style.padding = '16px';
    div.style.display = 'flex';
    div.style.flexDirection = 'column';
    div.style.alignItems = 'stretch';

    div.appendChild(btn);

    return div;
  }

  return btn;
};
