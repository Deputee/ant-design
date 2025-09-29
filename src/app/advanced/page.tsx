'use client';

import React, { useState, useEffect } from 'react';
import {
  Card, Row, Col, Typography, Button, Space, Avatar, Badge, Tag, Progress,
  Tooltip, Switch, Slider, Rate, Input, Select, DatePicker, Modal,
  Segmented, Divider, Spin, Empty, 
  Skeleton, FloatButton, Watermark, QRCode, ColorPicker} from 'antd';
import {
  
  MoreOutlined, SearchOutlined, 
  EyeOutlined, EditOutlined, 
  HomeOutlined, TeamOutlined, ShoppingCartOutlined,
  TrophyOutlined, RocketOutlined, BulbOutlined, CrownOutlined, GiftOutlined,
  ThunderboltOutlined, FireOutlined, SafetyOutlined, 
  MailOutlined,
  PhoneOutlined, GlobalOutlined, 
  WifiOutlined, 
  RadarChartOutlined,
  PieChartOutlined, BarChartOutlined} from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;
const { Option } = Select;

// Modern gradient color schemes
const gradients = [
  'from-purple-400 to-pink-400',
  'from-blue-400 to-purple-600',
  'from-green-400 to-blue-500',
  'from-yellow-400 to-red-500',
  'from-pink-400 to-red-600',
  'from-indigo-400 to-purple-700',
  'from-teal-400 to-blue-500',
  'from-orange-400 to-pink-400',
];

// Sample user data
const users = [
  { name: 'Sarah Chen', role: 'Senior Designer', avatar: 'https://api.dicebear.com/7.x/miniavs/svg?seed=sarah', status: 'online' },
  { name: 'Mike Johnson', role: 'Frontend Dev', avatar: 'https://api.dicebear.com/7.x/miniavs/svg?seed=mike', status: 'away' },
  { name: 'Lisa Wang', role: 'Product Manager', avatar: 'https://api.dicebear.com/7.x/miniavs/svg?seed=lisa', status: 'busy' },
  { name: 'Alex Smith', role: 'Backend Dev', avatar: 'https://api.dicebear.com/7.x/miniavs/svg?seed=alex', status: 'offline' },
];

// Sample metrics data
const metrics = [
  { title: 'Total Users', value: '1,234,567', change: '+12.5%', trend: 'up', icon: <TeamOutlined />, color: 'blue' },
  { title: 'Revenue', value: '$456,789', change: '+8.2%', trend: 'up', icon: <ShoppingCartOutlined />, color: 'green' },
  { title: 'Orders', value: '98,765', change: '-2.1%', trend: 'down', icon: <TrophyOutlined />, color: 'orange' },
  { title: 'Conversion', value: '3.45%', change: '+1.8%', trend: 'up', icon: <RocketOutlined />, color: 'purple' },
];

