import React from 'react';
import { Layout, Menu } from 'antd';
import {
  DashboardOutlined,
  UserOutlined,
  ShoppingCartOutlined,
  BarChartOutlined,
  SettingOutlined,
  FileTextOutlined,
  TeamOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';

const { Sider } = Layout;

interface SidebarProps {
  collapsed: boolean;
  onCollapse: (collapsed: boolean) => void;
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed, onCollapse, className }) => {
  const menuItems: MenuProps['items'] = [
    {
      key: 'dashboard',
      icon: <DashboardOutlined />,
      label: 'Dashboard',
    },
    {
      key: 'users',
      icon: <UserOutlined />,
      label: 'Users',
      children: [
        {
          key: 'user-list',
          label: 'User List',
        },
        {
          key: 'user-profile',
          label: 'User Profile',
        },
      ],
    },
    {
      key: 'products',
      icon: <ShoppingCartOutlined />,
      label: 'Products',
      children: [
        {
          key: 'product-list',
          label: 'Product List',
        },
        {
          key: 'add-product',
          label: 'Add Product',
        },
        {
          key: 'categories',
          label: 'Categories',
        },
      ],
    },
    {
      key: 'analytics',
      icon: <BarChartOutlined />,
      label: 'Analytics',
      children: [
        {
          key: 'sales-report',
          label: 'Sales Report',
        },
        {
          key: 'traffic-report',
          label: 'Traffic Report',
        },
      ],
    },
    {
      key: 'team',
      icon: <TeamOutlined />,
      label: 'Team',
    },
    {
      key: 'documents',
      icon: <FileTextOutlined />,
      label: 'Documents',
    },
    {
      type: 'divider',
    },
    {
      key: 'settings',
      icon: <SettingOutlined />,
      label: 'Settings',
    },
  ];

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
      className={`${className} shadow-lg`}
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 64, // Header height
        zIndex: 100,
      }}
      theme="light"
      width={250}
    >
      <div className="p-4">
        {!collapsed && (
          <div className="text-center mb-4">
            <div className="text-sm text-gray-500">Welcome back,</div>
            <div className="font-semibold text-gray-800">Admin</div>
          </div>
        )}
      </div>
      
      <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={['dashboard']}
        defaultOpenKeys={['users', 'products']}
        items={menuItems}
        className="border-r-0"
      />
      
      {/* Footer section */}
      <div className="absolute bottom-4 left-0 right-0 px-4">
        {!collapsed && (
          <div className="text-xs text-gray-400 text-center">
            Version 1.0.0
          </div>
        )}
      </div>
    </Sider>
  );
};

export default Sidebar;