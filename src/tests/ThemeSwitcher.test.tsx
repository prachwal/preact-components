import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/preact';
import { ThemeProvider } from '../components/theme';
import { ThemeSwitcher } from '../components/demo/ThemeSwitcher';

describe('ThemeSwitcher', () => {
  it('renders theme switcher button', () => {
    render(
      <ThemeProvider defaultTheme="system">
        <ThemeSwitcher />
      </ThemeProvider>
    );

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('aria-label', 'Current theme: system. Click to change.');
  });

  it('displays sun icon in light mode', () => {
    render(
      <ThemeProvider defaultTheme="light">
        <ThemeSwitcher />
      </ThemeProvider>
    );

    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label', 'Current theme: light. Click to change.');
    // Sun icon should have circle element
    const svg = button.querySelector('svg');
    expect(svg?.querySelector('circle')).toBeInTheDocument();
  });

  it('displays moon icon in dark mode', () => {
    render(
      <ThemeProvider defaultTheme="dark">
        <ThemeSwitcher />
      </ThemeProvider>
    );

    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label', 'Current theme: dark. Click to change.');
    // Moon icon should have path element (no circle)
    const svg = button.querySelector('svg');
    expect(svg?.querySelector('path')).toBeInTheDocument();
    expect(svg?.querySelector('circle')).not.toBeInTheDocument();
  });

  it('displays monitor icon in system mode', () => {
    render(
      <ThemeProvider defaultTheme="system">
        <ThemeSwitcher />
      </ThemeProvider>
    );

    const button = screen.getByRole('button');
    // Monitor icon should have rect element
    const svg = button.querySelector('svg');
    expect(svg?.querySelector('rect')).toBeInTheDocument();
  });

  it('cycles through themes on click', () => {
    render(
      <ThemeProvider defaultTheme="light">
        <ThemeSwitcher />
      </ThemeProvider>
    );

    const button = screen.getByRole('button');
    
    // Initially light
    expect(button).toHaveAttribute('aria-label', 'Current theme: light. Click to change.');
    
    // Click to dark
    fireEvent.click(button);
    expect(button).toHaveAttribute('aria-label', 'Current theme: dark. Click to change.');
    
    // Click to system
    fireEvent.click(button);
    expect(button).toHaveAttribute('aria-label', 'Current theme: system. Click to change.');
    
    // Click back to light
    fireEvent.click(button);
    expect(button).toHaveAttribute('aria-label', 'Current theme: light. Click to change.');
  });

  it('has proper accessibility attributes', () => {
    render(
      <ThemeProvider defaultTheme="light">
        <ThemeSwitcher />
      </ThemeProvider>
    );

    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('title');
    expect(button).toHaveAttribute('aria-label');
  });
});
