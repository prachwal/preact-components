import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/preact'
import { Button } from '../components/button/Button'

describe('Button', () => {
  it('renders button with children', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button')).toHaveTextContent('Click me')
  })

  it('renders with default primary variant', () => {
    const { container } = render(<Button>Click</Button>)
    expect(container.querySelector('.btn--primary')).toBeInTheDocument()
  })

  it('renders with secondary variant', () => {
    const { container } = render(<Button variant="secondary">Click</Button>)
    expect(container.querySelector('.btn--secondary')).toBeInTheDocument()
  })

  it('renders with outline variant', () => {
    const { container } = render(<Button variant="outline">Click</Button>)
    expect(container.querySelector('.btn--outline')).toBeInTheDocument()
  })

  it('renders with ghost variant', () => {
    const { container } = render(<Button variant="ghost">Click</Button>)
    expect(container.querySelector('.btn--ghost')).toBeInTheDocument()
  })

  it('renders with link variant', () => {
    const { container } = render(<Button variant="link">Click</Button>)
    expect(container.querySelector('.btn--link')).toBeInTheDocument()
  })

  it('renders with default md size', () => {
    const { container } = render(<Button>Click</Button>)
    expect(container.querySelector('.btn--md')).toBeInTheDocument()
  })

  it('renders with small size', () => {
    const { container } = render(<Button size="sm">Click</Button>)
    expect(container.querySelector('.btn--sm')).toBeInTheDocument()
  })

  it('renders with large size', () => {
    const { container } = render(<Button size="lg">Click</Button>)
    expect(container.querySelector('.btn--lg')).toBeInTheDocument()
  })

  it('renders loading spinner when loading', () => {
    const { container } = render(<Button loading>Click</Button>)
    expect(container.querySelector('.btn__spinner')).toBeInTheDocument()
  })

  it('applies loading class to button when loading', () => {
    const { container } = render(<Button loading>Click</Button>)
    expect(container.querySelector('.btn--loading')).toBeInTheDocument()
  })

  it('applies loading class to content when loading', () => {
    const { container } = render(<Button loading>Click</Button>)
    expect(container.querySelector('.btn__content--loading')).toBeInTheDocument()
  })

  it('disables button when loading', () => {
    render(<Button loading>Click</Button>)
    expect(screen.getByRole('button')).toBeDisabled()
  })

  it('disables button when disabled prop is true', () => {
    render(<Button disabled>Click</Button>)
    expect(screen.getByRole('button')).toBeDisabled()
  })

  it('applies custom className', () => {
    const { container } = render(<Button className="custom-btn">Click</Button>)
    expect(container.querySelector('.custom-btn')).toBeInTheDocument()
  })

  it('handles click events', () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Click</Button>)
    fireEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('button is disabled when disabled prop is true', () => {
    const handleClick = vi.fn()
    render(<Button disabled onClick={handleClick}>Click</Button>)
    expect(screen.getByRole('button')).toBeDisabled()
  })

  it('button is disabled when loading', () => {
    const handleClick = vi.fn()
    render(<Button loading onClick={handleClick}>Click</Button>)
    expect(screen.getByRole('button')).toBeDisabled()
  })

  it('forwards additional props', () => {
    render(<Button type="submit" data-testid="submit-btn">Submit</Button>)
    const button = screen.getByTestId('submit-btn')
    expect(button).toHaveAttribute('type', 'submit')
  })
})