export default function AdvancedComponentsPage() {
  const [selectedSegment, setSelectedSegment] = useState('overview');
  const [selectedUsers, setSelectedUsers] = useState(['sarah', 'mike']);
  const [themeMode, setThemeMode] = useState(false);
  const [isCustomModalOpen, setIsCustomModalOpen] = useState(false);
  const [isAntModalOpen, setIsAntModalOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const openCustomModal = () => setIsCustomModalOpen(true);
  const closeCustomModal = () => setIsCustomModalOpen(false);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeCustomModal();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <Title level={1} className="mb-2">Advanced UI Components</Title>
              <Text className="text-lg text-gray-600">Modern, responsive components for your next project</Text>
            </div>
            <div className="flex items-center gap-4">
              <Space>
                <Text>Theme:</Text>
                <Switch
                  checked={themeMode}
                  onChange={setThemeMode}
                  checkedChildren="🌙"
                  unCheckedChildren="☀️"
                />
              </Space>
            </div>
          </div>

          {/* Navigation Segment */}
          <Segmented
            options={[
              { label: 'Overview', value: 'overview', icon: <HomeOutlined /> },
              { label: 'Cards', value: 'cards', icon: <BulbOutlined /> },
              { label: 'Data Viz', value: 'dataviz', icon: <BarChartOutlined /> },
              { label: 'Forms', value: 'forms', icon: <EditOutlined /> },
              { label: 'Social', value: 'social', icon: <TeamOutlined /> },
            ]}
            value={selectedSegment}
            onChange={setSelectedSegment}
            size="large"
            className="mb-6"
          />
        </div>

        {/* Modern Metrics Cards */}
        <Row gutter={[24, 24]} className="mb-8">
          {metrics.map((metric, index) => (
            <Col xs={24} sm={12} lg={6} key={index}>
              <Card className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <Text type="secondary" className="text-sm">{metric.title}</Text>
                    <div className="flex items-center gap-2 mt-1">
                      <Title level={3} className="mb-0">{metric.value}</Title>
                      <Tag color={metric.trend === 'up' ? 'green' : 'red'} className="text-xs rounded-full">
                        {metric.change}
                      </Tag>
                    </div>
                  </div>
                  <div className={`w-12 h-12 bg-${metric.color}-100 rounded-full flex items-center justify-center`}>
                    <span className={`text-${metric.color}-600 text-xl`}>{metric.icon}</span>
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Advanced Card Layouts */}
        <Row gutter={[24, 24]} className="mb-8">
          {/* Modern Profile Card */}
          <Col xs={24} md={8}>
            <Card className="shadow-lg border-0 overflow-hidden">
              <div className={`h-24 bg-gradient-to-r ${gradients[0]} relative`}>
                <div className="absolute -bottom-6 left-6">
                  <Avatar size={48} src="https://api.dicebear.com/7.x/miniavs/svg?seed=profile" className="border-4 border-white" />
                </div>
              </div>
              <div className="pt-8 pb-4 px-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Title level={4} className="mb-1">Sarah Chen</Title>
                    <Text type="secondary">Senior UI/UX Designer</Text>
                  </div>
                  <Badge status="processing" text="Online" />
                </div>
                <div className="flex justify-between text-center mb-4">
                  <div>
                    <Title level={4} className="mb-0">1.2k</Title>
                    <Text type="secondary">Followers</Text>
                  </div>
                  <div>
                    <Title level={4} className="mb-0">89</Title>
                    <Text type="secondary">Following</Text>
                  </div>
                  <div>
                    <Title level={4} className="mb-0">234</Title>
                    <Text type="secondary">Posts</Text>
                  </div>
                </div>
                <Button type="primary" block>Follow</Button>
              </div>
            </Card>
          </Col>

          {/* Interactive Dashboard Card */}
          <Col xs={24} md={8}>
            <Card className="shadow-lg border-0" title="Activity Overview">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>Project Progress</span>
                  <Progress percent={75} size="small" className="w-24" />
                </div>
                <div className="flex items-center justify-between">
                  <span>Team Performance</span>
                  <Progress percent={92} size="small" className="w-24" strokeColor="#52c41a" />
                </div>
                <div className="flex items-center justify-between">
                  <span>Goal Achievement</span>
                  <Progress percent={67} size="small" className="w-24" strokeColor="#fa8c16" />
                </div>
                <Divider />
                <div className="flex justify-between">
                  <Button type="text" icon={<EyeOutlined />}>View Details</Button>
                  <Button type="primary" icon={<RocketOutlined />}>Boost</Button>
                </div>
              </div>
            </Card>
          </Col>

          {/* Feature Showcase Card */}
          <Col xs={24} md={8}>
            <Card className="shadow-lg border-0 bg-gradient-to-br from-blue-50 to-purple-50">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CrownOutlined className="text-2xl text-white" />
                </div>
                <Title level={3} className="mb-2">Premium Features</Title>
                <Text type="secondary" className="block mb-4">
                  Unlock advanced features and boost your productivity
                </Text>
                <Space direction="vertical" className="w-full">
                  <div className="flex items-center justify-center gap-2">
                    <Text>✨ Advanced Analytics</Text>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Text>🚀 Priority Support</Text>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Text>🎯 Custom Integrations</Text>
                  </div>
                  <Button type="primary" size="large" className="mt-4">
                    Upgrade Now
                  </Button>
                </Space>
              </div>
            </Card>
          </Col>
        </Row>

        {/* Team Member Cards */}
        <Card className="mb-8 shadow-lg border-0" title="Team Members">
          <Row gutter={[16, 16]}>
            {users.map((user, index) => (
              <Col xs={24} sm={12} md={6} key={index}>
                <Card className="text-center hover:shadow-md transition-shadow">
                  <Badge 
                    status={user.status === 'online' ? 'success' : user.status === 'away' ? 'warning' : user.status === 'busy' ? 'error' : 'default'}
                    offset={[-5, 5]}
                  >
                    <Avatar size={64} src={user.avatar} />
                  </Badge>
                  <Title level={5} className="mt-3 mb-1">{user.name}</Title>
                  <Text type="secondary">{user.role}</Text>
                  <div className="mt-3">
                    <Button type="text" size="small" icon={<MailOutlined />} />
                    <Button type="text" size="small" icon={<PhoneOutlined />} />
                    <Button type="text" size="small" icon={<MoreOutlined />} />
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </Card>

        {/* Interactive Form Components */}
        <Card className="mb-8 shadow-lg border-0" title="Modern Form Elements">
          <Row gutter={[24, 24]}>
            <Col xs={24} md={12}>
              <Space direction="vertical" className="w-full">
                <div>
                  <Text strong>Color Picker</Text>
                  <div className="mt-2">
                    <ColorPicker defaultValue="#1677ff" />
                  </div>
                </div>
                
                <div>
                  <Text strong>Rating with Tooltips</Text>
                  <div className="mt-2">
                    <Rate 
                      tooltips={['Terrible', 'Bad', 'Normal', 'Good', 'Wonderful']}
                      defaultValue={3}
                    />
                  </div>
                </div>

                <div>
                  <Text strong>Interactive Slider</Text>
                  <div className="mt-2">
                    <Slider
                      range
                      step={10}
                      defaultValue={[20, 50]}
                      marks={{
                        0: '0°C',
                        26: '26°C',
                        37: '37°C',
                        100: {
                          style: { color: '#f50' },
                          label: <strong>100°C</strong>,
                        },
                      }}
                    />
                  </div>
                </div>
              </Space>
            </Col>

            <Col xs={24} md={12}>
              <Space direction="vertical" className="w-full">
                <div>
                  <Text strong>Advanced Search</Text>
                  <div className="mt-2">
                    <Input.Search
                      placeholder="Search anything..."
                      allowClear
                      enterButton={<Button type="primary" icon={<SearchOutlined />}>Search</Button>}
                      size="large"
                    />
                  </div>
                </div>

                <div>
                  <Text strong>Multi-Select with Tags</Text>
                  <div className="mt-2">
                    <Select
                      mode="multiple"
                      allowClear
                      style={{ width: '100%' }}
                      placeholder="Please select"
                      defaultValue={['tag1', 'tag2']}
                      options={[
                        { label: 'React', value: 'tag1' },
                        { label: 'Vue', value: 'tag2' },
                        { label: 'Angular', value: 'tag3' },
                        { label: 'Svelte', value: 'tag4' },
                      ]}
                    />
                  </div>
                </div>

                <div>
                  <Text strong>Date Range Picker</Text>
                  <div className="mt-2">
                    <DatePicker.RangePicker style={{ width: '100%' }} />
                  </div>
                </div>
              </Space>
            </Col>
          </Row>
        </Card>

        {/* Loading States & Empty States */}
        <Card className="mb-8 shadow-lg border-0" title="Loading & Empty States">
          <Row gutter={[24, 24]}>
            <Col xs={24} md={8}>
              <div className="text-center p-8">
                <Spin size="large" />
                <div className="mt-4">
                  <Text>Loading content...</Text>
                </div>
              </div>
            </Col>

            <Col xs={24} md={8}>
              <Skeleton active paragraph={{ rows: 4 }} />
            </Col>

            <Col xs={24} md={8}>
              <Empty
                image={Empty.PRESENTED_IMAGE_SIMPLE}
                description="No data available"
              >
                <Button type="primary">Create Now</Button>
              </Empty>
            </Col>
          </Row>
        </Card>

        {/* QR Code & Watermark */}
        <Card className="mb-8 shadow-lg border-0" title="Modern Utilities">
          <Row gutter={[24, 24]}>
            <Col xs={24} md={12}>
              <div className="text-center">
                <Text strong className="block mb-4">QR Code Generator</Text>
                <QRCode value="https://your-website.com" />
              </div>
            </Col>

            <Col xs={24} md={12}>
              <Watermark content="CONFIDENTIAL">
                <div className="h-48 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Text>Watermarked Content Area</Text>
                </div>
              </Watermark>
            </Col>
          </Row>
        </Card>

        {/* Modal & Popup Components */}
        <Card className="mb-8 shadow-lg border-0" title="Modal & Popup Components">
          <Row gutter={[24, 24]}>
            <Col xs={24} md={12}>
              <Card className="shadow-sm">
                <Title level={4} className="mb-4">Ant Design Modal</Title>
                <Text className="block mb-4">
                  Built-in modal component with customizable features and responsive design.
                </Text>
                <Space wrap>
                  <Button type="primary" onClick={() => setIsAntModalOpen(true)}>
                    Open Basic Modal
                  </Button>
                  <Button onClick={() => setIsAntModalOpen(true)}>
                    Show Info
                  </Button>
                </Space>
                <div className="mt-4">
                  <Text type="secondary" className="text-sm">Features:</Text>
                  <div className="mt-2">
                    <Space wrap>
                      <Tag color="blue" className="rounded-full">Responsive</Tag>
                      <Tag color="green" className="rounded-full">Accessible</Tag>
                      <Tag color="purple" className="rounded-full">Customizable</Tag>
                      <Tag color="orange" className="rounded-full">Animated</Tag>
                    </Space>
                  </div>
                </div>
              </Card>
            </Col>

            <Col xs={24} md={12}>
              <Card className="shadow-sm">
                <Title level={4} className="mb-4">Custom Modal</Title>
                <Text className="block mb-4">
                  Custom-designed modal with advanced layout and scrollable content areas.
                </Text>
                <Space wrap>
                  <Button type="primary" onClick={openCustomModal}>
                    Open Custom Modal
                  </Button>
                  <Button type="dashed">
                    Advanced Options
                  </Button>
                </Space>
                <div className="mt-4">
                  <Text type="secondary" className="text-sm">Features:</Text>
                  <div className="mt-2">
                    <Space wrap>
                      <Tag color="cyan" className="rounded-full">Multi-section</Tag>
                      <Tag color="red" className="rounded-full">Scrollable</Tag>
                      <Tag color="yellow" className="rounded-full">Professional</Tag>
                      <Tag color="lime" className="rounded-full">Form Ready</Tag>
                    </Space>
                  </div>
                </div>
              </Card>
            </Col>

            <Col span={24}>
              <Card className="shadow-sm" title="Modal Usage Examples">
                <Row gutter={[16, 16]}>
                  <Col xs={24} sm={8}>
                    <div className="text-center p-6 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="text-3xl mb-3">📝</div>
                      <Title level={5}>Form Modal</Title>
                      <Text type="secondary">Data entry and form submissions</Text>
                    </div>
                  </Col>
                  <Col xs={24} sm={8}>
                    <div className="text-center p-6 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="text-3xl mb-3">ℹ️</div>
                      <Title level={5}>Info Modal</Title>
                      <Text type="secondary">Display detailed information</Text>
                    </div>
                  </Col>
                  <Col xs={24} sm={8}>
                    <div className="text-center p-6 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="text-3xl mb-3">⚠️</div>
                      <Title level={5}>Confirm Modal</Title>
                      <Text type="secondary">Action confirmations</Text>
                    </div>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Card>

        {/* Include Model Section */}
        <Card className="mb-8 shadow-lg border-0" title="Include Model">
          <Row gutter={[24, 24]}>
            <Col xs={24} md={12}>
              <Card className="shadow-sm bg-gradient-to-br from-indigo-50 to-blue-50">
                <div className="text-center p-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BulbOutlined className="text-3xl text-white" />
                  </div>
                  <Title level={3} className="mb-3">AI Model Integration</Title>
                  <Text className="text-gray-600 block mb-4">
                    Seamlessly integrate AI models into your applications with our advanced API framework.
                  </Text>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <Text>Real-time Processing</Text>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <Text>Multi-Model Support</Text>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <Text>Auto-scaling</Text>
                    </div>
                  </div>
                  <Button type="primary" size="large" icon={<RocketOutlined />}>
                    Include Model
                  </Button>
                </div>
              </Card>
            </Col>

            <Col xs={24} md={12}>
              <Card className="shadow-sm">
                <Title level={4} className="mb-4">Model Configuration</Title>
                <Space direction="vertical" className="w-full">
                  <div>
                    <Text strong>Model Type:</Text>
                    <div className="mt-2">
                      <Select defaultValue="gpt-4" className="w-full">
                        <Option value="gpt-4">GPT-4 Turbo</Option>
                        <Option value="gpt-3.5">GPT-3.5 Turbo</Option>
                        <Option value="claude">Claude 3</Option>
                        <Option value="gemini">Gemini Pro</Option>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Text strong>Performance Level:</Text>
                    <div className="mt-2">
                      <Slider
                        marks={{
                          0: 'Basic',
                          50: 'Standard',
                          100: 'Premium'
                        }}
                        defaultValue={75}
                      />
                    </div>
                  </div>

                  <div>
                    <Text strong>Features:</Text>
                    <div className="mt-2">
                      <Space wrap>
                        <Tag color="blue" className="rounded-full">Text Generation</Tag>
                        <Tag color="green" className="rounded-full">Image Analysis</Tag>
                        <Tag color="purple" className="rounded-full">Code Review</Tag>
                        <Tag color="orange" className="rounded-full">Data Processing</Tag>
                      </Space>
                    </div>
                  </div>

                  <div>
                    <Text strong>API Endpoint:</Text>
                    <div className="mt-2">
                      <Input
                        value="https://api.yourservice.com/v1/models"
                        readOnly
                        suffix={
                          <Tooltip title="Copy to clipboard">
                            <Button type="text" size="small" icon={<CrownOutlined />} />
                          </Tooltip>
                        }
                      />
                    </div>
                  </div>
                </Space>
              </Card>
            </Col>

            <Col span={24}>
              <Card className="shadow-sm" title="Model Performance Metrics">
                <Row gutter={[16, 16]}>
                  <Col xs={24} sm={6}>
                    <div className="text-center p-4 border border-gray-200 rounded-lg">
                      <div className="text-2xl font-bold text-green-600 mb-1">99.2%</div>
                      <div className="text-sm text-gray-500">Accuracy</div>
                      <Progress percent={99} strokeColor="#52c41a" showInfo={false} size="small" className="mt-2" />
                    </div>
                  </Col>
                  <Col xs={24} sm={6}>
                    <div className="text-center p-4 border border-gray-200 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600 mb-1">45ms</div>
                      <div className="text-sm text-gray-500">Response Time</div>
                      <Progress percent={85} strokeColor="#1890ff" showInfo={false} size="small" className="mt-2" />
                    </div>
                  </Col>
                  <Col xs={24} sm={6}>
                    <div className="text-center p-4 border border-gray-200 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600 mb-1">1.2M</div>
                      <div className="text-sm text-gray-500">Requests/Day</div>
                      <Progress percent={75} strokeColor="#722ed1" showInfo={false} size="small" className="mt-2" />
                    </div>
                  </Col>
                  <Col xs={24} sm={6}>
                    <div className="text-center p-4 border border-gray-200 rounded-lg">
                      <div className="text-2xl font-bold text-orange-600 mb-1">98.7%</div>
                      <div className="text-sm text-gray-500">Uptime</div>
                      <Progress percent={98} strokeColor="#fa8c16" showInfo={false} size="small" className="mt-2" />
                    </div>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Card>

        {/* Modern Icon Grid */}
        <Card className="mb-8 shadow-lg border-0" title="Icon Library">
          <Row gutter={[16, 16]}>
            {[
              { icon: <TrophyOutlined />, name: 'Achievement', color: 'text-yellow-500' },
              { icon: <RocketOutlined />, name: 'Launch', color: 'text-blue-500' },
              { icon: <BulbOutlined />, name: 'Innovation', color: 'text-purple-500' },
              { icon: <CrownOutlined />, name: 'Premium', color: 'text-yellow-600' },
              { icon: <GiftOutlined />, name: 'Rewards', color: 'text-pink-500' },
              { icon: <ThunderboltOutlined />, name: 'Performance', color: 'text-orange-500' },
              { icon: <FireOutlined />, name: 'Trending', color: 'text-red-500' },
              { icon: <SafetyOutlined />, name: 'Security', color: 'text-green-500' },
              { icon: <GlobalOutlined />, name: 'Global', color: 'text-blue-600' },
              { icon: <WifiOutlined />, name: 'Connected', color: 'text-teal-500' },
              { icon: <RadarChartOutlined />, name: 'Analytics', color: 'text-indigo-500' },
              { icon: <PieChartOutlined />, name: 'Reports', color: 'text-cyan-500' },
            ].map((item, index) => (
              <Col xs={6} sm={4} md={3} lg={2} key={index}>
                <Tooltip title={item.name}>
                  <div className="text-center p-4 hover:bg-gray-50 rounded-lg cursor-pointer transition-all duration-200 hover:scale-105">
                    <div className={`text-3xl ${item.color} mb-2`}>{item.icon}</div>
                    <Text className="text-xs">{item.name}</Text>
                  </div>
                </Tooltip>
              </Col>
            ))}
          </Row>
        </Card>

        {/* Back to Top */}
        <FloatButton.BackTop />

        {/* Ant Design Modal */}
        <Modal
          title="Advanced Modal Example"
          open={isAntModalOpen}
          onOk={() => setIsAntModalOpen(false)}
          onCancel={() => setIsAntModalOpen(false)}
          width={600}
          footer={[
            <Button key="back" onClick={() => setIsAntModalOpen(false)}>
              Cancel
            </Button>,
            <Button key="submit" type="primary" onClick={() => setIsAntModalOpen(false)}>
              Submit
            </Button>,
          ]}
        >
          <div className="py-4">
            <Title level={4}>Modal Content</Title>
            <Paragraph>
              This is an example of the Ant Design Modal component with custom styling and features.
              It includes proper accessibility, keyboard navigation, and responsive design.
            </Paragraph>
            <Space direction="vertical" className="w-full">
              <Input placeholder="Enter your name" />
              <Input.TextArea placeholder="Enter description" rows={4} />
              <Select placeholder="Select an option" className="w-full">
                <Option value="option1">Option 1</Option>
                <Option value="option2">Option 2</Option>
                <Option value="option3">Option 3</Option>
              </Select>
            </Space>
          </div>
        </Modal>

        {/* Custom Modal */}
        {isClient && isCustomModalOpen && (
          <div className="modal-overlay active" onClick={handleOverlayClick}>
            <div className="modal">
              <div className="modal-header">
                <div className="modal-title">
                  <div className="modal-icon">A</div>
                  <div>
                    <h2 className="modal-section-title">ADVANCED COMPONENTS</h2>
                    <p className="modal-section-subtitle">Custom Modal Example</p>
                  </div>
                </div>
                <button className="modal-close" onClick={closeCustomModal}>
                </button>
              </div>
              
              <div className="modal-body-scrollable">
                <div className="modal-body">
                  <h3 className="section-title">CONTENT SECTIONS</h3>
                  <div className="columns-container">
                    <div className="column">
                      <div className="column-header">
                        <span>Features & Benefits</span>
                      </div>
                      <div className="column-content">
                        <div className="p-4">
                          <Space direction="vertical" className="w-full">
                            <div className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              <Text>Responsive Design</Text>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              <Text>Custom Styling</Text>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                              <Text>Scrollable Content</Text>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                              <Text>Professional Layout</Text>
                            </div>
                          </Space>
                        </div>
                      </div>
                      <div className="column-content">
                        <div className="p-4">
                          <Space direction="vertical" className="w-full">
                            <div className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              <Text>Responsive Design</Text>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              <Text>Custom Styling</Text>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                              <Text>Scrollable Content</Text>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                              <Text>Professional Layout</Text>
                            </div>
                          </Space>
                        </div>
                      </div>
                    </div>
                    <div className="column">
                      <div className="column-header">
                        <span>Configuration Options</span>
                      </div>
                      <div className="column-content">
                        <div className="p-4">
                          <Space direction="vertical" className="w-full">
                            <div>
                              <Text strong>Modal Size:</Text>
                              <div className="mt-2">
                                <Slider defaultValue={75} marks={{ 0: 'Small', 50: 'Medium', 100: 'Large' }} />
                              </div>
                            </div>
                            <div>
                              <Text strong>Animation:</Text>
                              <div className="mt-2">
                                <Switch defaultChecked /> <Text className="ml-2">Enable transitions</Text>
                              </div>
                            </div>
                            <div>
                              <Text strong>Backdrop:</Text>
                              <div className="mt-2">
                                <Switch defaultChecked /> <Text className="ml-2">Close on click outside</Text>
                              </div>
                            </div>
                          </Space>
                        </div>
                      </div>
                    </div>
                    <div className="column">
                      <div className="column-header">
                        <span>Configuration Options</span>
                      </div>
                      <div className="column-content">
                        <div className="p-4">
                          <Space direction="vertical" className="w-full">
                            <div>
                              <Text strong>Modal Size:</Text>
                              <div className="mt-2">
                                <Slider defaultValue={75} marks={{ 0: 'Small', 50: 'Medium', 100: 'Large' }} />
                              </div>
                            </div>
                            <div>
                              <Text strong>Animation:</Text>
                              <div className="mt-2">
                                <Switch defaultChecked /> <Text className="ml-2">Enable transitions</Text>
                              </div>
                            </div>
                            <div>
                              <Text strong>Backdrop:</Text>
                              <div className="mt-2">
                                <Switch defaultChecked /> <Text className="ml-2">Close on click outside</Text>
                              </div>
                            </div>
                          </Space>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="modal-footer">
                <div className="footer-left">
                  <h4 className="footer-title">ACTIONS</h4>
                  <p className="footer-subtitle">Choose your action</p>
                </div>
                <div className="footer-buttons">
                  <button className="btn btn-cancel" onClick={closeCustomModal}>Cancel</button>
                  <button className="btn btn-add" onClick={closeCustomModal}>Apply Settings</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}