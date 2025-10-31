/**
 * Example: Using Color Variants
 * 
 * Demonstrates how to switch between different color variants:
 * - base (Okha - warm ochre/terracotta)
 * - sepia (vintage brown tones)
 * - forest (natural green tones)
 * - ocean (cool blue/cyan tones)
 */

import { ThemeProvider, useTheme, Button, Div, Heading, Paragraph } from '@/components';
import type { ThemeVariant } from '@/components';

/**
 * Variant Switcher Component
 */
export function VariantSwitcher() {
  const { variant, setVariant, actualTheme } = useTheme();

  const variants: Array<{ id: ThemeVariant; label: string; emoji: string }> = [
    { id: 'base', label: 'Base (Okha)', emoji: '🎨' },
    { id: 'sepia', label: 'Sepia', emoji: '📜' },
    { id: 'forest', label: 'Forest', emoji: '🌲' },
    { id: 'ocean', label: 'Ocean', emoji: '🌊' },
  ];

  return (
    <Div className="mb-4">
      <Heading level={3}>Choose Color Variant</Heading>
      <Div className="flex gap-2 justify-center mb-2">
        {variants.map((v) => (
          <Button
            key={v.id}
            size="sm"
            variant={variant === v.id ? 'primary' : undefined}
            onClick={() => setVariant(v.id)}
          >
            {v.emoji} {v.label}
          </Button>
        ))}
      </Div>
      <Paragraph className="p-small p-muted">
        Active: {actualTheme} mode, {variant} variant
      </Paragraph>
    </Div>
  );
}

/**
 * App with Multiple Variants
 */
export function AppWithVariants() {
  return (
    <ThemeProvider defaultTheme="system" defaultVariant="base">
      <Div className="container">
        <Heading level={1}>Theme Variant Demo</Heading>
        
        <VariantSwitcher />
        
        <Div className="mt-4">
          <Heading level={2}>Variant Descriptions</Heading>
          
          <Div className="mt-3">
            <Heading level={3}>🎨 Base (Okha)</Heading>
            <Paragraph>
              Warm, earthy tones inspired by natural ochre pigments. 
              Perfect for creative and artistic applications.
            </Paragraph>
          </Div>
          
          <Div className="mt-3">
            <Heading level={3}>📜 Sepia</Heading>
            <Paragraph>
              Vintage brown tones reminiscent of old photographs. 
              Ideal for historical, vintage, or nostalgic themes.
            </Paragraph>
          </Div>
          
          <Div className="mt-3">
            <Heading level={3}>🌲 Forest</Heading>
            <Paragraph>
              Natural green tones inspired by forest canopies. 
              Great for environmental, health, or nature-focused content.
            </Paragraph>
          </Div>
          
          <Div className="mt-3">
            <Heading level={3}>🌊 Ocean</Heading>
            <Paragraph>
              Cool blue and cyan tones inspired by coastal waters. 
              Perfect for tech, corporate, or professional applications.
            </Paragraph>
          </Div>
        </Div>
      </Div>
    </ThemeProvider>
  );
}

/**
 * Using Variant Palettes Directly
 */
import { BaseColors, SepiaColors, ForestColors, OceanColors } from '@/components';

export function ColorPaletteShowcase() {
  return (
    <Div>
      <Heading level={2}>Available Color Palettes</Heading>
      
      {/* Base/Okha Colors */}
      <Div className="mt-3">
        <Heading level={3}>Base (Okha) Palette</Heading>
        <Paragraph>Primary: {BaseColors.ochre[600]}</Paragraph>
        <Paragraph>Secondary: {BaseColors.terracotta[500]}</Paragraph>
      </Div>
      
      {/* Sepia Colors */}
      <Div className="mt-3">
        <Heading level={3}>Sepia Palette</Heading>
        <Paragraph>Primary: {SepiaColors.primary[600]}</Paragraph>
        <Paragraph>Secondary: {SepiaColors.secondary[600]}</Paragraph>
      </Div>
      
      {/* Forest Colors */}
      <Div className="mt-3">
        <Heading level={3}>Forest Palette</Heading>
        <Paragraph>Primary: {ForestColors.primary[700]}</Paragraph>
        <Paragraph>Secondary: {ForestColors.secondary[600]}</Paragraph>
      </Div>
      
      {/* Ocean Colors */}
      <Div className="mt-3">
        <Heading level={3}>Ocean Palette</Heading>
        <Paragraph>Primary: {OceanColors.primary[700]}</Paragraph>
        <Paragraph>Secondary: {OceanColors.secondary[600]}</Paragraph>
      </Div>
    </Div>
  );
}

/**
 * Persisting Variant Choice
 */
export function VariantWithPersistence() {
  const { variant, setVariant } = useTheme();

  const handleVariantChange = (newVariant: ThemeVariant) => {
    setVariant(newVariant);
    localStorage.setItem('color-variant', newVariant);
  };

  // On mount, load saved variant
  // useEffect(() => {
  //   const saved = localStorage.getItem('color-variant') as ThemeVariant | null;
  //   if (saved) setVariant(saved);
  // }, []);

  return (
    <Div>
      <Button onClick={() => handleVariantChange('sepia')}>
        Switch to Sepia
      </Button>
      <Paragraph>Current variant: {variant}</Paragraph>
    </Div>
  );
}

/**
 * Programmatic Theme Generation
 */
import { getThemeVariables } from '@/components';

export function ProgrammaticThemeExample() {
  // Get theme variables for any combination
  const lightSepia = getThemeVariables('light', 'sepia');
  const darkForest = getThemeVariables('dark', 'forest');
  const lightOcean = getThemeVariables('light', 'ocean');

  console.log('Light Sepia Primary:', lightSepia['primary-color']);
  console.log('Dark Forest Primary:', darkForest['primary-color']);
  console.log('Light Ocean Primary:', lightOcean['primary-color']);

  return (
    <Div>
      <Heading level={2}>Programmatic Access</Heading>
      <Paragraph>
        Use getThemeVariables(mode, variant) to get theme configuration
      </Paragraph>
    </Div>
  );
}
