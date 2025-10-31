import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/preact'
import { Footer } from '../components/footer/Footer'

describe('Footer', () => {
  it('renders children', () => {
    render(<Footer>Footer content</Footer>)
    expect(screen.getByText('Footer content')).toBeInTheDocument()
  })

  it('renders as footer element', () => {
    const { container } = render(<Footer>Content</Footer>)
    expect(container.querySelector('footer')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    const { container } = render(<Footer className="custom-footer">Content</Footer>)
    expect(container.querySelector('.custom-footer')).toBeInTheDocument()
  })

  it('forwards additional props', () => {
    render(<Footer data-testid="footer-element">Content</Footer>)
    expect(screen.getByTestId('footer-element')).toBeInTheDocument()
  })
})
