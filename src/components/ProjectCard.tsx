import React from 'react';
import { Card, Button, Tag, Avatar, Space, Tooltip } from 'antd';
import { 
  EyeOutlined, 
  EditOutlined, 
  DeleteOutlined, 
  StarOutlined,
  StarFilled,
  CalendarOutlined,
  UserOutlined
} from '@ant-design/icons';

interface ProjectCardProps {
  title: string;
  description: string;
  status: 'active' | 'completed' | 'pending' | 'cancelled';
  priority: 'high' | 'medium' | 'low';
  assignee: {
    name: string;
    avatar?: string;
  };
  dueDate: string;
  progress: number;
  tags: string[];
  isFavorite?: boolean;
  onView?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
  onToggleFavorite?: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  status,
  priority,
  assignee,
  dueDate,
  progress,
  tags,
  isFavorite = false,
  onView,
  onEdit,
  onDelete,
  onToggleFavorite,
}) => {
  const getStatusColor = (status: string) => {
    const colors = {
      active: 'blue',
      completed: 'green',
      pending: 'orange',
      cancelled: 'red',
    };
    return colors[status as keyof typeof colors] || 'default';
  };

  const getPriorityColor = (priority: string) => {
    const colors = {
      high: 'red',
      medium: 'orange',
      low: 'green',
    };
    return colors[priority as keyof typeof colors] || 'default';
  };

  return (
    <Card
      hoverable
      className="w-full h-full shadow-md transition-all duration-300 hover:shadow-lg"
      actions={[
        <Tooltip title="View Details" key="view">
          <EyeOutlined onClick={onView} />
        </Tooltip>,
        <Tooltip title="Edit Project" key="edit">
          <EditOutlined onClick={onEdit} />
        </Tooltip>,
        <Tooltip title="Delete Project" key="delete">
          <DeleteOutlined onClick={onDelete} />
        </Tooltip>,
      ]}
    >
      {/* Header */}
      <div className="flex justify-between items-start mb-3">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-800 mb-1 line-clamp-1">
            {title}
          </h3>
          <p className="text-sm text-gray-600 line-clamp-2 mb-3">
            {description}
          </p>
        </div>
        <Button 
          type="text" 
          size="small"
          icon={isFavorite ? <StarFilled className="text-yellow-500" /> : <StarOutlined />}
          onClick={onToggleFavorite}
        />
      </div>

      {/* Status and Priority */}
      <div className="flex flex-wrap gap-2 mb-4">
        <Tag color={getStatusColor(status)} className="capitalize">
          {status}
        </Tag>
        <Tag color={getPriorityColor(priority)} className="capitalize">
          {priority} Priority
        </Tag>
      </div>

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-1">
          <span className="text-sm text-gray-600">Progress</span>
          <span className="text-sm font-medium">{progress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Tags */}
      {tags.length > 0 && (
        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            {tags.slice(0, 3).map((tag, index) => (
              <Tag key={index} className="text-xs">
                {tag}
              </Tag>
            ))}
            {tags.length > 3 && (
              <Tag className="text-xs">
                +{tags.length - 3} more
              </Tag>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="flex justify-between items-center">
        <Space size="small">
          <Avatar 
            size="small" 
            src={assignee.avatar}
            icon={<UserOutlined />}
          />
          <span className="text-sm text-gray-600">{assignee.name}</span>
        </Space>
        <div className="flex items-center text-sm text-gray-500">
          <CalendarOutlined className="mr-1" />
          {dueDate}
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;