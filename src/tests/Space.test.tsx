import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/preact'
import { Space } from '../components/space/Space'

describe('Space', () => {
  it('renders children', () => {
    render(<Space>Space content</Space>)
    expect(screen.getByText('Space content')).toBeInTheDocument()
  })

  it('renders with default horizontal direction', () => {
    const { container } = render(<Space>Content</Space>)
    expect(container.querySelector('.space--horizontal')).toBeInTheDocument()
  })

  it('renders with vertical direction', () => {
    const { container } = render(<Space direction="vertical">Content</Space>)
    expect(container.querySelector('.space--vertical')).toBeInTheDocument()
  })

  it('applies default small size gap', () => {
    const { container } = render(<Space>Content</Space>)
    const space = container.querySelector('.space')
    expect(space).toHaveStyle({ gap: '8px' })
  })

  it('applies middle size gap', () => {
    const { container } = render(<Space size="middle">Content</Space>)
    const space = container.querySelector('.space')
    expect(space).toHaveStyle({ gap: '16px' })
  })

  it('applies large size gap', () => {
    const { container } = render(<Space size="large">Content</Space>)
    const space = container.querySelector('.space')
    expect(space).toHaveStyle({ gap: '24px' })
  })

  it('applies custom numeric size', () => {
    const { container } = render(<Space size={32}>Content</Space>)
    const space = container.querySelector('.space')
    expect(space).toHaveStyle({ gap: '32px' })
  })

  it('applies align start', () => {
    const { container } = render(<Space align="start">Content</Space>)
    expect(container.querySelector('.space--align-start')).toBeInTheDocument()
  })

  it('applies align end', () => {
    const { container } = render(<Space align="end">Content</Space>)
    expect(container.querySelector('.space--align-end')).toBeInTheDocument()
  })

  it('applies align center', () => {
    const { container } = render(<Space align="center">Content</Space>)
    expect(container.querySelector('.space--align-center')).toBeInTheDocument()
  })

  it('applies align baseline', () => {
    const { container } = render(<Space align="baseline">Content</Space>)
    expect(container.querySelector('.space--align-baseline')).toBeInTheDocument()
  })

  it('applies wrap class', () => {
    const { container } = render(<Space wrap>Content</Space>)
    expect(container.querySelector('.space--wrap')).toBeInTheDocument()
  })

  it('does not apply wrap class by default', () => {
    const { container } = render(<Space>Content</Space>)
    expect(container.querySelector('.space--wrap')).not.toBeInTheDocument()
  })

  it('applies custom className', () => {
    const { container } = render(<Space className="custom-space">Content</Space>)
    expect(container.querySelector('.custom-space')).toBeInTheDocument()
  })

  it('forwards additional props', () => {
    render(<Space data-testid="space-element">Content</Space>)
    expect(screen.getByTestId('space-element')).toBeInTheDocument()
  })

  it('preserves custom style', () => {
    const { container } = render(<Space style={{ color: 'red' }}>Content</Space>)
    const space = container.querySelector('.space')
    expect(space).toHaveStyle({ color: 'rgb(255, 0, 0)' })
  })
})
