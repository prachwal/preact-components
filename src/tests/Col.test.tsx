import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/preact'
import { Col } from '../components/col/Col'

describe('Col', () => {
  it('renders children', () => {
    render(<Col>Column content</Col>)
    expect(screen.getByText('Column content')).toBeInTheDocument()
  })

  it('renders with default span of 24', () => {
    const { container } = render(<Col>Content</Col>)
    expect(container.querySelector('.col--24')).toBeInTheDocument()
  })

  it('renders with custom span', () => {
    const { container } = render(<Col span={12}>Content</Col>)
    expect(container.querySelector('.col--12')).toBeInTheDocument()
  })

  it('renders with offset', () => {
    const { container } = render(<Col offset={4}>Content</Col>)
    expect(container.querySelector('.col--offset-4')).toBeInTheDocument()
  })

  it('does not apply offset class when offset is 0', () => {
    const { container } = render(<Col offset={0}>Content</Col>)
    expect(container.querySelector('[class*="col--offset"]')).not.toBeInTheDocument()
  })

  it('renders with xs breakpoint', () => {
    const { container } = render(<Col xs={6}>Content</Col>)
    expect(container.querySelector('.col--xs-6')).toBeInTheDocument()
  })

  it('renders with sm breakpoint', () => {
    const { container } = render(<Col sm={8}>Content</Col>)
    expect(container.querySelector('.col--sm-8')).toBeInTheDocument()
  })

  it('renders with md breakpoint', () => {
    const { container } = render(<Col md={12}>Content</Col>)
    expect(container.querySelector('.col--md-12')).toBeInTheDocument()
  })

  it('renders with lg breakpoint', () => {
    const { container } = render(<Col lg={16}>Content</Col>)
    expect(container.querySelector('.col--lg-16')).toBeInTheDocument()
  })

  it('renders with xl breakpoint', () => {
    const { container } = render(<Col xl={20}>Content</Col>)
    expect(container.querySelector('.col--xl-20')).toBeInTheDocument()
  })

  it('renders with all breakpoints', () => {
    const { container } = render(
      <Col xs={6} sm={8} md={12} lg={16} xl={20}>Content</Col>
    )
    expect(container.querySelector('.col--xs-6')).toBeInTheDocument()
    expect(container.querySelector('.col--sm-8')).toBeInTheDocument()
    expect(container.querySelector('.col--md-12')).toBeInTheDocument()
    expect(container.querySelector('.col--lg-16')).toBeInTheDocument()
    expect(container.querySelector('.col--xl-20')).toBeInTheDocument()
  })

  it('applies flex style when flex prop is provided as string', () => {
    const { container } = render(<Col flex="1 1 auto">Content</Col>)
    const col = container.querySelector('.col')
    expect(col).toHaveStyle({ flex: '1 1 auto' })
  })

  it('applies flex style when flex prop is provided as number', () => {
    const { container } = render(<Col flex={2}>Content</Col>)
    const col = container.querySelector('.col')
    expect(col).toHaveStyle({ flex: '2' })
  })

  it('applies custom className', () => {
    const { container } = render(<Col className="custom-col">Content</Col>)
    expect(container.querySelector('.custom-col')).toBeInTheDocument()
  })

  it('forwards additional props', () => {
    render(<Col data-testid="col-element">Content</Col>)
    expect(screen.getByTestId('col-element')).toBeInTheDocument()
  })

  it('preserves custom style when not using flex', () => {
    const { container } = render(<Col style={{ color: 'red' }}>Content</Col>)
    const col = container.querySelector('.col')
    expect(col).toHaveStyle({ color: 'rgb(255, 0, 0)' })
  })
})
