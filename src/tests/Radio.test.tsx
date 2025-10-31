import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/preact'
import { Radio } from '../components/radio/Radio'

describe('Radio', () => {
  it('renders radio input', () => {
    render(<Radio />)
    expect(screen.getByRole('radio')).toBeInTheDocument()
  })

  it('renders label when provided', () => {
    render(<Radio label="Option A" />)
    expect(screen.getByText('Option A')).toBeInTheDocument()
  })

  it('associates label with radio using htmlFor', () => {
    render(<Radio label="Test label" id="test-radio" />)
    const label = screen.getByText('Test label')
    const radio = screen.getByRole('radio')
    expect(label).toHaveAttribute('for', 'test-radio')
    expect(radio).toHaveAttribute('id', 'test-radio')
  })

  it('generates unique id when not provided', () => {
    const { container } = render(<Radio label="Test" />)
    const radio = container.querySelector('input[type="radio"]')
    const label = container.querySelector('label')
    
    expect(radio).toHaveAttribute('id')
    expect(label).toHaveAttribute('for')
    expect(label?.getAttribute('for')).toBe(radio?.getAttribute('id'))
  })

  it('can be disabled', () => {
    render(<Radio disabled />)
    expect(screen.getByRole('radio')).toBeDisabled()
  })

  it('applies custom className', () => {
    const { container } = render(<Radio className="custom-radio" />)
    expect(container.querySelector('.custom-radio')).toBeInTheDocument()
  })

  it('forwards additional props', () => {
    render(<Radio data-testid="radio-element" name="option" value="a" />)
    const radio = screen.getByTestId('radio-element')
    expect(radio).toBeInTheDocument()
    expect(radio).toHaveAttribute('name', 'option')
    expect(radio).toHaveAttribute('value', 'a')
  })

  it('supports checked prop', () => {
    render(<Radio checked readOnly />)
    expect(screen.getByRole('radio')).toBeChecked()
  })

  it('supports defaultChecked prop', () => {
    render(<Radio defaultChecked />)
    expect(screen.getByRole('radio')).toBeChecked()
  })
})
