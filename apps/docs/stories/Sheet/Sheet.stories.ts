import { Meta, StoryObj } from '@storybook/html'
import { renderSheet, SheetProps } from './Sheet.renderer';

const meta: Meta<SheetProps> = {
  title: 'Overlays/Sheet',
  render: (args: SheetProps) => {
    return renderSheet(args, { addEvents: true });
  },
  argTypes: {},
};

export default meta;

type Story = StoryObj<SheetProps>;

export const Small : Story = {
  args: {
    id: 'sheet-sm',
    title: 'Sheet',
    subtitle: 'This is a sheet',
    position: 'left',
    size: 'sm',
    buttonText: 'Open Small',
  },
};

export const Medium : Story = {
  args: {
    id: 'sheet-md',
    title: 'Sheet',
    subtitle: 'This is a sheet',
    position: 'left',
    size: 'md',
    buttonText: 'Open Medium',
  },
};

export const Large : Story = {
  args: {
    id: 'sheet-lg',
    title: 'Sheet',
    subtitle: 'This is a sheet',
    position: 'left',
    size: 'lg',
    buttonText: 'Open Large',
  },
};

export const ExtraLarge : Story = {
  args: {
    id: 'sheet-xl',
    title: 'Sheet',
    subtitle: 'This is a sheet',
    position: 'left',
    size: 'xl',
    buttonText: 'Open Extra Large',
  },
};

export const Left : Story = {
  args: {
    id: 'sheet-left',
    title: 'Sheet',
    subtitle: 'This is a sheet',
    position: 'left',
    buttonText: 'Open Left'
  },
};

export const Right : Story = {
  args: {
    id: 'sheet-right',
    title: 'Sheet',
    subtitle: 'This is a sheet',
    position: 'right',
    buttonText: 'Open Right'
  },
};
