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

export const createSidebarButton = ({
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
  btn.style.minWidth = '250px';

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

    div.appendChild(btn);

    return div;
  }

  return btn;
};

const shoppingCartIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
    <path d="M230.14,58.87A8,8,0,0,0,224,56H62.68L56.6,22.57A8,8,0,0,0,48.73,16H24a8,8,0,0,0,0,16h18L67.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42A27.75,27.75,0,0,0,160,204a28,28,0,1,0,28-28H91.17a8,8,0,0,1-7.87-6.57L80.13,152h116a24,24,0,0,0,23.61-19.71l12.16-66.86A8,8,0,0,0,230.14,58.87ZM104,204a12,12,0,1,1-12-12A12,12,0,0,1,104,204Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,200,204Zm4-74.57A8,8,0,0,1,196.1,136H77.22L65.59,72H214.41Z"></path>
  </svg>
`;

export const createMultipleSidebarButtons = () => {
  const toggle = createSidebarButton({
    variant: 'primary',
    label: `${shoppingCartIcon} Sales`,
    dropDown: true,
    expanded: true,
    active: true,
    withParent: false,
  });
  toggle.setAttribute('data-toggle', 'collapse')
  toggle.setAttribute('data-target', '#collapse-body');

  const child1 = createSidebarButton({
    variant: 'primary',
    label: `Sales Summary`,
    child: true,
    active: false,
    withParent: false,
  });
  const child2 = createSidebarButton({
    variant: 'primary',
    label: `Sales Trends`,
    child: true,
    childPosition: 'middle',
    active: false,
    withParent: false,
  });
  const child3 = createSidebarButton({
    variant: 'primary',
    label: `Item Sales`,
    child: true,
    childPosition: 'middle',
    active: true,
    withParent: false,
  });
  const child4 = createSidebarButton({
    variant: 'primary',
    label: `Employee Sales`,
    child: true,
    childPosition: 'end',
    active: false,
    withParent: false,
  });

  const childs = document.createElement('div');
  childs.id = 'collapse-body';
  childs.className = 'collapse show';

  const div = document.createElement('div');
  div.style.display = 'flex';
  div.style.flexDirection = 'column';
  div.style.alignItems = 'stretch';
  div.style.width = '350px';
  div.style.backgroundColor = '#222';
  div.style.padding = '16px';

  div.appendChild(toggle);

  childs.appendChild(child1);
  childs.appendChild(child2);
  childs.appendChild(child3);
  childs.appendChild(child4);
  div.appendChild(childs);

  return div;
};
