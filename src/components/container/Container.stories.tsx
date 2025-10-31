import type { Meta, StoryObj } from '@storybook/preact';
import { Container } from './Container';

const meta: Meta<typeof Container> = {
  title: 'Layout/Container',
  component: Container,
  tags: ['autodocs'],
  argTypes: {
    fluid: {
      control: 'boolean',
      description: 'Full width container',
    },
    maxWidth: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl', '2xl'],
      description: 'Maximum container width',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Container>;

const DemoContent = () => (
  <div style={{ padding: '20px', background: 'var(--bg-secondary)', border: '2px dashed var(--border-color)' }}>
    Container Content
  </div>
);

export const Default: Story = {
  args: {
    children: <DemoContent />,
  },
};

export const Fluid: Story = {
  args: {
    fluid: true,
    children: <DemoContent />,
  },
};

export const Small: Story = {
  args: {
    maxWidth: 'sm',
    children: <DemoContent />,
  },
};

export const Medium: Story = {
  args: {
    maxWidth: 'md',
    children: <DemoContent />,
  },
};

export const Large: Story = {
  args: {
    maxWidth: 'lg',
    children: <DemoContent />,
  },
};

export const ExtraLarge: Story = {
  args: {
    maxWidth: 'xl',
    children: <DemoContent />,
  },
};

export const ExtraExtraLarge: Story = {
  args: {
    maxWidth: '2xl',
    children: <DemoContent />,
  },
};
