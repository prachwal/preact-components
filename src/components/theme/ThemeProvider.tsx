import { createContext, createElement, useContext, useEffect, useState } from 'preact/compat';
import type { ComponentChild } from 'preact';
import { 
  type ThemeVariables,
  type ThemeVariant,
  getThemeVariables,
} from './theme-types';

export type Theme = 'light' | 'dark' | 'system';

interface ThemeContextValue {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  actualTheme: 'light' | 'dark';
  variant: ThemeVariant;
  setVariant: (variant: ThemeVariant) => void;
  customVariables?: Partial<ThemeVariables>;
  setCustomVariables: (variables: Partial<ThemeVariables>) => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

function getSystemTheme(): 'light' | 'dark' {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

/**
 * Apply theme variables to document root with optional overrides
 * Type-safe: only allows valid CSS variable names from ThemeVariables
 */
function applyTheme(
  theme: 'light' | 'dark', 
  variant: ThemeVariant,
  customVariables?: Partial<ThemeVariables>
) {
  const baseTheme = getThemeVariables(theme, variant);
  const themeVars = { ...baseTheme, ...customVariables };
  const root = document.documentElement;
  
  // Set theme variant as data attribute for CSS hooks
  root.setAttribute('data-theme', theme);
  root.setAttribute('data-variant', variant);
  
  Object.entries(themeVars).forEach(([key, value]) => {
    root.style.setProperty(`--${key}`, value);
  });
}

interface ThemeProviderProps {
  children: ComponentChild;
  defaultTheme?: Theme;
  /**
   * Color variant to use (base, sepia, forest, ocean)
   * @default 'base'
   */
  defaultVariant?: ThemeVariant;
  /**
   * Custom CSS variable overrides
   * Type-safe: only accepts valid ThemeColorVariable keys
   */
  customVariables?: Partial<ThemeVariables>;
}

export function ThemeProvider({ 
  children, 
  defaultTheme = 'system',
  defaultVariant = 'base',
  customVariables: initialCustomVariables
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(defaultTheme);
  const [variant, setVariantState] = useState<ThemeVariant>(defaultVariant);
  const [customVariables, setCustomVariablesState] = useState<Partial<ThemeVariables> | undefined>(
    initialCustomVariables
  );

  const actualTheme = theme === 'system' ? getSystemTheme() : theme;

  useEffect(() => {
    applyTheme(actualTheme, variant, customVariables);
  }, [actualTheme, variant, customVariables]);

  useEffect(() => {
    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = () => {
        applyTheme(getSystemTheme(), variant, customVariables);
      };
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, [theme, variant, customVariables]);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  const setVariant = (newVariant: ThemeVariant) => {
    setVariantState(newVariant);
  };

  const setCustomVariables = (variables: Partial<ThemeVariables>) => {
    setCustomVariablesState(variables);
  };

  const value: ThemeContextValue = {
    theme,
    setTheme,
    actualTheme,
    variant,
    setVariant,
    customVariables,
    setCustomVariables
  };

  return createElement(ThemeContext.Provider, { value }, children);
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

// Re-export types and utilities for convenience
export type { ThemeVariables, ThemeVariant } from './theme-types';
export { 
  BaseColors,
  SepiaColors,
  ForestColors,
  OceanColors,
  OkhaColors,
  getThemeVariables,
  baseLightTheme,
  baseDarkTheme,
  sepiaLightTheme,
  sepiaDarkTheme,
  forestLightTheme,
  forestDarkTheme,
  oceanLightTheme,
  oceanDarkTheme,
  // Backward compatibility
  okhaLightTheme,
  okhaDarkTheme,
} from './theme-types';