import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/preact'
import { Flex } from '../components/flex/Flex'

describe('Flex', () => {
  it('renders children', () => {
    render(<Flex>Flex content</Flex>)
    expect(screen.getByText('Flex content')).toBeInTheDocument()
  })

  it('renders with default flex class', () => {
    const { container } = render(<Flex>Content</Flex>)
    expect(container.querySelector('.flex')).toBeInTheDocument()
  })

  it('renders as inline flex', () => {
    const { container } = render(<Flex inline>Content</Flex>)
    expect(container.querySelector('.flex--inline')).toBeInTheDocument()
  })

  it('renders with default row direction', () => {
    const { container } = render(<Flex>Content</Flex>)
    expect(container.querySelector('.flex--direction-row')).toBeInTheDocument()
  })

  it('renders with row-reverse direction', () => {
    const { container } = render(<Flex direction="row-reverse">Content</Flex>)
    expect(container.querySelector('.flex--direction-row-reverse')).toBeInTheDocument()
  })

  it('renders with column direction', () => {
    const { container } = render(<Flex direction="column">Content</Flex>)
    expect(container.querySelector('.flex--direction-column')).toBeInTheDocument()
  })

  it('renders with column-reverse direction', () => {
    const { container } = render(<Flex direction="column-reverse">Content</Flex>)
    expect(container.querySelector('.flex--direction-column-reverse')).toBeInTheDocument()
  })

  it('renders with default start justify', () => {
    const { container } = render(<Flex>Content</Flex>)
    expect(container.querySelector('.flex--justify-start')).toBeInTheDocument()
  })

  it('renders with end justify', () => {
    const { container } = render(<Flex justify="end">Content</Flex>)
    expect(container.querySelector('.flex--justify-end')).toBeInTheDocument()
  })

  it('renders with center justify', () => {
    const { container } = render(<Flex justify="center">Content</Flex>)
    expect(container.querySelector('.flex--justify-center')).toBeInTheDocument()
  })

  it('renders with between justify', () => {
    const { container } = render(<Flex justify="between">Content</Flex>)
    expect(container.querySelector('.flex--justify-between')).toBeInTheDocument()
  })

  it('renders with around justify', () => {
    const { container } = render(<Flex justify="around">Content</Flex>)
    expect(container.querySelector('.flex--justify-around')).toBeInTheDocument()
  })

  it('renders with evenly justify', () => {
    const { container } = render(<Flex justify="evenly">Content</Flex>)
    expect(container.querySelector('.flex--justify-evenly')).toBeInTheDocument()
  })

  it('renders with default stretch align', () => {
    const { container } = render(<Flex>Content</Flex>)
    expect(container.querySelector('.flex--align-stretch')).toBeInTheDocument()
  })

  it('renders with start align', () => {
    const { container } = render(<Flex align="start">Content</Flex>)
    expect(container.querySelector('.flex--align-start')).toBeInTheDocument()
  })

  it('renders with end align', () => {
    const { container } = render(<Flex align="end">Content</Flex>)
    expect(container.querySelector('.flex--align-end')).toBeInTheDocument()
  })

  it('renders with center align', () => {
    const { container } = render(<Flex align="center">Content</Flex>)
    expect(container.querySelector('.flex--align-center')).toBeInTheDocument()
  })

  it('renders with baseline align', () => {
    const { container } = render(<Flex align="baseline">Content</Flex>)
    expect(container.querySelector('.flex--align-baseline')).toBeInTheDocument()
  })

  it('renders with default nowrap', () => {
    const { container } = render(<Flex>Content</Flex>)
    expect(container.querySelector('.flex--wrap-nowrap')).toBeInTheDocument()
  })

  it('renders with wrap', () => {
    const { container } = render(<Flex wrap="wrap">Content</Flex>)
    expect(container.querySelector('.flex--wrap-wrap')).toBeInTheDocument()
  })

  it('renders with wrap-reverse', () => {
    const { container } = render(<Flex wrap="wrap-reverse">Content</Flex>)
    expect(container.querySelector('.flex--wrap-wrap-reverse')).toBeInTheDocument()
  })

  it('applies gap style when gap prop is provided', () => {
    const { container } = render(<Flex gap={16}>Content</Flex>)
    const flex = container.querySelector('.flex')
    expect(flex).toHaveStyle({ gap: '16px' })
  })

  it('applies custom className', () => {
    const { container } = render(<Flex className="custom-flex">Content</Flex>)
    expect(container.querySelector('.custom-flex')).toBeInTheDocument()
  })

  it('forwards additional props', () => {
    render(<Flex data-testid="flex-element">Content</Flex>)
    expect(screen.getByTestId('flex-element')).toBeInTheDocument()
  })

  it('preserves custom style when not using gap', () => {
    const { container } = render(<Flex style={{ color: 'red' }}>Content</Flex>)
    const flex = container.querySelector('.flex')
    expect(flex).toHaveStyle({ color: 'rgb(255, 0, 0)' })
  })
})
