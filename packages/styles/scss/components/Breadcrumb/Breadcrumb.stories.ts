import { createBreadcrumb, BreadcrumbProps } from './Breadcrumb';

export default {
  title: 'Navigation/Breadcrumb',
  render: ({ ...args }: BreadcrumbProps) => {
    return createBreadcrumb({ ...args });
  },
  argTypes: {
    text: { control: 'text' },
  },
};

export const Default = {
  args: {
    items: [
      { label: 'Dashboard', href: "#dashboard" },
      { label: 'Reports', href: "#reports" },
      { label: 'Social', href: "#social" },
      { label: 'Export', href: "#export", active: true },
    ],
  },
};
