import type { Meta, StoryObj } from '@storybook/preact';
import { Alert } from './Alert';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['success', 'info', 'warning', 'error'],
      description: 'Alert type/severity',
    },
    message: {
      control: 'text',
      description: 'Main alert message',
    },
    description: {
      control: 'text',
      description: 'Optional detailed description',
    },
    closable: {
      control: 'boolean',
      description: 'Whether the alert can be closed',
    },
    showIcon: {
      control: 'boolean',
      description: 'Whether to show an icon',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Success: Story = {
  args: {
    type: 'success',
    message: 'Success!',
    description: 'Your operation completed successfully.',
    showIcon: true,
  },
};

export const Info: Story = {
  args: {
    type: 'info',
    message: 'Information',
    description: 'Here is some useful information.',
    showIcon: true,
  },
};

export const Warning: Story = {
  args: {
    type: 'warning',
    message: 'Warning',
    description: 'Please be careful with this action.',
    showIcon: true,
  },
};

export const Error: Story = {
  args: {
    type: 'error',
    message: 'Error',
    description: 'Something went wrong. Please try again.',
    showIcon: true,
  },
};

export const Closable: Story = {
  args: {
    type: 'info',
    message: 'Dismissible Alert',
    description: 'Click the × button to close this alert.',
    closable: true,
    showIcon: true,
  },
};

export const WithoutDescription: Story = {
  args: {
    type: 'success',
    message: 'Simple success message',
    showIcon: true,
  },
};

export const WithoutIcon: Story = {
  args: {
    type: 'info',
    message: 'Alert without icon',
    description: 'This alert does not show an icon.',
    showIcon: false,
  },
};
