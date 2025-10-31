import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/preact';
import { ThemeProvider } from '../components/theme';
import { VariantSelector } from '../components/demo/VariantSelector';

describe('VariantSelector', () => {
  it('renders variant selector button', () => {
    render(
      <ThemeProvider defaultTheme="system" defaultVariant="base">
        <VariantSelector />
      </ThemeProvider>
    );

    const button = screen.getByRole('button', { name: /select color variant/i });
    expect(button).toBeInTheDocument();
  });

  it('displays current variant in button', () => {
    render(
      <ThemeProvider defaultTheme="system" defaultVariant="base">
        <VariantSelector />
      </ThemeProvider>
    );

    expect(screen.getByText('🎨')).toBeInTheDocument();
    expect(screen.getByText('Base')).toBeInTheDocument();
  });

  it('opens dropdown on click', () => {
    render(
      <ThemeProvider defaultTheme="system" defaultVariant="base">
        <VariantSelector />
      </ThemeProvider>
    );

    const button = screen.getByRole('button', { name: /select color variant/i });
    fireEvent.click(button);

    // Dropdown should show all variants
    expect(screen.getByRole('menu')).toBeInTheDocument();
    expect(screen.getAllByRole('menuitem')).toHaveLength(4);
  });

  it('displays all variant options', () => {
    render(
      <ThemeProvider defaultTheme="system" defaultVariant="base">
        <VariantSelector />
      </ThemeProvider>
    );

    const button = screen.getByRole('button', { name: /select color variant/i });
    fireEvent.click(button);

    const menuItems = screen.getAllByRole('menuitem');
    expect(menuItems[0]).toHaveTextContent('🎨');
    expect(menuItems[1]).toHaveTextContent('📜');
    expect(menuItems[2]).toHaveTextContent('🌲');
    expect(menuItems[3]).toHaveTextContent('🌊');
  });

  it('highlights active variant', () => {
    render(
      <ThemeProvider defaultTheme="system" defaultVariant="forest">
        <VariantSelector />
      </ThemeProvider>
    );

    const button = screen.getByRole('button', { name: /select color variant/i });
    fireEvent.click(button);

    const forestOption = screen.getByRole('menuitem', { current: 'true' });
    expect(forestOption).toHaveClass('variant-selector__option--active');
  });

  it('changes variant on option click', () => {
    render(
      <ThemeProvider defaultTheme="system" defaultVariant="base">
        <VariantSelector />
      </ThemeProvider>
    );

    const button = screen.getByRole('button', { name: /select color variant/i });
    fireEvent.click(button);

    const menuItems = screen.getAllByRole('menuitem');
    const oceanOption = menuItems[3]; // Ocean is the 4th option
    fireEvent.click(oceanOption);

    // Dropdown should close
    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
  });

  it('has proper accessibility attributes', () => {
    render(
      <ThemeProvider defaultTheme="system" defaultVariant="base">
        <VariantSelector />
      </ThemeProvider>
    );

    const button = screen.getByRole('button', { name: /select color variant/i });
    expect(button).toHaveAttribute('aria-label');
    expect(button).toHaveAttribute('aria-expanded', 'false');
    expect(button).toHaveAttribute('aria-haspopup', 'true');
  });

  it('updates aria-expanded when opened', () => {
    render(
      <ThemeProvider defaultTheme="system" defaultVariant="base">
        <VariantSelector />
      </ThemeProvider>
    );

    const button = screen.getByRole('button', { name: /select color variant/i });
    expect(button).toHaveAttribute('aria-expanded', 'false');

    fireEvent.click(button);
    expect(button).toHaveAttribute('aria-expanded', 'true');
  });
});
