import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/preact'
import { Row } from '../components/row/Row'

describe('Row', () => {
  it('renders children', () => {
    render(<Row>Row content</Row>)
    expect(screen.getByText('Row content')).toBeInTheDocument()
  })

  it('renders with default row class', () => {
    const { container } = render(<Row>Content</Row>)
    expect(container.querySelector('.row')).toBeInTheDocument()
  })

  it('renders with default top align', () => {
    const { container } = render(<Row>Content</Row>)
    expect(container.querySelector('.row--align-top')).toBeInTheDocument()
  })

  it('renders with middle align', () => {
    const { container } = render(<Row align="middle">Content</Row>)
    expect(container.querySelector('.row--align-middle')).toBeInTheDocument()
  })

  it('renders with bottom align', () => {
    const { container } = render(<Row align="bottom">Content</Row>)
    expect(container.querySelector('.row--align-bottom')).toBeInTheDocument()
  })

  it('renders with stretch align', () => {
    const { container } = render(<Row align="stretch">Content</Row>)
    expect(container.querySelector('.row--align-stretch')).toBeInTheDocument()
  })

  it('renders with default start justify', () => {
    const { container } = render(<Row>Content</Row>)
    expect(container.querySelector('.row--justify-start')).toBeInTheDocument()
  })

  it('renders with end justify', () => {
    const { container } = render(<Row justify="end">Content</Row>)
    expect(container.querySelector('.row--justify-end')).toBeInTheDocument()
  })

  it('renders with center justify', () => {
    const { container } = render(<Row justify="center">Content</Row>)
    expect(container.querySelector('.row--justify-center')).toBeInTheDocument()
  })

  it('renders with space-around justify', () => {
    const { container } = render(<Row justify="space-around">Content</Row>)
    expect(container.querySelector('.row--justify-space-around')).toBeInTheDocument()
  })

  it('renders with space-between justify', () => {
    const { container } = render(<Row justify="space-between">Content</Row>)
    expect(container.querySelector('.row--justify-space-between')).toBeInTheDocument()
  })

  it('renders with space-evenly justify', () => {
    const { container } = render(<Row justify="space-evenly">Content</Row>)
    expect(container.querySelector('.row--justify-space-evenly')).toBeInTheDocument()
  })

  it('renders with wrap by default', () => {
    const { container } = render(<Row>Content</Row>)
    expect(container.querySelector('.row--wrap')).toBeInTheDocument()
  })

  it('renders with nowrap', () => {
    const { container } = render(<Row wrap={false}>Content</Row>)
    expect(container.querySelector('.row--nowrap')).toBeInTheDocument()
  })

  it('applies single gutter value to both horizontal and vertical', () => {
    const { container } = render(<Row gutter={16}>Content</Row>)
    const row = container.querySelector('.row')
    expect(row).toHaveStyle({ 
      marginLeft: '-8px',
      marginRight: '-8px',
      rowGap: '16px'
    })
  })

  it('applies array gutter values separately', () => {
    const { container } = render(<Row gutter={[16, 24]}>Content</Row>)
    const row = container.querySelector('.row')
    expect(row).toHaveStyle({ 
      marginLeft: '-8px',
      marginRight: '-8px',
      rowGap: '24px'
    })
  })

  it('applies custom className', () => {
    const { container } = render(<Row className="custom-row">Content</Row>)
    expect(container.querySelector('.custom-row')).toBeInTheDocument()
  })

  it('forwards additional props', () => {
    render(<Row data-testid="row-element">Content</Row>)
    expect(screen.getByTestId('row-element')).toBeInTheDocument()
  })

  it('preserves custom style', () => {
    const { container } = render(<Row style={{ color: 'red' }}>Content</Row>)
    const row = container.querySelector('.row')
    expect(row).toHaveStyle({ color: 'rgb(255, 0, 0)' })
  })
})
