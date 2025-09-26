'use client';

import React from 'react';
import { Layout, Typography, Row, Col, Card, Statistic, Progress, List, Avatar, Button, Space, Divider } from 'antd';
import { 
  UserOutlined, 
  ShoppingCartOutlined, 
  DollarOutlined, 
  RiseOutlined,
  DownloadOutlined,
  EyeOutlined,
  MessageOutlined
} from '@ant-design/icons';
import Link from 'next/link';

const { Content, Header } = Layout;
const { Title, Paragraph } = Typography;

export default function DashboardPage() {
  const recentActivity = [
    {
      title: 'New user registration',
      description: 'John Doe joined the platform',
      avatar: '👤',
      time: '2 minutes ago',
    },
    {
      title: 'Order completed',
      description: 'Order #12345 has been fulfilled',
      avatar: '📦',
      time: '5 minutes ago',
    },
    {
      title: 'Payment received',
      description: '$299.99 payment from Jane Smith',
      avatar: '💰',
      time: '10 minutes ago',
    },
    {
      title: 'Product review',
      description: 'New 5-star review for Product ABC',
      avatar: '⭐',
      time: '15 minutes ago',
    },
  ];

  return (
    <Layout className="min-h-screen bg-gray-50">
      <Header className="bg-white shadow-sm px-8">
        <div className="flex items-center justify-between">
          <Title level={2} className="mb-0">Dashboard</Title>
          <Space>
            <Link href="/">
              <Button>Back to Home</Button>
            </Link>
            <Link href="/examples">
              <Button type="primary">View Examples</Button>
            </Link>
          </Space>
        </div>
      </Header>
      
      <Content className="p-8">
        <div className="max-w-7xl mx-auto">
          {/* Welcome Section */}
          <div className="mb-8">
            <Title level={1}>Welcome back! 👋</Title>
            <Paragraph className="text-lg text-gray-600">
              Here's what's happening with your business today.
            </Paragraph>
          </div>

          {/* Key Metrics */}
          <Row gutter={[24, 24]} className="mb-8">
            <Col xs={24} sm={12} md={6}>
              <Card>
                <Statistic
                  title="Total Users"
                  value={11280}
                  prefix={<UserOutlined />}
                  valueStyle={{ color: '#3f8600' }}
                  suffix={<RiseOutlined />}
                />
                <Progress percent={75} strokeColor="#52c41a" />
              </Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Card>
                <Statistic
                  title="Total Orders"
                  value={856}
                  prefix={<ShoppingCartOutlined />}
                  valueStyle={{ color: '#1677ff' }}
                />
                <Progress percent={60} strokeColor="#1677ff" />
              </Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Card>
                <Statistic
                  title="Revenue"
                  value={24780}
                  prefix={<DollarOutlined />}
                  valueStyle={{ color: '#722ed1' }}
                  precision={2}
                />
                <Progress percent={85} strokeColor="#722ed1" />
              </Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Card>
                <Statistic
                  title="Conversion Rate"
                  value={3.2}
                  suffix="%"
                  valueStyle={{ color: '#f5222d' }}
                />
                <Progress percent={32} strokeColor="#f5222d" />
              </Card>
            </Col>
          </Row>

          <Row gutter={[24, 24]}>
            {/* Recent Activity */}
            <Col xs={24} lg={16}>
              <Card title="Recent Activity" className="h-full">
                <List
                  itemLayout="horizontal"
                  dataSource={recentActivity}
                  renderItem={(item) => (
                    <List.Item>
                      <List.Item.Meta
                        avatar={<Avatar>{item.avatar}</Avatar>}
                        title={item.title}
                        description={item.description}
                      />
                      <div className="text-gray-500 text-sm">{item.time}</div>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>

            {/* Quick Actions */}
            <Col xs={24} lg={8}>
              <Card title="Quick Actions" className="h-full">
                <Space direction="vertical" size="middle" className="w-full">
                  <Button 
                    type="primary" 
                    icon={<DownloadOutlined />} 
                    size="large" 
                    block
                  >
                    Download Report
                  </Button>
                  <Button 
                    icon={<EyeOutlined />} 
                    size="large" 
                    block
                  >
                    View Analytics
                  </Button>
                  <Button 
                    icon={<MessageOutlined />} 
                    size="large" 
                    block
                  >
                    Send Newsletter
                  </Button>
                  <Divider />
                  <Link href="/examples">
                    <Button size="large" block>
                      View Component Examples
                    </Button>
                  </Link>
                </Space>
              </Card>
            </Col>
          </Row>

          {/* Performance Charts Placeholder */}
          <Row gutter={[24, 24]} className="mt-8">
            <Col xs={24}>
              <Card title="Performance Overview">
                <div className="h-64 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Title level={3} className="text-gray-400 mb-2">📊</Title>
                    <Paragraph className="text-gray-500">
                      Chart visualization would go here
                    </Paragraph>
                    <Paragraph className="text-sm text-gray-400">
                      Integration with charting libraries like Chart.js or Recharts
                    </Paragraph>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </Content>
    </Layout>
  );
}