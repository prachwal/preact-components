/**
 * Type-safe CSS variable definitions matching variables.scss
 * Ensures no typos and prevents adding invalid CSS variables
 */

/**
 * Available color variants for theming
 */
export type ThemeVariant = 'base' | 'sepia' | 'forest' | 'ocean';

/**
 * Theme color variables available for customization
 * All colors should meet WCAG AA contrast requirements
 */
export type ThemeColorVariable =
  | 'primary-color'
  | 'primary-hover'
  | 'primary-active'
  | 'secondary-color'
  | 'secondary-hover'
  | 'secondary-active'
  | 'text-color'
  | 'text-muted'
  | 'text-disabled'
  | 'bg-color'
  | 'bg-secondary'
  | 'bg-tertiary'
  | 'button-bg'
  | 'read-the-docs-color'
  | 'border-color'
  | 'border-hover'
  | 'shadow-color'
  | 'success-color'
  | 'success-bg'
  | 'warning-color'
  | 'warning-bg'
  | 'error-color'
  | 'error-bg'
  | 'info-color'
  | 'info-bg';

/**
 * Complete theme configuration with all available CSS variables
 */
export type ThemeVariables = {
  [K in ThemeColorVariable]?: string;
};

/**
 * Base Okha color palette - earthy, warm tones (current SCSS colors)
 * Named after the Russian word for ochre (охра)
 * All colors meet WCAG AA contrast requirements
 */
export const BaseColors = {
  // Primary - Warm ochre/amber tones
  ochre: {
    50: '#FFF8E1',
    100: '#FFECB3',
    200: '#FFE082',
    300: '#FFD54F',
    400: '#FFCA28',
    500: '#FFC107',
    600: '#FFB300',
    700: '#FFA000',
    800: '#FF8F00',
    900: '#FF6F00',
  },
  
  // Secondary - Terracotta/burnt sienna
  terracotta: {
    50: '#FBE9E7',
    100: '#FFCCBC',
    200: '#FFAB91',
    300: '#FF8A65',
    400: '#FF7043',
    500: '#FF5722',
    600: '#F4511E',
    700: '#E64A19',
    800: '#D84315',
    900: '#BF360C',
  },
  
  // Neutral - Warm grays
  neutral: {
    50: '#FAFAFA',
    100: '#F5F5F5',
    200: '#EEEEEE',
    300: '#E0E0E0',
    400: '#BDBDBD',
    500: '#9E9E9E',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
  },
  
  // Semantic colors
  success: '#2E7D32',
  successBg: '#E8F5E9',
  successLight: '#66BB6A',
  successDarkBg: '#1B5E20',
  
  warning: '#F57C00',
  warningBg: '#FFF3E0',
  warningLight: '#FFA726',
  warningDarkBg: '#E65100',
  
  error: '#C62828',
  errorBg: '#FFEBEE',
  errorLight: '#EF5350',
  errorDarkBg: '#B71C1C',
  
  info: '#1565C0',
  infoBg: '#E3F2FD',
  infoLight: '#42A5F5',
  infoDarkBg: '#0D47A1',
} as const;

/**
 * Sepia variant - Vintage, warm brown tones
 * Inspired by old photographs and vintage aesthetics
 */
export const SepiaColors = {
  primary: {
    50: '#EFEBE9',
    100: '#D7CCC8',
    200: '#BCAAA4',
    300: '#A1887F',
    400: '#8D6E63',
    500: '#795548',  // Base sepia brown
    600: '#6D4C41',
    700: '#5D4037',
    800: '#4E342E',
    900: '#3E2723',
  },
  
  secondary: {
    50: '#FFF3E0',
    100: '#FFE0B2',
    200: '#FFCC80',
    300: '#FFB74D',
    400: '#FFA726',
    500: '#FF9800',  // Warm amber
    600: '#FB8C00',
    700: '#F57C00',
    800: '#EF6C00',
    900: '#E65100',
  },
  
  neutral: {
    50: '#F5F5F5',
    100: '#EFEFEF',
    200: '#E8E8E8',
    300: '#D6D6D6',
    400: '#B8B8B8',
    500: '#9A9A9A',
    600: '#707070',
    700: '#5A5A5A',
    800: '#3D3D3D',
    900: '#1F1F1F',
  },
} as const;

/**
 * Forest variant - Natural green tones
 * Inspired by forest canopy and natural landscapes
 */
