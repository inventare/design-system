import { createSidebarButton } from '../SidebarButton/SidebarButton';

const shoppingCartIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
    <path d="M230.14,58.87A8,8,0,0,0,224,56H62.68L56.6,22.57A8,8,0,0,0,48.73,16H24a8,8,0,0,0,0,16h18L67.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42A27.75,27.75,0,0,0,160,204a28,28,0,1,0,28-28H91.17a8,8,0,0,1-7.87-6.57L80.13,152h116a24,24,0,0,0,23.61-19.71l12.16-66.86A8,8,0,0,0,230.14,58.87ZM104,204a12,12,0,1,1-12-12A12,12,0,0,1,104,204Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,200,204Zm4-74.57A8,8,0,0,1,196.1,136H77.22L65.59,72H214.41Z"></path>
  </svg>
`;

export const createSidebar = () => {
  const buttonExample = createSidebarButton({
    variant: 'primary',
    label: `${shoppingCartIcon} <span class="hide-on-collapse">Users</span>`,
    withParent: false,
    active: true,
  });

  const buttonExample2 = createSidebarButton({
    variant: 'primary',
    label: `${shoppingCartIcon} <span class="hide-on-collapse">Products</span>`,
    withParent: false,
  });

  const toggle = createSidebarButton({
    variant: 'primary',
    label: `${shoppingCartIcon} <span class="hide-on-collapse">Sales</span>`,
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

  const childsContainer = document.createElement('div');
  childsContainer.id = 'collapse-body';
  childsContainer.className = 'collapse show';

  const childs = document.createElement('div');
  childs.className = 'sidebar-childs';


  const buttonExample3 = createSidebarButton({
    variant: 'primary',
    label: `${shoppingCartIcon} <span class="hide-on-collapse">Products</span>`,
    withParent: false,
  });

  const div = document.createElement('div');
  div.className = 'sidebar'
  div.id = 'sidebar-example-here'

  const inner = document.createElement('div');
  inner.className = 'sidebar-inner';

  const branding = document.createElement('div');
  branding.className = 'branding';

  inner.appendChild(branding);

  inner.appendChild(buttonExample);
  inner.appendChild(buttonExample2);

  inner.appendChild(toggle);

  childs.appendChild(child1);
  childs.appendChild(child2);
  childs.appendChild(child3);
  childs.appendChild(child4);
  childsContainer.appendChild(childs);
  inner.appendChild(childsContainer);

  inner.appendChild(buttonExample3);

  div.appendChild(inner);

  const toggler = document.createElement('button');
  toggler.className = 'sidebar-toggle';
  toggler.setAttribute('data-toggle', 'sidebar');
  toggler.setAttribute('data-target', '#sidebar-example-here');
  div.appendChild(toggler);

  const baseContainer = document.createElement('div');
  baseContainer.style.display = 'flex'
  baseContainer.style.flexDirection = 'row';
  baseContainer.style.alignItems = 'stretch'
  baseContainer.style.height = '700px';

  baseContainer.appendChild(div);

  const anotherDiv = document.createElement('div');
  anotherDiv.style.flex = '1';
  anotherDiv.style.backgroundColor = 'var(--color-primary-300)';
  anotherDiv.style.padding = 'var(--spacing-base)';
  anotherDiv.innerHTML = '<h1>Main Content</h1>';

  baseContainer.appendChild(anotherDiv);

  return baseContainer;
};
