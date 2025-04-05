import type { StoryObj } from '@storybook/react';
import {
  FormRow,
  FormLabel,
  FormControl,
  FormInput,
  Button,
} from '../../../../packages/react/src';

const meta = {
  title: 'Forms/FormRow',
  render: () => (
    <>
      <FormRow>
        <FormControl>
          <FormLabel htmlFor="email">E-mail</FormLabel>
          <FormInput id="email" type="email" placeholder='example@example.com' />
        </FormControl>
      </FormRow>
      <FormRow>
        <FormControl>
          <FormLabel htmlFor="password">Senha</FormLabel>
          <FormInput id="password" type="password" />
        </FormControl>
      </FormRow>
      <FormRow>
        <Button>Entrar</Button>
      </FormRow>
    </>
  ),
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  },
};
