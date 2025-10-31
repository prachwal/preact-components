import type { Meta, StoryObj } from '@storybook/preact';
import { Navbar } from './Navbar';
import { Link } from '../link/Link';
import { Button } from '../button/Button';

const meta: Meta<typeof Navbar> = {
  title: 'Components/Navbar',
  component: Navbar,
  tags: ['autodocs'],
  argTypes: {
    fixed: {
      control: 'boolean',
      description: 'Fixed navbar at top',
    },
    transparent: {
      control: 'boolean',
      description: 'Transparent background',
    },
    showMenuButton: {
      control: 'boolean',
      description: 'Show mobile menu button',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Basic: Story = {
  args: {
    logo: <strong>Logo</strong>,
    menu: (
      <div style={{ display: 'flex', gap: '16px' }}>
        <Link href="#">Home</Link>
        <Link href="#">About</Link>
        <Link href="#">Products</Link>
        <Link href="#">Contact</Link>
      </div>
    ),
  },
};

export const WithExtra: Story = {
  args: {
    logo: <strong>My App</strong>,
    menu: (
      <div style={{ display: 'flex', gap: '16px' }}>
        <Link href="#">Home</Link>
        <Link href="#">Features</Link>
        <Link href="#">Pricing</Link>
      </div>
    ),
    extra: (
      <div style={{ display: 'flex', gap: '8px' }}>
        <Button variant="outline" size="sm">Login</Button>
        <Button size="sm">Sign Up</Button>
      </div>
    ),
  },
};

export const Fixed: Story = {
  args: {
    fixed: true,
    logo: <strong>Fixed Navbar</strong>,
    menu: (
      <div style={{ display: 'flex', gap: '16px' }}>
        <Link href="#">Home</Link>
        <Link href="#">About</Link>
        <Link href="#">Services</Link>
      </div>
    ),
  },
  render: (args) => (
    <div style={{ minHeight: '200vh' }}>
      <Navbar {...args} />
      <div style={{ padding: '80px 20px 20px' }}>
        <h1>Scroll to see the fixed navbar effect</h1>
        <p>The navbar will stay at the top while you scroll.</p>
        {Array.from({ length: 50 }, (_, i) => (
          <p key={i}>Scroll content line {i + 1}</p>
        ))}
      </div>
    </div>
  ),
};

export const Transparent: Story = {
  args: {
    fixed: true,
    transparent: true,
    logo: <strong style={{ color: 'white' }}>Transparent</strong>,
    menu: (
      <div style={{ display: 'flex', gap: '16px' }}>
        <Link href="#" style={{ color: 'white' }}>Home</Link>
        <Link href="#" style={{ color: 'white' }}>About</Link>
        <Link href="#" style={{ color: 'white' }}>Contact</Link>
      </div>
    ),
  },
  render: (args) => (
    <div style={{ minHeight: '200vh' }}>
      <Navbar {...args} />
      <div 
        style={{ 
          height: '100vh', 
          background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
          padding: '100px 20px 20px',
          color: 'white'
        }}
      >
        <h1>Hero Section</h1>
        <p>Scroll down to see the navbar become opaque</p>
      </div>
      <div style={{ padding: '20px', background: 'var(--bg-color)' }}>
        <h2>Content Section</h2>
        {Array.from({ length: 30 }, (_, i) => (
          <p key={i}>Content line {i + 1}</p>
        ))}
      </div>
    </div>
  ),
};

export const MinimalLogo: Story = {
  args: {
    logo: (
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--primary-color)' }} />
        <strong>Brand</strong>
      </div>
    ),
    menu: (
      <div style={{ display: 'flex', gap: '16px' }}>
        <Link href="#">Products</Link>
        <Link href="#">Solutions</Link>
        <Link href="#">Resources</Link>
      </div>
    ),
    extra: <Button size="sm">Get Started</Button>,
  },
};
