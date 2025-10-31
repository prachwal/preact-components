import type { Meta, StoryObj } from '@storybook/preact';
import { Link } from './Link';

const meta: Meta<typeof Link> = {
  title: 'Components/Link',
  component: Link,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'muted'],
      description: 'Link visual style',
    },
    href: {
      control: 'text',
      description: 'Link destination',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Default: Story = {
  args: {
    href: '#',
    children: 'Default Link',
  },
};

export const Primary: Story = {
  args: {
    variant: 'primary',
    href: '#',
    children: 'Primary Link',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    href: '#',
    children: 'Secondary Link',
  },
};

export const Muted: Story = {
  args: {
    variant: 'muted',
    href: '#',
    children: 'Muted Link',
  },
};

export const ExternalLink: Story = {
  args: {
    href: 'https://example.com',
    target: '_blank',
    rel: 'noopener noreferrer',
    children: 'External Link',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Link href="#">Default</Link>
      <Link variant="primary" href="#">Primary</Link>
      <Link variant="secondary" href="#">Secondary</Link>
      <Link variant="muted" href="#">Muted</Link>
    </div>
  ),
};

export const InText: Story = {
  render: () => (
    <p>
      This is a paragraph with a <Link href="#">default link</Link>,{' '}
      a <Link variant="primary" href="#">primary link</Link>, and{' '}
      a <Link variant="muted" href="#">muted link</Link> inside it.
    </p>
  ),
};
