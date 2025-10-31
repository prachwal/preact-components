import type { Meta, StoryObj } from '@storybook/preact';
import { Select } from './Select';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Select size',
    },
    variant: {
      control: { type: 'select' },
      options: ['outlined', 'filled'],
      description: 'Select visual style',
    },
    error: {
      control: 'boolean',
      description: 'Error state',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Full width select',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    options: [
      { value: '', label: 'Select an option...' },
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' },
    ],
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    options: [
      { value: '1', label: 'Small option 1' },
      { value: '2', label: 'Small option 2' },
      { value: '3', label: 'Small option 3' },
    ],
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    options: [
      { value: '1', label: 'Medium option 1' },
      { value: '2', label: 'Medium option 2' },
      { value: '3', label: 'Medium option 3' },
    ],
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    options: [
      { value: '1', label: 'Large option 1' },
      { value: '2', label: 'Large option 2' },
      { value: '3', label: 'Large option 3' },
    ],
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    options: [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
    ],
  },
};

export const Filled: Story = {
  args: {
    variant: 'filled',
    options: [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
    ],
  },
};

export const WithError: Story = {
  args: {
    error: true,
    options: [
      { value: '', label: 'Please select...' },
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
    ],
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    options: [
      { value: '1', label: 'Disabled option' },
    ],
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    options: [
      { value: '1', label: 'Full width option 1' },
      { value: '2', label: 'Full width option 2' },
    ],
  },
};

export const WithDisabledOptions: Story = {
  args: {
    options: [
      { value: '', label: 'Select...' },
      { value: '1', label: 'Available option' },
      { value: '2', label: 'Disabled option', disabled: true },
      { value: '3', label: 'Another available' },
      { value: '4', label: 'Another disabled', disabled: true },
    ],
  },
};

export const Countries: Story = {
  args: {
    options: [
      { value: '', label: 'Select a country...' },
      { value: 'us', label: 'United States' },
      { value: 'uk', label: 'United Kingdom' },
      { value: 'ca', label: 'Canada' },
      { value: 'au', label: 'Australia' },
      { value: 'de', label: 'Germany' },
      { value: 'fr', label: 'France' },
      { value: 'jp', label: 'Japan' },
      { value: 'cn', label: 'China' },
    ],
  },
};
