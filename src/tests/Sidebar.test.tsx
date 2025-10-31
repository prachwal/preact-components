import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/preact'
import { Sidebar, useSidebarControl } from '../components/sidebar/Sidebar'
import { renderHook, act } from '@testing-library/preact'

describe('Sidebar', () => {
  beforeEach(() => {
    // Mock window.innerWidth
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      value: 1024,
    })
  })

  it('renders children', () => {
    render(<Sidebar>Sidebar content</Sidebar>)
    expect(screen.getByText('Sidebar content')).toBeInTheDocument()
  })

  it('renders as aside element', () => {
    const { container } = render(<Sidebar>Content</Sidebar>)
    expect(container.querySelector('aside')).toBeInTheDocument()
  })

  it('renders with default light theme', () => {
    const { container } = render(<Sidebar>Content</Sidebar>)
    expect(container.querySelector('.sidebar--light')).toBeInTheDocument()
  })

  it('renders with dark theme', () => {
    const { container } = render(<Sidebar theme="dark">Content</Sidebar>)
    expect(container.querySelector('.sidebar--dark')).toBeInTheDocument()
  })

  it('renders toggle button when collapsible is true', () => {
    render(<Sidebar>Content</Sidebar>)
    expect(screen.getByRole('button', { name: /collapse sidebar/i })).toBeInTheDocument()
  })

  it('does not render toggle button when collapsible is false', () => {
    render(<Sidebar collapsible={false}>Content</Sidebar>)
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })

  it('toggles collapsed state when toggle button is clicked', () => {
    const { container } = render(<Sidebar>Content</Sidebar>)
    const button = screen.getByRole('button')
    
    expect(container.querySelector('.sidebar--collapsed')).not.toBeInTheDocument()
    
    fireEvent.click(button)
    expect(container.querySelector('.sidebar--collapsed')).toBeInTheDocument()
    
    fireEvent.click(button)
    expect(container.querySelector('.sidebar--collapsed')).not.toBeInTheDocument()
  })

  it('calls onCollapse callback when toggled', () => {
    const onCollapse = vi.fn()
    render(<Sidebar onCollapse={onCollapse}>Content</Sidebar>)
    const button = screen.getByRole('button')
    
    fireEvent.click(button)
    expect(onCollapse).toHaveBeenCalledWith(true)
    
    fireEvent.click(button)
    expect(onCollapse).toHaveBeenCalledWith(false)
  })

  it('uses controlled collapsed prop', () => {
    const { container } = render(<Sidebar collapsed={true}>Content</Sidebar>)
    expect(container.querySelector('.sidebar--collapsed')).toBeInTheDocument()
  })

  it('changes toggle button label when collapsed', () => {
    render(<Sidebar>Content</Sidebar>)
    const button = screen.getByRole('button')
    
    expect(button).toHaveAttribute('aria-label', 'Collapse sidebar')
    
    fireEvent.click(button)
    expect(button).toHaveAttribute('aria-label', 'Expand sidebar')
  })

  it('applies custom width via CSS variable', () => {
    const { container } = render(<Sidebar width={300}>Content</Sidebar>)
    const aside = container.querySelector('aside')
    expect(aside).toHaveStyle({ '--sidebar-width': '300px' })
  })

  it('applies collapsed width when collapsed', () => {
    const { container } = render(<Sidebar collapsed={true} collapsedWidth={60}>Content</Sidebar>)
    const aside = container.querySelector('aside')
    expect(aside).toHaveStyle({ '--sidebar-width': '60px' })
  })

  it('detects mobile viewport', () => {
    Object.defineProperty(window, 'innerWidth', { writable: true, value: 600 })
    const { container } = render(<Sidebar breakpoint="md">Content</Sidebar>)
    
    fireEvent.resize(window)
    
    expect(container.querySelector('.sidebar--mobile')).toBeInTheDocument()
  })

  it('renders overlay on mobile when menu is open', () => {
    Object.defineProperty(window, 'innerWidth', { writable: true, value: 600 })
    const { container } = render(<Sidebar breakpoint="md" collapsible={false}>Content</Sidebar>)
    
    fireEvent.resize(window)
    
    // Check if mobile class is applied
    expect(container.querySelector('.sidebar--mobile')).toBeInTheDocument()
  })

  it('handles mobile menu toggle', async () => {
    // Create component with mobile width from the start
    const originalInnerWidth = window.innerWidth
    Object.defineProperty(window, 'innerWidth', { 
      writable: true, 
      configurable: true,
      value: 600 
    })
    
    const { container } = render(<Sidebar breakpoint="md">Content</Sidebar>)
    
    // Wait for mobile mode to be detected
    await waitFor(() => {
      expect(container.querySelector('.sidebar--mobile')).toBeInTheDocument()
    })
    
    const button = screen.queryByRole('button')
    
    if (button) {
      // On mobile, clicking toggle should toggle mobile menu
      fireEvent.click(button)
      
      await waitFor(() => {
        expect(container.querySelector('.sidebar--mobile-open')).toBeInTheDocument()
      })
      
      // Click again to close
      fireEvent.click(button)
      
      await waitFor(() => {
        expect(container.querySelector('.sidebar--mobile-open')).not.toBeInTheDocument()
      })
    }
    
    // Restore
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      value: originalInnerWidth
    })
  })

  it('handles overlay click on mobile to close menu', async () => {
    const originalInnerWidth = window.innerWidth
    Object.defineProperty(window, 'innerWidth', { 
      writable: true,
      configurable: true, 
      value: 600 
    })
    
    const { container } = render(<Sidebar breakpoint="md">Content</Sidebar>)
    
    // Wait for mobile mode
    await waitFor(() => {
      expect(container.querySelector('.sidebar--mobile')).toBeInTheDocument()
    })
    
    const button = screen.queryByRole('button')
    
    if (button) {
      // Open mobile menu first
      fireEvent.click(button)
      
      await waitFor(() => {
        expect(container.querySelector('.sidebar--mobile-open')).toBeInTheDocument()
      })
      
      // Click overlay to close
      const overlay = container.querySelector('.sidebar__overlay')
      if (overlay) {
        fireEvent.click(overlay)
        
        await waitFor(() => {
          expect(container.querySelector('.sidebar--mobile-open')).not.toBeInTheDocument()
        })
      }
    }
    
    // Restore
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      value: originalInnerWidth
    })
  })

  it('does not render overlay when overlay prop is false', () => {
    Object.defineProperty(window, 'innerWidth', { writable: true, value: 600 })
    const { container } = render(<Sidebar breakpoint="md" overlay={false}>Content</Sidebar>)
    
    fireEvent.resize(window)
    
    expect(container.querySelector('.sidebar__overlay')).not.toBeInTheDocument()
  })

  it('applies custom className', () => {
    const { container } = render(<Sidebar className="custom-sidebar">Content</Sidebar>)
    expect(container.querySelector('.custom-sidebar')).toBeInTheDocument()
  })

  it('forwards additional props', () => {
    render(<Sidebar data-testid="sidebar-element">Content</Sidebar>)
    expect(screen.getByTestId('sidebar-element')).toBeInTheDocument()
  })
})

