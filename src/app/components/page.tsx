'use client';

import React, { useState } from 'react';
import {
  Layout, Typography, Card, Button, Space, Row, Col, Avatar, Badge, Tag, Progress,
  Statistic, Timeline, Steps, Tabs, Collapse, Alert, Notification, message,
  Switch, Slider, Rate, Upload, Input, Select, DatePicker, Form, Checkbox,
  Radio, Divider, Tooltip, Popover, Modal, Drawer, Carousel, Table, List,
  Transfer, Tree, Cascader, AutoComplete, Mentions, TimePicker, InputNumber,
  Affix, Anchor, BackTop, Breadcrumb, Dropdown, Menu, Pagination, FloatButton
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
  VideoCameraOutlined, MusicOutlined, FileTextOutlined, FolderOutlined,
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
          <Tag color={tag.length > 5 ? 'geekblue' : 'green'} key={tag}>
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
    Notification.open({
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
                  <Tag color="magenta">magenta</Tag>
                  <Tag color="red">red</Tag>
                  <Tag color="volcano">volcano</Tag>
                  <Tag color="orange">orange</Tag>
                  <Tag color="gold">gold</Tag>
                  <Tag color="lime">lime</Tag>
                  <Tag color="green">green</Tag>
                  <Tag color="cyan">cyan</Tag>
                  <Tag color="blue">blue</Tag>
                  <Tag color="geekblue">geekblue</Tag>
                  <Tag color="purple">purple</Tag>
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