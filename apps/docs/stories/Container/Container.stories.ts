import { ContainerProps, renderContainer } from './Container';

export default {
  title: 'Layout/Container',
  render: ({ ...args }: ContainerProps) => {
    return renderContainer({ ...args });
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
