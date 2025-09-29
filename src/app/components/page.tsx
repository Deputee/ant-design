'use client';

import React, { useState } from 'react';
import {
  Layout, Typography, Card, Button, Space, Row, Col, Avatar, Badge, Tag, Progress,
  Statistic, Timeline, Steps, Tabs, Collapse, Alert, notification, message,
  Switch, Slider, Rate, Upload, Input, Select, DatePicker, Form, Checkbox,
  Radio, Divider, Tooltip, Popover, Modal, Drawer, Carousel, Table, List,
  Transfer, Tree, Cascader, AutoComplete, Mentions, TimePicker, InputNumber,
  Affix, Anchor, FloatButton, Breadcrumb, Dropdown, Menu, Pagination
} from 'antd';
import {
  UserOutlined, HeartOutlined, StarOutlined, LikeOutlined, MessageOutlined,
  ShareAltOutlined, MoreOutlined, BellOutlined, SearchOutlined, FilterOutlined,
  DownloadOutlined, UploadOutlined, EditOutlined, DeleteOutlined, PlusOutlined,
  EyeOutlined, SettingOutlined, HomeOutlined, DashboardOutlined, TeamOutlined,
  ShoppingCartOutlined, DollarCircleOutlined, TrophyOutlined, RocketOutlined,
  BulbOutlined, ThunderboltOutlined, FireOutlined, CrownOutlined, GiftOutlined,
  ClockCircleOutlined, CalendarOutlined, MailOutlined, PhoneOutlined,
  EnvironmentOutlined, GlobalOutlined, LinkOutlined, CameraOutlined,
  VideoCameraOutlined, MinusOutlined, FileTextOutlined, FolderOutlined,
  CloudOutlined, SafetyOutlined, LockOutlined, UnlockOutlined, KeyOutlined,
  CommentOutlined
} from '@ant-design/icons';

const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;
const { Option } = Select;
const { Step } = Steps;
const { Panel } = Collapse;
const { TabPane } = Tabs;
const { CheckableTag } = Tag;

// Sample data
const tableData = [
  { key: '1', name: 'John Brown', age: 32, address: 'New York No. 1 Lake Park', tags: ['nice', 'developer'] },
  { key: '2', name: 'Jim Green', age: 42, address: 'London No. 1 Lake Park', tags: ['loser'] },
  { key: '3', name: 'Joe Black', age: 32, address: 'Sidney No. 1 Lake Park', tags: ['cool', 'teacher'] },
];

// Chart data
const lineData = [
  { year: '1991', value: 3 },
  { year: '1992', value: 4 },
  { year: '1993', value: 3.5 },
  { year: '1994', value: 5 },
  { year: '1995', value: 4.9 },
  { year: '1996', value: 6 },
  { year: '1997', value: 7 },
  { year: '1998', value: 9 },
  { year: '1999', value: 13 },
];

const columnData = [
  { type: 'Jan', sales: 38 },
  { type: 'Feb', sales: 52 },
  { type: 'Mar', sales: 61 },
  { type: 'Apr', sales: 145 },
  { type: 'May', sales: 48 },
  { type: 'Jun', sales: 38 },
  { type: 'Jul', sales: 208 },
  { type: 'Aug', sales: 155 },
  { type: 'Sep', sales: 65 },
  { type: 'Oct', sales: 85 },
  { type: 'Nov', sales: 125 },
  { type: 'Dec', sales: 88 },
];

const pieData = [
  { type: 'Desktop', value: 27 },
  { type: 'Mobile', value: 25 },
  { type: 'Tablet', value: 18 },
  { type: 'Smart TV', value: 15 },
  { type: 'Others', value: 10 },
  { type: 'Console', value: 5 },
];

const areaData = [
  { timePeriod: '2006 Q3', value: 1 },
  { timePeriod: '2006 Q4', value: 1.08 },
  { timePeriod: '2007 Q1', value: 1.17 },
  { timePeriod: '2007 Q2', value: 1.26 },
  { timePeriod: '2007 Q3', value: 1.34 },
  { timePeriod: '2007 Q4', value: 1.41 },
  { timePeriod: '2008 Q1', value: 1.52 },
  { timePeriod: '2008 Q2', value: 1.67 },
  { timePeriod: '2008 Q3', value: 1.84 },
  { timePeriod: '2008 Q4', value: 2.07 },
  { timePeriod: '2009 Q1', value: 2.39 },
];

const scatterData = [
  { x: 10, y: 10, size: 20 },
  { x: 20, y: 15, size: 25 },
  { x: 30, y: 25, size: 30 },
  { x: 40, y: 30, size: 35 },
  { x: 50, y: 35, size: 40 },
  { x: 60, y: 45, size: 45 },
  { x: 70, y: 50, size: 50 },
  { x: 80, y: 60, size: 55 },
];

const roseData = [
  { type: 'A', value: 4 },
  { type: 'B', value: 6 },
  { type: 'C', value: 10 },
  { type: 'D', value: 3 },
  { type: 'E', value: 7 },
  { type: 'F', value: 8 },
];

