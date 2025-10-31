import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/preact'
import { Section } from '../components/section/Section'

describe('Section', () => {
  it('renders children', () => {
    render(<Section>Section content</Section>)
    expect(screen.getByText('Section content')).toBeInTheDocument()
  })

  it('renders as section element', () => {
    const { container } = render(<Section>Content</Section>)
    expect(container.querySelector('section')).toBeInTheDocument()
  })

  it('renders with default variant', () => {
    const { container } = render(<Section>Content</Section>)
    expect(container.querySelector('[class*="section-"]')).not.toBeInTheDocument()
  })

  it('renders with card variant', () => {
    const { container } = render(<Section variant="card">Content</Section>)
    expect(container.querySelector('.section-card')).toBeInTheDocument()
  })

  it('renders with hero variant', () => {
    const { container } = render(<Section variant="hero">Content</Section>)
    expect(container.querySelector('.section-hero')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    const { container } = render(<Section className="custom-section">Content</Section>)
    expect(container.querySelector('.custom-section')).toBeInTheDocument()
  })

  it('forwards additional props', () => {
    render(<Section data-testid="section-element">Content</Section>)
    expect(screen.getByTestId('section-element')).toBeInTheDocument()
  })
})
