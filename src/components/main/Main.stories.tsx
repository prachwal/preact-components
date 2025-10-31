import type { Meta, StoryObj } from '@storybook/preact';
import { Main } from './Main';
import { Heading } from '../heading/Heading';

const meta: Meta<typeof Main> = {
  title: 'Layout/Main',
  component: Main,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Main>;

export const Default: Story = {
  args: {
    children: (
      <div style={{ padding: '20px' }}>
        <Heading level={1}>Main Content Area</Heading>
        <p>This is the main content of the page.</p>
      </div>
    ),
  },
};

export const WithSections: Story = {
  render: () => (
    <Main style={{ padding: '24px' }}>
      <Heading level={1}>Welcome</Heading>
      <p>This is the main content area of your application.</p>
      
      <Heading level={2} style={{ marginTop: '24px' }}>Section 1</Heading>
      <p>Content for the first section goes here.</p>
      
      <Heading level={2} style={{ marginTop: '24px' }}>Section 2</Heading>
      <p>Content for the second section goes here.</p>
    </Main>
  ),
};

export const Article: Story = {
  render: () => (
    <Main style={{ padding: '24px', maxWidth: '800px', margin: '0 auto' }}>
      <article>
        <Heading level={1}>Article Title</Heading>
        <p style={{ color: 'var(--text-muted)' }}>Published on January 1, 2024</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
          eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
          in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </article>
    </Main>
  ),
};
