import type { Meta, StoryObj } from '@storybook/preact';
import { Code } from './Code';

const meta: Meta<typeof Code> = {
  title: 'Typography/Code',
  component: Code,
  tags: ['autodocs'],
  argTypes: {
    inline: {
      control: 'boolean',
      description: 'Inline or block code',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Code>;

export const Inline: Story = {
  args: {
    inline: true,
    children: 'const greeting = "Hello World";',
  },
};

export const Block: Story = {
  args: {
    inline: false,
    children: `function greet(name) {
  return \`Hello, \${name}!\`;
}`,
  },
};

export const InText: Story = {
  render: () => (
    <p>
      To install the package, run <Code inline>npm install preact-components</Code> in your terminal.
    </p>
  ),
};

export const CodeBlock: Story = {
  render: () => (
    <Code>{`import { Button } from 'preact-components';

function App() {
  return (
    <Button variant="primary">
      Click Me
    </Button>
  );
}`}</Code>
  ),
};

export const MultipleInline: Story = {
  render: () => (
    <div>
      <p>
        Use <Code inline>npm install</Code> to install dependencies.
      </p>
      <p>
        Run <Code inline>npm run dev</Code> to start the development server.
      </p>
      <p>
        Build with <Code inline>npm run build</Code> for production.
      </p>
    </div>
  ),
};
