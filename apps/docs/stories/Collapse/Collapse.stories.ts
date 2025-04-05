import type { Meta, StoryObj } from '@storybook/html';
import { renderCollapse, CollapseProps } from './Collapse.renderer';

const meta: Meta<CollapseProps> = {
  title: 'Utils/Collapse',
  render: (props) => renderCollapse(props, { addEvents: true }),
  argTypes: {
    id: { control: 'text', },
    triggerContent: { control: 'text' },
    content: { control: 'text', },
  },
};

export default meta;
type Story = StoryObj<CollapseProps>;

export const Default: Story = {
  args: {
    id: 'example-default-collapse',
    triggerContent: 'Click here to toggle',
    content: 'John doe<br/>John doe<br/>John doe<br/>John doe<br/>John doe<br/>John doe<br/>'
  }
};

export const Horizontal: Story = {
  args: {
    id: 'example-horizontal-collapse',
    triggerContent: 'Click here to toggle',
    content: 'John doe<br/>John doe<br/>John doe<br/>John doe<br/>John doe<br/>John doe<br/>',
    horizontal: true,
  }
};
