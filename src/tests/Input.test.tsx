import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/preact'
import { Input } from '../components/input/Input'

describe('Input', () => {
  it('renders input element', () => {
    render(<Input />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('renders with default medium size', () => {
    const { container } = render(<Input />)
    expect(container.querySelector('.input--medium')).toBeInTheDocument()
  })

  it('renders with small size', () => {
    const { container } = render(<Input size="small" />)
    expect(container.querySelector('.input--small')).toBeInTheDocument()
  })

  it('renders with large size', () => {
    const { container } = render(<Input size="large" />)
    expect(container.querySelector('.input--large')).toBeInTheDocument()
  })

  it('renders with default outlined variant', () => {
    const { container } = render(<Input />)
    expect(container.querySelector('.input--outlined')).toBeInTheDocument()
  })

  it('renders with filled variant', () => {
    const { container } = render(<Input variant="filled" />)
    expect(container.querySelector('.input--filled')).toBeInTheDocument()
  })

  it('renders with error state', () => {
    const { container } = render(<Input error />)
    expect(container.querySelector('.input--error')).toBeInTheDocument()
  })

  it('renders with disabled state', () => {
    const { container } = render(<Input disabled />)
    expect(container.querySelector('.input--disabled')).toBeInTheDocument()
    expect(screen.getByRole('textbox')).toBeDisabled()
  })

  it('renders with fullWidth', () => {
    const { container } = render(<Input fullWidth />)
    expect(container.querySelector('.input--full-width')).toBeInTheDocument()
  })

  it('renders with prefix', () => {
    const { container } = render(<Input prefix="$" />)
    expect(container.querySelector('.input__prefix')).toHaveTextContent('$')
  })

  it('renders with suffix', () => {
    const { container } = render(<Input suffix=".com" />)
    expect(container.querySelector('.input__suffix')).toHaveTextContent('.com')
  })

  it('renders with both prefix and suffix', () => {
    const { container } = render(<Input prefix="https://" suffix=".com" />)
    expect(container.querySelector('.input__prefix')).toHaveTextContent('https://')
    expect(container.querySelector('.input__suffix')).toHaveTextContent('.com')
  })

  it('wraps input in wrapper when prefix or suffix is provided', () => {
    const { container } = render(<Input prefix="$" />)
    expect(container.querySelector('.input-wrapper')).toBeInTheDocument()
  })

  it('applies fullWidth to wrapper when using prefix/suffix', () => {
    const { container } = render(<Input prefix="$" fullWidth />)
    expect(container.querySelector('.input-wrapper--full-width')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    const { container } = render(<Input className="custom-input" />)
    expect(container.querySelector('.custom-input')).toBeInTheDocument()
  })

  it('forwards additional props', () => {
    render(<Input data-testid="input-element" placeholder="Enter text" />)
    const input = screen.getByTestId('input-element')
    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute('placeholder', 'Enter text')
  })

  it('handles value changes', () => {
    const handleChange = vi.fn()
    render(<Input onInput={handleChange} />)
    const input = screen.getByRole('textbox')
    fireEvent.input(input, { target: { value: 'test' } })
    expect(handleChange).toHaveBeenCalled()
  })
})
