import type { Meta, StoryObj } from '@storybook/preact';
import { Space } from './Space';
import { Button } from '../button/Button';

const meta: Meta<typeof Space> = {
  title: 'Layout/Space',
  component: Space,
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
      description: 'Space direction',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'middle', 'large'],
      description: 'Space size',
    },
    align: {
      control: { type: 'select' },
      options: ['start', 'end', 'center', 'baseline'],
      description: 'Align items',
    },
    wrap: {
      control: 'boolean',
      description: 'Allow wrapping',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Space>;

export const Horizontal: Story = {
  args: {
    direction: 'horizontal',
    children: (
      <>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </>
    ),
  },
};

export const Vertical: Story = {
  args: {
    direction: 'vertical',
    children: (
      <>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </>
    ),
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    children: (
      <>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </>
    ),
  },
};

export const Middle: Story = {
  args: {
    size: 'middle',
    children: (
      <>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </>
    ),
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    children: (
      <>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </>
    ),
  },
};

export const CustomSize: Story = {
  args: {
    size: 32,
    children: (
      <>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </>
    ),
  },
};

export const WithWrap: Story = {
  args: {
    wrap: true,
    size: 'middle',
    children: (
      <>
        {Array.from({ length: 20 }, (_, i) => (
          <Button key={i}>Button {i + 1}</Button>
        ))}
      </>
    ),
  },
};

export const AlignCenter: Story = {
  args: {
    align: 'center',
    children: (
      <>
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </>
    ),
  },
};
