import { createSpinner } from './Spinner';

export default {
    title: 'Inventare/Spinner',
    tags: ['autodocs'],
    render: ({ ...args }) => {
        return createSpinner({ ...args });
    },
    argTypes: {},
};

export const Default = { args: {} };
