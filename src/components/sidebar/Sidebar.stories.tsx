import type { Meta, StoryObj } from '@storybook/preact';
import { Sidebar } from './Sidebar';
import { Link } from '../link/Link';

const meta: Meta<typeof Sidebar> = {
  title: 'Components/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  argTypes: {
    collapsed: {
      control: 'boolean',
      description: 'Collapsed state',
    },
    theme: {
      control: { type: 'select' },
      options: ['light', 'dark'],
      description: 'Sidebar theme',
    },
    collapsible: {
      control: 'boolean',
      description: 'Allow collapse/expand',
    },
    overlay: {
      control: 'boolean',
      description: 'Show overlay on mobile',
    },
    width: {
      control: { type: 'number' },
      description: 'Sidebar width in pixels',
    },
    collapsedWidth: {
      control: { type: 'number' },
      description: 'Width when collapsed',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

const MenuContent = () => (
  <div style={{ padding: '16px' }}>
    <h3 style={{ marginBottom: '16px' }}>Menu</h3>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Link href="#" style={{ display: 'block', padding: '8px' }}>Dashboard</Link>
      <Link href="#" style={{ display: 'block', padding: '8px' }}>Profile</Link>
      <Link href="#" style={{ display: 'block', padding: '8px' }}>Settings</Link>
      <Link href="#" style={{ display: 'block', padding: '8px' }}>Logout</Link>
    </div>
  </div>
);

export const Default: Story = {
  args: {
    children: <MenuContent />,
  },
};

export const Collapsed: Story = {
  args: {
    collapsed: true,
    children: <MenuContent />,
  },
};

export const DarkTheme: Story = {
  args: {
    theme: 'dark',
    children: <MenuContent />,
  },
};

export const CustomWidth: Story = {
  args: {
    width: 320,
    children: <MenuContent />,
  },
};

export const NotCollapsible: Story = {
  args: {
    collapsible: false,
    children: <MenuContent />,
  },
};

export const WithLayout: Story = {
  render: () => (
    <div style={{ display: 'flex', minHeight: '400px' }}>
      <Sidebar theme="light">
        <MenuContent />
      </Sidebar>
      <div style={{ flex: 1, padding: '24px', background: 'var(--bg-secondary)' }}>
        <h1>Main Content</h1>
        <p>This is the main content area next to the sidebar.</p>
        <p>Try collapsing the sidebar using the toggle button.</p>
      </div>
    </div>
  ),
};

export const DarkWithLayout: Story = {
  render: () => (
    <div style={{ display: 'flex', minHeight: '400px' }}>
      <Sidebar theme="dark">
        <div style={{ padding: '16px' }}>
          <h3 style={{ marginBottom: '16px', color: 'white' }}>Navigation</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <a href="#" style={{ display: 'block', padding: '8px', color: 'rgba(255,255,255,0.87)' }}>Home</a>
            <a href="#" style={{ display: 'block', padding: '8px', color: 'rgba(255,255,255,0.87)' }}>Projects</a>
            <a href="#" style={{ display: 'block', padding: '8px', color: 'rgba(255,255,255,0.87)' }}>Team</a>
            <a href="#" style={{ display: 'block', padding: '8px', color: 'rgba(255,255,255,0.87)' }}>Calendar</a>
          </div>
        </div>
      </Sidebar>
      <div style={{ flex: 1, padding: '24px' }}>
        <h1>Dashboard</h1>
        <p>Main application content goes here.</p>
      </div>
    </div>
  ),
};
