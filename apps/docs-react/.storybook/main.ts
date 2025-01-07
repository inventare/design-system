import type { StorybookConfig } from "@storybook/react-vite";

import { join, dirname } from "path";

import remarkGfm from 'remark-gfm';

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}
const config: StorybookConfig = {
  stories: [
    "../../../packages/react/src/**/*.mdx",
    "../../../packages/react/src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    getAbsolutePath("@storybook/addon-onboarding"),
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@chromatic-com/storybook"),
    getAbsolutePath("@storybook/addon-interactions"),
        {
          name: '@storybook/addon-docs',
          options: {
            mdxPluginOptions: {
              mdxCompileOptions: {
                remarkPlugins: [remarkGfm],
              },
            },
          },
        },
  ],
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  }
};
export default config;
