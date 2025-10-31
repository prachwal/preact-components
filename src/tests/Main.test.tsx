import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/preact'
import { Main } from '../components/main/Main'

describe('Main', () => {
  it('renders children', () => {
    render(<Main>Main content</Main>)
    expect(screen.getByText('Main content')).toBeInTheDocument()
  })

  it('renders as main element', () => {
    const { container } = render(<Main>Content</Main>)
    expect(container.querySelector('main')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    const { container } = render(<Main className="custom-main">Content</Main>)
    expect(container.querySelector('.custom-main')).toBeInTheDocument()
  })

  it('forwards additional props', () => {
    render(<Main data-testid="main-element">Content</Main>)
    expect(screen.getByTestId('main-element')).toBeInTheDocument()
  })
})
