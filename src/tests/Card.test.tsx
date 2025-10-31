import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/preact'
import { Card } from '../components/card/Card'
import { h } from 'preact'

describe('Card', () => {
  it('renders children', () => {
    render(<Card>Card content</Card>)
    expect(screen.getByText('Card content')).toBeInTheDocument()
  })

  it('renders with default bordered style', () => {
    const { container } = render(<Card>Content</Card>)
    expect(container.querySelector('.card--bordered')).toBeInTheDocument()
  })

  it('renders without border when bordered is false', () => {
    const { container } = render(<Card bordered={false}>Content</Card>)
    expect(container.querySelector('.card--bordered')).not.toBeInTheDocument()
  })

  it('renders with hoverable class', () => {
    const { container } = render(<Card hoverable>Content</Card>)
    expect(container.querySelector('.card--hoverable')).toBeInTheDocument()
  })

  it('renders with loading class', () => {
    const { container } = render(<Card loading>Content</Card>)
    expect(container.querySelector('.card--loading')).toBeInTheDocument()
  })

  it('renders string title', () => {
    render(<Card title="Card Title">Content</Card>)
    expect(screen.getByText('Card Title')).toBeInTheDocument()
  })

  it('renders VNode title', () => {
    render(<Card title={<span>Custom Title</span>}>Content</Card>)
    expect(screen.getByText('Custom Title')).toBeInTheDocument()
  })

  it('renders extra content', () => {
    render(<Card extra={<button>Action</button>}>Content</Card>)
    expect(screen.getByRole('button', { name: 'Action' })).toBeInTheDocument()
  })

  it('renders header when title is provided', () => {
    const { container } = render(<Card title="Title">Content</Card>)
    expect(container.querySelector('.card__header')).toBeInTheDocument()
  })

  it('renders header when extra is provided', () => {
    const { container } = render(<Card extra={<span>Extra</span>}>Content</Card>)
    expect(container.querySelector('.card__header')).toBeInTheDocument()
  })

  it('does not render header when no title or extra', () => {
    const { container } = render(<Card>Content</Card>)
    expect(container.querySelector('.card__header')).not.toBeInTheDocument()
  })

  it('applies custom className', () => {
    const { container } = render(<Card className="custom-card">Content</Card>)
    expect(container.querySelector('.custom-card')).toBeInTheDocument()
  })

  it('forwards additional props', () => {
    render(<Card data-testid="card-element">Content</Card>)
    expect(screen.getByTestId('card-element')).toBeInTheDocument()
  })
})
