import { createContainer } from './Container';

export default {
  title: 'Layouts/Container',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Test'
      }
    }
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'container-xxl',
        'container-xl',
        'container-lg',
        'container-md',
        'container-sm',
        'container',
        'container-fluid'
      ],
    },
  },
};

const Template = ({ ...args }) => createContainer({ ...args });

export const Container = Template.bind({});
Container.args = {
  variant: 'container'
}

export const FluidContainer = Template.bind({});
FluidContainer.args = {
  variant: 'container-fluid',
}

export const SmallContainer = Template.bind({});
SmallContainer.args = {
  variant: 'container-sm',
}

export const MediumContainer = Template.bind({});
MediumContainer.args = {
  variant: 'container-md',
};

export const LargeContainer = Template.bind({});
LargeContainer.args = {
  variant: 'container-lg',
};

export const XLargeContaine = Template.bind({});
XLargeContaine.args = {
  variant: 'container-xl',
};

export const XXLargeContainer = Template.bind({});
XXLargeContainer.args = {
  variant: 'container-xxl',
};

