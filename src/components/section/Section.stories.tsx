import type { Meta, StoryObj } from '@storybook/preact';
import { Section } from './Section';
import { Heading } from '../heading/Heading';

const meta: Meta<typeof Section> = {
  title: 'Layout/Section',
  component: Section,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'card', 'hero'],
      description: 'Section style variant',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Section>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Heading level={2}>Section Title</Heading>
        <p>This is a default section with some content.</p>
      </>
    ),
  },
};

export const Card: Story = {
  args: {
    variant: 'card',
    children: (
      <>
        <Heading level={2}>Card Section</Heading>
        <p>This section has a card-like appearance.</p>
      </>
    ),
  },
};

export const Hero: Story = {
  args: {
    variant: 'hero',
    children: (
      <>
        <Heading level={1}>Hero Section</Heading>
        <p>This is a hero section, typically used for prominent content.</p>
      </>
    ),
  },
};

export const MultipleSections: Story = {
  render: () => (
    <div>
      <Section variant="hero">
        <Heading level={1}>Welcome</Heading>
        <p>This is the hero section at the top.</p>
      </Section>
      <Section>
        <Heading level={2}>About</Heading>
        <p>This is a regular section with information.</p>
      </Section>
      <Section variant="card">
        <Heading level={2}>Features</Heading>
        <p>This is a card section highlighting features.</p>
      </Section>
    </div>
  ),
};
