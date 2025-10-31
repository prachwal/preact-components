import type { Meta, StoryObj } from '@storybook/preact';
import { Divider } from './Divider';

const meta: Meta<typeof Divider> = {
  title: 'Components/Divider',
  component: Divider,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
      description: 'Divider orientation',
    },
    dashed: {
      control: 'boolean',
      description: 'Dashed line style',
    },
    plain: {
      control: 'boolean',
      description: 'Plain text style (no background)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Horizontal: Story = {
  args: {
    orientation: 'horizontal',
  },
};

export const HorizontalWithText: Story = {
  args: {
    orientation: 'horizontal',
    children: 'Section Divider',
  },
};

export const Dashed: Story = {
  args: {
    dashed: true,
  },
};

export const DashedWithText: Story = {
  args: {
    dashed: true,
    children: 'Dashed Divider',
  },
};

export const Plain: Story = {
  args: {
    plain: true,
    children: 'Plain Text',
  },
};

export const Vertical: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', height: '50px' }}>
      <span>Item 1</span>
      <Divider orientation="vertical" />
      <span>Item 2</span>
      <Divider orientation="vertical" />
      <span>Item 3</span>
    </div>
  ),
};

export const InContent: Story = {
  render: () => (
    <div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <Divider />
      <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <Divider>Section Title</Divider>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
      <Divider dashed>Another Section</Divider>
      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
    </div>
  ),
};
