import type { Preview } from "@storybook/react";

import "@inventare/tokens/scss/tokens.scss";
import "@inventare/styles/scss/inventare.scss";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
