import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/preact'
import { Logo } from '../components/logo/Logo'

describe('Logo', () => {
  it('renders logo container', () => {
    const { container } = render(<Logo />)
    expect(container.querySelector('div')).toBeInTheDocument()
  })

  it('renders Vite link', () => {
    render(<Logo />)
    const links = screen.getAllByRole('link')
    const viteLink = links.find(link => link.getAttribute('href') === 'https://vite.dev')
    expect(viteLink).toBeInTheDocument()
  })

  it('renders Preact link', () => {
    render(<Logo />)
    const links = screen.getAllByRole('link')
    const preactLink = links.find(link => link.getAttribute('href') === 'https://preactjs.com')
    expect(preactLink).toBeInTheDocument()
  })

  it('renders Vite logo image', () => {
    render(<Logo />)
    const viteImg = screen.getByAltText('Vite logo')
    expect(viteImg).toBeInTheDocument()
    expect(viteImg).toHaveClass('logo')
  })

  it('renders Preact logo image', () => {
    render(<Logo />)
    const preactImg = screen.getByAltText('Preact logo')
    expect(preactImg).toBeInTheDocument()
    expect(preactImg).toHaveClass('logo', 'preact')
  })

  it('sets target and rel attributes on links', () => {
    render(<Logo />)
    const links = screen.getAllByRole('link')
    links.forEach(link => {
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    })
  })
})
