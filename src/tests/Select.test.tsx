import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/preact'
import { Select } from '../components/select/Select'

describe('Select', () => {
  it('renders select element', () => {
    render(<Select />)
    expect(screen.getByRole('combobox')).toBeInTheDocument()
  })

  it('renders with default medium size', () => {
    const { container } = render(<Select />)
    expect(container.querySelector('.select--medium')).toBeInTheDocument()
  })

  it('renders with small size', () => {
    const { container } = render(<Select size="small" />)
    expect(container.querySelector('.select--small')).toBeInTheDocument()
  })

  it('renders with large size', () => {
    const { container } = render(<Select size="large" />)
    expect(container.querySelector('.select--large')).toBeInTheDocument()
  })

  it('renders with default outlined variant', () => {
    const { container } = render(<Select />)
    expect(container.querySelector('.select--outlined')).toBeInTheDocument()
  })

  it('renders with filled variant', () => {
    const { container } = render(<Select variant="filled" />)
    expect(container.querySelector('.select--filled')).toBeInTheDocument()
  })

  it('renders with error state', () => {
    const { container } = render(<Select error />)
    expect(container.querySelector('.select--error')).toBeInTheDocument()
  })

  it('renders with disabled state', () => {
    const { container } = render(<Select disabled />)
    expect(container.querySelector('.select--disabled')).toBeInTheDocument()
    expect(screen.getByRole('combobox')).toBeDisabled()
  })

  it('renders with fullWidth', () => {
    const { container } = render(<Select fullWidth />)
    expect(container.querySelector('.select--full-width')).toBeInTheDocument()
  })

  it('renders options from options prop', () => {
    const options = [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' }
    ]
    render(<Select options={options} />)
    
    expect(screen.getByText('Option 1')).toBeInTheDocument()
    expect(screen.getByText('Option 2')).toBeInTheDocument()
    expect(screen.getByText('Option 3')).toBeInTheDocument()
  })

  it('renders disabled options', () => {
    const options = [
      { value: '1', label: 'Option 1', disabled: true },
      { value: '2', label: 'Option 2' }
    ]
    const { container } = render(<Select options={options} />)
    
    const option1 = container.querySelector('option[value="1"]')
    const option2 = container.querySelector('option[value="2"]')
    
    expect(option1).toBeDisabled()
    expect(option2).not.toBeDisabled()
  })

  it('renders children when no options prop', () => {
    render(
      <Select>
        <option value="1">Child Option 1</option>
        <option value="2">Child Option 2</option>
      </Select>
    )
    
    expect(screen.getByText('Child Option 1')).toBeInTheDocument()
    expect(screen.getByText('Child Option 2')).toBeInTheDocument()
  })

  it('prefers options prop over children', () => {
    const options = [{ value: '1', label: 'From Options' }]
    render(
      <Select options={options}>
        <option value="2">From Children</option>
      </Select>
    )
    
    expect(screen.getByText('From Options')).toBeInTheDocument()
    expect(screen.queryByText('From Children')).not.toBeInTheDocument()
  })

  it('applies custom className', () => {
    const { container } = render(<Select className="custom-select" />)
    expect(container.querySelector('.custom-select')).toBeInTheDocument()
  })

  it('forwards additional props', () => {
    render(<Select data-testid="select-element" name="country" />)
    const select = screen.getByTestId('select-element')
    expect(select).toBeInTheDocument()
    expect(select).toHaveAttribute('name', 'country')
  })

  it('handles value changes', () => {
    const handleChange = vi.fn()
    const options = [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' }
    ]
    render(<Select options={options} onChange={handleChange} />)
    
    const select = screen.getByRole('combobox')
    fireEvent.change(select, { target: { value: '2' } })
    
    expect(handleChange).toHaveBeenCalled()
  })
})
