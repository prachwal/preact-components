import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/preact'
import { Navbar } from '../components/navbar/Navbar'

describe('Navbar', () => {
  beforeEach(() => {
    // Mock window.scrollY
    Object.defineProperty(window, 'scrollY', {
      writable: true,
      value: 0,
    })
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('renders navbar element', () => {
    const { container } = render(<Navbar />)
    expect(container.querySelector('nav')).toBeInTheDocument()
  })

  it('renders logo when provided', () => {
    render(<Navbar logo={<div>Logo</div>} />)
    expect(screen.getByText('Logo')).toBeInTheDocument()
  })

  it('renders menu when provided', () => {
    render(<Navbar menu={<div>Menu</div>} />)
    expect(screen.getByText('Menu')).toBeInTheDocument()
  })

  it('renders extra content when provided', () => {
    render(<Navbar extra={<div>Extra</div>} />)
    expect(screen.getByText('Extra')).toBeInTheDocument()
  })

  it('renders children when menu and extra are not provided', () => {
    render(<Navbar>Children content</Navbar>)
    expect(screen.getByText('Children content')).toBeInTheDocument()
  })

  it('does not render children when menu or extra is provided', () => {
    render(<Navbar menu={<div>Menu</div>}>Children</Navbar>)
    expect(screen.queryByText('Children')).not.toBeInTheDocument()
  })

  it('renders hamburger button by default', () => {
    render(<Navbar />)
    expect(screen.getByRole('button', { name: /toggle menu/i })).toBeInTheDocument()
  })

  it('does not render hamburger button when showMenuButton is false', () => {
    render(<Navbar showMenuButton={false} />)
    expect(screen.queryByRole('button', { name: /toggle menu/i })).not.toBeInTheDocument()
  })

  it('toggles mobile menu when hamburger is clicked', () => {
    const { container } = render(<Navbar />)
    const button = screen.getByRole('button', { name: /toggle menu/i })
    
    expect(container.querySelector('.navbar--menu-open')).not.toBeInTheDocument()
    
    fireEvent.click(button)
    expect(container.querySelector('.navbar--menu-open')).toBeInTheDocument()
    
    fireEvent.click(button)
    expect(container.querySelector('.navbar--menu-open')).not.toBeInTheDocument()
  })

  it('calls onMenuToggle callback when menu is toggled', () => {
    const onMenuToggle = vi.fn()
    render(<Navbar onMenuToggle={onMenuToggle} />)
    const button = screen.getByRole('button', { name: /toggle menu/i })
    
    fireEvent.click(button)
    expect(onMenuToggle).toHaveBeenCalledWith(true)
    
    fireEvent.click(button)
    expect(onMenuToggle).toHaveBeenCalledWith(false)
  })

  it('sets aria-expanded correctly on hamburger button', () => {
    render(<Navbar />)
    const button = screen.getByRole('button', { name: /toggle menu/i })
    
    expect(button).toHaveAttribute('aria-expanded', 'false')
    
    fireEvent.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'true')
  })

  it('applies fixed class when fixed prop is true', () => {
    const { container } = render(<Navbar fixed />)
    expect(container.querySelector('.navbar--fixed')).toBeInTheDocument()
  })

  it('applies transparent class when transparent is true', () => {
    const { container } = render(<Navbar transparent />)
    expect(container.querySelector('.navbar--transparent')).toBeInTheDocument()
  })

  it('removes transparent class when scrolled', () => {
    const { container } = render(<Navbar transparent fixed />)
    
    expect(container.querySelector('.navbar--transparent')).toBeInTheDocument()
    
    // Simulate scroll
    Object.defineProperty(window, 'scrollY', { writable: true, value: 100 })
    fireEvent.scroll(window)
    
    // Transparent should be removed when scrolled
    expect(container.querySelector('.navbar--transparent')).not.toBeInTheDocument()
  })

  it('applies scrolled class when scrolled', () => {
    const { container } = render(<Navbar fixed />)
    
    expect(container.querySelector('.navbar--scrolled')).not.toBeInTheDocument()
    
    // Simulate scroll
    Object.defineProperty(window, 'scrollY', { writable: true, value: 100 })
    fireEvent.scroll(window)
    
    expect(container.querySelector('.navbar--scrolled')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    const { container } = render(<Navbar className="custom-navbar" />)
    expect(container.querySelector('.custom-navbar')).toBeInTheDocument()
  })

  it('forwards additional props', () => {
    render(<Navbar data-testid="navbar-element" />)
    expect(screen.getByTestId('navbar-element')).toBeInTheDocument()
  })
})
