import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/preact'
import { Div } from '../components/div/Div'

describe('Div', () => {
  it('renders children', () => {
    render(<Div>Div content</Div>)
    expect(screen.getByText('Div content')).toBeInTheDocument()
  })

  it('renders as div element', () => {
    const { container } = render(<Div>Content</Div>)
    expect(container.querySelector('div')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    const { container } = render(<Div className="custom-div">Content</Div>)
    expect(container.querySelector('.custom-div')).toBeInTheDocument()
  })

  it('forwards additional props', () => {
    render(<Div data-testid="div-element">Content</Div>)
    expect(screen.getByTestId('div-element')).toBeInTheDocument()
  })

  it('preserves style prop', () => {
    const { container } = render(<Div style={{ color: 'red' }}>Content</Div>)
    const div = container.querySelector('div')
    expect(div).toHaveStyle({ color: 'rgb(255, 0, 0)' })
  })
})
