import { Meta, StoryObj } from '@storybook/html'
import { renderSheet, SheetProps } from './Sheet.renderer';

const meta: Meta<SheetProps> = {
  title: 'Feedback/Sheet',
  render: (args: SheetProps) => {
    return renderSheet(args, { addEvents: true });
  },
  argTypes: {},
};

export default meta;

type Story = StoryObj<SheetProps>;

export const Default : Story = {
  args: {
    title: 'Sheet',
    subtitle: 'This is a sheet',
    position: 'right'
  },
};
