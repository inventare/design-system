import type { StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Collapse, CollapseContent, CollapseTrigger } from '../../../../packages/react/src';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Utils/Collapse',
  render: () => (
    <div style={{ width: 300 }}>
      <Collapse isOpen>
        <CollapseTrigger style={{ width: '100%' }}>Trigger</CollapseTrigger>
        <CollapseContent style={{ width: '100%' }}>Hide or Show? Hide or Show? Hide or Show? Hide or Show? Hide or Show? Hide or Show? Hide or Show? Hide or Show? Hide or Show? Hide or Show? Hide or Show? Hide or Show? Hide or Show? Hide or Show? Hide or Show? Hide or Show?</CollapseContent>
      </Collapse>
    </div>
  ),
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};
