import type { Meta, StoryObj } from '@storybook/preact';
import { Footer } from './Footer';
import { Link } from '../link/Link';

const meta: Meta<typeof Footer> = {
  title: 'Layout/Footer',
  component: Footer,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  args: {
    children: (
      <div style={{ padding: '20px', background: 'var(--bg-secondary)', textAlign: 'center' }}>
        <p>&copy; 2024 My Company. All rights reserved.</p>
      </div>
    ),
  },
};

export const SimpleFooter: Story = {
  render: () => (
    <Footer style={{ padding: '24px', background: 'var(--bg-tertiary)', borderTop: '1px solid var(--border-color)' }}>
      <div style={{ textAlign: 'center' }}>
        <p>&copy; 2024 Preact Components. All rights reserved.</p>
      </div>
    </Footer>
  ),
};

export const WithLinks: Story = {
  render: () => (
    <Footer style={{ padding: '32px', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '24px' }}>
          <div>
            <h3>About</h3>
            <p style={{ color: 'var(--text-muted)' }}>Preact component library</p>
          </div>
          <div>
            <h3>Links</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Link href="#">Documentation</Link>
              <Link href="#">GitHub</Link>
              <Link href="#">Support</Link>
            </div>
          </div>
          <div>
            <h3>Legal</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Link href="#">Privacy Policy</Link>
              <Link href="#">Terms of Service</Link>
            </div>
          </div>
        </div>
        <div style={{ marginTop: '32px', paddingTop: '24px', borderTop: '1px solid var(--border-color)', textAlign: 'center' }}>
          <p style={{ color: 'var(--text-muted)' }}>&copy; 2024 Preact Components. All rights reserved.</p>
        </div>
      </div>
    </Footer>
  ),
};
