import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/preact'
import { Link } from '../components/link/Link'

describe('Link', () => {
  it('renders children', () => {
    render(<Link href="#">Link text</Link>)
    expect(screen.getByText('Link text')).toBeInTheDocument()
  })

  it('renders as anchor element', () => {
    render(<Link href="#">Link</Link>)
    expect(screen.getByRole('link')).toBeInTheDocument()
  })

  it('renders with primary variant', () => {
    const { container } = render(<Link variant="primary" href="#">Link</Link>)
    expect(container.querySelector('.link-primary')).toBeInTheDocument()
  })

  it('renders with secondary variant', () => {
    const { container } = render(<Link variant="secondary" href="#">Link</Link>)
    expect(container.querySelector('.link-secondary')).toBeInTheDocument()
  })

  it('renders with muted variant', () => {
    const { container } = render(<Link variant="muted" href="#">Link</Link>)
    expect(container.querySelector('.link-muted')).toBeInTheDocument()
  })

  it('does not apply variant class when variant is not provided', () => {
    const { container } = render(<Link href="#">Link</Link>)
    expect(container.querySelector('[class*="link-"]')).not.toBeInTheDocument()
  })

  it('applies custom className', () => {
    const { container } = render(<Link className="custom-link" href="#">Link</Link>)
    expect(container.querySelector('.custom-link')).toBeInTheDocument()
  })

  it('forwards additional props', () => {
    render(<Link href="/page" target="_blank" rel="noopener">Link</Link>)
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/page')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener')
  })
})
