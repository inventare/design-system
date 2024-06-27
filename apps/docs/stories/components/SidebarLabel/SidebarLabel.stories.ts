import { createSidebarLabel, SidebarLabelProps } from './SidebarLabel';

export default {
  title: 'Components/SidebarLabel',
  render: ({ ...args }: SidebarLabelProps) => {
    return createSidebarLabel({ ...args });
  },
  argTypes: {
    label: { control: 'text' },
  },
};

export const Default = {
  args: {
    label: `Navigation`,
  },
};
