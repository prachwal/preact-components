import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/preact'
import { Badge } from '../components/badge/Badge'

describe('Badge', () => {
  it('renders children', () => {
    render(<Badge>Content</Badge>)
    expect(screen.getByText('Content')).toBeInTheDocument()
  })

  it('renders count badge with default count of 0', () => {
    const { container } = render(<Badge showZero>Content</Badge>)
    expect(container.querySelector('.badge__count')).toHaveTextContent('0')
  })

  it('renders count badge with provided count', () => {
    const { container } = render(<Badge count={5}>Content</Badge>)
    expect(container.querySelector('.badge__count')).toHaveTextContent('5')
  })

  it('does not show count when count is 0 and showZero is false', () => {
    const { container } = render(<Badge count={0}>Content</Badge>)
    expect(container.querySelector('.badge__count')).not.toBeInTheDocument()
  })

  it('shows count when count is 0 and showZero is true', () => {
    const { container } = render(<Badge count={0} showZero>Content</Badge>)
    expect(container.querySelector('.badge__count')).toBeInTheDocument()
  })

  it('displays 99+ when count exceeds 99', () => {
    const { container } = render(<Badge count={150}>Content</Badge>)
    expect(container.querySelector('.badge__count')).toHaveTextContent('99+')
  })

  it('renders dot badge', () => {
    const { container } = render(<Badge dot>Content</Badge>)
    expect(container.querySelector('.badge__dot')).toBeInTheDocument()
  })

  it('does not render count when dot is true', () => {
    const { container } = render(<Badge dot count={5}>Content</Badge>)
    expect(container.querySelector('.badge__count')).not.toBeInTheDocument()
    expect(container.querySelector('.badge__dot')).toBeInTheDocument()
  })

  it('renders status badge with success status', () => {
    const { container } = render(<Badge status="success" />)
    expect(container.querySelector('.badge--success')).toBeInTheDocument()
    expect(container.querySelector('.badge__dot--success')).toBeInTheDocument()
  })

  it('renders status badge with error status', () => {
    const { container } = render(<Badge status="error" />)
    expect(container.querySelector('.badge--error')).toBeInTheDocument()
  })

  it('renders status badge with warning status', () => {
    const { container } = render(<Badge status="warning" />)
    expect(container.querySelector('.badge--warning')).toBeInTheDocument()
  })

  it('renders status badge with info status', () => {
    const { container } = render(<Badge status="info" />)
    expect(container.querySelector('.badge--info')).toBeInTheDocument()
  })

  it('renders status badge with default status', () => {
    const { container } = render(<Badge status="default" />)
    expect(container.querySelector('.badge--default')).toBeInTheDocument()
  })

  it('renders status badge with text', () => {
    const { container } = render(<Badge status="success" text="Active" />)
    expect(container.querySelector('.badge__text')).toHaveTextContent('Active')
  })

  it('applies custom className', () => {
    const { container } = render(<Badge className="custom-badge">Content</Badge>)
    expect(container.querySelector('.custom-badge')).toBeInTheDocument()
  })

  it('applies status class to count badge', () => {
    const { container } = render(<Badge count={5} status="error">Content</Badge>)
    expect(container.querySelector('.badge__count--error')).toBeInTheDocument()
  })

  it('forwards additional props', () => {
    render(<Badge data-testid="badge-element">Content</Badge>)
    expect(screen.getByTestId('badge-element')).toBeInTheDocument()
  })
})
