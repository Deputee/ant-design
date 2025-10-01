'use client';

import { Form, Input, Button, Alert } from 'antd';
import { MailOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { useState } from 'react';

export default function ResetPassword() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  
  const onFinish = async (values: any) => {
    setLoading(true);
    try {
      console.log('Password reset requested for: ', values.email);
      await new Promise(resolve => setTimeout(resolve, 2000));
      // Handle password reset logic here
      setEmailSent(true);
    } catch (error) {
      console.error('Password reset error:', error);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setEmailSent(false);
    form.resetFields();
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Side - Clean Branding */}
      <div className="hidden md:flex md:w-full lg:w-1/2 md:h-48 lg:h-auto flex-col justify-between p-4 sm:p-6 md:p-8 lg:p-28 text-white relative overflow-hidden">
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
            className="h-8 sm:h-10 lg:h-12 w-auto object-contain"
          />
        </div>
        
        {/* Description - Center Left Aligned */}
        <div className="max-w-md relative z-8 md:hidden lg:block">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 leading-tight">Sync<br />Everything</h1>
          <p className="text-base sm:text-lg lg:text-xl leading-relaxed mb-4 lg:mb-28" style={{ color: '#DDDDDD' }}>
            Eliminate repetitive tasks with automation.<br className="hidden sm:block" />Boost productivity and save tons of time effortlessly!
          </p>
        </div>
        
        {/* Copyright - Bottom Left */}
        <div className="absolute bottom-2 sm:bottom-4 lg:bottom-6 left-4 sm:left-6 md:left-8 lg:left-28 z-10">
          <p className="text-xs text-emerald-200">
            ©{new Date().getFullYear()} ATradezone™ Cloud. All rights reserved.
          </p>
        </div>
      </div>
      
      {/* Right Side - Password Reset Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-16 bg-white min-h-screen lg:min-h-0">
        <div className="w-full max-w-sm mx-auto">
          {/* Mobile Logo */}
          <div className="md:hidden text-center mb-6 sm:mb-8">
            <img 
              src="https://www.atradezone.ca/wp-content/uploads/2023/07/atradezone-logo-big-size.png" 
              alt="ATradezone Logo" 
              className="h-10 sm:h-12 w-auto object-contain mx-auto mb-2"
            />
          </div>
          
          {!emailSent ? (
            <>
              <div className="mb-6 sm:mb-8">
                <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Reset Password</h1>
                <p className="text-sm sm:text-base text-gray-600" style={{ color: '#6E82A5' }}>
                  Enter your email and we'll send you<br />instructions to reset your password
                </p>
              </div>
              
              <div 
                className="p-4 sm:p-6 lg:p-8 rounded-[15px] sm:rounded-[20px] border border-[#e1e1e1]"
                style={{
                  boxShadow: '-5px 5px 50px -5px #e1e1e1'
                }}
              >
                <Form
                  form={form}
                  name="resetPassword"
                  onFinish={onFinish}
                  layout="vertical"
                  className="space-y-4"
                >
                <Form.Item
                  name="email"
                  label={<span className="text-gray-700 font-semibold text-sm sm:text-base">Email</span>}
                  rules={[
                    { required: true, message: 'Please enter your email' },
                    { type: 'email', message: 'Please enter a valid email' },
                  ]}
                >
                  <Input 
                    prefix={<MailOutlined className="text-gray-400 text-sm sm:text-base" style={{ fontSize: '14px' }} />} 
                    placeholder="Enter your email" 
                    className="h-10 sm:h-12 rounded-lg text-sm sm:text-base"
                    size="large"
                    style={{ paddingLeft: '12px' }}
                  />
                </Form.Item>
                
                <Form.Item>
                  <Button 
                    type="primary" 
                    htmlType="submit" 
                    loading={loading}
                    className="w-full h-10 sm:h-12 bg-emerald-600 hover:bg-emerald-700 border-none text-sm sm:text-base font-semibold"
                    size="large"
                  >
                    {loading ? 'Sending Instructions...' : 'Send Reset Instructions'}
                  </Button>
                </Form.Item>
                </Form>
              </div>
            </>
          ) : (
            <div 
              className="p-4 sm:p-6 lg:p-8 rounded-[15px] sm:rounded-[20px] border border-[#e1e1e1] text-center"
              style={{
                boxShadow: '-5px 5px 50px -5px #e1e1e1'
              }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MailOutlined className="text-2xl text-emerald-600" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Check Your Email</h2>
                <p className="text-sm sm:text-base text-gray-600" style={{ color: '#6E82A5' }}>
                  We've sent password reset instructions to<br />
                  <span className="font-semibold text-gray-900">{form.getFieldValue('email')}</span>
                </p>
              </div>

              <Alert
                message="Didn't receive the email?"
                description={
                  <div className="text-left text-xs sm:text-sm">
                    <p>• Check your spam folder</p>
                    <p>• Make sure the email address is correct</p>
                    <p>• Try requesting another reset email</p>
                  </div>
                }
                type="info"
                showIcon
                className="mb-6 text-left"
              />

              <Button 
                type="default"
                onClick={resetForm}
                className="w-full h-10 sm:h-12 border-emerald-600 text-emerald-600 hover:bg-emerald-50 hover:border-emerald-700 text-sm sm:text-base font-semibold"
                size="large"
              >
                Try Another Email
              </Button>
            </div>
          )}
          
          <div className="mt-4 sm:mt-6">
            <div className="relative mb-4 sm:mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-3 mb-6">
              <button
                type="button"
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                <img 
                  src="https://www.gstatic.com/images/branding/googleg/1x/googleg_standard_color_18dp.png" 
                  alt="Google" 
                  className="h-5 w-5"
                />
                <span className="ml-2">Google</span>
              </button>
              <button
                type="button"
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                <svg className="h-5 w-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.5 6.5c0-.3-.1-.6-.3-.8l-1.1-1.1c-.2-.2-.5-.3-.8-.3H3.7c-.3 0-.6.1-.8.3L1.8 5.7c-.2.2-.3.5-.3.8v11c0 .3.1.6.3.8l1.1 1.1c.2.2.5.3.8.3h16.6c.3 0 .6-.1.8-.3l1.1-1.1c.2-.2.3-.5.3-.8v-11zM21 18l-1.5 1.5H4.5L3 18V7l1.5-1.5h15L21 7v11z" />
                  <path d="M18 8l-6 4.5L6 8" stroke="currentColor" strokeWidth="1.5" fill="none" />
                </svg>
                <span className="ml-2">Outlook</span>
              </button>
            </div>
          </div>
          
          <div className="mt-4 sm:mt-6 text-center">
            <a 
              href="/login" 
              className="inline-flex items-center text-xs sm:text-sm text-gray-600 hover:text-emerald-600 font-medium transition-colors"
            >
              <ArrowLeftOutlined className="mr-2 text-xs" />
              Back to Sign In
            </a>
          </div>
          
          {/* Legal - Separate at very bottom */}
          <div className="mt-6 sm:mt-8 pt-4 text-center">
            <p className="text-xs text-gray-400 leading-relaxed">
              Having trouble? Contact our{' '}
              <a href="#" className="text-emerald-600 hover:text-[#29DB5C] underline transition-colors">
                Support Team
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}