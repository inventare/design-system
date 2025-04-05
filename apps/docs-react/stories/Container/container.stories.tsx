import type { Meta, StoryObj } from '@storybook/react';
import { Container } from '../../../../packages/react/src';

const meta: Meta<typeof Container> = {
  title: 'Layout/Container',
  component: Container,
  decorators: [
    (Story) => (
      <div style={{ background: 'gray' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    breakpoint: {
      options: ['all', 'sm', 'md', 'lg', 'xl', 'xxl', 'fluid'],
      control: { type: 'select' },
    },
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default : Story = { args: { children: <p>Hello</p>, style: { backgroundColor: 'white' } } };

export const Fluid : Story = { args: { breakpoint: 'fluid' } };

export const ContainerSM : Story = { args: { breakpoint: 'sm', } };

export const ContainerMD : Story = { args: { breakpoint: 'md', } };

export const ContainerLG : Story = { args: { breakpoint: 'lg', } };

export const ContainerXL : Story = { args: { breakpoint: 'xl', } };

export const ContainerXXL : Story = { args: { breakpoint: 'xxl', } };
