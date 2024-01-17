import type { Preview } from "@storybook/react";

import "@inventare/styles/scss/inventare.scss";
import "@inventare/tokens/scss/tokens.scss";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
