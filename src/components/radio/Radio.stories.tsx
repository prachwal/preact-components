import type { Meta, StoryObj } from '@storybook/preact';
import { Radio } from './Radio';

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Radio button label',
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
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: {
    name: 'radio-example',
    label: 'Radio Option',
  },
};

export const Checked: Story = {
  args: {
    name: 'radio-checked',
    label: 'Checked Radio',
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    name: 'radio-disabled',
    label: 'Disabled Radio',
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    name: 'radio-disabled-checked',
    label: 'Disabled Checked',
    checked: true,
    disabled: true,
  },
};

export const WithoutLabel: Story = {
  args: {
    name: 'radio-no-label',
  },
};

export const Group: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Radio name="radio-group" label="Option 1" />
      <Radio name="radio-group" label="Option 2" checked />
      <Radio name="radio-group" label="Option 3" />
      <Radio name="radio-group" label="Option 4 (Disabled)" disabled />
    </div>
  ),
};
