import type { Meta, StoryObj } from '@storybook/preact';
import { Flex } from './Flex';
import { Button } from '../button/Button';

const meta: Meta<typeof Flex> = {
  title: 'Layout/Flex',
  component: Flex,
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: { type: 'select' },
      options: ['row', 'row-reverse', 'column', 'column-reverse'],
      description: 'Flex direction',
    },
    justify: {
      control: { type: 'select' },
      options: ['start', 'end', 'center', 'between', 'around', 'evenly'],
      description: 'Justify content',
    },
    align: {
      control: { type: 'select' },
      options: ['start', 'end', 'center', 'baseline', 'stretch'],
      description: 'Align items',
    },
    wrap: {
      control: { type: 'select' },
      options: ['nowrap', 'wrap', 'wrap-reverse'],
      description: 'Flex wrap',
    },
    gap: {
      control: { type: 'number' },
      description: 'Gap between items',
    },
    inline: {
      control: 'boolean',
      description: 'Use inline-flex',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Flex>;

const Box = ({ children }: { children: any }) => (
  <div style={{ padding: '12px', background: 'var(--primary-color)', color: 'white', borderRadius: '4px' }}>
    {children}
  </div>
);

export const Row: Story = {
  args: {
    direction: 'row',
    gap: 8,
    children: (
      <>
        <Box>Item 1</Box>
        <Box>Item 2</Box>
        <Box>Item 3</Box>
      </>
    ),
  },
};

export const Column: Story = {
  args: {
    direction: 'column',
    gap: 8,
    children: (
      <>
        <Box>Item 1</Box>
        <Box>Item 2</Box>
        <Box>Item 3</Box>
      </>
    ),
  },
};

export const JustifyCenter: Story = {
  args: {
    justify: 'center',
    gap: 8,
    children: (
      <>
        <Box>Item 1</Box>
        <Box>Item 2</Box>
        <Box>Item 3</Box>
      </>
    ),
  },
};

export const JustifyBetween: Story = {
  args: {
    justify: 'between',
    gap: 8,
    children: (
      <>
        <Box>Item 1</Box>
        <Box>Item 2</Box>
        <Box>Item 3</Box>
      </>
    ),
  },
};

export const AlignCenter: Story = {
  args: {
    align: 'center',
    gap: 8,
    style: { minHeight: '100px', border: '1px dashed var(--border-color)' },
    children: (
      <>
        <Box>Small</Box>
        <Box>Taller<br />Item</Box>
        <Box>Short</Box>
      </>
    ),
  },
};

export const WithWrap: Story = {
  args: {
    wrap: 'wrap',
    gap: 8,
    children: (
      <>
        {Array.from({ length: 12 }, (_, i) => (
          <Box key={i}>Item {i + 1}</Box>
        ))}
      </>
    ),
  },
};

export const ButtonGroup: Story = {
  args: {
    gap: 8,
    children: (
      <>
        <Button>Save</Button>
        <Button variant="secondary">Cancel</Button>
        <Button variant="outline">Reset</Button>
      </>
    ),
  },
};
