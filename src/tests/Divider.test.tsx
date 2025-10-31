import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/preact'
import { Divider } from '../components/divider/Divider'

describe('Divider', () => {
  it('renders divider element', () => {
    const { container } = render(<Divider />)
    expect(container.querySelector('.divider')).toBeInTheDocument()
  })

  it('renders with default horizontal orientation', () => {
    const { container } = render(<Divider />)
    expect(container.querySelector('.divider--horizontal')).toBeInTheDocument()
  })

  it('renders with vertical orientation', () => {
    const { container } = render(<Divider orientation="vertical" />)
    expect(container.querySelector('.divider--vertical')).toBeInTheDocument()
  })

  it('renders with dashed style', () => {
    const { container } = render(<Divider dashed />)
    expect(container.querySelector('.divider--dashed')).toBeInTheDocument()
  })

  it('renders with text', () => {
    render(<Divider>Text content</Divider>)
    expect(screen.getByText('Text content')).toBeInTheDocument()
  })

  it('applies with-text class when children are provided', () => {
    const { container } = render(<Divider>Text</Divider>)
    expect(container.querySelector('.divider--with-text')).toBeInTheDocument()
  })

  it('renders with plain style', () => {
    const { container } = render(<Divider plain>Text</Divider>)
    expect(container.querySelector('.divider--plain')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    const { container } = render(<Divider className="custom-divider" />)
    expect(container.querySelector('.custom-divider')).toBeInTheDocument()
  })

  it('forwards additional props', () => {
    render(<Divider data-testid="divider-element" />)
    expect(screen.getByTestId('divider-element')).toBeInTheDocument()
  })
})
