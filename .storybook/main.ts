import type { StorybookConfig } from '@storybook/preact-vite';

const config: StorybookConfig = {
  stories: [
    "../src/components/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../src/**/*.mdx",
  ],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-themes",
  ],
  framework: {
    name: "@storybook/preact-vite",
    options: {},
  },
  docs: {
    autodocs: true,
  },
};
export default config;