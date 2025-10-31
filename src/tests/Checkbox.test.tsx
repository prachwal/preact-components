import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/preact'
import { Checkbox } from '../components/checkbox/Checkbox'

describe('Checkbox', () => {
  it('renders checkbox input', () => {
    render(<Checkbox />)
    expect(screen.getByRole('checkbox')).toBeInTheDocument()
  })

  it('renders label when provided', () => {
    render(<Checkbox label="Accept terms" />)
    expect(screen.getByText('Accept terms')).toBeInTheDocument()
  })

  it('associates label with checkbox using htmlFor', () => {
    render(<Checkbox label="Test label" id="test-checkbox" />)
    const label = screen.getByText('Test label')
    const checkbox = screen.getByRole('checkbox')
    expect(label).toHaveAttribute('for', 'test-checkbox')
    expect(checkbox).toHaveAttribute('id', 'test-checkbox')
  })

  it('generates unique id when not provided', () => {
    const { container } = render(<Checkbox label="Test" />)
    const checkbox = container.querySelector('input[type="checkbox"]')
    const label = container.querySelector('label')
    
    expect(checkbox).toHaveAttribute('id')
    expect(label).toHaveAttribute('for')
    expect(label?.getAttribute('for')).toBe(checkbox?.getAttribute('id'))
  })

  it('applies indeterminate class', () => {
    const { container } = render(<Checkbox indeterminate />)
    expect(container.querySelector('.checkbox--indeterminate')).toBeInTheDocument()
  })

  it('can be checked', () => {
    render(<Checkbox label="Test" />)
    const checkbox = screen.getByRole('checkbox') as HTMLInputElement
    fireEvent.click(checkbox)
    expect(checkbox.checked).toBe(true)
  })

  it('can be disabled', () => {
    render(<Checkbox disabled />)
    expect(screen.getByRole('checkbox')).toBeDisabled()
  })

  it('applies custom className', () => {
    const { container } = render(<Checkbox className="custom-checkbox" />)
    expect(container.querySelector('.custom-checkbox')).toBeInTheDocument()
  })

  it('forwards additional props', () => {
    render(<Checkbox data-testid="checkbox-element" />)
    expect(screen.getByTestId('checkbox-element')).toBeInTheDocument()
  })

  it('supports checked prop', () => {
    render(<Checkbox checked readOnly />)
    expect(screen.getByRole('checkbox')).toBeChecked()
  })

  it('supports defaultChecked prop', () => {
    render(<Checkbox defaultChecked />)
    expect(screen.getByRole('checkbox')).toBeChecked()
  })
})
