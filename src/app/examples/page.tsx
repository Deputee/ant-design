'use client';

import React from 'react';
import { Layout, Typography, Row, Col, Card, Button, Input, Select, DatePicker, Form, Space, Divider } from 'antd';
import { SearchOutlined, PlusOutlined, DownloadOutlined } from '@ant-design/icons';

const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;
const { Option } = Select;

export default function ExamplesPage() {
  return (
    <Layout className="min-h-screen bg-gray-50">
      <Content className="p-8">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="mb-8">
            <Title level={1}>Figma Component Examples</Title>
            <Paragraph className="text-lg text-gray-600">
              Common UI patterns converted from Figma designs to working React components
            </Paragraph>
          </div>

          {/* Search and Filter Bar */}
          <Card className="mb-8 shadow-sm">
            <Title level={3} className="mb-4">Search & Filter Bar</Title>
            <div className="bg-white p-6 rounded-lg border">
              <Row gutter={[16, 16]} align="middle">
                <Col xs={24} sm={12} md={8}>
                  <Input 
                    placeholder="Search products..."
                    prefix={<SearchOutlined />}
                    size="large"
                    className="rounded-md"
                  />
                </Col>
                <Col xs={24} sm={6} md={4}>
                  <Select 
                    placeholder="Category"
                    size="large"
                    className="w-full"
                  >
                    <Option value="electronics">Electronics</Option>
                    <Option value="clothing">Clothing</Option>
                    <Option value="books">Books</Option>
                  </Select>
                </Col>
                <Col xs={24} sm={6} md={4}>
                  <DatePicker 
                    placeholder="Select date"
                    size="large"
                    className="w-full"
                  />
                </Col>
                <Col xs={24} sm={12} md={8}>
                  <Space>
                    <Button type="primary" size="large" icon={<SearchOutlined />}>
                      Search
                    </Button>
                    <Button size="large">Reset</Button>
                  </Space>
                </Col>
              </Row>
            </div>
          </Card>

          {/* Product Cards Grid */}
          <Card className="mb-8 shadow-sm">
            <Title level={3} className="mb-4">Product Cards</Title>
            <Row gutter={[24, 24]}>
              {[1, 2, 3, 4].map((item) => (
                <Col xs={24} sm={12} md={8} lg={6} key={item}>
                  <Card
                    hoverable
                    className="shadow-md transition-all duration-300 hover:shadow-lg"
                    cover={
                      <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                        <Text className="text-gray-500">Product Image</Text>
                      </div>
                    }
                    actions={[
                      <Button key="view" type="text" size="small">View</Button>,
                      <Button key="cart" type="text" size="small">Add to Cart</Button>,
                      <Button key="wishlist" type="text" size="small">♡</Button>,
                    ]}
                  >
                    <Card.Meta
                      title={`Product ${item}`}
                      description="High-quality product with excellent features and great value for money."
                    />
                    <div className="mt-4 flex justify-between items-center">
                      <Text strong className="text-lg text-blue-600">$99.99</Text>
                      <Text delete className="text-gray-400">$129.99</Text>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          </Card>

          {/* Dashboard Stats */}
          <Card className="mb-8 shadow-sm">
            <Title level={3} className="mb-4">Dashboard Statistics</Title>
            <Row gutter={[24, 24]}>
              <Col xs={24} sm={12} md={6}>
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <Text className="text-blue-100 text-sm">Total Sales</Text>
                      <Title level={2} className="text-white mb-0">$24,780</Title>
                    </div>
                    <div className="text-3xl opacity-80">📈</div>
                  </div>
                  <Text className="text-blue-100 text-xs">+12% from last month</Text>
                </div>
              </Col>
              <Col xs={24} sm={12} md={6}>
                <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <Text className="text-green-100 text-sm">New Users</Text>
                      <Title level={2} className="text-white mb-0">1,249</Title>
                    </div>
                    <div className="text-3xl opacity-80">👥</div>
                  </div>
                  <Text className="text-green-100 text-xs">+8% from last month</Text>
                </div>
              </Col>
              <Col xs={24} sm={12} md={6}>
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <Text className="text-purple-100 text-sm">Orders</Text>
                      <Title level={2} className="text-white mb-0">856</Title>
                    </div>
                    <div className="text-3xl opacity-80">📦</div>
                  </div>
                  <Text className="text-purple-100 text-xs">+15% from last month</Text>
                </div>
              </Col>
              <Col xs={24} sm={12} md={6}>
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <Text className="text-orange-100 text-sm">Revenue</Text>
                      <Title level={2} className="text-white mb-0">$12.4K</Title>
                    </div>
                    <div className="text-3xl opacity-80">💰</div>
                  </div>
                  <Text className="text-orange-100 text-xs">+23% from last month</Text>
                </div>
              </Col>
            </Row>
          </Card>

          {/* Form Example */}
          <Card className="mb-8 shadow-sm">
            <Title level={3} className="mb-4">Contact Form</Title>
            <div className="bg-white p-6 rounded-lg border max-w-2xl">
              <Form layout="vertical" size="large">
                <Row gutter={16}>
                  <Col xs={24} sm={12}>
                    <Form.Item label="First Name" name="firstName">
                      <Input placeholder="Enter your first name" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Form.Item label="Last Name" name="lastName">
                      <Input placeholder="Enter your last name" />
                    </Form.Item>
                  </Col>
                </Row>
                <Form.Item label="Email" name="email">
                  <Input placeholder="Enter your email" type="email" />
                </Form.Item>
                <Form.Item label="Subject" name="subject">
                  <Select placeholder="Select a subject">
                    <Option value="general">General Inquiry</Option>
                    <Option value="support">Support</Option>
                    <Option value="sales">Sales</Option>
                  </Select>
                </Form.Item>
                <Form.Item label="Message" name="message">
                  <Input.TextArea rows={4} placeholder="Enter your message" />
                </Form.Item>
                <Form.Item>
                  <Space>
                    <Button type="primary" size="large">Send Message</Button>
                    <Button size="large">Reset</Button>
                  </Space>
                </Form.Item>
              </Form>
            </div>
          </Card>

          {/* Action Buttons */}
          <Card className="shadow-sm">
            <Title level={3} className="mb-4">Action Buttons</Title>
            <div className="space-y-4">
              <div>
                <Text strong className="block mb-2">Primary Actions</Text>
                <Space wrap>
                  <Button type="primary" size="large" icon={<PlusOutlined />}>
                    Add New
                  </Button>
                  <Button type="primary" size="large" icon={<DownloadOutlined />}>
                    Download
                  </Button>
                  <Button type="primary" size="large" danger>
                    Delete
                  </Button>
                </Space>
              </div>
              <Divider />
              <div>
                <Text strong className="block mb-2">Secondary Actions</Text>
                <Space wrap>
                  <Button size="large">Cancel</Button>
                  <Button size="large">Save Draft</Button>
                  <Button size="large" type="dashed">
                    Import
                  </Button>
                </Space>
              </div>
            </div>
          </Card>
        </div>
      </Content>
    </Layout>
  );
}