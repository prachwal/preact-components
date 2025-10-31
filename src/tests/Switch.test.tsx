import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/preact'
import { Switch } from '../components/switch/Switch'

describe('Switch', () => {
  it('renders switch input', () => {
    render(<Switch />)
    expect(screen.getByRole('checkbox')).toBeInTheDocument()
  })

  it('renders label when provided', () => {
    render(<Switch label="Enable feature" />)
    expect(screen.getByText('Enable feature')).toBeInTheDocument()
  })

  it('associates label with switch using htmlFor', () => {
    const { container } = render(<Switch label="Test label" id="test-switch" />)
    const label = container.querySelector('label')
    const switchInput = screen.getByRole('checkbox')
    expect(label).toHaveAttribute('for', 'test-switch')
    expect(switchInput).toHaveAttribute('id', 'test-switch')
  })

  it('generates unique id when not provided', () => {
    const { container } = render(<Switch label="Test" />)
    const switchInput = container.querySelector('input[type="checkbox"]')
    const label = container.querySelector('label')
    
    expect(switchInput).toHaveAttribute('id')
    expect(label).toHaveAttribute('for')
    expect(label?.getAttribute('for')).toBe(switchInput?.getAttribute('id'))
  })

  it('renders with default medium size', () => {
    const { container } = render(<Switch />)
    expect(container.querySelector('.switch--medium')).toBeInTheDocument()
  })

  it('renders with small size', () => {
    const { container } = render(<Switch size="small" />)
    expect(container.querySelector('.switch--small')).toBeInTheDocument()
  })

  it('can be toggled', () => {
    render(<Switch label="Test" />)
    const switchInput = screen.getByRole('checkbox') as HTMLInputElement
    
    expect(switchInput.checked).toBe(false)
    
    fireEvent.click(switchInput)
    expect(switchInput.checked).toBe(true)
    
    fireEvent.click(switchInput)
    expect(switchInput.checked).toBe(false)
  })

  it('can be disabled', () => {
    render(<Switch disabled />)
    expect(screen.getByRole('checkbox')).toBeDisabled()
  })

  it('applies custom className', () => {
    const { container } = render(<Switch className="custom-switch" />)
    expect(container.querySelector('.custom-switch')).toBeInTheDocument()
  })

  it('forwards additional props', () => {
    render(<Switch data-testid="switch-element" />)
    expect(screen.getByTestId('switch-element')).toBeInTheDocument()
  })

  it('supports checked prop', () => {
    render(<Switch checked readOnly />)
    expect(screen.getByRole('checkbox')).toBeChecked()
  })

  it('supports defaultChecked prop', () => {
    render(<Switch defaultChecked />)
    expect(screen.getByRole('checkbox')).toBeChecked()
  })

  it('renders slider element', () => {
    const { container } = render(<Switch />)
    expect(container.querySelector('.switch__slider')).toBeInTheDocument()
  })
})
