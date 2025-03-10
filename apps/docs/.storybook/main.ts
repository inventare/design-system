import { join, dirname } from "path";
import remarkGfm from 'remark-gfm';

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")));
}

const getStorybookRefs = (configType: string) => {
  if (configType == 'DEVELOPMENT') {
    return {
      react: {
        title: 'React (localhost:7006)',
        url: 'http://localhost:7006/',
      },
    };
  }
  return {
    react: {
      title: 'React Library',
      url: 'react',
      expanded: false,
    }
  }
}

/** @type { import('@storybook/html-vite').StorybookConfig } */
const config = {
  watchOptions: {
    ignored: /node_modules/,
  },
  stories: [
    // Architecture Decision Records
    "../architecture-decision-records/*.mdx",
    // TOKENS
    "../../../packages/tokens/stories/**/*.mdx",
    // SCSS Styles
    "../../../packages/styles/**/*.mdx",
    "../../../packages/styles/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    // VANILLA JAVASCRIPT COMPONENTS
    "../../../packages/vanilla/**/*.mdx",
    "../../../packages/vanilla/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-a11y"),
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
    name: getAbsolutePath("@storybook/html-vite"),
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  refs: (config, { configType = '' }) => {
    return getStorybookRefs(configType)
  },
};
export default config;
