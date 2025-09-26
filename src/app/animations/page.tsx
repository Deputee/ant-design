'use client';

import React, { useState, useEffect } from 'react';
import {
  Card, Row, Col, Typography, Button, Space, Avatar, Badge, Tag, Progress,
  Switch, Tooltip, Spin, Steps, Timeline, Carousel, Image, Divider,
  Statistic, Rate, Slider, Input, Select, Checkbox, Radio, Form, Modal
} from 'antd';
import {
  HeartFilled, StarFilled, LikeFilled, ShareAltOutlined, PlayCircleOutlined,
  PauseCircleOutlined, ForwardOutlined, BackwardOutlined, SoundOutlined,
  BellOutlined, MessageOutlined, UserAddOutlined, GiftOutlined,
  TrophyOutlined, RocketOutlined, ThunderboltOutlined, CrownOutlined,
  FireOutlined, BulbOutlined, EyeOutlined, DownloadOutlined, 
  SettingOutlined, EditOutlined, DeleteOutlined, PlusOutlined
} from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;
const { Step } = Steps;
const { CountDown } = Statistic;

// Animation wrapper component
const AnimatedCard: React.FC<{ children: React.ReactNode; delay?: number; className?: string }> = ({ 
  children, 
  delay = 0, 
  className = '' 
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div 
      className={`transition-all duration-700 ease-out transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      } ${className}`}
    >
      {children}
    </div>
  );
};

// Floating elements component
const FloatingElement: React.FC<{ children: React.ReactNode; duration?: string }> = ({ 
  children, 
  duration = '3s' 
}) => (
  <div 
    className="animate-bounce"
    style={{ 
      animationDuration: duration,
      animationIterationCount: 'infinite',
      animationDirection: 'alternate'
    }}
  >
    {children}
  </div>
);

// Pulse animation component
const PulseElement: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="animate-pulse hover:animate-none transition-all duration-300">
    {children}
  </div>
);

