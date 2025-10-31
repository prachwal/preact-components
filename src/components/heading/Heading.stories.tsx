import type { Meta, StoryObj } from '@storybook/preact';
import { Heading } from './Heading';

const meta: Meta<typeof Heading> = {
  title: 'Typography/Heading',
  component: Heading,
  tags: ['autodocs'],
  argTypes: {
    level: {
      control: { type: 'select' },
      options: [1, 2, 3, 4, 5, 6],
      description: 'Heading level',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const H1: Story = {
  args: {
    level: 1,
    children: 'Heading Level 1',
  },
};

export const H2: Story = {
  args: {
    level: 2,
    children: 'Heading Level 2',
  },
};

export const H3: Story = {
  args: {
    level: 3,
    children: 'Heading Level 3',
  },
};

export const H4: Story = {
  args: {
    level: 4,
    children: 'Heading Level 4',
  },
};

export const H5: Story = {
  args: {
    level: 5,
    children: 'Heading Level 5',
  },
};

export const H6: Story = {
  args: {
    level: 6,
    children: 'Heading Level 6',
  },
};

export const AllLevels: Story = {
  render: () => (
    <div>
      <Heading level={1}>Heading Level 1</Heading>
      <Heading level={2}>Heading Level 2</Heading>
      <Heading level={3}>Heading Level 3</Heading>
      <Heading level={4}>Heading Level 4</Heading>
      <Heading level={5}>Heading Level 5</Heading>
      <Heading level={6}>Heading Level 6</Heading>
    </div>
  ),
};
