/**
 * Example: Type-safe Theme Customization
 * 
 * This file demonstrates how to use the type-safe theme system
 * with Okha color palette and custom variable overrides.
 */

import { ThemeProvider, OkhaColors, useTheme, type ThemeVariables } from '@/components';

// ✅ CORRECT: Using predefined Okha colors
export const customThemeExample1: Partial<ThemeVariables> = {
  'primary-color': OkhaColors.ochre[700],
  'secondary-color': OkhaColors.terracotta[600],
  'success-color': OkhaColors.success,
};

// ✅ CORRECT: Custom hex colors
export const customThemeExample2: Partial<ThemeVariables> = {
  'primary-color': '#FF5722',
  'primary-hover': '#E64A19',
  'bg-color': '#FAFAFA',
};

// ✅ CORRECT: Partial overrides - only what you need
export const customThemeExample3: Partial<ThemeVariables> = {
  'text-color': '#1A1A1A',
  'border-color': OkhaColors.neutral[300],
};

// ❌ WRONG: TypeScript will catch this error
// const wrongExample: Partial<ThemeVariables> = {
//   'wrong-variable-name': '#FF0000', // Error: Object literal may only specify known properties
// };

/**
 * Usage in App component
 */
export function AppWithCustomTheme() {
  return (
    <ThemeProvider 
      defaultTheme="light"
      customVariables={customThemeExample1}
    >
      <div>Your app components</div>
    </ThemeProvider>
  );
}

/**
 * Dynamic theme changes at runtime
 */
export function DynamicThemeExample() {
  const { setCustomVariables, actualTheme } = useTheme();

  const switchToWarmTheme = () => {
    setCustomVariables({
      'primary-color': OkhaColors.ochre[600],
      'secondary-color': OkhaColors.terracotta[500],
      'bg-color': actualTheme === 'light' ? '#FFF8E1' : '#2E2E2E',
    });
  };

  const switchToCoolTheme = () => {
    setCustomVariables({
      'primary-color': '#1565C0',
      'secondary-color': '#42A5F5',
      'info-color': '#0D47A1',
    });
  };

  return (
    <div>
      <button onClick={switchToWarmTheme}>Warm Theme</button>
      <button onClick={switchToCoolTheme}>Cool Theme</button>
    </div>
  );
}

/**
 * Using Okha color palette directly in CSS classes
 * Note: In production, prefer using CSS classes over inline styles
 */
export function ColorPaletteExample() {
  const lightOchreStyle = { backgroundColor: OkhaColors.ochre[100] };
  const terracottaStyle = { backgroundColor: OkhaColors.terracotta[500] };
  const darkNeutralStyle = { backgroundColor: OkhaColors.neutral[800] };
  const successStyle = { color: OkhaColors.success };
  const errorStyle = { color: OkhaColors.error };

  return (
    <div>
      <div style={lightOchreStyle}>
        Light Ochre Background
      </div>
      
      <div style={terracottaStyle}>
        Terracotta Background
      </div>
      
      <div style={darkNeutralStyle}>
        Dark Neutral Background
      </div>
      
      <div style={successStyle}>
        Success Message
      </div>
      
      <div style={errorStyle}>
        Error Message
      </div>
    </div>
  );
}

/**
 * Available Okha Color Scales:
 * 
 * OkhaColors.ochre[50-900]       - Primary warm ochre/amber tones
 * OkhaColors.terracotta[50-900]  - Secondary terracotta/burnt sienna
 * OkhaColors.neutral[50-900]     - Warm grays
 * OkhaColors.success             - WCAG AA compliant green
 * OkhaColors.warning             - WCAG AA compliant orange
 * OkhaColors.error               - WCAG AA compliant red
 * OkhaColors.info                - WCAG AA compliant blue
 * OkhaColors.successBg           - Light green background
 * OkhaColors.warningBg           - Light orange background
 * OkhaColors.errorBg             - Light red background
 * OkhaColors.infoBg              - Light blue background
 */