export default function AnimationsPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [likeCount, setLikeCount] = useState(142);
  const [isLiked, setIsLiked] = useState(false);
  const [countdown, setCountdown] = useState(Date.now() + 1000 * 60 * 60 * 24);

  // Interactive like animation
  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(prev => isLiked ? prev - 1 : prev + 1);
  };

  // Carousel content
  const carouselContent = [
    {
      title: "Modern Design",
      description: "Beautiful, responsive components",
      background: "from-purple-400 to-pink-400",
      icon: <BulbOutlined />
    },
    {
      title: "Smooth Animations", 
      description: "Delightful user interactions",
      background: "from-blue-400 to-purple-600",
      icon: <RocketOutlined />
    },
    {
      title: "Premium Experience",
      description: "Enterprise-grade solutions",
      background: "from-green-400 to-blue-500",
      icon: <CrownOutlined />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Animated Header */}
        <AnimatedCard className="text-center mb-8">
          <Title level={1} className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Interactive Animations
          </Title>
          <Paragraph className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover modern UI components with smooth animations and delightful interactions
          </Paragraph>
        </AnimatedCard>

        {/* Hero Carousel */}
        <AnimatedCard delay={200} className="mb-8">
          <Card className="shadow-2xl border-0 overflow-hidden">
            <Carousel autoplay dots={{ className: 'custom-dots' }} effect="fade">
              {carouselContent.map((slide, index) => (
                <div key={index}>
                  <div className={`h-64 bg-gradient-to-r ${slide.background} flex items-center justify-center text-white relative overflow-hidden`}>
                    <FloatingElement duration="4s">
                      <div className="text-center z-10 relative">
                        <div className="text-6xl mb-4">{slide.icon}</div>
                        <Title level={2} className="text-white mb-2">{slide.title}</Title>
                        <Text className="text-white text-lg">{slide.description}</Text>
                      </div>
                    </FloatingElement>
                    <div className="absolute inset-0 bg-black opacity-20"></div>
                  </div>
                </div>
              ))}
            </Carousel>
          </Card>
        </AnimatedCard>

        {/* Interactive Cards Grid */}
        <Row gutter={[24, 24]} className="mb-8">
          {[...Array(6)].map((_, index) => (
            <Col xs={24} sm={12} lg={8} key={index}>
              <AnimatedCard delay={300 + (index * 100)}>
                <Card 
                  className="h-full shadow-lg border-0 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer group"
                  cover={
                    <div className={`h-32 bg-gradient-to-r ${carouselContent[index % 3].background} relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-4xl text-white transform group-hover:scale-110 transition-transform duration-300">
                          {[<TrophyOutlined />, <RocketOutlined />, <BulbOutlined />, <CrownOutlined />, <FireOutlined />, <ThunderboltOutlined />][index]}
                        </div>
                      </div>
                    </div>
                  }
                >
                  <div className="text-center">
                    <Title level={4} className="mb-2">Feature {index + 1}</Title>
                    <Text type="secondary">Interactive component with smooth animations and hover effects</Text>
                    <div className="mt-4 flex justify-center gap-2">
                      <Button 
                        type="text" 
                        icon={<EyeOutlined />}
                        className="hover:text-blue-500 hover:bg-blue-50 transition-colors duration-200"
                      />
                      <Button 
                        type="text" 
                        icon={<DownloadOutlined />}
                        className="hover:text-green-500 hover:bg-green-50 transition-colors duration-200"
                      />
                      <Button 
                        type="text" 
                        icon={<ShareAltOutlined />}
                        className="hover:text-purple-500 hover:bg-purple-50 transition-colors duration-200"
                      />
                    </div>
                  </div>
                </Card>
              </AnimatedCard>
            </Col>
          ))}
        </Row>

        {/* Interactive Elements */}
        <Row gutter={[24, 24]} className="mb-8">
          {/* Social Media Card */}
          <Col xs={24} md={12}>
            <AnimatedCard delay={600}>
              <Card className="shadow-lg border-0">
                <div className="flex items-start gap-4 mb-4">
                  <Avatar size={48} src="https://api.dicebear.com/7.x/miniavs/svg?seed=social" />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Text strong>Sarah Designer</Text>
                      <Badge color="green" />
                    </div>
                    <Text type="secondary" className="text-sm">2 hours ago</Text>
                  </div>
                </div>
                
                <Paragraph className="mb-4">
                  Just launched our new design system! 🎨 Excited to share these modern UI components with everyone.
                </Paragraph>

                <div className="flex items-center justify-between">
                  <Space>
                    <Button 
                      type="text" 
                      icon={<HeartFilled style={{ color: isLiked ? '#ff4d4f' : '#8c8c8c' }} />}
                      onClick={handleLike}
                      className={`transition-all duration-300 ${isLiked ? 'animate-pulse' : ''}`}
                    >
                      {likeCount}
                    </Button>
                    <Button type="text" icon={<MessageOutlined />}>
                      24
                    </Button>
                    <Button type="text" icon={<ShareAltOutlined />}>
                      Share
                    </Button>
                  </Space>
                  <Button type="primary" size="small">Follow</Button>
                </div>
              </Card>
            </AnimatedCard>
          </Col>

          {/* Music Player Card */}
          <Col xs={24} md={12}>
            <AnimatedCard delay={700}>
              <Card className="shadow-lg border-0 bg-gradient-to-r from-purple-50 to-pink-50">
                <div className="text-center mb-4">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden shadow-lg">
                    <Image 
                      src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=150" 
                      alt="Album cover"
                      className={`w-full h-full object-cover transition-transform duration-1000 ${isPlaying ? 'animate-spin' : ''}`}
                      style={{ animationDuration: '3s' }}
                    />
                  </div>
                  <Title level={4} className="mb-1">Smooth Jazz Vibes</Title>
                  <Text type="secondary">Relaxing Instrumental</Text>
                </div>

                <div className="mb-4">
                  <Slider defaultValue={30} tooltip={{ formatter: null }} />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>1:23</span>
                    <span>4:56</span>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-4">
                  <Button type="text" icon={<BackwardOutlined />} size="large" />
                  <Button 
                    type="primary" 
                    shape="circle" 
                    size="large"
                    icon={isPlaying ? <PauseCircleOutlined /> : <PlayCircleOutlined />}
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-12 h-12 flex items-center justify-center"
                  />
                  <Button type="text" icon={<ForwardOutlined />} size="large" />
                  <Button type="text" icon={<SoundOutlined />} size="large" />
                </div>
              </Card>
            </AnimatedCard>
          </Col>
        </Row>

        {/* Progress & Steps */}
        <Row gutter={[24, 24]} className="mb-8">
          <Col xs={24} md={12}>
            <AnimatedCard delay={800}>
              <Card className="shadow-lg border-0" title="Project Progress">
                <Steps 
                  current={currentStep}
                  onChange={setCurrentStep}
                  className="mb-6"
                >
                  <Step title="Planning" description="Define requirements" />
                  <Step title="Development" description="Build features" />
                  <Step title="Testing" description="Quality assurance" />
                  <Step title="Deployment" description="Go live" />
                </Steps>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <Text>Overall Progress</Text>
                    <Text strong>{(currentStep + 1) * 25}%</Text>
                  </div>
                  <Progress 
                    percent={(currentStep + 1) * 25} 
                    strokeColor={{
                      '0%': '#108ee9',
                      '100%': '#87d068',
                    }}
                    trailColor="#f0f0f0"
                  />
                </div>
              </Card>
            </AnimatedCard>
          </Col>

          <Col xs={24} md={12}>
            <AnimatedCard delay={900}>
              <Card className="shadow-lg border-0" title="Live Counter">
                <div className="text-center">
                  <CountDown 
                    title="Next Release" 
                    value={countdown} 
                    format="D [days] H [hours] m [minutes] s [seconds]"
                    className="mb-4"
                  />
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">47</div>
                      <Text type="secondary">Features</Text>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">156</div>
                      <Text type="secondary">Components</Text>
                    </div>
                  </div>
                </div>
              </Card>
            </AnimatedCard>
          </Col>
        </Row>

        {/* Loading & Skeleton States */}
        <AnimatedCard delay={1000}>
          <Card className="shadow-lg border-0 mb-8" title="Loading States">
            <Row gutter={[24, 24]}>
              <Col xs={24} md={8}>
                <div className="text-center p-8">
                  <PulseElement>
                    <Spin size="large" />
                  </PulseElement>
                  <div className="mt-4">
                    <Text>Loading content...</Text>
                  </div>
                </div>
              </Col>

              <Col xs={24} md={8}>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-200 rounded-full animate-pulse"></div>
                    <div className="space-y-2 flex-1">
                      <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                      <div className="h-3 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                    </div>
                  </div>
                  <div className="h-32 bg-gray-200 rounded animate-pulse"></div>
                  <div className="space-y-2">
                    <div className="h-3 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-3 bg-gray-200 rounded w-5/6 animate-pulse"></div>
                  </div>
                </div>
              </Col>

              <Col xs={24} md={8}>
                <div className="space-y-4">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50 transition-colors duration-200">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center animate-pulse">
                        <Text className="text-white text-xs">{item}</Text>
                      </div>
                      <div className="flex-1">
                        <Text strong>Item {item}</Text>
                        <Text type="secondary" className="block text-sm">Description for item {item}</Text>
                      </div>
                    </div>
                  ))}
                </div>
              </Col>
            </Row>
          </Card>
        </AnimatedCard>
      </div>
    </div>
  );
}'use client';

import React, { useState, useEffect } from 'react';
import {
  Card, Row, Col, Typography, Button, Space, Avatar, Badge, Tag, Progress,
  Switch, Tooltip, Spin, Steps, Timeline, Carousel, Image, Divider,
  Statistic, Rate, Slider, Input, Select, Checkbox, Radio, Form, Modal
} from 'antd';
import {
  HeartFilled, StarFilled, LikeFilled, ShareAltOutlined, PlayCircleOutlined,
  PauseCircleOutlined, ForwardOutlined, BackwardOutlined, SoundOutlined,
  BellOutlined, MessageOutlined, UserAddOutlined, GiftOutlined,
  TrophyOutlined, RocketOutlined, ThunderboltOutlined, CrownOutlined,
  FireOutlined, BulbOutlined, EyeOutlined, DownloadOutlined, 
  SettingOutlined, EditOutlined, DeleteOutlined, PlusOutlined
} from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;
const { Step } = Steps;
const { CountDown } = Statistic;

// Animation wrapper component
const AnimatedCard: React.FC<{ children: React.ReactNode; delay?: number; className?: string }> = ({ 
  children, 
  delay = 0, 
  className = '' 
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div 
      className={`transition-all duration-700 ease-out transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      } ${className}`}
    >
      {children}
    </div>
  );
};

// Floating elements component
const FloatingElement: React.FC<{ children: React.ReactNode; duration?: string }> = ({ 
  children, 
  duration = '3s' 
}) => (
  <div 
    className="animate-bounce"
    style={{ 
      animationDuration: duration,
      animationIterationCount: 'infinite',
      animationDirection: 'alternate'
    }}
  >
    {children}
  </div>
);

// Pulse animation component
const PulseElement: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="animate-pulse hover:animate-none transition-all duration-300">
    {children}
  </div>
);

export default function AnimationsPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [likeCount, setLikeCount] = useState(142);
  const [isLiked, setIsLiked] = useState(false);
  const [countdown, setCountdown] = useState(Date.now() + 1000 * 60 * 60 * 24);

  // Interactive like animation
  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(prev => isLiked ? prev - 1 : prev + 1);
  };

  // Carousel content
  const carouselContent = [
    {
      title: "Modern Design",
      description: "Beautiful, responsive components",
      background: "from-purple-400 to-pink-400",
      icon: <BulbOutlined />
    },
    {
      title: "Smooth Animations", 
      description: "Delightful user interactions",
      background: "from-blue-400 to-purple-600",
      icon: <RocketOutlined />
    },
    {
      title: "Premium Experience",
      description: "Enterprise-grade solutions",
      background: "from-green-400 to-blue-500",
      icon: <CrownOutlined />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Animated Header */}
        <AnimatedCard className="text-center mb-8">
          <Title level={1} className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Interactive Animations
          </Title>
          <Paragraph className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover modern UI components with smooth animations and delightful interactions
          </Paragraph>
        </AnimatedCard>

        {/* Hero Carousel */}
        <AnimatedCard delay={200} className="mb-8">
          <Card className="shadow-2xl border-0 overflow-hidden">
            <Carousel autoplay dots={{ className: 'custom-dots' }} effect="fade">
              {carouselContent.map((slide, index) => (
                <div key={index}>
                  <div className={`h-64 bg-gradient-to-r ${slide.background} flex items-center justify-center text-white relative overflow-hidden`}>
                    <FloatingElement duration="4s">
                      <div className="text-center z-10 relative">
                        <div className="text-6xl mb-4">{slide.icon}</div>
                        <Title level={2} className="text-white mb-2">{slide.title}</Title>
                        <Text className="text-white text-lg">{slide.description}</Text>
                      </div>
                    </FloatingElement>
                    <div className="absolute inset-0 bg-black opacity-20"></div>
                  </div>
                </div>
              ))}
            </Carousel>
          </Card>
        </AnimatedCard>

        {/* Interactive Cards Grid */}
        <Row gutter={[24, 24]} className="mb-8">
          {[...Array(6)].map((_, index) => (
            <Col xs={24} sm={12} lg={8} key={index}>
              <AnimatedCard delay={300 + (index * 100)}>
                <Card 
                  className="h-full shadow-lg border-0 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer group"
                  cover={
                    <div className={`h-32 bg-gradient-to-r ${carouselContent[index % 3].background} relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-4xl text-white transform group-hover:scale-110 transition-transform duration-300">
                          {[<TrophyOutlined />, <RocketOutlined />, <BulbOutlined />, <CrownOutlined />, <FireOutlined />, <ThunderboltOutlined />][index]}
                        </div>
                      </div>
                    </div>
                  }
                >
                  <div className="text-center">
                    <Title level={4} className="mb-2">Feature {index + 1}</Title>
                    <Text type="secondary">Interactive component with smooth animations and hover effects</Text>
                    <div className="mt-4 flex justify-center gap-2">
                      <Button 
                        type="text" 
                        icon={<EyeOutlined />}
                        className="hover:text-blue-500 hover:bg-blue-50 transition-colors duration-200"
                      />
                      <Button 
                        type="text" 
                        icon={<DownloadOutlined />}
                        className="hover:text-green-500 hover:bg-green-50 transition-colors duration-200"
                      />
                      <Button 
                        type="text" 
                        icon={<ShareAltOutlined />}
                        className="hover:text-purple-500 hover:bg-purple-50 transition-colors duration-200"
                      />
                    </div>
                  </div>
                </Card>
              </AnimatedCard>
            </Col>
          ))}
        </Row>

        {/* Interactive Elements */}
        <Row gutter={[24, 24]} className="mb-8">
          {/* Social Media Card */}
          <Col xs={24} md={12}>
            <AnimatedCard delay={600}>
              <Card className="shadow-lg border-0">
                <div className="flex items-start gap-4 mb-4">
                  <Avatar size={48} src="https://api.dicebear.com/7.x/miniavs/svg?seed=social" />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Text strong>Sarah Designer</Text>
                      <Badge color="green" />
                    </div>
                    <Text type="secondary" className="text-sm">2 hours ago</Text>
                  </div>
                </div>
                
                <Paragraph className="mb-4">
                  Just launched our new design system! 🎨 Excited to share these modern UI components with everyone.
                </Paragraph>

                <div className="flex items-center justify-between">
                  <Space>
                    <Button 
                      type="text" 
                      icon={<HeartFilled style={{ color: isLiked ? '#ff4d4f' : '#8c8c8c' }} />}
                      onClick={handleLike}
                      className={`transition-all duration-300 ${isLiked ? 'animate-pulse' : ''}`}
                    >
                      {likeCount}
                    </Button>
                    <Button type="text" icon={<MessageOutlined />}>
                      24
                    </Button>
                    <Button type="text" icon={<ShareAltOutlined />}>
                      Share
                    </Button>
                  </Space>
                  <Button type="primary" size="small">Follow</Button>
                </div>
              </Card>
            </AnimatedCard>
          </Col>

          {/* Music Player Card */}
          <Col xs={24} md={12}>
            <AnimatedCard delay={700}>
              <Card className="shadow-lg border-0 bg-gradient-to-r from-purple-50 to-pink-50">
                <div className="text-center mb-4">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden shadow-lg">
                    <Image 
                      src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=150" 
                      alt="Album cover"
                      className={`w-full h-full object-cover transition-transform duration-1000 ${isPlaying ? 'animate-spin' : ''}`}
                      style={{ animationDuration: '3s' }}
                    />
                  </div>
                  <Title level={4} className="mb-1">Smooth Jazz Vibes</Title>
                  <Text type="secondary">Relaxing Instrumental</Text>
                </div>

                <div className="mb-4">
                  <Slider defaultValue={30} tooltip={{ formatter: null }} />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>1:23</span>
                    <span>4:56</span>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-4">
                  <Button type="text" icon={<BackwardOutlined />} size="large" />
                  <Button 
                    type="primary" 
                    shape="circle" 
                    size="large"
                    icon={isPlaying ? <PauseCircleOutlined /> : <PlayCircleOutlined />}
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-12 h-12 flex items-center justify-center"
                  />
                  <Button type="text" icon={<ForwardOutlined />} size="large" />
                  <Button type="text" icon={<SoundOutlined />} size="large" />
                </div>
              </Card>
            </AnimatedCard>
          </Col>
        </Row>

        {/* Progress & Steps */}
        <Row gutter={[24, 24]} className="mb-8">
          <Col xs={24} md={12}>
            <AnimatedCard delay={800}>
              <Card className="shadow-lg border-0" title="Project Progress">
                <Steps 
                  current={currentStep}
                  onChange={setCurrentStep}
                  className="mb-6"
                >
                  <Step title="Planning" description="Define requirements" />
                  <Step title="Development" description="Build features" />
                  <Step title="Testing" description="Quality assurance" />
                  <Step title="Deployment" description="Go live" />
                </Steps>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <Text>Overall Progress</Text>
                    <Text strong>{(currentStep + 1) * 25}%</Text>
                  </div>
                  <Progress 
                    percent={(currentStep + 1) * 25} 
                    strokeColor={{
                      '0%': '#108ee9',
                      '100%': '#87d068',
                    }}
                    trailColor="#f0f0f0"
                  />
                </div>
              </Card>
            </AnimatedCard>
          </Col>

          <Col xs={24} md={12}>
            <AnimatedCard delay={900}>
              <Card className="shadow-lg border-0" title="Live Counter">
                <div className="text-center">
                  <CountDown 
                    title="Next Release" 
                    value={countdown} 
                    format="D [days] H [hours] m [minutes] s [seconds]"
                    className="mb-4"
                  />
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">47</div>
                      <Text type="secondary">Features</Text>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">156</div>
                      <Text type="secondary">Components</Text>
                    </div>
                  </div>
                </div>
              </Card>
            </AnimatedCard>
          </Col>
        </Row>

        {/* Loading & Skeleton States */}
        <AnimatedCard delay={1000}>
          <Card className="shadow-lg border-0 mb-8" title="Loading States">
            <Row gutter={[24, 24]}>
              <Col xs={24} md={8}>
                <div className="text-center p-8">
                  <PulseElement>
                    <Spin size="large" />
                  </PulseElement>
                  <div className="mt-4">
                    <Text>Loading content...</Text>
                  </div>
                </div>
              </Col>

              <Col xs={24} md={8}>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-200 rounded-full animate-pulse"></div>
                    <div className="space-y-2 flex-1">
                      <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                      <div className="h-3 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                    </div>
                  </div>
                  <div className="h-32 bg-gray-200 rounded animate-pulse"></div>
                  <div className="space-y-2">
                    <div className="h-3 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-3 bg-gray-200 rounded w-5/6 animate-pulse"></div>
                  </div>
                </div>
              </Col>

              <Col xs={24} md={8}>
                <div className="space-y-4">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50 transition-colors duration-200">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center animate-pulse">
                        <Text className="text-white text-xs">{item}</Text>
                      </div>
                      <div className="flex-1">
                        <Text strong>Item {item}</Text>
                        <Text type="secondary" className="block text-sm">Description for item {item}</Text>
                      </div>
                    </div>
                  ))}
                </div>
              </Col>
            </Row>
          </Card>
        </AnimatedCard>
      </div>
    </div>
  );
}