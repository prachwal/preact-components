import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/preact'
import { Container } from '../components/container/Container'

describe('Container', () => {
  it('renders children', () => {
    render(<Container>Container content</Container>)
    expect(screen.getByText('Container content')).toBeInTheDocument()
  })

  it('renders with default container class', () => {
    const { container } = render(<Container>Content</Container>)
    expect(container.querySelector('.container')).toBeInTheDocument()
  })

  it('renders as fluid container', () => {
    const { container } = render(<Container fluid>Content</Container>)
    expect(container.querySelector('.container--fluid')).toBeInTheDocument()
  })

  it('renders with sm maxWidth', () => {
    const { container } = render(<Container maxWidth="sm">Content</Container>)
    expect(container.querySelector('.container--sm')).toBeInTheDocument()
  })

  it('renders with md maxWidth', () => {
    const { container } = render(<Container maxWidth="md">Content</Container>)
    expect(container.querySelector('.container--md')).toBeInTheDocument()
  })

  it('renders with lg maxWidth', () => {
    const { container } = render(<Container maxWidth="lg">Content</Container>)
    expect(container.querySelector('.container--lg')).toBeInTheDocument()
  })

  it('renders with xl maxWidth', () => {
    const { container } = render(<Container maxWidth="xl">Content</Container>)
    expect(container.querySelector('.container--xl')).toBeInTheDocument()
  })

  it('renders with 2xl maxWidth', () => {
    const { container } = render(<Container maxWidth="2xl">Content</Container>)
    expect(container.querySelector('.container--2xl')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    const { container } = render(<Container className="custom-container">Content</Container>)
    expect(container.querySelector('.custom-container')).toBeInTheDocument()
  })

  it('forwards additional props', () => {
    render(<Container data-testid="container-element">Content</Container>)
    expect(screen.getByTestId('container-element')).toBeInTheDocument()
  })
})
