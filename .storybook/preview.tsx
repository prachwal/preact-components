import type { Preview, Decorator } from '@storybook/preact';
import { withThemeByDataAttribute } from '@storybook/addon-themes';
import { h } from 'preact';
import { ThemeProvider } from '../src/components/theme';
import '../src/styles/index.scss';

const withThemeProvider: Decorator = (Story, context) => {
  const { globals } = context;
  const theme = globals.theme === 'dark' ? 'dark' : 'light';
  const variant = (globals.variant || 'base') as 'base' | 'sepia' | 'forest' | 'ocean';

  return h(
    ThemeProvider,
    { defaultTheme: theme, defaultVariant: variant } as any,
    h('div', { style: { padding: '1rem', backgroundColor: 'var(--bg-color)' } }, h(Story, {}))
  );
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    withThemeByDataAttribute({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
      attributeName: 'data-theme',
    }),
    withThemeProvider,
  ],
  globalTypes: {
    variant: {
      name: 'Theme Variant',
      description: 'Color variant for the theme',
      defaultValue: 'base',
      toolbar: {
        icon: 'paintbrush',
        items: [
          { value: 'base', title: 'Base (Ochre)', left: '🎨' },
          { value: 'sepia', title: 'Sepia (Vintage)', left: '📜' },
          { value: 'forest', title: 'Forest (Nature)', left: '🌲' },
          { value: 'ocean', title: 'Ocean (Cool)', left: '🌊' },
        ],
        showName: true,
      },
    },
  },
};

export default preview;