import { useTheme } from '../../theme';
import { Card, Heading, Paragraph, Space, Button, Divider } from '@/components';

export function SettingsPage() {
  const { theme, setTheme, variant, setVariant } = useTheme();

  return (
    <Space direction="vertical" size="large" className="w-100">
      <div>
        <Heading level={1}>Settings</Heading>
        <Paragraph variant="muted">
          Customize your preferences
        </Paragraph>
      </div>

      <Card title="Appearance" bordered>
        <Space direction="vertical" size="large" className="w-100">
          <div>
            <Paragraph className="mb-2">Theme Mode</Paragraph>
            <Space size="middle" wrap>
              <Button
                variant={theme === 'light' ? 'primary' : 'outline'}
                onClick={() => setTheme('light')}
              >
                ☀️ Light
              </Button>
              <Button
                variant={theme === 'dark' ? 'primary' : 'outline'}
                onClick={() => setTheme('dark')}
              >
                🌙 Dark
              </Button>
              <Button
                variant={theme === 'system' ? 'primary' : 'outline'}
                onClick={() => setTheme('system')}
              >
                💻 System
              </Button>
            </Space>
          </div>

          <Divider />

          <div>
            <Paragraph className="mb-2">Color Variant</Paragraph>
            <Space size="middle" wrap>
              <Button
                variant={variant === 'base' ? 'primary' : 'outline'}
                onClick={() => setVariant('base')}
              >
                🎨 Base
              </Button>
              <Button
                variant={variant === 'sepia' ? 'primary' : 'outline'}
                onClick={() => setVariant('sepia')}
              >
                📜 Sepia
              </Button>
              <Button
                variant={variant === 'forest' ? 'primary' : 'outline'}
                onClick={() => setVariant('forest')}
              >
                🌲 Forest
              </Button>
              <Button
                variant={variant === 'ocean' ? 'primary' : 'outline'}
                onClick={() => setVariant('ocean')}
              >
                🌊 Ocean
              </Button>
            </Space>
          </div>
        </Space>
      </Card>

      <Card title="Accessibility" bordered>
        <Space direction="vertical" size="middle" className="w-100">
          <Paragraph>
            All components are designed with accessibility in mind, featuring:
          </Paragraph>
          <ul style="padding-left: 1.5rem; margin: 0;">
            <li>Proper ARIA labels and roles</li>
            <li>Keyboard navigation support</li>
            <li>WCAG AA compliant color contrast</li>
            <li>Focus indicators for interactive elements</li>
            <li>Screen reader friendly markup</li>
          </ul>
        </Space>
      </Card>

      <Card title="About" bordered>
        <Space direction="vertical" size="middle" className="w-100">
          <Paragraph>
            <strong>Preact Component Library</strong> - Version 0.0.1
          </Paragraph>
          <Paragraph variant="muted">
            A modern, accessible component library built with Preact and TypeScript.
          </Paragraph>
          <Divider />
          <Space size="middle">
            <Button variant="outline">Documentation</Button>
            <Button variant="outline">GitHub</Button>
            <Button variant="outline">Report Issue</Button>
          </Space>
        </Space>
      </Card>
    </Space>
  );
}
