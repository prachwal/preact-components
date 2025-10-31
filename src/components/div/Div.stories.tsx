import type { Meta, StoryObj } from '@storybook/preact';
import { Div } from './Div';

const meta: Meta<typeof Div> = {
  title: 'Layout/Div',
  component: Div,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Div>;

export const Default: Story = {
  args: {
    children: <p>This is a simple div wrapper component.</p>,
  },
};

export const WithStyles: Story = {
  args: {
    style: {
      padding: '20px',
      background: 'var(--bg-secondary)',
      border: '1px solid var(--border-color)',
      borderRadius: '8px',
    },
    children: <p>Div with custom styles</p>,
  },
};

export const WithClassName: Story = {
  args: {
    className: 'custom-class',
    children: <p>Div with custom className</p>,
  },
};

export const Nested: Story = {
  render: () => (
    <Div style={{ padding: '16px', background: 'var(--bg-secondary)' }}>
      <p>Parent Div</p>
      <Div style={{ padding: '16px', background: 'var(--bg-tertiary)', marginTop: '8px' }}>
        <p>Nested Child Div</p>
      </Div>
    </Div>
  ),
};
