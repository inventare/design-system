import type { Meta, StoryObj } from '@storybook/react';
import { SidebarButton } from '../../../../packages/react/src';

const meta: Meta<typeof SidebarButton> = {
  title: 'Navigation/SidebarButton',
  component: SidebarButton,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div className='sidebar' style={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch', padding: 20, }}>
        <Story />
      </div>
    )
  ],
  tags: ['autodocs'],
  argTypes: {
    color: {
      options: ['primary', 'danger'],
      control: { type: 'select' },
    },
    size: {
      options: ['small', 'normal', 'large'],
      control: { type: 'select' },
    },
    buttonType: {
      options: ['default', 'expandable', 'child'],
      control: { type: 'select' },
    },
    disabled: { control: { type: 'check' } },
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Default Button',
    buttonType: 'default'
  },
};

const DeleteIcon = () => (
  <svg viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '1rem' }}>
    <path d="M1.5 4.99996H3.16667M3.16667 4.99996H16.5M3.16667 4.99996V16.6666C3.16667 17.1087 3.34226 17.5326 3.65482 17.8451C3.96738 18.1577 4.39131 18.3333 4.83333 18.3333H13.1667C13.6087 18.3333 14.0326 18.1577 14.3452 17.8451C14.6577 17.5326 14.8333 17.1087 14.8333 16.6666V4.99996H3.16667ZM5.66667 4.99996V3.33329C5.66667 2.89127 5.84226 2.46734 6.15482 2.15478C6.46738 1.84222 6.89131 1.66663 7.33333 1.66663H10.6667C11.1087 1.66663 11.5326 1.84222 11.8452 2.15478C12.1577 2.46734 12.3333 2.89127 12.3333 3.33329V4.99996M7.33333 9.16663V14.1666M10.6667 9.16663V14.1666" stroke="currentColor" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
)

export const DefaultWithIcon: Story = {
  args: {
    children: (<><DeleteIcon/>Default Iconed</>),
    buttonType: 'default'
  },
};
