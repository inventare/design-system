import { ContainerProps, createContainer } from './Container';

export default {
  title: 'Components/Layout/Container',
  render: ({ ...args }: ContainerProps) => {
    return createContainer({ ...args });
  },
  argTypes: {
    fluid: { control: 'boolean', },
  },
};

export const Fluid = { args: { fluid: true, } };

export const Container = { args: {} };

export const ContainerSM = { args: { maxWidth: 'sm', } };

export const ContainerMD = { args: { maxWidth: 'md', } };

export const ContainerLG = { args: { maxWidth: 'lg', } };

export const ContainerXL = { args: { maxWidth: 'xl', } };

export const ContainerXXL = { args: { maxWidth: 'xxl', } };