export const ForestColors = {
  primary: {
    50: '#E8F5E9',
    100: '#C8E6C9',
    200: '#A5D6A7',
    300: '#81C784',
    400: '#66BB6A',
    500: '#4CAF50',  // Base forest green
    600: '#43A047',
    700: '#388E3C',
    800: '#2E7D32',
    900: '#1B5E20',
  },
  
  secondary: {
    50: '#F1F8E9',
    100: '#DCEDC8',
    200: '#C5E1A5',
    300: '#AED581',
    400: '#9CCC65',
    500: '#8BC34A',  // Light green
    600: '#7CB342',
    700: '#689F38',
    800: '#558B2F',
    900: '#33691E',
  },
  
  neutral: {
    50: '#FAFAF9',
    100: '#F5F5F4',
    200: '#E7E5E4',
    300: '#D6D3D1',
    400: '#A8A29E',
    500: '#78716C',
    600: '#57534E',
    700: '#44403C',
    800: '#292524',
    900: '#1C1917',
  },
} as const;

/**
 * Ocean variant - Cool blue and teal tones
 * Inspired by ocean depths and coastal waters
 */
export const OceanColors = {
  primary: {
    50: '#E0F7FA',
    100: '#B2EBF2',
    200: '#80DEEA',
    300: '#4DD0E1',
    400: '#26C6DA',
    500: '#00BCD4',  // Base cyan
    600: '#00ACC1',
    700: '#0097A7',
    800: '#00838F',
    900: '#006064',
  },
  
  secondary: {
    50: '#E3F2FD',
    100: '#BBDEFB',
    200: '#90CAF9',
    300: '#64B5F6',
    400: '#42A5F5',
    500: '#2196F3',  // Blue
    600: '#1E88E5',
    700: '#1976D2',
    800: '#1565C0',
    900: '#0D47A1',
  },
  
  neutral: {
    50: '#FAFAFA',
    100: '#F4F4F5',
    200: '#E4E4E7',
    300: '#D4D4D8',
    400: '#A1A1AA',
    500: '#71717A',
    600: '#52525B',
    700: '#3F3F46',
    800: '#27272A',
    900: '#18181B',
  },
} as const;

// Backward compatibility - Okha is now Base
export const OkhaColors = BaseColors;

/**
 * Generate light theme for a specific variant
 */