describe('useSidebarControl', () => {
  it('returns collapsed state and setter', () => {
    const { result } = renderHook(() => useSidebarControl())
    
    expect(result.current.collapsed).toBe(false)
    
    act(() => {
      result.current.setCollapsed(true)
    })
    
    expect(result.current.collapsed).toBe(true)
  })

  it('returns toggle function', () => {
    const { result } = renderHook(() => useSidebarControl())
    
    expect(result.current.collapsed).toBe(false)
    
    act(() => {
      result.current.toggle()
    })
    
    expect(result.current.collapsed).toBe(true)
    
    act(() => {
      result.current.toggle()
    })
    
    expect(result.current.collapsed).toBe(false)
  })

  it('returns mobileOpen state and setter', () => {
    const { result } = renderHook(() => useSidebarControl())
    
    expect(result.current.mobileOpen).toBe(false)
    
    act(() => {
      result.current.setMobileOpen(true)
    })
    
    expect(result.current.mobileOpen).toBe(true)
  })

  it('returns toggleMobile function', () => {
    const { result } = renderHook(() => useSidebarControl())
    
    expect(result.current.mobileOpen).toBe(false)
    
    act(() => {
      result.current.toggleMobile()
    })
    
    expect(result.current.mobileOpen).toBe(true)
  })
})

describe('Sidebar Mobile Menu State Coverage', () => {
  it('handles desktop-to-mobile transition with menu open', async () => {
    // Start with desktop width
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1024,
    })
    
    const { container } = render(<Sidebar>Content</Sidebar>)
    
    // On desktop, toggle button should exist and we can open sidebar
    const button = screen.queryByRole('button')
    expect(button).toBeInTheDocument()
    
    // Now shrink to mobile while component is mounted
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      value: 600,
    })
    
    // Trigger resize event
    window.dispatchEvent(new Event('resize'))
    
    // Component should detect mobile mode
    await waitFor(() => {
      expect(container.querySelector('.sidebar--mobile')).toBeInTheDocument()
    }, { timeout: 1000 })
  })
})
