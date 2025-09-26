import React from 'react';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import '../styles/globals.css';

export const metadata = {
  title: 'ATradezone™ Cloud UI',
  description: 'Transform your Figma designs into beautiful React components',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <AntdRegistry>
          {children}
        </AntdRegistry>
      </body>
    </html>
  )
}