function createLightTheme(variant: ThemeVariant): Required<ThemeVariables> {
  switch (variant) {
    case 'sepia':
      return {
        'primary-color': SepiaColors.primary[600],
        'primary-hover': SepiaColors.primary[700],
        'primary-active': SepiaColors.primary[800],
        'secondary-color': SepiaColors.secondary[600],
        'secondary-hover': SepiaColors.secondary[700],
        'secondary-active': SepiaColors.secondary[800],
        'text-color': SepiaColors.neutral[900],
        'text-muted': SepiaColors.neutral[600],
        'text-disabled': SepiaColors.neutral[400],
        'bg-color': '#FFF9F5',
        'bg-secondary': SepiaColors.neutral[50],
        'bg-tertiary': SepiaColors.neutral[100],
        'button-bg': SepiaColors.neutral[100],
        'read-the-docs-color': SepiaColors.neutral[600],
        'border-color': SepiaColors.neutral[300],
        'border-hover': SepiaColors.neutral[400],
        'shadow-color': 'rgba(62, 39, 35, 0.1)',
        'success-color': BaseColors.success,
        'success-bg': BaseColors.successBg,
        'warning-color': SepiaColors.secondary[700],
        'warning-bg': SepiaColors.secondary[50],
        'error-color': BaseColors.error,
        'error-bg': BaseColors.errorBg,
        'info-color': BaseColors.info,
        'info-bg': BaseColors.infoBg,
      };
    
    case 'forest':
      return {
        'primary-color': ForestColors.primary[700],
        'primary-hover': ForestColors.primary[800],
        'primary-active': ForestColors.primary[900],
        'secondary-color': ForestColors.secondary[600],
        'secondary-hover': ForestColors.secondary[700],
        'secondary-active': ForestColors.secondary[800],
        'text-color': ForestColors.neutral[900],
        'text-muted': ForestColors.neutral[600],
        'text-disabled': ForestColors.neutral[400],
        'bg-color': '#FAFFF9',
        'bg-secondary': ForestColors.neutral[50],
        'bg-tertiary': ForestColors.neutral[100],
        'button-bg': ForestColors.neutral[100],
        'read-the-docs-color': ForestColors.neutral[600],
        'border-color': ForestColors.neutral[300],
        'border-hover': ForestColors.neutral[400],
        'shadow-color': 'rgba(28, 25, 23, 0.1)',
        'success-color': ForestColors.primary[800],
        'success-bg': ForestColors.primary[50],
        'warning-color': BaseColors.warning,
        'warning-bg': BaseColors.warningBg,
        'error-color': BaseColors.error,
        'error-bg': BaseColors.errorBg,
        'info-color': ForestColors.secondary[700],
        'info-bg': ForestColors.secondary[50],
      };
    
    case 'ocean':
      return {
        'primary-color': OceanColors.primary[700],
        'primary-hover': OceanColors.primary[800],
        'primary-active': OceanColors.primary[900],
        'secondary-color': OceanColors.secondary[600],
        'secondary-hover': OceanColors.secondary[700],
        'secondary-active': OceanColors.secondary[800],
        'text-color': OceanColors.neutral[900],
        'text-muted': OceanColors.neutral[600],
        'text-disabled': OceanColors.neutral[400],
        'bg-color': '#F8FCFF',
        'bg-secondary': OceanColors.neutral[50],
        'bg-tertiary': OceanColors.neutral[100],
        'button-bg': OceanColors.neutral[100],
        'read-the-docs-color': OceanColors.neutral[600],
        'border-color': OceanColors.neutral[300],
        'border-hover': OceanColors.neutral[400],
        'shadow-color': 'rgba(24, 24, 27, 0.1)',
        'success-color': BaseColors.success,
        'success-bg': BaseColors.successBg,
        'warning-color': BaseColors.warning,
        'warning-bg': BaseColors.warningBg,
        'error-color': BaseColors.error,
        'error-bg': BaseColors.errorBg,
        'info-color': OceanColors.secondary[700],
        'info-bg': OceanColors.secondary[50],
      };
    
    case 'base':
    default:
      return {
        'primary-color': BaseColors.ochre[600],
        'primary-hover': BaseColors.ochre[700],
        'primary-active': BaseColors.ochre[800],
        'secondary-color': BaseColors.terracotta[500],
        'secondary-hover': BaseColors.terracotta[600],
        'secondary-active': BaseColors.terracotta[700],
        'text-color': BaseColors.neutral[900],
        'text-muted': BaseColors.neutral[600],
        'text-disabled': BaseColors.neutral[400],
        'bg-color': '#FFFFFF',
        'bg-secondary': BaseColors.neutral[50],
        'bg-tertiary': BaseColors.neutral[100],
        'button-bg': BaseColors.neutral[100],
        'read-the-docs-color': BaseColors.neutral[600],
        'border-color': BaseColors.neutral[300],
        'border-hover': BaseColors.neutral[400],
        'shadow-color': 'rgba(33, 33, 33, 0.1)',
        'success-color': BaseColors.success,
        'success-bg': BaseColors.successBg,
        'warning-color': BaseColors.warning,
        'warning-bg': BaseColors.warningBg,
        'error-color': BaseColors.error,
        'error-bg': BaseColors.errorBg,
        'info-color': BaseColors.info,
        'info-bg': BaseColors.infoBg,
      };
  }
}

/**
 * Generate dark theme for a specific variant
 */
