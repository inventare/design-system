import {
  renderDropdown
} from '../../overlays/Dropdown/Dropdown.renderer';

export interface MenuProps {
  items: Array<{
    label: string;
  }>;
}

export const renderMenu = ({
  items
}: MenuProps) => {
  const nav = document.createElement('nav');
  nav.className = 'menu primary';

  const ul = document.createElement('ul');
  ul.className = 'container';

  for (const item of items) {
    const li = document.createElement('li');
    li.innerHTML = `<a>${item.label}</a>`;
    ul.appendChild(li);
  };

  const fill = document.createElement('li');
  fill.style.flex = '1';
  ul.appendChild(fill);

  const dropDown = renderDropdown({
    buttonText: 'Menu',
    align: 'right',

  }, { addEvents: true, noContainer: true });
  const dropDownLi = document.createElement('li');
  dropDownLi.appendChild(dropDown);
  ul.appendChild(dropDownLi);

  nav.appendChild(ul);
  return nav;
};
