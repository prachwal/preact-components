import type { Meta, StoryObj } from '@storybook/preact';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Input size',
    },
    variant: {
      control: { type: 'select' },
      options: ['outlined', 'filled'],
      description: 'Input visual style',
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
      description: 'Full width input',
    },
    prefix: {
      control: 'text',
      description: 'Prefix text or icon',
    },
    suffix: {
      control: 'text',
      description: 'Suffix text or icon',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    placeholder: 'Small input',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    placeholder: 'Medium input',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    placeholder: 'Large input',
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    placeholder: 'Outlined input',
  },
};

export const Filled: Story = {
  args: {
    variant: 'filled',
    placeholder: 'Filled input',
  },
};

export const WithError: Story = {
  args: {
    error: true,
    placeholder: 'Input with error',
    value: 'Invalid value',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Disabled input',
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    placeholder: 'Full width input',
  },
};

export const WithPrefix: Story = {
  args: {
    prefix: '$',
    placeholder: '0.00',
  },
};

export const WithSuffix: Story = {
  args: {
    suffix: 'USD',
    placeholder: '0.00',
  },
};

export const WithPrefixAndSuffix: Story = {
  args: {
    prefix: '$',
    suffix: '.00',
    placeholder: '0',
  },
};

export const AllTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Input type="text" placeholder="Text input" />
      <Input type="email" placeholder="Email input" />
      <Input type="password" placeholder="Password input" />
      <Input type="number" placeholder="Number input" />
      <Input type="tel" placeholder="Phone input" />
      <Input type="url" placeholder="URL input" />
      <Input type="search" placeholder="Search input" />
    </div>
  ),
};
