import type { Meta, StoryObj } from '@storybook/preact';
import { Header } from './Header';
import { Heading } from '../heading/Heading';

const meta: Meta<typeof Header> = {
  title: 'Layout/Header',
  component: Header,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    children: (
      <div style={{ padding: '20px', background: 'var(--bg-secondary)' }}>
        <Heading level={1}>Page Header</Heading>
      </div>
    ),
  },
};

export const SimpleHeader: Story = {
  render: () => (
    <Header style={{ padding: '16px', background: 'var(--primary-color)', color: 'white' }}>
      <Heading level={1} style={{ margin: 0, color: 'inherit' }}>My Application</Heading>
    </Header>
  ),
};

export const WithNavigation: Story = {
  render: () => (
    <Header style={{ padding: '16px', background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-color)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Heading level={2} style={{ margin: 0 }}>Site Title</Heading>
        <nav>
          <a href="#" style={{ marginRight: '16px' }}>Home</a>
          <a href="#" style={{ marginRight: '16px' }}>About</a>
          <a href="#">Contact</a>
        </nav>
      </div>
    </Header>
  ),
};
