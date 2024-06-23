import { createCollapse, CollapseProps } from './Collapse';

export default {
  title: 'Vanilla JavaScript/Collapse',
  render: ({ ...args }: CollapseProps) => {
    return createCollapse({ ...args });
  },
  argTypes: {
    id: { control: 'text', },
    triggerContent: { control: 'text' },
    content: { control: 'text', },
  },
};

export const Default = {
  args: {
    id: 'default-collapse',
    triggerContent: 'Click here to toggle',
    content: 'John doe<br/>John doe<br/>John doe<br/>John doe<br/>John doe<br/>John doe<br/>'
  }
};

export const Horizontal = {
  args: {
    id: 'default-collapse',
    triggerContent: 'Click here to toggle',
    content: 'John doe<br/>John doe<br/>John doe<br/>John doe<br/>John doe<br/>John doe<br/>',
    horizontal: true,
  }
};
