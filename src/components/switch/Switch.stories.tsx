import type { Meta, StoryObj } from '@storybook/preact';
import { Switch } from './Switch';

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Switch label',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium'],
      description: 'Switch size',
    },
    checked: {
      control: 'boolean',
      description: 'Checked state',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    label: 'Enable feature',
  },
};

export const Checked: Story = {
  args: {
    label: 'Enabled feature',
    checked: true,
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Small switch',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    label: 'Medium switch',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled switch',
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'Disabled checked',
    checked: true,
    disabled: true,
  },
};

export const WithoutLabel: Story = {
  args: {
    checked: false,
  },
};

export const Group: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Switch label="Dark mode" />
      <Switch label="Notifications" checked />
      <Switch label="Auto-save" />
      <Switch label="Beta features (Disabled)" disabled />
    </div>
  ),
};
