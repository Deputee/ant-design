'use client';

import { Form, Input, Button, Checkbox } from 'antd';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { useState } from 'react';

export default function Login() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  
  const onFinish = async (values: any) => {
    setLoading(true);
    try {
      console.log('Received values of form: ', values);
      await new Promise(resolve => setTimeout(resolve, 1000));
      // Handle login logic here
    } catch (error) {
      console.error('Login error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Clean Branding */}
      <div className="hidden lg:flex lg:w-1/2 flex-col justify-between p-28 text-white relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://www.atradezone.ca/wp-content/uploads/2025/10/Screenshot-2025-10-01-at-16.39.54.png)'
          }}
        ></div>
        
        {/* Background overlay image */}
        <div 
          className="absolute inset-0 bg-no-repeat bg-cover bg-center opacity-30"
          style={{
            backgroundImage: 'url(https://www.atradezone.ca/wp-content/uploads/2025/10/background-image-with-line-scaled.png)'
          }}
        ></div>
        {/* Logo - Top Left */}
        <div className="flex items-center space-x-3 relative z-10">
          <img 
            src="https://www.atradezone.ca/wp-content/uploads/2023/07/atradezone-logo-big-size-w.png" 
            alt="ATradezone Logo" 
            className="h-12 w-auto object-contain"
          />
        </div>
        
        {/* Description - Center Left Aligned */}
        <div className="max-w-md relative z-8">
          <h1 className="text-4xl font-bold mb-2 leading-tight">Sync<br />Everything</h1>
          <p className="text-xl leading-relaxed mb-28" style={{ color: '#DDDDDD', fontSize: '1.175rem' }}>
            Eliminate repetitive tasks with automation.<br />Boost productivity and save tons of time effortlessly!
          </p>
        </div>
        
        {/* Copyright - Bottom Left */}
        <div className="absolute bottom-6 left-28 z-10">
          <p className="text-xs text-emerald-200">
            ©{new Date().getFullYear()} ATradezone™ Cloud. All rights reserved.
          </p>
        </div>
      </div>
      
      {/* Right Side - Clean Login Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 lg:px-16 bg-white">
        <div className="w-full max-w-sm mx-auto">
          {/* Mobile Logo */}
          <div className="lg:hidden text-center mb-8">
            <img 
              src="https://www.atradezone.ca/wp-content/uploads/2023/07/atradezone-logo-big-size.png" 
              alt="ATradezone Logo" 
              className="h-12 w-auto object-contain mx-auto mb-2"
            />
          </div>
          
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Sign In</h1>
            <p className="text-gray-600" style={{ color: '#6E82A5' }}>Welcome back!<br />Please enter your details</p>
          </div>
          
          <div 
            className="p-8 rounded-[20px] border border-[#e1e1e1]"
            style={{
              boxShadow: '-5px 5px 50px -5px #e1e1e1'
            }}
          >
            <Form
              form={form}
              name="login"
              onFinish={onFinish}
              layout="vertical"
              className="space-y-4"
            >
            <Form.Item
              name="email"
              label={<span className="text-gray-700 font-semibold">Email</span>}
              rules={[
                { required: true, message: 'Please enter your email' },
                { type: 'email', message: 'Please enter a valid email' },
              ]}
            >
              <Input 
                prefix={<MailOutlined className="text-gray-400 text-base" style={{ fontSize: '16px' }} />} 
                placeholder="Enter your email" 
                className="h-12 rounded-lg"
                size="large"
                style={{ paddingLeft: '12px' }}
              />
            </Form.Item>
            
            <Form.Item
              name="password"
              label={<span className="text-gray-700 font-semibold">Password</span>}
              rules={[{ required: true, message: 'Please enter your password' }]}
            >
              <Input.Password 
                prefix={<LockOutlined className="text-gray-400 text-base" style={{ fontSize: '16px' }} />} 
                placeholder="Enter your password"
                className="h-12 rounded-lg"
                size="large"
                style={{ paddingLeft: '12px' }}
              />
            </Form.Item>
            
            <div className="flex items-center justify-between mb-6">
              <Form.Item name="remember" valuePropName="checked" className="!mb-0">
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <a href="#" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
                Forgot password?
              </a>
            </div>
            
            <Form.Item>
              <Button 
                type="primary" 
                htmlType="submit" 
                loading={loading}
                className="w-full h-12 bg-emerald-600 hover:bg-emerald-700 border-none text-base font-semibold"
                size="large"
              >
                {loading ? 'Signing in...' : 'Sign in'}
              </Button>
            </Form.Item>
            </Form>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{' '}
              <a href="#" className="text-emerald-600 hover:text-[#29DB5C] font-medium transition-colors">
                Create account
              </a>
            </p>
          </div>
          
          {/* legal - Separate at very bottom */}
          <div className="mt-8 pt-4 text-center">
            <p className="text-xs text-gray-400">
              By signing in, you agree to our{' '}
              <a href="#" className="text-emerald-600 hover:text-[#29DB5C] underline transition-colors">
                Terms of Service
              </a>
              {' '}and{' '}
              <a href="#" className="text-emerald-600 hover:text-[#29DB5C] underline transition-colors">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}