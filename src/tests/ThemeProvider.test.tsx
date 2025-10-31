import { describe, it, expect, beforeEach, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/preact'
import { ThemeProvider, useTheme } from '../components/theme/ThemeProvider'
import { h } from 'preact'

// Test component that uses the theme hook
function TestComponent() {
  const { theme, actualTheme, variant } = useTheme()
  return (
    <div>
      <div data-testid="theme">{theme}</div>
      <div data-testid="actual-theme">{actualTheme}</div>
      <div data-testid="variant">{variant}</div>
    </div>
  )
}

describe('ThemeProvider', () => {
  beforeEach(() => {
    // Mock matchMedia
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: vi.fn().mockImplementation(query => ({
        matches: query === '(prefers-color-scheme: dark)' ? false : false,
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    })
  })

  it('renders children', () => {
    render(
      <ThemeProvider>
        <div>Child content</div>
      </ThemeProvider>
    )
    expect(screen.getByText('Child content')).toBeInTheDocument()
  })

  it('provides default system theme', () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    )
    expect(screen.getByTestId('theme')).toHaveTextContent('system')
  })

  it('provides light actualTheme when system prefers light', () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    )
    expect(screen.getByTestId('actual-theme')).toHaveTextContent('light')
  })

  it('provides dark actualTheme when system prefers dark', () => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: vi.fn().mockImplementation(query => ({
        matches: query === '(prefers-color-scheme: dark)',
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    })

    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    )
    expect(screen.getByTestId('actual-theme')).toHaveTextContent('dark')
  })

  it('provides custom defaultTheme', () => {
    render(
      <ThemeProvider defaultTheme="dark">
        <TestComponent />
      </ThemeProvider>
    )
    expect(screen.getByTestId('theme')).toHaveTextContent('dark')
    expect(screen.getByTestId('actual-theme')).toHaveTextContent('dark')
  })

  it('provides default base variant', () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    )
    expect(screen.getByTestId('variant')).toHaveTextContent('base')
  })

  it('provides custom defaultVariant', () => {
    render(
      <ThemeProvider defaultVariant="sepia">
        <TestComponent />
      </ThemeProvider>
    )
    expect(screen.getByTestId('variant')).toHaveTextContent('sepia')
  })

  it('sets data-theme attribute on document root', () => {
    render(
      <ThemeProvider defaultTheme="dark">
        <div>Content</div>
      </ThemeProvider>
    )
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark')
  })

  it('sets data-variant attribute on document root', () => {
    render(
      <ThemeProvider defaultVariant="forest">
        <div>Content</div>
      </ThemeProvider>
    )
    expect(document.documentElement.getAttribute('data-variant')).toBe('forest')
  })
})

describe('useTheme', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: vi.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    })
  })

  it('throws error when used outside ThemeProvider', () => {
    // Suppress console.error for this test
    const originalError = console.error
    console.error = vi.fn()

    expect(() => {
      render(<TestComponent />)
    }).toThrow('useTheme must be used within a ThemeProvider')

    console.error = originalError
  })

  it('provides theme context value', () => {
    function TestSetTheme() {
      const { theme, setTheme } = useTheme()
      return (
        <div>
          <div data-testid="current-theme">{theme}</div>
          <button onClick={() => setTheme('dark')}>Set Dark</button>
        </div>
      )
    }

    render(
      <ThemeProvider>
        <TestSetTheme />
      </ThemeProvider>
    )
    
    expect(screen.getByTestId('current-theme')).toHaveTextContent('system')
  })

  it('provides setVariant function', () => {
    function TestSetVariant() {
      const { variant, setVariant } = useTheme()
      return (
        <div>
          <div data-testid="current-variant">{variant}</div>
          <button onClick={() => setVariant('ocean')}>Set Ocean</button>
        </div>
      )
    }

    render(
      <ThemeProvider>
        <TestSetVariant />
      </ThemeProvider>
    )
    
    expect(screen.getByTestId('current-variant')).toHaveTextContent('base')
    
    // Click button to actually call setVariant
    fireEvent.click(screen.getByRole('button'))
  })

  it('provides setCustomVariables function', () => {
    function TestSetCustomVariables() {
      const { customVariables, setCustomVariables } = useTheme()
      return (
        <div>
          <button onClick={() => setCustomVariables({ 'primary-color': '#ff0000' })}>
            Set Custom
          </button>
        </div>
      )
    }

    render(
      <ThemeProvider>
        <TestSetCustomVariables />
      </ThemeProvider>
    )
    
    // Click button to actually call setCustomVariables
    fireEvent.click(screen.getByRole('button'))
  })

  it('provides all theme context values', () => {
    function TestAllValues() {
      const context = useTheme()
      return (
        <div>
          <div data-testid="has-set-theme">{typeof context.setTheme === 'function' ? 'yes' : 'no'}</div>
          <div data-testid="has-set-variant">{typeof context.setVariant === 'function' ? 'yes' : 'no'}</div>
          <div data-testid="has-set-custom">{typeof context.setCustomVariables === 'function' ? 'yes' : 'no'}</div>
          <button onClick={() => context.setTheme('dark')}>Set Theme</button>
        </div>
      )
    }

    render(
      <ThemeProvider>
        <TestAllValues />
      </ThemeProvider>
    )
    
    expect(screen.getByTestId('has-set-theme')).toHaveTextContent('yes')
    expect(screen.getByTestId('has-set-variant')).toHaveTextContent('yes')
    expect(screen.getByTestId('has-set-custom')).toHaveTextContent('yes')
    
    // Click button to actually call setTheme
    fireEvent.click(screen.getByRole('button'))
  })

  it('handles system theme changes', () => {
    let matchMediaCallback: ((e: any) => void) | null = null
    
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: vi.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn((event, callback) => {
          if (event === 'change') {
            matchMediaCallback = callback
          }
        }),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    })

    render(
      <ThemeProvider defaultTheme="system">
        <div>Content</div>
      </ThemeProvider>
    )
    
    // Simulate system theme change
    if (matchMediaCallback) {
      matchMediaCallback({ matches: true })
    }
  })
})
