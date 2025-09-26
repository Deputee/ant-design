'use client';

import React from 'react';
import { Button, Card, Space, Typography, Layout, Row, Col } from 'antd';
import { PlayCircleOutlined, RocketOutlined, BulbOutlined } from '@ant-design/icons';
import Link from 'next/link';

const { Title, Paragraph } = Typography;
const { Content } = Layout;

export default function HomePage() {
  return (
    <Layout className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Content className="p-8">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <Title level={1} className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to <span className="text-blue-600">ATradezone™ Cloud</span>
            </Title>
            <Paragraph className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform your Figma designs into beautiful, responsive React components 
              using Next.js, Ant Design, and Tailwind CSS.
            </Paragraph>
            <Space size="large">
              <Link href="/dashboard">
                <Button type="primary" size="large" icon={<PlayCircleOutlined />}>
                  View Dashboard
                </Button>
              </Link>
              <Link href="/components">
                <Button size="large" icon={<BulbOutlined />}>
                  UI Components
                </Button>
              </Link>
              <Link href="/examples">
                <Button size="large" icon={<RocketOutlined />}>
                  View Examples
                </Button>
              </Link>
            </Space>
          </div>

          {/* Features Section */}
          <Row gutter={[32, 32]} className="mb-16">
            <Col xs={24} md={8}>
              <Card 
                hoverable 
                className="h-full text-center shadow-lg border-0"
                cover={<div className="h-16 flex items-center justify-center bg-blue-50"><RocketOutlined className="text-3xl text-blue-600" /></div>}
              >
                <Title level={3}>Next.js Ready</Title>
                <Paragraph>
                  Built with Next.js 15 App Router, TypeScript, and modern React patterns for optimal performance.
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card 
                hoverable 
                className="h-full text-center shadow-lg border-0"
                cover={<div className="h-16 flex items-center justify-center bg-green-50"><BulbOutlined className="text-3xl text-green-600" /></div>}
              >
                <Title level={3}>Design System</Title>
                <Paragraph>
                  Ant Design components seamlessly integrated with Tailwind CSS for rapid UI development.
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card 
                hoverable 
                className="h-full text-center shadow-lg border-0"
                cover={<div className="h-16 flex items-center justify-center bg-purple-50"><PlayCircleOutlined className="text-3xl text-purple-600" /></div>}
              >
                <Title level={3}>Figma to Code</Title>
                <Paragraph>
                  Convert your Figma designs into production-ready React components with proper structure.
                </Paragraph>
              </Card>
            </Col>
          </Row>

          {/* CTA Section */}
          <div className="text-center bg-white rounded-2xl p-12 shadow-xl mb-16">
            <Title level={2} className="mb-4">Ready to Build Amazing UIs?</Title>
            <Paragraph className="text-lg text-gray-600 mb-8">
              Start converting your Figma designs into beautiful React components today.
            </Paragraph>
            <Space wrap size="large">
              <Link href="/components">
                <Button type="primary" size="large" className="px-8">
                  View Components
                </Button>
              </Link>
              <Link href="/advanced">
                <Button size="large" className="px-8">
                  Advanced Components
                </Button>
              </Link>
              <Link href="/animations">
                <Button size="large" className="px-8">
                  Animations
                </Button>
              </Link>
            </Space>
          </div>

          {/* Component Showcase Grid */}
          <Row gutter={[32, 32]} className="mb-16">
            <Col xs={24} md={8}>
              <Link href="/components">
                <Card 
                  hoverable 
                  className="h-full text-center shadow-lg border-0 hover:shadow-xl transition-all duration-300"
                  cover={<div className="h-24 flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-600"><BulbOutlined className="text-4xl text-white" /></div>}
                >
                  <Title level={3}>Basic Components</Title>
                  <Paragraph>
                    Essential UI components including buttons, forms, tables, and navigation elements.
                  </Paragraph>
                </Card>
              </Link>
            </Col>
            <Col xs={24} md={8}>
              <Link href="/advanced">
                <Card 
                  hoverable 
                  className="h-full text-center shadow-lg border-0 hover:shadow-xl transition-all duration-300"
                  cover={<div className="h-24 flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500"><RocketOutlined className="text-4xl text-white" /></div>}
                >
                  <Title level={3}>Advanced Components</Title>
                  <Paragraph>
                    Complex UI patterns with modern design, interactive elements, and data visualization.
                  </Paragraph>
                </Card>
              </Link>
            </Col>
            <Col xs={24} md={8}>
              <Link href="/animations">
                <Card 
                  hoverable 
                  className="h-full text-center shadow-lg border-0 hover:shadow-xl transition-all duration-300"
                  cover={<div className="h-24 flex items-center justify-center bg-gradient-to-r from-purple-400 to-pink-500"><PlayCircleOutlined className="text-4xl text-white" /></div>}
                >
                  <Title level={3}>Animations</Title>
                  <Paragraph>
                    Smooth animations, transitions, and interactive components for delightful UX.
                  </Paragraph>
                </Card>
              </Link>
            </Col>
          </Row>
        </div>
      </Content>
    </Layout>
  );
}