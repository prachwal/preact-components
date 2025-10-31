import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/preact'
import { Code } from '../components/code/Code'

describe('Code', () => {
  it('renders code element', () => {
    render(<Code>const x = 1;</Code>)
    expect(screen.getByText('const x = 1;')).toBeInTheDocument()
  })

  it('renders with code-block class by default', () => {
    const { container } = render(<Code>code</Code>)
    expect(container.querySelector('.code-block')).toBeInTheDocument()
  })

  it('renders with code-inline class when inline is true', () => {
    const { container } = render(<Code inline>code</Code>)
    expect(container.querySelector('.code-inline')).toBeInTheDocument()
  })

  it('does not render code-block class when inline is true', () => {
    const { container } = render(<Code inline>code</Code>)
    expect(container.querySelector('.code-block')).not.toBeInTheDocument()
  })

  it('applies custom className', () => {
    const { container } = render(<Code className="custom-code">code</Code>)
    expect(container.querySelector('.custom-code')).toBeInTheDocument()
  })

  it('forwards additional props', () => {
    render(<Code data-testid="code-element">code</Code>)
    expect(screen.getByTestId('code-element')).toBeInTheDocument()
  })
})
