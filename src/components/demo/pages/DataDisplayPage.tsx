import { Card, Heading, Paragraph, Row, Col, Space, Flex, Divider, Button } from '@/components';

export function DataDisplayPage() {
  return (
    <Space direction="vertical" size="large" className="w-100">
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
              <Divider />
              <div>
                <Paragraph className="mb-1">Database backup completed</Paragraph>
                <Paragraph variant="muted" className="mb-0">
                  3 hours ago
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
              <Divider />
              <Flex justify="between">
                <Paragraph>Page Views</Paragraph>
                <Paragraph>45,678</Paragraph>
              </Flex>
              <Divider />
              <Flex justify="between">
                <Paragraph>Bounce Rate</Paragraph>
                <Paragraph>32.5%</Paragraph>
              </Flex>
            </Space>
          </Card>
        </Col>

        <Col xs={24} md={12}>
          <Card title="Performance Metrics" bordered hoverable>
            <Space direction="vertical" size="middle" className="w-100">
              <div>
                <Flex justify="between" className="mb-1">
                  <Paragraph className="mb-0">Server Response Time</Paragraph>
                  <Paragraph className="mb-0">98ms</Paragraph>
                </Flex>
                <div style="background: var(--bg-secondary); height: 8px; border-radius: 4px; overflow: hidden;">
                  <div style="background: var(--primary-color); width: 75%; height: 100%;"></div>
                </div>
              </div>
              <div>
                <Flex justify="between" className="mb-1">
                  <Paragraph className="mb-0">CPU Usage</Paragraph>
                  <Paragraph className="mb-0">45%</Paragraph>
                </Flex>
                <div style="background: var(--bg-secondary); height: 8px; border-radius: 4px; overflow: hidden;">
                  <div style="background: var(--secondary-color); width: 45%; height: 100%;"></div>
                </div>
              </div>
              <div>
                <Flex justify="between" className="mb-1">
                  <Paragraph className="mb-0">Memory Usage</Paragraph>
                  <Paragraph className="mb-0">62%</Paragraph>
                </Flex>
                <div style="background: var(--bg-secondary); height: 8px; border-radius: 4px; overflow: hidden;">
                  <div style="background: var(--warning-color); width: 62%; height: 100%;"></div>
                </div>
              </div>
            </Space>
          </Card>
        </Col>

        <Col xs={24} md={12}>
          <Card title="Team Members" bordered hoverable>
            <Space direction="vertical" size="middle" className="w-100">
              <Flex align="center" gap={12}>
                <div style="width: 40px; height: 40px; background: var(--primary-color); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">JD</div>
                <div style="flex: 1;">
                  <Paragraph className="mb-0">John Doe</Paragraph>
                  <Paragraph variant="muted" className="mb-0">Product Manager</Paragraph>
                </div>
              </Flex>
              <Divider />
              <Flex align="center" gap={12}>
                <div style="width: 40px; height: 40px; background: var(--secondary-color); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">AS</div>
                <div style="flex: 1;">
                  <Paragraph className="mb-0">Alice Smith</Paragraph>
                  <Paragraph variant="muted" className="mb-0">Lead Developer</Paragraph>
                </div>
              </Flex>
              <Divider />
              <Flex align="center" gap={12}>
                <div style="width: 40px; height: 40px; background: var(--primary-color); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">BJ</div>
                <div style="flex: 1;">
                  <Paragraph className="mb-0">Bob Johnson</Paragraph>
                  <Paragraph variant="muted" className="mb-0">UI/UX Designer</Paragraph>
                </div>
              </Flex>
            </Space>
          </Card>
        </Col>
      </Row>
    </Space>
  );
}