const funnelData = [
  { stage: 'Impression', number: 253000 },
  { stage: 'Click', number: 126500 },
  { stage: 'Visit', number: 100000 },
  { stage: 'Inquiry', number: 62000 },
  { stage: 'Order', number: 32000 },
];

const dualAxesData = [
  { time: '2019-03', value: 350, count: 800 },
  { time: '2019-04', value: 900, count: 600 },
  { time: '2019-05', value: 300, count: 400 },
  { time: '2019-06', value: 450, count: 380 },
  { time: '2019-07', value: 470, count: 220 },
];

const tableColumns = [
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Age', dataIndex: 'age', key: 'age' },
  { title: 'Address', dataIndex: 'address', key: 'address' },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (tags: string[]) => (
      <>
        {tags.map(tag => (
          <Tag color={tag.length > 5 ? 'geekblue' : 'green'} key={tag} className="rounded-full">
            {tag.toUpperCase()}
          </Tag>
        ))}
      </>
    ),
  },
];

export default function ComponentsPage() {
  const [modalVisible, setModalVisible] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [selectedTags, setSelectedTags] = useState(['nice']);

  const showNotification = () => {
    notification.open({
      message: 'Notification Title',
      description: 'This is the content of the notification.',
      icon: <BellOutlined style={{ color: '#108ee9' }} />,
    });
  };

  const showMessage = () => {
    message.success('This is a success message');
  };

  return (
    <Layout className="min-h-screen bg-gray-50">
      <Content className="p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Title level={1} className="text-4xl font-bold mb-4">Modern UI Components</Title>
            <Paragraph className="text-lg text-gray-600">
              A comprehensive collection of modern UI components built with Ant Design and Tailwind CSS
            </Paragraph>
          </div>

          {/* Navigation Components */}
          <Card className="mb-8" title="Navigation & Layout">
            <Row gutter={[24, 24]}>
              <Col span={24}>
                <Title level={4}>Breadcrumb</Title>
                <Breadcrumb>
                  <Breadcrumb.Item href="">
                    <HomeOutlined />
                  </Breadcrumb.Item>
                  <Breadcrumb.Item href="">
                    <UserOutlined />
                    <span>Application List</span>
                  </Breadcrumb.Item>
                  <Breadcrumb.Item>Application</Breadcrumb.Item>
                </Breadcrumb>
              </Col>
              
              <Col span={24}>
                <Title level={4}>Steps</Title>
                <Steps current={1}>
                  <Step title="Finished" description="This is a description." />
                  <Step title="In Progress" description="This is a description." />
                  <Step title="Waiting" description="This is a description." />
                </Steps>
              </Col>

              <Col span={24}>
                <Title level={4}>Pagination</Title>
                <Pagination defaultCurrent={1} total={50} />
              </Col>
            </Row>
          </Card>

          {/* Data Display Components */}
          <Card className="mb-8" title="Data Display">
            <Row gutter={[24, 24]}>
              {/* Avatar Group */}
              <Col xs={24} md={12} lg={8}>
                <Title level={4}>Avatar & Badges</Title>
                <Space wrap>
                  <Avatar size={64} icon={<UserOutlined />} />
                  <Avatar size={64} src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
                  <Badge count={5}>
                    <Avatar shape="square" size="large" />
                  </Badge>
                  <Badge dot>
                    <Avatar shape="square" size="large" />
                  </Badge>
                </Space>
              </Col>

              {/* Statistics */}
              <Col xs={24} md={12} lg={8}>
                <Title level={4}>Statistics</Title>
                <Row gutter={16}>
                  <Col span={12}>
                    <Statistic title="Active Users" value={112893} />
                  </Col>
                  <Col span={12}>
                    <Statistic title="Account Balance (CNY)" value={112893} precision={2} />
                  </Col>
                </Row>
              </Col>

              {/* Progress */}
              <Col xs={24} md={12} lg={8}>
                <Title level={4}>Progress</Title>
                <Progress percent={30} />
                <Progress percent={50} status="active" />
                <Progress percent={70} status="exception" />
                <Progress percent={100} />
                <Progress type="circle" percent={75} />
              </Col>

              {/* Tags */}
              <Col span={24}>
                <Title level={4}>Tags</Title>
                <Space wrap>
                  <Tag color="magenta" className="rounded-full">magenta</Tag>
                  <Tag color="red" className="rounded-full">red</Tag>
                  <Tag color="volcano" className="rounded-full">volcano</Tag>
                  <Tag color="orange" className="rounded-full">orange</Tag>
                  <Tag color="gold" className="rounded-full">gold</Tag>
                  <Tag color="lime" className="rounded-full">lime</Tag>
                  <Tag color="green" className="rounded-full">green</Tag>
                  <Tag color="cyan" className="rounded-full">cyan</Tag>
                  <Tag color="blue" className="rounded-full">blue</Tag>
                  <Tag color="geekblue" className="rounded-full">geekblue</Tag>
                  <Tag color="purple" className="rounded-full">purple</Tag>
                </Space>
                <Divider />
                <Space wrap>
                  {['nice', 'developer', 'cool', 'teacher'].map(tag => (
                    <CheckableTag
                      key={tag}
                      checked={selectedTags.indexOf(tag) > -1}
                      onChange={(checked) => {
                        const nextSelectedTags = checked
                          ? [...selectedTags, tag]
                          : selectedTags.filter(t => t !== tag);
                        setSelectedTags(nextSelectedTags);
                      }}
                      className="rounded-full"
                    >
                      {tag}
                    </CheckableTag>
                  ))}
                </Space>
              </Col>
            </Row>
          </Card>

          {/* Cards & Content */}
          <Card className="mb-8" title="Cards & Content Display">
            <Row gutter={[24, 24]}>
              {/* Modern Card Designs */}
              <Col xs={24} md={8}>
                <Card
                  hoverable
                  className="shadow-lg border-0 overflow-hidden"
                  cover={
                    <div className="h-48 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex items-center justify-center">
                      <RocketOutlined className="text-6xl text-white" />
                    </div>
                  }
                  actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" />,
                    <EyeOutlined key="view" />,
                  ]}
                >
                  <Card.Meta
                    avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=2" />}
                    title="Modern Card Design"
                    description="This is a modern card with gradient background and hover effects."
                  />
                </Card>
              </Col>

              <Col xs={24} md={8}>
                <Card
                  className="shadow-lg border-0"
                  bodyStyle={{ padding: 0 }}
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <Avatar size="large" className="bg-blue-500">
                        <TrophyOutlined />
                      </Avatar>
                      <div className="ml-4">
                        <Title level={4} className="mb-0">Achievement</Title>
                        <Text type="secondary">Level 5 Completed</Text>
                      </div>
                    </div>
                    <Progress percent={85} strokeColor="#52c41a" />
                    <div className="mt-4 flex justify-between">
                      <Text strong>2,350 XP</Text>
                      <Text type="secondary">Next: 2,500 XP</Text>
                    </div>
                  </div>
                </Card>
              </Col>

              <Col xs={24} md={8}>
                <Card className="shadow-lg border-0 bg-gradient-to-br from-blue-50 to-indigo-100">
                  <div className="text-center">
                    <CrownOutlined className="text-4xl text-yellow-500 mb-4" />
                    <Title level={3} className="mb-2">Premium Plan</Title>
                    <Title level={1} className="text-blue-600 mb-4">$29<span className="text-sm text-gray-500">/mo</span></Title>
                    <Button type="primary" size="large" className="w-full">
                      Upgrade Now
                    </Button>
                  </div>
                </Card>
              </Col>
            </Row>
          </Card>

          {/* Interactive Components */}
          <Card className="mb-8" title="Interactive Components">
            <Row gutter={[24, 24]}>
              <Col xs={24} md={12}>
                <Title level={4}>Buttons & Actions</Title>
                <Space wrap>
                  <Button type="primary" icon={<DownloadOutlined />}>Primary</Button>
                  <Button type="default" icon={<UploadOutlined />}>Default</Button>
                  <Button type="dashed" icon={<PlusOutlined />}>Dashed</Button>
                  <Button type="text" icon={<DeleteOutlined />}>Text</Button>
                  <Button type="link" icon={<LinkOutlined />}>Link</Button>
                  <Button danger icon={<DeleteOutlined />}>Danger</Button>
                  <Button type="primary" shape="circle" icon={<SearchOutlined />} />
                  <Button type="primary" shape="round" icon={<SearchOutlined />}>Search</Button>
                </Space>
              </Col>

              <Col xs={24} md={12}>
                <Title level={4}>Form Controls</Title>
                <Space direction="vertical" className="w-full">
                  <Input placeholder="Basic input" prefix={<UserOutlined />} />
                  <Input.Search placeholder="Search input" onSearch={() => {}} enterButton />
                  <Select defaultValue="option1" className="w-full">
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
                  </Select>
                  <Rate defaultValue={3} />
                  <Slider defaultValue={30} />
                </Space>
              </Col>

              <Col span={24}>
                <Title level={4}>Modal & Drawer</Title>
                <Space>
                  <Button type="primary" onClick={() => setModalVisible(true)}>
                    Show Modal
                  </Button>
                  <Button onClick={() => setDrawerVisible(true)}>
                    Show Drawer
                  </Button>
                  <Button onClick={showNotification}>
                    Show Notification
                  </Button>
                  <Button onClick={showMessage}>
                    Show Message
                  </Button>
                </Space>
              </Col>
            </Row>
          </Card>

          {/* Modern Charts & Visualizations */}
          <Card className="mb-8" title="Modern Charts & Data Visualizations">
            <Row gutter={[24, 24]}>
              {/* Line Chart Simulation */}
              <Col xs={24} lg={12}>
                <Card className="shadow-sm" title="Revenue Trend Analysis">
                  <div className="h-80 flex items-end justify-around p-4 bg-gradient-to-t from-blue-50">
                    {lineData.map((item, index) => (
                      <div key={item.year} className="flex flex-col items-center">
                        <div
                          className="bg-blue-500 rounded-t-md mb-2 transition-all hover:bg-blue-600"
                          style={{ height: `${item.value * 20}px`, width: '30px' }}
                        />
                        <Text className="text-xs">{item.year}</Text>
                        <Text className="text-xs text-gray-500">{item.value}k</Text>
                      </div>
                    ))}
                  </div>
                </Card>
              </Col>

              {/* Column Chart Simulation */}
              <Col xs={24} lg={12}>
                <Card className="shadow-sm" title="Monthly Sales Performance">
                  <div className="h-80 flex items-end justify-around p-4 bg-gradient-to-t from-green-50">
                    {columnData.map((item, index) => (
                      <div key={item.type} className="flex flex-col items-center">
                        <div
                          className="bg-green-500 rounded-t-md mb-2 transition-all hover:bg-green-600"
                          style={{ height: `${item.sales}px`, width: '24px' }}
                        />
                        <Text className="text-xs transform -rotate-45">{item.type}</Text>
                        <Text className="text-xs text-gray-500">{item.sales}</Text>
                      </div>
                    ))}
                  </div>
                </Card>
              </Col>

              {/* Pie Chart Simulation with Progress Rings */}
              <Col xs={24} lg={12}>
                <Card className="shadow-sm" title="Device Distribution">
                  <div className="p-6 flex flex-col items-center">
                    <div className="relative mb-6">
                      <Progress
                        type="circle"
                        percent={85}
                        size={120}
                        strokeColor={{
                          '0%': '#87d068',
                          '100%': '#108ee9',
                        }}
                        format={() => 'Total'}
                      />
                    </div>
                    <Space direction="vertical" className="w-full">
                      {pieData.map((item, index) => {
                        const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3'];
                        return (
                          <div key={item.type} className="flex justify-between items-center">
                            <div className="flex items-center">
                              <div
                                className="w-3 h-3 rounded-full mr-2"
                                style={{ backgroundColor: colors[index] }}
                              />
                              <Text>{item.type}</Text>
                            </div>
                            <Progress
                              percent={item.value * 3}
                              showInfo={false}
                              strokeColor={colors[index]}
                              size="small"
                              className="w-24"
                            />
                            <Text strong>{item.value}%</Text>
                          </div>
                        );
                      })}
                    </Space>
                  </div>
                </Card>
              </Col>

              {/* Area Chart Simulation */}
              <Col xs={24} lg={12}>
                <Card className="shadow-sm" title="Growth Over Time">
                  <div className="h-80 p-4 relative bg-gradient-to-br from-purple-50 to-indigo-50">
                    <div className="absolute inset-4">
                      <svg viewBox="0 0 400 200" className="w-full h-full">
                        <defs>
                          <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#722ed1" stopOpacity="0.8" />
                            <stop offset="100%" stopColor="#722ed1" stopOpacity="0.1" />
                          </linearGradient>
                        </defs>
                        <path
                          d="M 0 180 L 40 160 L 80 150 L 120 130 L 160 120 L 200 100 L 240 80 L 280 60 L 320 40 L 360 20 L 400 180 Z"
                          fill="url(#areaGradient)"
                        />
                        <path
                          d="M 0 180 L 40 160 L 80 150 L 120 130 L 160 120 L 200 100 L 240 80 L 280 60 L 320 40 L 360 20"
                          stroke="#722ed1"
                          strokeWidth="3"
                          fill="none"
                        />
                      </svg>
                    </div>
                    <div className="absolute bottom-2 left-4 right-4 flex justify-between text-xs text-gray-500">
                      {areaData.slice(0, 6).map((item, index) => (
                        <span key={index}>{item.timePeriod.split(' ')[0]}</span>
                      ))}
                    </div>
                  </div>
                </Card>
              </Col>

              {/* Sales Trend Variation */}
              <Col xs={24} lg={12}>
                <Card className="shadow-sm" title="Sales Trend Analysis">
                  <div className="h-80 p-4 relative bg-gradient-to-br from-emerald-50 to-teal-50">
                    <div className="absolute inset-4">
                      <svg viewBox="0 0 400 200" className="w-full h-full">
                        <defs>
                          <linearGradient id="salesGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#10b981" stopOpacity="0.7" />
                            <stop offset="100%" stopColor="#10b981" stopOpacity="0.1" />
                          </linearGradient>
                        </defs>
                        {/* Area fill */}
                        <path
                          d="M 0 160 L 50 140 L 100 100 L 150 90 L 200 70 L 250 85 L 300 60 L 350 45 L 400 30 L 400 200 L 0 200 Z"
                          fill="url(#salesGradient)"
                        />
                        {/* Main line */}
                        <path
                          d="M 0 160 L 50 140 L 100 100 L 150 90 L 200 70 L 250 85 L 300 60 L 350 45 L 400 30"
                          stroke="#10b981"
                          strokeWidth="3"
                          fill="none"
                          strokeLinecap="round"
                        />
                        {/* Data points */}
                        <circle cx="0" cy="160" r="4" fill="#10b981" />
                        <circle cx="50" cy="140" r="4" fill="#10b981" />
                        <circle cx="100" cy="100" r="4" fill="#10b981" />
                        <circle cx="150" cy="90" r="4" fill="#10b981" />
                        <circle cx="200" cy="70" r="4" fill="#10b981" />
                        <circle cx="250" cy="85" r="4" fill="#10b981" />
                        <circle cx="300" cy="60" r="4" fill="#10b981" />
                        <circle cx="350" cy="45" r="4" fill="#10b981" />
                        <circle cx="400" cy="30" r="4" fill="#10b981" />
                      </svg>
                    </div>
                    <div className="absolute bottom-2 left-4 right-4 flex justify-between text-xs text-gray-500">
                      <span>Jan</span>
                      <span>Feb</span>
                      <span>Mar</span>
                      <span>Apr</span>
                      <span>May</span>
                      <span>Jun</span>
                      <span>Jul</span>
                      <span>Aug</span>
                      <span>Sep</span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="bg-white rounded-lg p-2 shadow-sm">
                        <Text className="text-emerald-600 font-semibold">+23.5%</Text>
                      </div>
                    </div>
                  </div>
                </Card>
              </Col>

              {/* Multi-line Performance Chart */}
              <Col xs={24} lg={12}>
                <Card className="shadow-sm" title="Performance Comparison">
                  <div className="h-80 p-4 relative bg-gradient-to-br from-blue-50 to-cyan-50">
                    {/* Y-axis labels */}
                    <div className="absolute left-1 top-8 bottom-8 flex flex-col justify-between text-xs text-gray-500">
                      <span>$50k</span>
                      <span>$40k</span>
                      <span>$30k</span>
                      <span>$20k</span>
                      <span>$10k</span>
                      <span>$0</span>
                    </div>
                    
                    <div className="absolute inset-4 ml-8">
                      <svg viewBox="0 0 400 200" className="w-full h-full">
                        <defs>
                          <linearGradient id="blueAreaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#8252E9" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#8252E9" stopOpacity="0.05" />
                          </linearGradient>
                          <linearGradient id="orangeAreaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#487FFF" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#487FFF" stopOpacity="0.05" />
                          </linearGradient>
                        </defs>
                        
                        {/* Grid lines */}
                        <g stroke="#e5e7eb" strokeWidth="1" opacity="0.5">
                          <line x1="0" y1="40" x2="400" y2="40" />
                          <line x1="0" y1="80" x2="400" y2="80" />
                          <line x1="0" y1="120" x2="400" y2="120" />
                          <line x1="0" y1="160" x2="400" y2="160" />
                        </g>
                        
                        {/* Blue area (Revenue) */}
                        <path
                          d="M 0 160 Q 22 150 44 140 Q 66 130 89 120 Q 111 115 133 110 Q 155 120 178 130 Q 200 115 222 100 Q 244 95 267 90 Q 289 100 311 110 Q 333 95 356 80 Q 378 70 400 50 L 400 200 L 0 200 Z"
                          fill="url(#blueAreaGradient)"
                        />
                        
                        {/* Orange area (Profit) */}
                        <path
                          d="M 0 180 Q 22 175 44 170 Q 66 160 89 150 Q 111 147 133 145 Q 155 152 178 160 Q 200 147 222 135 Q 244 130 267 125 Q 289 132 311 140 Q 333 127 356 115 Q 378 107 400 120 L 400 200 L 0 200 Z"
                          fill="url(#orangeAreaGradient)"
                        />
                        
                        {/* Blue line (Revenue) */}
                        <path
                          d="M 0 160 Q 22 150 44 140 Q 66 130 89 120 Q 111 115 133 110 Q 155 120 178 130 Q 200 115 222 100 Q 244 95 267 90 Q 289 100 311 110 Q 333 95 356 80 Q 378 70 400 50"
                          stroke="#8252E9"
                          strokeWidth="3"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        
                        {/* Orange line (Profit) */}
                        <path
                          d="M 0 180 Q 22 175 44 170 Q 66 160 89 150 Q 111 147 133 145 Q 155 152 178 160 Q 200 147 222 135 Q 244 130 267 125 Q 289 132 311 140 Q 333 127 356 115 Q 378 107 400 120"
                          stroke="#487FFF"
                          strokeWidth="3"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeDasharray="5,5"
                        />
                        
                        {/* Interactive invisible data points for Revenue - hover areas only */}
                        <g className="revenue-points">
                          <circle 
                            cx="0" cy="160" r="8" fill="transparent" 
                            className="cursor-pointer" 
                            data-value="$10k" data-month="Jan"
                          />
                          <circle 
                            cx="44" cy="140" r="8" fill="transparent" 
                            className="cursor-pointer" 
                            data-value="$15k" data-month="Feb"
                          />
                          <circle 
                            cx="89" cy="120" r="8" fill="transparent" 
                            className="cursor-pointer" 
                            data-value="$20k" data-month="Mar"
                          />
                          <circle 
                            cx="133" cy="110" r="8" fill="transparent" 
                            className="cursor-pointer" 
                            data-value="$22k" data-month="Apr"
                          />
                          <circle 
                            cx="178" cy="130" r="8" fill="transparent" 
                            className="cursor-pointer" 
                            data-value="$17k" data-month="May"
                          />
                          <circle 
                            cx="222" cy="100" r="8" fill="transparent" 
                            className="cursor-pointer" 
                            data-value="$25k" data-month="Jun"
                          />
                          <circle 
                            cx="267" cy="90" r="8" fill="transparent" 
                            className="cursor-pointer" 
                            data-value="$27k" data-month="Jul"
                          />
                          <circle 
                            cx="311" cy="110" r="8" fill="transparent" 
                            className="cursor-pointer" 
                            data-value="$22k" data-month="Aug"
                          />
                          <circle 
                            cx="356" cy="80" r="8" fill="transparent" 
                            className="cursor-pointer" 
                            data-value="$30k" data-month="Sep"
                          />
                          <circle 
                            cx="400" cy="50" r="8" fill="transparent" 
                            className="cursor-pointer" 
                            data-value="$25k" data-month="Oct"
                          />
                        </g>
                        
                        {/* Interactive invisible data points for Profit - hover areas only */}
                        <g className="profit-points">
                          <circle 
                            cx="0" cy="180" r="8" fill="transparent" 
                            className="cursor-pointer" 
                            data-value="$5k" data-month="Jan"
                          />
                          <circle 
                            cx="44" cy="170" r="8" fill="transparent" 
                            className="cursor-pointer" 
                            data-value="$7k" data-month="Feb"
                          />
                          <circle 
                            cx="89" cy="150" r="8" fill="transparent" 
                            className="cursor-pointer" 
                            data-value="$12k" data-month="Mar"
                          />
                          <circle 
                            cx="133" cy="145" r="8" fill="transparent" 
                            className="cursor-pointer" 
                            data-value="$13k" data-month="Apr"
                          />
                          <circle 
                            cx="178" cy="160" r="8" fill="transparent" 
                            className="cursor-pointer" 
                            data-value="$10k" data-month="May"
                          />
                          <circle 
                            cx="222" cy="135" r="8" fill="transparent" 
                            className="cursor-pointer" 
                            data-value="$16k" data-month="Jun"
                          />
                          <circle 
                            cx="267" cy="125" r="8" fill="transparent" 
                            className="cursor-pointer" 
                            data-value="$18k" data-month="Jul"
                          />
                          <circle 
                            cx="311" cy="140" r="8" fill="transparent" 
                            className="cursor-pointer" 
                            data-value="$15k" data-month="Aug"
                          />
                          <circle 
                            cx="356" cy="115" r="8" fill="transparent" 
                            className="cursor-pointer" 
                            data-value="$21k" data-month="Sep"
                          />
                          <circle 
                            cx="400" cy="120" r="8" fill="transparent" 
                            className="cursor-pointer" 
                            data-value="$20k" data-month="Oct"
                          />
                        </g>
                      </svg>
                    </div>
                    
                    {/* Tooltip */}
                    <div id="chart-tooltip" className="absolute hidden bg-gray-900 text-white px-3 py-2 rounded-lg text-sm pointer-events-none z-10">
                      <div id="tooltip-content"></div>
                    </div>
                    
                    {/* Legend */}
                    <div className="absolute top-4 right-4">
                      <div className="bg-white rounded-lg p-3 shadow-sm">
                        <div className="flex items-center mb-2">
                          <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: '#8252E9' }}></div>
                          <Text className="text-sm">Revenue</Text>
                        </div>
                        <div className="flex items-center">
                          <div className="w-3 h-1 rounded-full mr-2" style={{ backgroundColor: '#487FFF' }}></div>
                          <Text className="text-sm">Profit</Text>
                        </div>
                      </div>
                    </div>
                    
                    {/* X-axis labels (months) */}
                    <div className="absolute bottom-2 left-12 right-4 flex justify-between text-xs text-gray-500">
                      <span>Jan</span>
                      <span>Feb</span>
                      <span>Mar</span>
                      <span>Apr</span>
                      <span>May</span>
                      <span>Jun</span>
                      <span>Jul</span>
                      <span>Aug</span>
                      <span>Sep</span>
                      <span>Oct</span>
                    </div>
                  </div>
                  
                  <script dangerouslySetInnerHTML={{
                    __html: `
                      // Add hover functionality
                      document.addEventListener('DOMContentLoaded', function() {
                        const tooltip = document.getElementById('chart-tooltip');
                        const tooltipContent = document.getElementById('tooltip-content');
                        const circles = document.querySelectorAll('circle[data-value]');
                        
                        circles.forEach(circle => {
                          circle.addEventListener('mouseenter', function(e) {
                            const value = e.target.getAttribute('data-value');
                            const month = e.target.getAttribute('data-month');
                            const isRevenue = e.target.closest('.revenue-points');
                            const type = isRevenue ? 'Revenue' : 'Profit';
                            
                            tooltipContent.innerHTML = \`<strong>\${month}</strong><br/>\${type}: \${value}\`;
                            tooltip.classList.remove('hidden');
                            
                            const rect = e.target.getBoundingClientRect();
                            const containerRect = e.target.closest('.relative').getBoundingClientRect();
                            tooltip.style.left = (rect.left - containerRect.left + rect.width/2 - tooltip.offsetWidth/2) + 'px';
                            tooltip.style.top = (rect.top - containerRect.top - tooltip.offsetHeight - 10) + 'px';
                          });
                          
                          circle.addEventListener('mouseleave', function() {
                            tooltip.classList.add('hidden');
                          });
                        });
                      });
                    `
                  }} />
                </Card>
              </Col>

              {/* Performance Dashboard */}
              <Col xs={24} lg={12}>
                <Card className="shadow-sm" title="Performance Metrics">
                  <div className="p-6">
                    <Space direction="vertical" className="w-full">
                      <div>
                        <div className="flex justify-between mb-1">
                          <Text>CPU Usage</Text>
                          <Text>75%</Text>
                        </div>
                        <Progress percent={75} strokeColor="#52c41a" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <Text>Memory Usage</Text>
                          <Text>60%</Text>
                        </div>
                        <Progress percent={60} strokeColor="#1890ff" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <Text>Storage</Text>
                          <Text>85%</Text>
                        </div>
                        <Progress percent={85} strokeColor="#fa8c16" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <Text>Network</Text>
                          <Text>45%</Text>
                        </div>
                        <Progress percent={45} strokeColor="#722ed1" />
                      </div>
                    </Space>
                  </div>
                </Card>
              </Col>

              {/* Real-time Statistics */}
              <Col xs={24} lg={12}>
                <Card className="shadow-sm" title="Real-time Statistics">
                  <div className="p-4">
                    <Row gutter={[16, 16]}>
                      <Col span={12}>
                        <Statistic
                          title="Total Sales"
                          value={112893}
                          precision={0}
                          valueStyle={{ color: '#3f8600' }}
                          prefix={<DollarCircleOutlined />}
                        />
                      </Col>
                      <Col span={12}>
                        <Statistic
                          title="Active Users"
                          value={28563}
                          precision={0}
                          valueStyle={{ color: '#1890ff' }}
                          prefix={<UserOutlined />}
                        />
                      </Col>
                      <Col span={12}>
                        <Statistic
                          title="Orders"
                          value={9568}
                          precision={0}
                          valueStyle={{ color: '#722ed1' }}
                          prefix={<ShoppingCartOutlined />}
                        />
                      </Col>
                      <Col span={12}>
                        <Statistic
                          title="Revenue Growth"
                          value={25.6}
                          precision={1}
                          valueStyle={{ color: '#fa8c16' }}
                          prefix={<TrophyOutlined />}
                          suffix="%"
                        />
                      </Col>
                    </Row>
                    <Divider />
                    <div className="text-center">
                      <Progress
                        type="circle"
                        percent={75}
                        width={100}
                        strokeColor={{
                          '0%': '#108ee9',
                          '100%': '#87d068',
                        }}
                        format={(percent) => `${percent}% Score`}
                      />
                    </div>
                  </div>
                </Card>
              </Col>

              {/* Modern Data Visualization Cards */}
              <Col span={24}>
                <Row gutter={[16, 16]}>
                  <Col xs={24} sm={6}>
                    <Card className="text-center bg-gradient-to-r from-blue-500 to-blue-600 text-white border-0">
                      <Statistic
                        title={<span className="text-blue-100">Revenue</span>}
                        value={450000}
                        prefix="$"
                        valueStyle={{ color: 'white', fontSize: '24px' }}
                      />
                      <div className="mt-2">
                        <Text className="text-blue-200">↗ 12% from last month</Text>
                      </div>
                    </Card>
                  </Col>
                  <Col xs={24} sm={6}>
                    <Card className="text-center bg-gradient-to-r from-green-500 to-green-600 text-white border-0">
                      <Statistic
                        title={<span className="text-green-100">Orders</span>}
                        value={2680}
                        valueStyle={{ color: 'white', fontSize: '24px' }}
                      />
                      <div className="mt-2">
                        <Text className="text-green-200">↗ 8% from last month</Text>
                      </div>
                    </Card>
                  </Col>
                  <Col xs={24} sm={6}>
                    <Card className="text-center bg-gradient-to-r from-purple-500 to-purple-600 text-white border-0">
                      <Statistic
                        title={<span className="text-purple-100">Customers</span>}
                        value={15240}
                        valueStyle={{ color: 'white', fontSize: '24px' }}
                      />
                      <div className="mt-2">
                        <Text className="text-purple-200">↗ 15% from last month</Text>
                      </div>
                    </Card>
                  </Col>
                  <Col xs={24} sm={6}>
                    <Card className="text-center bg-gradient-to-r from-orange-500 to-orange-600 text-white border-0">
                      <Statistic
                        title={<span className="text-orange-100">Conversion</span>}
                        value={3.2}
                        suffix="%"
                        valueStyle={{ color: 'white', fontSize: '24px' }}
                      />
                      <div className="mt-2">
                        <Text className="text-orange-200">↗ 2% from last month</Text>
                      </div>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card>

          {/* Data Tables */}
          <Card className="mb-8" title="Data Tables">
            <Table
              dataSource={tableData}
              columns={tableColumns}
              pagination={{ pageSize: 5 }}
              className="shadow-sm"
            />
          </Card>

          {/* Feedback Components */}
          <Card className="mb-8" title="Feedback & Alerts">
            <Space direction="vertical" className="w-full">
              <Alert message="Success Text" type="success" />
              <Alert message="Info Text" type="info" />
              <Alert message="Warning Text" type="warning" />
              <Alert message="Error Text" type="error" />
              <Alert
                message="Success Tips"
                description="Detailed description and advice about successful copywriting."
                type="success"
                showIcon
              />
            </Space>
          </Card>

          {/* Timeline & Lists */}
          <Card className="mb-8" title="Timeline & Lists">
            <Row gutter={[24, 24]}>
              <Col xs={24} md={12}>
                <Title level={4}>Timeline</Title>
                <Timeline>
                  <Timeline.Item color="green">
                    <p>Create a services site 2015-09-01</p>
                  </Timeline.Item>
                  <Timeline.Item color="green">
                    <p>Solve initial network problems 2015-09-01</p>
                  </Timeline.Item>
                  <Timeline.Item color="red">
                    <p>Technical testing 2015-09-01</p>
                  </Timeline.Item>
                  <Timeline.Item>
                    <p>Network problems being solved 2015-09-01</p>
                  </Timeline.Item>
                </Timeline>
              </Col>

              <Col xs={24} md={12}>
                <Title level={4}>List</Title>
                <List
                  itemLayout="horizontal"
                  dataSource={[
                    { title: 'Ant Design Title 1', description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.' },
                    { title: 'Ant Design Title 2', description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.' },
                    { title: 'Ant Design Title 3', description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.' },
                  ]}
                  renderItem={(item, index) => (
                    <List.Item
                      actions={[<Button key="list-loadmore-edit">edit</Button>, <Button key="list-loadmore-more">more</Button>]}
                    >
                      <List.Item.Meta
                        avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
                        title={item.title}
                        description={item.description}
                      />
                    </List.Item>
                  )}
                />
              </Col>
            </Row>
          </Card>

          {/* Modern Icon Grid */}
          <Card className="mb-8" title="Modern Icons">
            <Row gutter={[16, 16]}>
              {[
                { icon: <HomeOutlined />, name: 'Home' },
                { icon: <DashboardOutlined />, name: 'Dashboard' },
                { icon: <TeamOutlined />, name: 'Team' },
                { icon: <ShoppingCartOutlined />, name: 'Shopping' },
                { icon: <DollarCircleOutlined />, name: 'Finance' },
                { icon: <TrophyOutlined />, name: 'Trophy' },
                { icon: <RocketOutlined />, name: 'Rocket' },
                { icon: <BulbOutlined />, name: 'Idea' },
                { icon: <ThunderboltOutlined />, name: 'Power' },
                { icon: <FireOutlined />, name: 'Fire' },
                { icon: <CrownOutlined />, name: 'Crown' },
                { icon: <GiftOutlined />, name: 'Gift' },
                { icon: <ClockCircleOutlined />, name: 'Time' },
                { icon: <CalendarOutlined />, name: 'Calendar' },
                { icon: <MailOutlined />, name: 'Mail' },
                { icon: <PhoneOutlined />, name: 'Phone' },
                { icon: <EnvironmentOutlined />, name: 'Location' },
                { icon: <GlobalOutlined />, name: 'Global' },
                { icon: <CameraOutlined />, name: 'Camera' },
                { icon: <SafetyOutlined />, name: 'Security' },
              ].map((item, index) => (
                <Col xs={6} sm={4} md={3} lg={2} key={index}>
                  <div className="text-center p-4 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">
                    <div className="text-2xl text-blue-600 mb-2">{item.icon}</div>
                    <Text className="text-xs">{item.name}</Text>
                  </div>
                </Col>
              ))}
            </Row>
          </Card>

          {/* Modal */}
          <Modal
            title="Basic Modal"
            open={modalVisible}
            onOk={() => setModalVisible(false)}
            onCancel={() => setModalVisible(false)}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>

          {/* Drawer */}
          <Drawer
            title="Basic Drawer"
            placement="right"
            onClose={() => setDrawerVisible(false)}
            open={drawerVisible}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Drawer>

          {/* Floating Action Button */}
          <FloatButton.Group
            trigger="hover"
            type="primary"
            style={{ right: 24 }}
            icon={<PlusOutlined />}
          >
            <FloatButton />
            <FloatButton icon={<CommentOutlined />} />
          </FloatButton.Group>
        </div>
      </Content>
    </Layout>
  );
}