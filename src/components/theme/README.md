# Type-Safe Theme System with Color Variants

## Overview

This project uses a **type-safe theme system** with **multiple color variants** - each meeting **WCAG AA accessibility standards**. Choose from warm earth tones (Base/Okha), vintage browns (Sepia), natural greens (Forest), or cool blues (Ocean).

## Features

- ✅ **Strict TypeScript typing** - prevents typos and invalid variable names
- ✅ **WCAG AA compliant** - all color combinations tested for accessibility
- ✅ **4 Color Variants** - base, sepia, forest, ocean
- ✅ **Light/Dark modes** - each variant has light and dark themes
- ✅ **System detection** - automatic theme based on OS preferences
- ✅ **Runtime switching** - change variants and modes dynamically
- ✅ **Zero mistakes** - TypeScript autocomplete for all CSS variables

## Quick Start

### Basic Usage with Default Variant (Base)

```tsx
import { ThemeProvider } from '@/components';

function App() {
  return (
    <ThemeProvider defaultTheme="system" defaultVariant="base">
      <YourApp />
    </ThemeProvider>
  );
}
```

### Switching Color Variants

```tsx
import { ThemeProvider, useTheme } from '@/components';
import type { ThemeVariant } from '@/components';

function VariantSwitcher() {
  const { variant, setVariant } = useTheme();

  return (
    <div>
      <button onClick={() => setVariant('base')}>🎨 Base</button>
      <button onClick={() => setVariant('sepia')}>📜 Sepia</button>
      <button onClick={() => setVariant('forest')}>🌲 Forest</button>
      <button onClick={() => setVariant('ocean')}>🌊 Ocean</button>
      <p>Current: {variant}</p>
    </div>
  );
}
```

## Color Variants

### 🎨 Base (Okha) - Default

Warm, earthy tones inspired by natural ochre pigments.

