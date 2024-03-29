import type { StorybookConfig } from "@storybook/react-vite";
const config: StorybookConfig = {
  stories: [
    //"../src/**/*.mdx",
    //"../src/**/*.stories.@(js|jsx|ts|tsx)"
    "../../../packages/tokens/stories/**/*.stories.@(js|jsx|ts|tsx|mdx)",
    "../../../packages/react/**/*.mdx",
    "../../../packages/react/**/*.stories.@(js|jsx|ts|tsx|mdx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
    "@storybook/addon-mdx-gfm",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
