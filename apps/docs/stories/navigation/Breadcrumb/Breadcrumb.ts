export interface BreadcrumbItem {
  label: string;
  active?: boolean;
  href?: string;
}

export interface BreadcrumbProps {
  items: Array<BreadcrumbItem>
}

export const renderBreadcrumb = ({
  items
}: BreadcrumbProps) => {
  const breadcrumb = document.createElement('div');
  breadcrumb.className = 'breadcrumb';
  breadcrumb.innerHTML = items.map(({ label, href, active }) => {
    return `<span class="breadcrumb-item${active ? ' active' : ''}"><a href="${href || '#'}">${label}</a></span>`
  }).join('');

  return breadcrumb;
};
