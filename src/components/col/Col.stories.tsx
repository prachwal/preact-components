import type { Meta, StoryObj } from '@storybook/preact';
import { Col } from './Col';
import { Row } from '../row/Row';

const meta: Meta<typeof Col> = {
  title: 'Layout/Col',
  component: Col,
  tags: ['autodocs'],
  argTypes: {
    span: {
      control: { type: 'number', min: 1, max: 24 },
      description: 'Column span (out of 24)',
    },
    offset: {
      control: { type: 'number', min: 0, max: 24 },
      description: 'Column offset',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Col>;

const ColDemo = ({ children }: { children: any }) => (
  <div style={{ padding: '16px', background: 'var(--primary-color)', color: 'white', textAlign: 'center' }}>
    {children}
  </div>
);

export const FullWidth: Story = {
  render: () => (
    <Row>
      <Col span={24}><ColDemo>Col 24</ColDemo></Col>
    </Row>
  ),
};

export const HalfWidth: Story = {
  render: () => (
    <Row gutter={16}>
      <Col span={12}><ColDemo>Col 12</ColDemo></Col>
      <Col span={12}><ColDemo>Col 12</ColDemo></Col>
    </Row>
  ),
};

export const ThirdWidth: Story = {
  render: () => (
    <Row gutter={16}>
      <Col span={8}><ColDemo>Col 8</ColDemo></Col>
      <Col span={8}><ColDemo>Col 8</ColDemo></Col>
      <Col span={8}><ColDemo>Col 8</ColDemo></Col>
    </Row>
  ),
};

export const QuarterWidth: Story = {
  render: () => (
    <Row gutter={16}>
      <Col span={6}><ColDemo>Col 6</ColDemo></Col>
      <Col span={6}><ColDemo>Col 6</ColDemo></Col>
      <Col span={6}><ColDemo>Col 6</ColDemo></Col>
      <Col span={6}><ColDemo>Col 6</ColDemo></Col>
    </Row>
  ),
};

export const WithOffset: Story = {
  render: () => (
    <Row gutter={16}>
      <Col span={8}><ColDemo>Col 8</ColDemo></Col>
      <Col span={8} offset={8}><ColDemo>Col 8 Offset 8</ColDemo></Col>
    </Row>
  ),
};

export const MixedSizes: Story = {
  render: () => (
    <Row gutter={16}>
      <Col span={6}><ColDemo>Col 6</ColDemo></Col>
      <Col span={12}><ColDemo>Col 12</ColDemo></Col>
      <Col span={6}><ColDemo>Col 6</ColDemo></Col>
    </Row>
  ),
};

export const Responsive: Story = {
  render: () => (
    <Row gutter={16}>
      <Col xs={24} sm={12} md={8} lg={6} xl={4}>
        <ColDemo>Responsive Col</ColDemo>
      </Col>
      <Col xs={24} sm={12} md={8} lg={6} xl={4}>
        <ColDemo>Responsive Col</ColDemo>
      </Col>
      <Col xs={24} sm={12} md={8} lg={6} xl={4}>
        <ColDemo>Responsive Col</ColDemo>
      </Col>
      <Col xs={24} sm={12} md={8} lg={6} xl={4}>
        <ColDemo>Responsive Col</ColDemo>
      </Col>
      <Col xs={24} sm={12} md={8} lg={6} xl={4}>
        <ColDemo>Responsive Col</ColDemo>
      </Col>
      <Col xs={24} sm={12} md={8} lg={6} xl={4}>
        <ColDemo>Responsive Col</ColDemo>
      </Col>
    </Row>
  ),
};
