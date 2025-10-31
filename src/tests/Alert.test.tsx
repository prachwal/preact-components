import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/preact'
import { Alert } from '../components/alert/Alert'

describe('Alert', () => {
  it('renders alert with message', () => {
    render(<Alert message="Test message" />)
    expect(screen.getByText('Test message')).toBeInTheDocument()
  })

  it('renders with default info type', () => {
    const { container } = render(<Alert message="Info" />)
    expect(container.querySelector('.alert--info')).toBeInTheDocument()
  })

  it('renders with success type', () => {
    const { container } = render(<Alert message="Success" type="success" />)
    expect(container.querySelector('.alert--success')).toBeInTheDocument()
  })

  it('renders with warning type', () => {
    const { container } = render(<Alert message="Warning" type="warning" />)
    expect(container.querySelector('.alert--warning')).toBeInTheDocument()
  })

  it('renders with error type', () => {
    const { container } = render(<Alert message="Error" type="error" />)
    expect(container.querySelector('.alert--error')).toBeInTheDocument()
  })

  it('renders description when provided', () => {
    render(<Alert message="Title" description="Description text" />)
    expect(screen.getByText('Description text')).toBeInTheDocument()
  })

  it('applies with-description class when description is provided', () => {
    const { container } = render(<Alert message="Title" description="Description" />)
    expect(container.querySelector('.alert--with-description')).toBeInTheDocument()
  })

  it('renders icon when showIcon is true', () => {
    const { container } = render(<Alert message="Test" showIcon />)
    expect(container.querySelector('.alert__icon')).toBeInTheDocument()
  })

  it('renders correct icon for each type', () => {
    const { container: successContainer } = render(<Alert message="Success" type="success" showIcon />)
    expect(successContainer.querySelector('.alert__icon')).toHaveTextContent('✓')

    const { container: infoContainer } = render(<Alert message="Info" type="info" showIcon />)
    expect(infoContainer.querySelector('.alert__icon')).toHaveTextContent('ℹ')

    const { container: warningContainer } = render(<Alert message="Warning" type="warning" showIcon />)
    expect(warningContainer.querySelector('.alert__icon')).toHaveTextContent('⚠')

    const { container: errorContainer } = render(<Alert message="Error" type="error" showIcon />)
    expect(errorContainer.querySelector('.alert__icon')).toHaveTextContent('✕')
  })

  it('renders close button when closable is true', () => {
    render(<Alert message="Test" closable />)
    expect(screen.getByRole('button', { name: /close/i })).toBeInTheDocument()
  })

  it('does not render close button by default', () => {
    render(<Alert message="Test" />)
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })

  it('hides alert when close button is clicked', () => {
    render(<Alert message="Test" closable />)
    const closeButton = screen.getByRole('button', { name: /close/i })
    fireEvent.click(closeButton)
    expect(screen.queryByText('Test')).not.toBeInTheDocument()
  })

  it('calls onClose callback when close button is clicked', () => {
    const onClose = vi.fn()
    render(<Alert message="Test" closable onClose={onClose} />)
    const closeButton = screen.getByRole('button', { name: /close/i })
    fireEvent.click(closeButton)
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('applies custom className', () => {
    const { container } = render(<Alert message="Test" className="custom-class" />)
    expect(container.querySelector('.custom-class')).toBeInTheDocument()
  })

  it('forwards additional props to root div', () => {
    render(<Alert message="Test" data-testid="alert-element" />)
    expect(screen.getByTestId('alert-element')).toBeInTheDocument()
  })
})
