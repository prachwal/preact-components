import { useState } from 'preact/hooks';
import { ThemeProvider } from './components';
import { 
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
  Paragraph
} from './components';
import './styles/index.scss';

export function App() {
  const [inputValue, setInputValue] = useState('');
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('option1');
  const [switchChecked, setSwitchChecked] = useState(false);
  const [selectValue, setSelectValue] = useState('');

  return (
    <ThemeProvider defaultTheme="system" defaultVariant="base">
      <Container maxWidth="xl" className="py-4 py-md-6">
        <Space direction="vertical" size="large" className="w-100">
          {/* Header */}
          {/* eslint-disable react/forbid-dom-props */}
          <div className="text-center">
            <Heading level={1}>Preact Component Library Demo</Heading>
            <Paragraph variant="muted">
              A comprehensive UI component system inspired by Ant Design and Material-UI
            </Paragraph>
          </div>

          <Divider />

          {/* Layout Components */}
          <Card title="Layout Components" bordered hoverable>
            <Space direction="vertical" size="large" className="w-100">
              <div>
                <Heading level={3}>Grid System (24 columns)</Heading>
                {/* Mobile: full width, Tablet+: 2 columns */}
                <Row gutter={16}>
                  <Col xs={24} sm={12}>
                    {/* eslint-disable-next-line react/forbid-dom-props */}
                    <div style={{ padding: '16px', background: 'var(--bg-secondary)', borderRadius: '8px', marginBottom: '8px' }}>
                      Col 12
                    </div>
                  </Col>
                  <Col xs={24} sm={12}>
                    {/* eslint-disable-next-line react/forbid-dom-props */}
                    <div style={{ padding: '16px', background: 'var(--bg-secondary)', borderRadius: '8px', marginBottom: '8px' }}>
                      Col 12
                    </div>
                  </Col>
                </Row>
                {/* eslint-disable-next-line react/forbid-dom-props */}
                <div className="mt-2 mt-md-3">
                  {/* Mobile: full width, Tablet+: 3 columns */}
                  <Row gutter={16}>
                    <Col xs={24} sm={12} md={8}>
                      {/* eslint-disable-next-line react/forbid-dom-props */}
                      <div style={{ padding: '16px', background: 'var(--bg-secondary)', borderRadius: '8px', marginBottom: '8px' }}>
                        Col 8
                      </div>
                    </Col>
                    <Col xs={24} sm={12} md={8}>
                      {/* eslint-disable-next-line react/forbid-dom-props */}
                      <div style={{ padding: '16px', background: 'var(--bg-secondary)', borderRadius: '8px', marginBottom: '8px' }}>
                        Col 8
                      </div>
                    </Col>
                    <Col xs={24} sm={12} md={8}>
                      {/* eslint-disable-next-line react/forbid-dom-props */}
                      <div style={{ padding: '16px', background: 'var(--bg-secondary)', borderRadius: '8px', marginBottom: '8px' }}>
                        Col 8
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>

              <div>
                <Heading level={3}>Flex Layout</Heading>
                {/* Stack on mobile, horizontal on tablet+ */}
                <Flex 
                  direction="column" 
                  gap={16}
                  className="flex-sm-row justify-sm-between"
                >
                  {/* eslint-disable-next-line react/forbid-dom-props */}
                  <div style={{ padding: '16px', background: 'var(--bg-secondary)', borderRadius: '8px' }}>
                    Flex Item 1
                  </div>
                  {/* eslint-disable-next-line react/forbid-dom-props */}
                  <div style={{ padding: '16px', background: 'var(--bg-secondary)', borderRadius: '8px' }}>
                    Flex Item 2
                  </div>
                  {/* eslint-disable-next-line react/forbid-dom-props */}
                  <div style={{ padding: '16px', background: 'var(--bg-secondary)', borderRadius: '8px' }}>
                    Flex Item 3
                  </div>
                </Flex>
              </div>

              <div>
                <Heading level={3}>Space</Heading>
                {/* Stack on mobile, horizontal on tablet+ */}
                <Space size="large" className="flex-column flex-sm-row">
                  <Button variant="primary">Button 1</Button>
                  <Button variant="secondary">Button 2</Button>
                  <Button variant="outline">Button 3</Button>
                </Space>
              </div>

              <Divider>Divider with Text</Divider>
              <Divider dashed />
            </Space>
          </Card>

          {/* Form Components */}
          <Card title="Form Components" bordered hoverable>
            <Space direction="vertical" size="large" className="w-100">
              <div>
                <Heading level={3}>Input</Heading>
                <Space direction="vertical" size="middle" className="w-100">
                  <Input 
                    placeholder="Default input" 
                    value={inputValue}
                    onInput={(e) => setInputValue((e.target as HTMLInputElement).value)}
                    fullWidth
                  />
                  <Row gutter={16}>
                    <Col xs={24} sm={12}>
                      <Input 
                        placeholder="Small input" 
                        size="small"
                        fullWidth
                      />
                    </Col>
                    <Col xs={24} sm={12}>
                      <Input 
                        placeholder="Large input" 
                        size="large"
                        fullWidth
                      />
                    </Col>
                  </Row>
                  <Input 
                    placeholder="Input with prefix" 
                    prefix="$"
                    suffix=".00"
                    fullWidth
                  />
                  <Input 
                    placeholder="Error state" 
                    error
                    fullWidth
                  />
                </Space>
              </div>

              <div>
                <Heading level={3}>Select</Heading>
                <Space direction="vertical" size="middle" className="w-100">
                  <Select 
                    value={selectValue}
                    onChange={(e) => setSelectValue((e.target as HTMLSelectElement).value)}
                    fullWidth
                    options={[
                      { value: '', label: 'Choose an option' },
                      { value: 'option1', label: 'Option 1' },
                      { value: 'option2', label: 'Option 2' },
                      { value: 'option3', label: 'Option 3' }
                    ]}
                  />
                  <Select 
                    size="small"
                    fullWidth
                    options={[
                      { value: '', label: 'Small select' },
                      { value: 'a', label: 'Option A' },
                      { value: 'b', label: 'Option B' }
                    ]}
                  />
                </Space>
              </div>

              <div>
                <Heading level={3}>Checkbox & Radio</Heading>
                {/* Stack on mobile, side-by-side on tablet+ */}
                <Row gutter={16}>
                  <Col xs={24} md={12}>
                    <Space direction="vertical" size="middle">
                      <Checkbox 
                        label="Checkbox option"
                        checked={checkboxChecked}
                        onChange={(e) => setCheckboxChecked((e.target as HTMLInputElement).checked)}
                      />
                      <Checkbox label="Disabled checkbox" disabled />
                    </Space>
                  </Col>
                  <Col xs={24} md={12} className="mt-3 mt-md-0">
                    <Space direction="vertical" size="middle">
                      <Radio 
                        label="Radio option 1"
                        name="demo-radio"
                        value="option1"
                        checked={radioValue === 'option1'}
                        onChange={(e) => setRadioValue((e.target as HTMLInputElement).value)}
                      />
                      <Radio 
                        label="Radio option 2"
                        name="demo-radio"
                        value="option2"
                        checked={radioValue === 'option2'}
                        onChange={(e) => setRadioValue((e.target as HTMLInputElement).value)}
                      />
                    </Space>
                  </Col>
                </Row>
              </div>

              <div>
                <Heading level={3}>Switch</Heading>
                {/* Stack on mobile, horizontal on tablet+ */}
                <Space size="large" className="flex-column flex-sm-row">
                  <Switch 
                    label="Default switch"
                    checked={switchChecked}
                    onChange={(e) => setSwitchChecked((e.target as HTMLInputElement).checked)}
                  />
                  <Switch label="Small switch" size="small" />
                  <Switch label="Disabled switch" disabled />
                </Space>
              </div>
            </Space>
          </Card>

          {/* Data Display Components */}
          <Card title="Data Display Components" bordered hoverable>
            <Space direction="vertical" size="large" className="w-100">
              <div>
                <Heading level={3}>Badge</Heading>
                {/* Wrap and stack on mobile */}
                <Space size="large" wrap className="flex-wrap">
                  <Badge count={5}>
                    <Button variant="outline">Notifications</Button>
                  </Badge>
                  <Badge count={100}>
                    <Button variant="outline">Messages</Button>
                  </Badge>
                  <Badge dot>
                    <Button variant="outline">Updates</Button>
                  </Badge>
                  <Badge status="success" text="Success" />
                  <Badge status="error" text="Error" />
                  <Badge status="warning" text="Warning" />
                  <Badge status="info" text="Info" />
                </Space>
              </div>

              <div>
                <Heading level={3}>Card</Heading>
                {/* 1 column mobile, 2 tablet, 3 desktop */}
                <Row gutter={16}>
                  <Col xs={24} sm={12} lg={8}>
                    <Card title="Basic Card" bordered className="mb-3 mb-lg-0">
                      <Paragraph>This is a basic card with title and content.</Paragraph>
                    </Card>
                  </Col>
                  <Col xs={24} sm={12} lg={8}>
                    <Card title="Hoverable Card" bordered hoverable className="mb-3 mb-lg-0">
                      <Paragraph>Hover over this card to see the effect.</Paragraph>
                    </Card>
                  </Col>
                  <Col xs={24} sm={12} lg={8}>
                    <Card title="Card" extra={<Button variant="outline" size="sm">More</Button>} bordered>
                      <Paragraph>Card with extra action in header.</Paragraph>
                    </Card>
                  </Col>
                </Row>
              </div>
            </Space>
          </Card>

          {/* Feedback Components */}
          <Card title="Feedback Components" bordered hoverable>
            <Space direction="vertical" size="large" className="w-100">
              <div>
                <Heading level={3}>Alert</Heading>
                <Space direction="vertical" size="middle" className="w-100">
                  <Alert 
                    type="success" 
                    message="Success Alert"
                    description="This is a success alert with description."
                    showIcon
                    closable
                  />
                  <Alert 
                    type="info" 
                    message="Info Alert"
                    showIcon
                    closable
                  />
                  <Alert 
                    type="warning" 
                    message="Warning Alert"
                    description="This is a warning message."
                    showIcon
                    closable
                  />
                  <Alert 
                    type="error" 
                    message="Error Alert"
                    closable
                  />
                </Space>
              </div>
            </Space>
          </Card>

          {/* Button Showcase */}
          <Card title="Button Components" bordered hoverable>
            <Space direction="vertical" size="large" className="w-100">
              <div>
                <Heading level={3}>Button Variants</Heading>
                {/* Wrap buttons on small screens */}
                <Space size="middle" wrap className="flex-wrap">
                  <Button variant="primary">Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                </Space>
              </div>

              <div>
                <Heading level={3}>Button Sizes</Heading>
                <Space size="middle" align="center" wrap className="flex-wrap">
                  <Button variant="primary" size="sm">Small</Button>
                  <Button variant="primary" size="md">Medium</Button>
                  <Button variant="primary" size="lg">Large</Button>
                </Space>
              </div>

              <div>
                <Heading level={3}>Button States</Heading>
                {/* Wrap buttons on small screens */}
                <Space size="middle" wrap className="flex-wrap">
                  <Button variant="primary" disabled>Disabled</Button>
                  <Button variant="primary" loading>Loading</Button>
                  <Button variant="secondary" loading>Loading Secondary</Button>
                  <Button variant="outline" loading>Loading Outline</Button>
                </Space>
              </div>
            </Space>
          </Card>
        </Space>
      </Container>
    </ThemeProvider>
  );
}
