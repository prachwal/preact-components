import type { Meta, StoryObj } from '@storybook/preact';
import { Badge } from './Badge';
import { Button } from '../button/Button';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    count: {
      control: { type: 'number' },
      description: 'Badge count number',
    },
    dot: {
      control: 'boolean',
      description: 'Show as a dot instead of count',
    },
    showZero: {
      control: 'boolean',
      description: 'Show badge when count is zero',
    },
    status: {
      control: { type: 'select' },
      options: ['success', 'error', 'warning', 'info', 'default'],
      description: 'Status indicator type',
    },
    text: {
      control: 'text',
      description: 'Text to display with status badge',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const WithCount: Story = {
  args: {
    count: 5,
    children: <Button>Notifications</Button>,
  },
};

export const WithDot: Story = {
  args: {
    dot: true,
    children: <Button>Messages</Button>,
  },
};

export const LargeCount: Story = {
  args: {
    count: 100,
    children: <Button>Inbox</Button>,
  },
};

export const ShowZero: Story = {
  args: {
    count: 0,
    showZero: true,
    children: <Button>Tasks</Button>,
  },
};

export const StatusSuccess: Story = {
  args: {
    status: 'success',
    text: 'Success',
  },
};

export const StatusError: Story = {
  args: {
    status: 'error',
    text: 'Error',
  },
};

export const StatusWarning: Story = {
  args: {
    status: 'warning',
    text: 'Warning',
  },
};

export const StatusInfo: Story = {
  args: {
    status: 'info',
    text: 'Processing',
  },
};

export const StatusDefault: Story = {
  args: {
    status: 'default',
    text: 'Default',
  },
};

export const StatusDotOnly: Story = {
  args: {
    status: 'success',
  },
};
