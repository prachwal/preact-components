import type { Meta, StoryObj } from '@storybook/preact';
import { Row } from './Row';
import { Col } from '../col/Col';

const meta: Meta<typeof Row> = {
  title: 'Layout/Row',
  component: Row,
  tags: ['autodocs'],
  argTypes: {
    gutter: {
      control: { type: 'number' },
      description: 'Spacing between columns',
    },
    align: {
      control: { type: 'select' },
      options: ['top', 'middle', 'bottom', 'stretch'],
      description: 'Vertical alignment',
    },
    justify: {
      control: { type: 'select' },
      options: ['start', 'end', 'center', 'space-around', 'space-between', 'space-evenly'],
      description: 'Horizontal alignment',
    },
    wrap: {
      control: 'boolean',
      description: 'Allow wrapping',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Row>;

const ColDemo = ({ children }: { children: any }) => (
  <div style={{ padding: '16px', background: 'var(--primary-color)', color: 'white', textAlign: 'center' }}>
    {children}
  </div>
);

export const Default: Story = {
  render: () => (
    <Row>
      <Col span={8}><ColDemo>Col 8</ColDemo></Col>
      <Col span={8}><ColDemo>Col 8</ColDemo></Col>
      <Col span={8}><ColDemo>Col 8</ColDemo></Col>
    </Row>
  ),
};

export const WithGutter: Story = {
  render: () => (
    <Row gutter={16}>
      <Col span={8}><ColDemo>Col 8</ColDemo></Col>
      <Col span={8}><ColDemo>Col 8</ColDemo></Col>
      <Col span={8}><ColDemo>Col 8</ColDemo></Col>
    </Row>
  ),
};

export const AlignMiddle: Story = {
  render: () => (
    <Row align="middle" gutter={16}>
      <Col span={8}><ColDemo>Tall<br />Content</ColDemo></Col>
      <Col span={8}><ColDemo>Short</ColDemo></Col>
      <Col span={8}><ColDemo>Medium<br />Size</ColDemo></Col>
    </Row>
  ),
};

export const JustifyCenter: Story = {
  render: () => (
    <Row justify="center" gutter={16}>
      <Col span={6}><ColDemo>Col 6</ColDemo></Col>
      <Col span={6}><ColDemo>Col 6</ColDemo></Col>
    </Row>
  ),
};

export const JustifySpaceBetween: Story = {
  render: () => (
    <Row justify="space-between" gutter={16}>
      <Col span={6}><ColDemo>Col 6</ColDemo></Col>
      <Col span={6}><ColDemo>Col 6</ColDemo></Col>
    </Row>
  ),
};

export const ResponsiveGrid: Story = {
  render: () => (
    <Row gutter={16}>
      <Col xs={24} sm={12} md={8} lg={6}>
        <ColDemo>Responsive</ColDemo>
      </Col>
      <Col xs={24} sm={12} md={8} lg={6}>
        <ColDemo>Responsive</ColDemo>
      </Col>
      <Col xs={24} sm={12} md={8} lg={6}>
        <ColDemo>Responsive</ColDemo>
      </Col>
      <Col xs={24} sm={12} md={8} lg={6}>
        <ColDemo>Responsive</ColDemo>
      </Col>
    </Row>
  ),
};