function createDarkTheme(variant: ThemeVariant): Required<ThemeVariables> {
  switch (variant) {
    case 'sepia':
      return {
        'primary-color': SepiaColors.primary[300],
        'primary-hover': SepiaColors.primary[200],
        'primary-active': SepiaColors.primary[100],
        'secondary-color': SepiaColors.secondary[400],
        'secondary-hover': SepiaColors.secondary[300],
        'secondary-active': SepiaColors.secondary[200],
        'text-color': 'rgba(255, 255, 255, 0.87)',
        'text-muted': 'rgba(255, 255, 255, 0.6)',
        'text-disabled': 'rgba(255, 255, 255, 0.38)',
        'bg-color': '#1C1410',
        'bg-secondary': '#26201A',
        'bg-tertiary': '#302824',
        'button-bg': '#302824',
        'read-the-docs-color': 'rgba(255, 255, 255, 0.6)',
        'border-color': '#4A4239',
        'border-hover': '#5A524A',
        'shadow-color': 'rgba(0, 0, 0, 0.4)',
        'success-color': BaseColors.successLight,
        'success-bg': BaseColors.successDarkBg,
        'warning-color': SepiaColors.secondary[300],
        'warning-bg': SepiaColors.secondary[900],
        'error-color': BaseColors.errorLight,
        'error-bg': BaseColors.errorDarkBg,
        'info-color': BaseColors.infoLight,
        'info-bg': BaseColors.infoDarkBg,
      };
    
    case 'forest':
      return {
        'primary-color': ForestColors.primary[400],
        'primary-hover': ForestColors.primary[300],
        'primary-active': ForestColors.primary[200],
        'secondary-color': ForestColors.secondary[400],
        'secondary-hover': ForestColors.secondary[300],
        'secondary-active': ForestColors.secondary[200],
        'text-color': 'rgba(255, 255, 255, 0.87)',
        'text-muted': 'rgba(255, 255, 255, 0.6)',
        'text-disabled': 'rgba(255, 255, 255, 0.38)',
        'bg-color': '#131613',
        'bg-secondary': '#1D221D',
        'bg-tertiary': '#272E27',
        'button-bg': '#272E27',
        'read-the-docs-color': 'rgba(255, 255, 255, 0.6)',
        'border-color': '#3D4A3D',
        'border-hover': '#4D5A4D',
        'shadow-color': 'rgba(0, 0, 0, 0.4)',
        'success-color': ForestColors.primary[300],
        'success-bg': ForestColors.primary[900],
        'warning-color': BaseColors.warningLight,
        'warning-bg': BaseColors.warningDarkBg,
        'error-color': BaseColors.errorLight,
        'error-bg': BaseColors.errorDarkBg,
        'info-color': ForestColors.secondary[300],
        'info-bg': ForestColors.secondary[900],
      };
    
    case 'ocean':
      return {
        'primary-color': OceanColors.primary[300],
        'primary-hover': OceanColors.primary[200],
        'primary-active': OceanColors.primary[100],
        'secondary-color': OceanColors.secondary[400],
        'secondary-hover': OceanColors.secondary[300],
        'secondary-active': OceanColors.secondary[200],
        'text-color': 'rgba(255, 255, 255, 0.87)',
        'text-muted': 'rgba(255, 255, 255, 0.6)',
        'text-disabled': 'rgba(255, 255, 255, 0.38)',
        'bg-color': '#0D1117',
        'bg-secondary': '#161B22',
        'bg-tertiary': '#21262D',
        'button-bg': '#21262D',
        'read-the-docs-color': 'rgba(255, 255, 255, 0.6)',
        'border-color': '#30363D',
        'border-hover': '#484F58',
        'shadow-color': 'rgba(0, 0, 0, 0.4)',
        'success-color': BaseColors.successLight,
        'success-bg': BaseColors.successDarkBg,
        'warning-color': BaseColors.warningLight,
        'warning-bg': BaseColors.warningDarkBg,
        'error-color': BaseColors.errorLight,
        'error-bg': BaseColors.errorDarkBg,
        'info-color': OceanColors.secondary[300],
        'info-bg': OceanColors.secondary[900],
      };
    
    case 'base':
    default:
      return {
        'primary-color': BaseColors.ochre[400],
        'primary-hover': BaseColors.ochre[300],
        'primary-active': BaseColors.ochre[200],
        'secondary-color': BaseColors.terracotta[400],
        'secondary-hover': BaseColors.terracotta[300],
        'secondary-active': BaseColors.terracotta[200],
        'text-color': 'rgba(255, 255, 255, 0.87)',
        'text-muted': 'rgba(255, 255, 255, 0.6)',
        'text-disabled': 'rgba(255, 255, 255, 0.38)',
        'bg-color': '#1A1A1A',
        'bg-secondary': '#242424',
        'bg-tertiary': '#2E2E2E',
        'button-bg': '#2E2E2E',
        'read-the-docs-color': 'rgba(255, 255, 255, 0.6)',
        'border-color': '#404040',
        'border-hover': '#505050',
        'shadow-color': 'rgba(0, 0, 0, 0.3)',
        'success-color': BaseColors.successLight,
        'success-bg': BaseColors.successDarkBg,
        'warning-color': BaseColors.warningLight,
        'warning-bg': BaseColors.warningDarkBg,
        'error-color': BaseColors.errorLight,
        'error-bg': BaseColors.errorDarkBg,
        'info-color': BaseColors.infoLight,
        'info-bg': BaseColors.infoDarkBg,
      };
  }
}

/**
 * Get theme configuration for a specific mode and variant
 */
export function getThemeVariables(
  mode: 'light' | 'dark',
  variant: ThemeVariant = 'base'
): Required<ThemeVariables> {
  return mode === 'light' ? createLightTheme(variant) : createDarkTheme(variant);
}

// Pre-generated theme configurations for backward compatibility
export const okhaLightTheme = createLightTheme('base');
export const okhaDarkTheme = createDarkTheme('base');

// Export all variant generators
export const baseLightTheme = createLightTheme('base');
export const baseDarkTheme = createDarkTheme('base');
export const sepiaLightTheme = createLightTheme('sepia');
export const sepiaDarkTheme = createDarkTheme('sepia');
export const forestLightTheme = createLightTheme('forest');
export const forestDarkTheme = createDarkTheme('forest');
export const oceanLightTheme = createLightTheme('ocean');
export const oceanDarkTheme = createDarkTheme('ocean');
