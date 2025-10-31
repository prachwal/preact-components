import { Card, Heading, Paragraph, Row, Col, Space, Button, Badge, Alert } from '@/components';

export function ComponentsPage() {
  return (
    <Space direction="vertical" size="large" className="w-100">
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
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </Space>
          </Card>
        </Col>
        <Col xs={24} md={12} lg={8}>
          <Card title="Button Sizes" bordered hoverable>
            <Space direction="vertical" size="middle" className="w-100">
              <Button variant="primary" size="sm" style="width: 100%">Small Button</Button>
              <Button variant="primary" size="md" style="width: 100%">Medium Button</Button>
              <Button variant="primary" size="lg" style="width: 100%">Large Button</Button>
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
              <Badge status="warning" text="Warning" />
            </Space>
          </Card>
        </Col>
        <Col xs={24} md={12} lg={8}>
          <Card title="Alerts" bordered hoverable>
            <Space direction="vertical" size="middle" className="w-100">
              <Alert type="success" message="Success" showIcon />
              <Alert type="error" message="Error" showIcon />
              <Alert type="warning" message="Warning" showIcon />
              <Alert type="info" message="Info" showIcon />
            </Space>
          </Card>
        </Col>
        <Col xs={24} md={12} lg={8}>
          <Card title="Disabled States" bordered hoverable>
            <Space size="middle" wrap>
              <Button variant="primary" disabled>Disabled Primary</Button>
              <Button variant="outline" disabled>Disabled Outline</Button>
            </Space>
          </Card>
        </Col>
        <Col xs={24} md={12} lg={8}>
          <Card title="Loading States" bordered hoverable>
            <Space size="middle" wrap>
              <Button variant="primary" loading>Loading</Button>
              <Button variant="secondary" loading>Processing</Button>
            </Space>
          </Card>
        </Col>
      </Row>
    </Space>
  );
}
