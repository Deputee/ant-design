import React, { useEffect, useState } from 'react';
import { Layout, Menu, Button, Avatar, Space, Dropdown } from 'antd';
import { 
  MenuOutlined, 
  BellOutlined, 
  UserOutlined, 
  SettingOutlined,
  LogoutOutlined 
} from '@ant-design/icons';
import type { MenuProps } from 'antd';

const { Header } = Layout;

interface NavbarProps {
  collapsed?: boolean;
  onToggle?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ collapsed, onToggle }) => {
  const userMenuItems: MenuProps['items'] = [
    {
      key: 'profile',
      icon: <UserOutlined />,
      label: 'Profile',
    },
    {
      key: 'settings',
      icon: <SettingOutlined />,
      label: 'Settings',
    },
    {
      type: 'divider',
    },
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: 'Logout',
      danger: true,
    },
  ];

  return (
    <Header className="bg-white shadow-md px-2 sm:px-4 lg:px-6 flex items-center justify-between h-14 sm:h-16 sticky top-0 z-50">
      {/* Left side - Menu toggle and Logo */}
      <div className="flex items-center space-x-2 sm:space-x-4">
        <Button
          type="text"
          icon={<MenuOutlined />}
          onClick={onToggle}
          className="lg:hidden p-1 sm:p-2"
          size="small"
        />
        <div className="flex items-center space-x-1 sm:space-x-2">
          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xs sm:text-sm">AZ</span>
          </div>
          <span className="text-base sm:text-xl font-semibold text-gray-800 hidden xs:inline">
            <span className="hidden sm:inline">AtradeZone</span>
            <span className="sm:hidden">ATZ</span>
          </span>
        </div>
      </div>

      {/* Right side - Notifications and User */}
      <Space size="small" className="sm:space-x-4">
        <Button
          type="text"
          icon={<BellOutlined />}
          className="relative p-1 sm:p-2"
          size="small"
        >
          {/* Notification badge */}
          <span className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full"></span>
        </Button>
        
        <Dropdown 
          menu={{ items: userMenuItems }} 
          placement="bottomRight" 
          trigger={['click']}
        >
          <div className="flex items-center space-x-1 sm:space-x-2 cursor-pointer hover:bg-gray-50 px-2 sm:px-3 py-1 sm:py-2 rounded-lg transition-colors">
            <Avatar 
              size={window.innerWidth < 640 ? 'small' : 'default'}
              icon={<UserOutlined />}
              className="bg-blue-500"
            />
            <span className="text-gray-700 text-xs sm:text-sm hidden sm:inline max-w-20 sm:max-w-none truncate">
              John Doe
            </span>
          </div>
        </Dropdown>
      </Space>
    </Header>
  );
};

export default Navbar;