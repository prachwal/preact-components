import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/preact'
import { Heading } from '../components/heading/Heading'

describe('Heading', () => {
  it('renders children', () => {
    render(<Heading>Heading text</Heading>)
    expect(screen.getByText('Heading text')).toBeInTheDocument()
  })

  it('renders as h1 by default', () => {
    const { container } = render(<Heading>Heading</Heading>)
    expect(container.querySelector('h1')).toBeInTheDocument()
  })

  it('renders as h2 when level is 2', () => {
    const { container } = render(<Heading level={2}>Heading</Heading>)
    expect(container.querySelector('h2')).toBeInTheDocument()
  })

  it('renders as h3 when level is 3', () => {
    const { container } = render(<Heading level={3}>Heading</Heading>)
    expect(container.querySelector('h3')).toBeInTheDocument()
  })

  it('renders as h4 when level is 4', () => {
    const { container } = render(<Heading level={4}>Heading</Heading>)
    expect(container.querySelector('h4')).toBeInTheDocument()
  })

  it('renders as h5 when level is 5', () => {
    const { container } = render(<Heading level={5}>Heading</Heading>)
    expect(container.querySelector('h5')).toBeInTheDocument()
  })

  it('renders as h6 when level is 6', () => {
    const { container } = render(<Heading level={6}>Heading</Heading>)
    expect(container.querySelector('h6')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    const { container } = render(<Heading className="custom-heading">Heading</Heading>)
    expect(container.querySelector('.custom-heading')).toBeInTheDocument()
  })

  it('forwards additional props', () => {
    render(<Heading data-testid="heading-element">Heading</Heading>)
    expect(screen.getByTestId('heading-element')).toBeInTheDocument()
  })
})
