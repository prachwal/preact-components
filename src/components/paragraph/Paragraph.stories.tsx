import type { Meta, StoryObj } from '@storybook/preact';
import { Paragraph } from './Paragraph';

const meta: Meta<typeof Paragraph> = {
  title: 'Typography/Paragraph',
  component: Paragraph,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'muted', 'small'],
      description: 'Paragraph style variant',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Paragraph>;

export const Default: Story = {
  args: {
    children: 'This is a default paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
};

export const Muted: Story = {
  args: {
    variant: 'muted',
    children: 'This is a muted paragraph with less emphasis. Lorem ipsum dolor sit amet.',
  },
};

export const Small: Story = {
  args: {
    variant: 'small',
    children: 'This is a small paragraph with smaller text. Lorem ipsum dolor sit amet.',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div>
      <Paragraph>
        Default paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Paragraph>
      <Paragraph variant="muted">
        Muted paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Paragraph>
      <Paragraph variant="small">
        Small paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Paragraph>
    </div>
  ),
};
