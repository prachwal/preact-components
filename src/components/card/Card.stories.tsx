import type { Meta, StoryObj } from '@storybook/preact';
import { Card } from './Card';
import { Button } from '../button/Button';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Card title',
    },
    bordered: {
      control: 'boolean',
      description: 'Show card border',
    },
    hoverable: {
      control: 'boolean',
      description: 'Lift card on hover',
    },
    loading: {
      control: 'boolean',
      description: 'Show loading state',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Basic: Story = {
  args: {
    title: 'Card Title',
    children: <p>This is the card content. You can put any content here.</p>,
  },
};

export const WithoutTitle: Story = {
  args: {
    children: <p>This card has no title, just content.</p>,
  },
};

export const WithExtra: Story = {
  args: {
    title: 'Card with Extra',
    extra: <Button size="sm">Action</Button>,
    children: <p>This card has an extra action in the header.</p>,
  },
};

export const Hoverable: Story = {
  args: {
    title: 'Hoverable Card',
    hoverable: true,
    children: <p>Hover over this card to see the effect.</p>,
  },
};

export const NoBorder: Story = {
  args: {
    title: 'Borderless Card',
    bordered: false,
    children: <p>This card has no border.</p>,
  },
};

export const Loading: Story = {
  args: {
    title: 'Loading Card',
    loading: true,
    children: <p>This content is loading...</p>,
  },
};

export const ComplexContent: Story = {
  args: {
    title: 'Product Card',
    extra: <Button variant="primary" size="sm">Buy Now</Button>,
    hoverable: true,
    children: (
      <div>
        <p style={{ marginBottom: '12px' }}>
          <strong>Premium Widget</strong>
        </p>
        <p style={{ color: 'var(--text-muted)', marginBottom: '12px' }}>
          A high-quality widget with advanced features and excellent performance.
        </p>
        <p style={{ fontSize: '24px', fontWeight: 'bold', color: 'var(--primary-color)' }}>
          $99.99
        </p>
      </div>
    ),
  },
};
