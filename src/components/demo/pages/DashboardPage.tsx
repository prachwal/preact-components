import { Card, Heading, Paragraph, Row, Col, Space, Alert } from '@/components';

export function DashboardPage() {
  return (
    <Space direction="vertical" size="large" className="w-100">
      <div>
        <Heading level={1}>Dashboard</Heading>
        <Paragraph variant="muted">
          Welcome to Preact Component Library Demo
        </Paragraph>
      </div>

      <Alert
        type="info"
        message="System Update Available"
        description="A new version is available. Update to get the latest features."
        showIcon
        closable
      />

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
    </Space>
  );
}