- **Use cases**: Creative apps, artistic content, warm designs
- **Primary**: Warm ochre/amber (#FFB300 light, #FFCA28 dark)
- **Secondary**: Terracotta/burnt sienna (#FF5722 light, #FF7043 dark)
- **Feel**: Warm, creative, earthy

### 📜 Sepia

Vintage brown tones reminiscent of old photographs.

- **Use cases**: Historical content, vintage themes, nostalgic designs
- **Primary**: Sepia brown (#6D4C41 light, #A1887F dark)
- **Secondary**: Warm amber (#FB8C00 light, #FFA726 dark)
- **Feel**: Nostalgic, vintage, timeless

### 🌲 Forest

Natural green tones inspired by forest canopies.

- **Use cases**: Environmental apps, health content, nature themes
- **Primary**: Forest green (#388E3C light, #66BB6A dark)
- **Secondary**: Light green (#7CB342 light, #9CCC65 dark)
- **Feel**: Natural, calm, eco-friendly

### 🌊 Ocean

Cool blue and cyan tones inspired by coastal waters.

- **Use cases**: Tech apps, corporate sites, professional content
- **Primary**: Cyan (#0097A7 light, #4DD0E1 dark)
- **Secondary**: Blue (#1E88E5 light, #42A5F5 dark)
- **Feel**: Professional, tech-forward, trustworthy

### Custom Colors with Type Safety

```tsx
import { ThemeProvider, BaseColors, type ThemeVariables } from '@/components';

// ✅ TypeScript will autocomplete and validate all variable names
const customTheme: Partial<ThemeVariables> = {
  'primary-color': BaseColors.ochre[700],
  'secondary-color': BaseColors.terracotta[600],
  'success-color': '#00AA00',
};

function App() {
  return (
    <ThemeProvider 
      defaultTheme="light"
      defaultVariant="base"
      customVariables={customTheme}
    >
      <YourApp />
    </ThemeProvider>
  );
}
```

### Dynamic Variant Switching

```tsx
import { useTheme, ForestColors, OceanColors } from '@/components';

function ThemeCustomizer() {
  const { variant, setVariant, setCustomVariables } = useTheme();

  const applyCustomForest = () => {
    setVariant('forest');
    setCustomVariables({
      'primary-color': ForestColors.primary[600],
    });
  };

  return (
    <div>
      <button onClick={() => setVariant('sepia')}>Vintage Look</button>
      <button onClick={applyCustomForest}>Custom Forest</button>
    </div>
  );
}
```

## API Reference

### ThemeProvider Props

```typescript
interface ThemeProviderProps {
  children: ComponentChild;
  defaultTheme?: 'light' | 'dark' | 'system'; // Default: 'system'
  defaultVariant?: ThemeVariant;              // Default: 'base'
  customVariables?: Partial<ThemeVariables>;  // Type-safe overrides
}

type ThemeVariant = 'base' | 'sepia' | 'forest' | 'ocean';
```

### useTheme Hook

```typescript
interface ThemeContextValue {
  theme: 'light' | 'dark' | 'system';
  setTheme: (theme: Theme) => void;
  actualTheme: 'light' | 'dark';              // Resolved 'system' value
  variant: ThemeVariant;
  setVariant: (variant: ThemeVariant) => void;
  customVariables?: Partial<ThemeVariables>;
  setCustomVariables: (vars: Partial<ThemeVariables>) => void;
}
```

## Color Palettes by Variant

### Base/Okha Colors

```typescript
import { BaseColors } from '@/components';

BaseColors.ochre[50-900]      // Warm ochre/amber scale
BaseColors.terracotta[50-900] // Terracotta/burnt sienna scale
BaseColors.neutral[50-900]    // Warm grays
BaseColors.success            // Semantic colors
```

### Sepia Colors

```typescript
import { SepiaColors } from '@/components';

SepiaColors.primary[50-900]   // Brown scale
SepiaColors.secondary[50-900] // Amber scale
SepiaColors.neutral[50-900]   // Neutral grays
```

### Forest Colors

```typescript
import { ForestColors } from '@/components';

ForestColors.primary[50-900]   // Green scale
ForestColors.secondary[50-900] // Light green scale
ForestColors.neutral[50-900]   // Stone grays
```

### Ocean Colors

```typescript
import { OceanColors } from '@/components';

OceanColors.primary[50-900]   // Cyan scale
OceanColors.secondary[50-900] // Blue scale
OceanColors.neutral[50-900]   // Cool grays
```

## Available CSS Variables

All variables are type-safe and autocompleted by TypeScript:

### Colors

- `primary-color` - Main brand color
- `primary-hover` - Hover state for primary
- `primary-active` - Active/pressed state for primary
- `secondary-color` - Secondary brand color
- `secondary-hover` - Hover state for secondary
- `secondary-active` - Active state for secondary

### Text

- `text-color` - Primary text color
- `text-muted` - Muted/secondary text
- `text-disabled` - Disabled text

### Backgrounds

- `bg-color` - Main background
- `bg-secondary` - Secondary background (cards, panels)
- `bg-tertiary` - Tertiary background (nested elements)
- `button-bg` - Default button background

### Borders & Effects

- `border-color` - Default border color
- `border-hover` - Border color on hover
- `shadow-color` - Box shadow color

### Semantic States

- `success-color` / `success-bg`
- `warning-color` / `warning-bg`
- `error-color` / `error-bg`
- `info-color` / `info-bg`

## Usage in CSS/SCSS

```scss
.my-component {
  color: var(--text-color);
  background: var(--bg-color);
  border: 1px solid var(--border-color);
  
  &:hover {
    border-color: var(--primary-color);
  }
}
```

## Type Safety Examples

### ✅ Correct - TypeScript will validate

```typescript
import { type ThemeVariables, OkhaColors } from '@/components';

const validTheme: Partial<ThemeVariables> = {
  'primary-color': OkhaColors.ochre[700],     // ✅ Valid
  'text-color': '#1A1A1A',                     // ✅ Valid
  'border-color': OkhaColors.neutral[300],    // ✅ Valid
};
```

### ❌ Incorrect - TypeScript will catch errors

```typescript
const invalidTheme: Partial<ThemeVariables> = {
  'primry-color': '#FF0000',        // ❌ Error: Typo in variable name
  'custom-variable': '#00FF00',     // ❌ Error: Not a valid theme variable
  'background': '#FFFFFF',          // ❌ Error: Should be 'bg-color'
};
```

## Accessibility (WCAG AA)

All color combinations in all variants meet WCAG AA standards:

- **Normal text (16px)**: Minimum contrast ratio of 4.5:1
- **Large text (18px+)**: Minimum contrast ratio of 3:1
- **Interactive elements**: Clear focus indicators
- **Color blindness**: Tested for deuteranopia, protanopia, tritanopia

## Examples

See example files in `src/examples/`:

- `variant-examples.tsx` - Color variant switching and usage
- `theme-customization-example.tsx` - Custom theme configurations

## Best Practices

1. **Choose appropriate variant** - Match your app's purpose and audience
2. **Use type-safe variables** - Import `ThemeVariables` and `ThemeVariant` types
3. **Prefer CSS variables** - Use `var(--primary-color)` in SCSS
4. **Persist user choice** - Save theme and variant preferences in localStorage
5. **Test contrast** - Verify WCAG AA compliance for custom colors

## Migration from Old Theme System

Old system:

```typescript
// ❌ No type safety, easy to make mistakes
const theme = {
  '--primary': '#646cff',
  '--primry-color': '#FF0000',  // Typo not caught!
};
```

New system:

```typescript
// ✅ Full type safety and autocomplete
import { type ThemeVariables } from '@/components';

const theme: Partial<ThemeVariables> = {
  'primary-color': '#646cff',
  'primry-color': '#FF0000',  // Error caught at compile time!
};
```

## License

MIT
