import { useState } from 'preact/hooks';
import {
  ThemeProvider,
  useTheme,
  Sidebar,
  Navbar,
  Container,
  Row,
  Col,
  Flex,
  Space,
  Divider,
  Card,
  Badge,
  Alert,
  Input,
  Checkbox,
  Radio,
  Switch,
  Select,
  Button,
  Heading,
  Paragraph,
  Footer,
  Main,
  Logo,
} from '@/components';
import '@/styles/index.scss';
import './app.scss';

function AppContent() {
  const { theme, setTheme, variant, setVariant } = useTheme();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeSection, setActiveSection] = useState('dashboard');
  const [inputValue, setInputValue] = useState('');
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('monthly');
  const [switchChecked, setSwitchChecked] = useState(false);
  const [selectValue, setSelectValue] = useState('');

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'components', label: 'Components', icon: '🧩' },
    { id: 'forms', label: 'Forms', icon: '📝' },
    { id: 'data', label: 'Data Display', icon: '📈' },
    { id: 'settings', label: 'Settings', icon: '⚙️' },
  ];

  return (
    <div className="app-layout">
      {/* Navbar */}
      <Navbar
        fixed
        logo={
          <Flex align="center" gap={8}>
            <Logo />
            <Heading level={4} className="m-0">Preact UI</Heading>
          </Flex>
        }
        extra={
          <Space size="middle">
            <Select
              value={variant}
              onChange={(e) => setVariant((e.target as HTMLSelectElement).value as any)}
              options={[
                { value: 'base', label: '🎨 Base' },
                { value: 'sepia', label: '📜 Sepia' },
                { value: 'forest', label: '🌲 Forest' },
                { value: 'ocean', label: '🌊 Ocean' },
              ]}
              aria-label="Select theme variant"
            />
            <Button
              variant="outline"
              size="sm"
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </Button>
            <Badge count={5}>
              <Button variant="ghost" size="sm" aria-label="Notifications">🔔</Button>
            </Badge>
            <Button variant="ghost" size="sm" aria-label="User profile">👤</Button>
          </Space>
        }
        onMenuToggle={(open) => {
          if (open) setSidebarCollapsed(false);
        }}
      />

      {/* Sidebar */}
      <Sidebar
        collapsed={sidebarCollapsed}
        onCollapse={setSidebarCollapsed}
        breakpoint="md"
        theme={theme === 'dark' ? 'dark' : 'light'}
      >
        <div className="sidebar-menu">
          <Space direction="vertical" size="small" className="w-100">
            {menuItems.map((item) => (
              <button
                key={item.id}
                className={`sidebar-menu__item ${
                  activeSection === item.id ? 'sidebar-menu__item--active' : ''
                }`}
                onClick={() => setActiveSection(item.id)}
                aria-label={item.label}
                aria-current={activeSection === item.id ? 'page' : undefined}
              >
                <span className="sidebar-menu__icon" aria-hidden="true">{item.icon}</span>
                {!sidebarCollapsed && (
                  <span className="sidebar-menu__label">{item.label}</span>
                )}
              </button>
            ))}
          </Space>
        </div>
      </Sidebar>

      {/* Main Content */}
      <Main className={`app-main ${sidebarCollapsed ? 'app-main--expanded' : ''}`}>
        <Container maxWidth="xl" className="py-4 py-md-6">
          <Space direction="vertical" size="large" className="w-100">
            {/* Dashboard Section */}
            {activeSection === 'dashboard' && (
              <>
                <div>
                  <Heading level={1}>Dashboard</Heading>
                  <Paragraph variant="muted">
                    Welcome to Preact Component Library
                  </Paragraph>
                </div>

                {/* Stats Cards */}
                <Row gutter={16}>
                  <Col xs={24} sm={12} lg={6}>
                    <Card bordered hoverable className="stat-card">
                      <div className="stat-card__icon" aria-hidden="true">👥</div>
                      <Heading level={3} className="mt-3 mb-1">
                        2,847
                      </Heading>
                      <Paragraph variant="muted" className="mb-0">
                        Users
                      </Paragraph>
                    </Card>
                  </Col>
                  <Col xs={24} sm={12} lg={6}>
                    <Card bordered hoverable className="stat-card">
                      <div className="stat-card__icon" aria-hidden="true">📦</div>
                      <Heading level={3} className="mt-3 mb-1">
                        1,234
                      </Heading>
                      <Paragraph variant="muted" className="mb-0">
                        Projects
                      </Paragraph>
                    </Card>
                  </Col>
                  <Col xs={24} sm={12} lg={6}>
                    <Card bordered hoverable className="stat-card">
                      <div className="stat-card__icon" aria-hidden="true">💰</div>
                      <Heading level={3} className="mt-3 mb-1">
                        $45.2k
                      </Heading>
                      <Paragraph variant="muted" className="mb-0">
                        Revenue
                      </Paragraph>
                    </Card>
                  </Col>
                  <Col xs={24} sm={12} lg={6}>
                    <Card bordered hoverable className="stat-card">
                      <div className="stat-card__icon" aria-hidden="true">⭐</div>
                      <Heading level={3} className="mt-3 mb-1">
                        98.5%
                      </Heading>
                      <Paragraph variant="muted" className="mb-0">
                        Score
                      </Paragraph>
                    </Card>
                  </Col>
                </Row>

                {/* Alert */}
                <Alert
                  type="info"
                  message="System Update Available"
                  description="A new version is available. Update to get the latest features."
                  showIcon
                  closable
                />
              </>
            )}

            {/* Components Section */}
            {activeSection === 'components' && (
              <>
                <div>
                  <Heading level={1}>Components</Heading>
                  <Paragraph variant="muted">
                    Explore our component library
                  </Paragraph>
                </div>

                <Row gutter={16}>
                  <Col xs={24} md={12} lg={8}>
                    <Card title="Buttons" bordered hoverable>
                      <Space size="middle" wrap>
                        <Button variant="primary">Primary</Button>
                        <Button variant="secondary">Secondary</Button>
                        <Button variant="outline">Outline</Button>
                      </Space>
                    </Card>
                  </Col>
                  <Col xs={24} md={12} lg={8}>
                    <Card title="Badges" bordered hoverable>
                      <Space size="middle" wrap>
                        <Badge count={5}>
                          <Button>Notifications</Button>
                        </Badge>
                        <Badge status="success" text="Active" />
                        <Badge status="error" text="Error" />
                      </Space>
                    </Card>
                  </Col>
                  <Col xs={24} md={12} lg={8}>
                    <Card title="Alerts" bordered hoverable>
                      <Alert
                        type="success"
                        message="Success"
                        showIcon
                      />
                    </Card>
                  </Col>
                </Row>
              </>
            )}

            {/* Forms Section */}
            {activeSection === 'forms' && (
              <>
                <div>
                  <Heading level={1}>Forms</Heading>
                  <Paragraph variant="muted">
                    Form components and inputs
                  </Paragraph>
                </div>

                <Card title="Form Example" bordered>
                  <Space direction="vertical" size="large" className="w-100">
                    <Input
                      placeholder="Enter your name"
                      value={inputValue}
                      onInput={(e) => setInputValue((e.target as HTMLInputElement).value)}
                      fullWidth
                    />

                    <Select
                      value={selectValue}
                      onChange={(e) => setSelectValue((e.target as HTMLSelectElement).value)}
                      fullWidth
                      options={[
                        { value: '', label: 'Choose an option' },
                        { value: 'option1', label: 'Option 1' },
                        { value: 'option2', label: 'Option 2' },
                      ]}
                    />

                    <Checkbox
                      label="I agree to terms and conditions"
                      checked={checkboxChecked}
                      onChange={(e) => setCheckboxChecked((e.target as HTMLInputElement).checked)}
                    />

                    <div>
                      <Paragraph className="mb-2">Billing Cycle:</Paragraph>
                      <Space direction="vertical" size="small">
                        <Radio
                          label="Monthly"
                          name="billing"
                          value="monthly"
                          checked={radioValue === 'monthly'}
                          onChange={(e) => setRadioValue((e.target as HTMLInputElement).value)}
                        />
                        <Radio
                          label="Yearly"
                          name="billing"
                          value="yearly"
                          checked={radioValue === 'yearly'}
                          onChange={(e) => setRadioValue((e.target as HTMLInputElement).value)}
                        />
                      </Space>
                    </div>

                    <Switch
                      label="Enable notifications"
                      checked={switchChecked}
                      onChange={(e) => setSwitchChecked((e.target as HTMLInputElement).checked)}
                    />

                    <Button variant="primary" size="lg">Submit Form</Button>
                  </Space>
                </Card>
              </>
            )}

            {/* Data Display Section */}
            {activeSection === 'data' && (
              <>
                <div>
                  <Heading level={1}>Data Display</Heading>
                  <Paragraph variant="muted">
                    Display your data beautifully
                  </Paragraph>
                </div>

                <Row gutter={16}>
                  <Col xs={24} md={12}>
                    <Card
                      title="Recent Activity"
                      extra={<Button variant="link">View All</Button>}
                      bordered
                    >
                      <Space direction="vertical" size="middle" className="w-100">
                        <div>
                          <Paragraph className="mb-1">New user registered</Paragraph>
                          <Paragraph variant="muted" className="mb-0">
                            2 minutes ago
                          </Paragraph>
                        </div>
                        <Divider />
                        <div>
                          <Paragraph className="mb-1">Project deployed</Paragraph>
                          <Paragraph variant="muted" className="mb-0">
                            1 hour ago
                          </Paragraph>
                        </div>
                      </Space>
                    </Card>
                  </Col>

                  <Col xs={24} md={12}>
                    <Card title="Statistics" bordered hoverable>
                      <Space direction="vertical" size="middle" className="w-100">
                        <Flex justify="between">
                          <Paragraph>Total Visits</Paragraph>
                          <Paragraph>12,456</Paragraph>
                        </Flex>
                        <Divider />
                        <Flex justify="between">
                          <Paragraph>Active Users</Paragraph>
                          <Paragraph>8,234</Paragraph>
                        </Flex>
                      </Space>
                    </Card>
                  </Col>
                </Row>
              </>
            )}

            {/* Settings Section */}
            {activeSection === 'settings' && (
              <>
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
              </>
            )}
          </Space>
        </Container>

        {/* Footer */}
        <Footer className="app-footer">
          <Container maxWidth="xl">
            <Row gutter={[16, 32]}>
              <Col xs={24} sm={12} md={6}>
                <Heading level={5}>Product</Heading>
                <Space direction="vertical" size="small">
                  <a href="#features" className="footer-link">
                    Features
                  </a>
                  <a href="#pricing" className="footer-link">
                    Pricing
                  </a>
                  <a href="#documentation" className="footer-link">
                    Documentation
                  </a>
                </Space>
              </Col>

              <Col xs={24} sm={12} md={6}>
                <Heading level={5}>Company</Heading>
                <Space direction="vertical" size="small">
                  <a href="#about" className="footer-link">
                    About Us
                  </a>
                  <a href="#blog" className="footer-link">
                    Blog
                  </a>
                  <a href="#contact" className="footer-link">
                    Contact
                  </a>
                </Space>
              </Col>

              <Col xs={24} sm={12} md={6}>
                <Heading level={5}>Resources</Heading>
                <Space direction="vertical" size="small">
                  <a href="#docs" className="footer-link">
                    Documentation
                  </a>
                  <a href="#help" className="footer-link">
                    Help Center
                  </a>
                  <a href="#community" className="footer-link">
                    Community
                  </a>
                </Space>
              </Col>

              <Col xs={24} sm={12} md={6}>
                <Heading level={5}>Legal</Heading>
                <Space direction="vertical" size="small">
                  <a href="#privacy" className="footer-link">
                    Privacy Policy
                  </a>
                  <a href="#terms" className="footer-link">
                    Terms of Service
                  </a>
                  <a href="#cookies" className="footer-link">
                    Cookie Policy
                  </a>
                </Space>
              </Col>
            </Row>

            <Divider />

            <Flex
              direction="column"
              gap={16}
              className="flex-sm-row justify-sm-between align-sm-center"
            >
              <Paragraph variant="muted" className="mb-0">
                © 2024 Preact Component Library. All rights reserved.
              </Paragraph>
              <Space size="large">
                <a href="#github" className="footer-social" title="GitHub">
                  GitHub
                </a>
                <a href="#twitter" className="footer-social" title="Twitter">
                  Twitter
                </a>
                <a href="#discord" className="footer-social" title="Discord">
                  Discord
                </a>
              </Space>
            </Flex>
          </Container>
        </Footer>
      </Main>
    </div>
  );
}

export function App() {
  return (<ThemeProvider defaultTheme="system" defaultVariant="base"><AppContent /></ThemeProvider>);
}
