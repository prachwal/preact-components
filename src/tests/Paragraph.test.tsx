import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/preact'
import { Paragraph } from '../components/paragraph/Paragraph'

describe('Paragraph', () => {
  it('renders children', () => {
    render(<Paragraph>Paragraph text</Paragraph>)
    expect(screen.getByText('Paragraph text')).toBeInTheDocument()
  })

  it('renders as p element', () => {
    const { container } = render(<Paragraph>Text</Paragraph>)
    expect(container.querySelector('p')).toBeInTheDocument()
  })

  it('renders with default variant', () => {
    const { container } = render(<Paragraph variant="default">Text</Paragraph>)
    expect(container.querySelector('.p-default')).toBeInTheDocument()
  })

  it('renders with muted variant', () => {
    const { container } = render(<Paragraph variant="muted">Text</Paragraph>)
    expect(container.querySelector('.p-muted')).toBeInTheDocument()
  })

  it('renders with small variant', () => {
    const { container } = render(<Paragraph variant="small">Text</Paragraph>)
    expect(container.querySelector('.p-small')).toBeInTheDocument()
  })

  it('does not apply variant class when variant is not provided', () => {
    const { container } = render(<Paragraph>Text</Paragraph>)
    expect(container.querySelector('[class*="p-"]')).not.toBeInTheDocument()
  })

  it('applies custom className', () => {
    const { container } = render(<Paragraph className="custom-paragraph">Text</Paragraph>)
    expect(container.querySelector('.custom-paragraph')).toBeInTheDocument()
  })

  it('forwards additional props', () => {
    render(<Paragraph data-testid="paragraph-element">Text</Paragraph>)
    expect(screen.getByTestId('paragraph-element')).toBeInTheDocument()
  })
})
