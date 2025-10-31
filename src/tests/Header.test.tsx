import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/preact'
import { Header } from '../components/header/Header'

describe('Header', () => {
  it('renders children', () => {
    render(<Header>Header content</Header>)
    expect(screen.getByText('Header content')).toBeInTheDocument()
  })

  it('renders as header element', () => {
    const { container } = render(<Header>Content</Header>)
    expect(container.querySelector('header')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    const { container } = render(<Header className="custom-header">Content</Header>)
    expect(container.querySelector('.custom-header')).toBeInTheDocument()
  })

  it('forwards additional props', () => {
    render(<Header data-testid="header-element">Content</Header>)
    expect(screen.getByTestId('header-element')).toBeInTheDocument()
  })
})
