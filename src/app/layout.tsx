import React from 'react';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider } from 'antd';
import '../styles/globals.css';

export const metadata = {
  title: 'ATradezone™ Cloud - Sign In',
  description: 'Sign in to access your enterprise management dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Afacad:ital,wght@0,400..700;1,400..700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <AntdRegistry>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: '#4ade80',
                colorInfo: '#4ade80',
                colorSuccess: '#4ade80',
                colorWarning: '#f59e0b',
                colorError: '#ef4444',
                colorText: '#1e293b',
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
              },
              components: {
                Button: {
                  primaryColor: '#1e293b',
                  defaultBg: '#4ade80',
                  defaultColor: '#1e293b',
                  defaultHoverBg: '#6ee7b7',
                  defaultHoverColor: '#1e293b',
                },
                Input: {
                  activeBorderColor: '#4ade80',
                  hoverBorderColor: '#4ade80',
                },
              },
            }}
          >
            {children}
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  )
}
