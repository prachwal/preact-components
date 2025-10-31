import type { Meta, StoryObj } from '@storybook/preact';
import { Logo } from './Logo';

const meta: Meta<typeof Logo> = {
  title: 'Components/Logo',
  component: Logo,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Logo>;

export const Default: Story = {
  args: {},
};

export const InHeader: Story = {
  render: () => (
    <header style={{ padding: '16px', background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-color)' }}>
      <Logo />
    </header>
  ),
};

export const InNavbar: Story = {
  render: () => (
    <nav style={{ padding: '16px', background: 'var(--primary-color)', color: 'white' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <Logo />
        <span style={{ color: 'white', fontWeight: 'bold' }}>My Application</span>
      </div>
    </nav>
  ),
};
