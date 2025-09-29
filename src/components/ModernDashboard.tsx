'use client';

import React, { useState } from 'react';
import {
  Layout, Menu, Avatar, Dropdown, Badge, Input, Button, Card, Row, Col,
  Typography, Space, Tag, Progress, List, Calendar, Timeline, Statistic,
  Table, Tabs, Segmented, Switch, Tooltip, FloatButton, Drawer
} from 'antd';
import {
  MenuFoldOutlined, MenuUnfoldOutlined, BellOutlined, SearchOutlined,
  UserOutlined, SettingOutlined, LogoutOutlined, HomeOutlined,
  DashboardOutlined, TeamOutlined, ShoppingCartOutlined, BarChartOutlined,
  FileTextOutlined, MailOutlined, CalendarOutlined, PlusOutlined,
  TrophyOutlined, RocketOutlined, BulbOutlined, ThunderboltOutlined,
  EyeOutlined, HeartOutlined, MessageOutlined, ShareAltOutlined,
  MoreOutlined, FilterOutlined, DownloadOutlined, EditOutlined
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;
const { Title, Text, Paragraph } = Typography;
const { TabPane } = Tabs;

// Sample data
const recentActivities = [
  { id: 1, user: 'John Doe', action: 'created a new project', time: '2 minutes ago', avatar: 'https://api.dicebear.com/7.x/miniavs/svg?seed=john' },
  { id: 2, user: 'Sarah Wilson', action: 'completed task #1234', time: '15 minutes ago', avatar: 'https://api.dicebear.com/7.x/miniavs/svg?seed=sarah' },
  { id: 3, user: 'Mike Chen', action: 'uploaded new designs', time: '1 hour ago', avatar: 'https://api.dicebear.com/7.x/miniavs/svg?seed=mike' },
  { id: 4, user: 'Lisa Wang', action: 'started code review', time: '2 hours ago', avatar: 'https://api.dicebear.com/7.x/miniavs/svg?seed=lisa' },
];

const projectStats = [
  { title: 'Active Projects', value: 24, change: '+12%', trend: 'up' },
  { title: 'Completed Tasks', value: 156, change: '+8%', trend: 'up' },
  { title: 'Team Members', value: 32, change: '+2%', trend: 'up' },
  { title: 'This Month Revenue', value: '$12,456', change: '+15%', trend: 'up' },
];

const taskData = [
  { key: '1', task: 'Design new landing page', assignee: 'Sarah Wilson', status: 'In Progress', priority: 'High', dueDate: '2024-01-15' },
  { key: '2', task: 'Implement user authentication', assignee: 'Mike Chen', status: 'Review', priority: 'Medium', dueDate: '2024-01-18' },
  { key: '3', task: 'Fix responsive issues', assignee: 'John Doe', status: 'Testing', priority: 'Low', dueDate: '2024-01-20' },
  { key: '4', task: 'Update documentation', assignee: 'Lisa Wang', status: 'Todo', priority: 'Medium', dueDate: '2024-01-22' },
];

const ModernDashboard: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedMetric, setSelectedMetric] = useState('overview');

  const userMenu = (
    <Menu>
      <Menu.Item key="profile" icon={<UserOutlined />}>
        Profile
      </Menu.Item>
      <Menu.Item key="settings" icon={<SettingOutlined />}>
        Settings
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="logout" icon={<LogoutOutlined />}>
        Logout
      </Menu.Item>
    </Menu>
  );

  const taskColumns = [
    {
      title: 'Task',
      dataIndex: 'task',
      key: 'task',
      render: (text: string) => <Text strong>{text}</Text>,
    },
    {
      title: 'Assignee',
      dataIndex: 'assignee',
      key: 'assignee',
      render: (name: string) => (
        <Space>
          <Avatar size="small" src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${name.split(' ')[0].toLowerCase()}`} />
          {name}
        </Space>
      ),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => {
        const color = {
          'Todo': 'default',
          'In Progress': 'processing',
          'Review': 'warning',
          'Testing': 'success',
          'Done': 'success'
        }[status] || 'default';
        return <Tag color={color}>{status}</Tag>;
      },
    },
    {
      title: 'Priority',
      dataIndex: 'priority',
      key: 'priority',
      render: (priority: string) => {
        const color = {
          'High': 'red',
          'Medium': 'orange',
          'Low': 'green'
        }[priority] || 'default';
        return <Tag color={color}>{priority}</Tag>;
      },
    },
    {
      title: 'Due Date',
      dataIndex: 'dueDate',
      key: 'dueDate',
    },
  ];

  return (
    <Layout className="min-h-screen">
      {/* Sidebar */}
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        className="bg-white shadow-lg"
        width={280}
      >
        <div className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Text className="text-white font-bold">A</Text>
            </div>
            {!collapsed && <Text className="text-lg font-bold">AtradeZone</Text>}
          </div>
        </div>
        
        <Menu
          mode="inline"
          defaultSelectedKeys={['dashboard']}
          className="border-none"
          items={[
            { key: 'dashboard', icon: <DashboardOutlined />, label: 'Dashboard' },
            { key: 'projects', icon: <HomeOutlined />, label: 'Projects' },
            { key: 'team', icon: <TeamOutlined />, label: 'Team' },
            { key: 'analytics', icon: <BarChartOutlined />, label: 'Analytics' },
            { key: 'tasks', icon: <FileTextOutlined />, label: 'Tasks' },
            { key: 'messages', icon: <MailOutlined />, label: 'Messages' },
            { key: 'calendar', icon: <CalendarOutlined />, label: 'Calendar' },
            { key: 'settings', icon: <SettingOutlined />, label: 'Settings' },
          ]}
        />
      </Sider>

      <Layout>
        {/* Header */}
        <Header className="bg-white shadow-sm px-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              className="text-lg"
            />
            <Title level={4} className="mb-0">Dashboard</Title>
          </div>

          <div className="flex items-center gap-4">
            <Input
              placeholder="Search anything..."
              prefix={<SearchOutlined />}
              className="w-80"
              allowClear
            />
            
            <Badge count={12} size="small">
              <Button type="text" icon={<BellOutlined />} size="large" />
            </Badge>
            
            <Dropdown overlay={userMenu} placement="bottomRight">
              <div className="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-gray-50">
                <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=admin" />
                <div className="text-left">
                  <Text strong className="block">John Admin</Text>
                  <Text type="secondary" className="text-xs">Administrator</Text>
                </div>
              </div>
            </Dropdown>
          </div>
        </Header>

        {/* Main Content */}
        <Content className="p-6 bg-gray-50">
          {/* Metrics Overview */}
          <Row gutter={[24, 24]} className="mb-6">
            {projectStats.map((stat, index) => (
              <Col xs={24} sm={12} lg={6} key={index}>
                <Card className="shadow-sm border-0 hover:shadow-md transition-shadow">
                  <Statistic
                    title={stat.title}
                    value={stat.value}
                    suffix={stat.change}
                    valueStyle={{ color: stat.trend === 'up' ? '#3f8600' : '#cf1322' }}
                  />
                  <Progress 
                    percent={Math.floor(Math.random() * 100)} 
                    showInfo={false} 
                    strokeColor="#52c41a"
                    className="mt-2"
                  />
                </Card>
              </Col>
            ))}
          </Row>

          <Row gutter={[24, 24]}>
            {/* Main Dashboard Content */}
            <Col xs={24} xl={16}>
              {/* Chart/Analytics Section */}
              <Card className="mb-6 shadow-sm border-0" title="Analytics Overview">
                <Segmented
                  options={[
                    { label: 'Overview', value: 'overview' },
                    { label: 'Revenue', value: 'revenue' },
                    { label: 'Users', value: 'users' },
                    { label: 'Growth', value: 'growth' },
                  ]}
                  value={selectedMetric}
                  onChange={setSelectedMetric}
                  className="mb-4"
                />
                
                {/* Placeholder for chart - you can integrate actual chart library */}
                <div className="h-64 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <BarChartOutlined className="text-4xl text-blue-500 mb-2" />
                    <Text type="secondary">Chart visualization would go here</Text>
                  </div>
                </div>
              </Card>

              {/* Tasks Table */}
              <Card className="shadow-sm border-0" title="Recent Tasks" extra={
                <Space>
                  <Button icon={<FilterOutlined />}>Filter</Button>
                  <Button icon={<DownloadOutlined />}>Export</Button>
                  <Button type="primary" icon={<PlusOutlined />}>Add Task</Button>
                </Space>
              }>
                <Table 
                  dataSource={taskData} 
                  columns={taskColumns} 
                  pagination={{ pageSize: 5 }}
                  size="small"
                />
              </Card>
            </Col>

            {/* Sidebar Content */}
            <Col xs={24} xl={8}>
              {/* Recent Activity */}
              <Card className="mb-6 shadow-sm border-0" title="Recent Activity">
                <List
                  dataSource={recentActivities}
                  renderItem={(item) => (
                    <List.Item className="px-0">
                      <List.Item.Meta
                        avatar={<Avatar src={item.avatar} />}
                        title={<Text strong>{item.user}</Text>}
                        description={
                          <div>
                            <Text type="secondary">{item.action}</Text>
                            <br />
                            <Text type="secondary" className="text-xs">{item.time}</Text>
                          </div>
                        }
                      />
                    </List.Item>
                  )}
                />
              </Card>

              {/* Team Performance */}
              <Card className="mb-6 shadow-sm border-0" title="Team Performance">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=team1" />
                      <div>
                        <Text strong>Design Team</Text>
                        <Text type="secondary" className="block text-xs">8 members</Text>
                      </div>
                    </div>
                    <Progress type="circle" percent={92} width={40} />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=team2" />
                      <div>
                        <Text strong>Dev Team</Text>
                        <Text type="secondary" className="block text-xs">12 members</Text>
                      </div>
                    </div>
                    <Progress type="circle" percent={87} width={40} />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=team3" />
                      <div>
                        <Text strong>QA Team</Text>
                        <Text type="secondary" className="block text-xs">5 members</Text>
                      </div>
                    </div>
                    <Progress type="circle" percent={78} width={40} />
                  </div>
                </div>
              </Card>

              {/* Quick Actions */}
              <Card className="shadow-sm border-0" title="Quick Actions">
                <Space direction="vertical" className="w-full">
                  <Button type="primary" block icon={<PlusOutlined />}>
                    Create New Project
                  </Button>
                  <Button block icon={<TeamOutlined />}>
                    Invite Team Member
                  </Button>
                  <Button block icon={<FileTextOutlined />}>
                    Generate Report
                  </Button>
                  <Button block icon={<SettingOutlined />}>
                    System Settings
                  </Button>
                </Space>
              </Card>
            </Col>
          </Row>
        </Content>
      </Layout>

      {/* Floating Action Button */}
      <FloatButton.Group
        trigger="hover"
        type="primary"
        style={{ right: 24 }}
        icon={<PlusOutlined />}
      >
        <FloatButton icon={<EditOutlined />} tooltip="Quick Edit" />
        <FloatButton icon={<MessageOutlined />} tooltip="Messages" />
        <FloatButton icon={<SettingOutlined />} tooltip="Settings" />
      </FloatButton.Group>
    </Layout>
  );
};

export default ModernDashboard;