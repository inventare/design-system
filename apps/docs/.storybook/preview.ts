import { theme } from './theme';

import "@inventare/tokens/scss/tokens.scss";
import "@inventare/styles/scss/inventare.scss";

import "@inventare/icons/dist/icons.css";

/** @type { import('@storybook/html').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: { theme, },
  },
};

export default preview;
