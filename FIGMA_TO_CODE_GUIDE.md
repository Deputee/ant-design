# Figma to Code Conversion Guide

This guide will help you convert your Figma designs into working React components using our Next.js + Ant Design + Tailwind CSS setup.

## 🚀 Getting Started

### 1. Project Structure
```
src/
├── app/                  # Next.js App Router pages
│   ├── layout.tsx        # Root layout with Ant Design provider
│   ├── page.tsx          # Home page
│   └── dashboard/        # Dashboard pages
├── components/           # Reusable React components
│   ├── Navbar.tsx        # Navigation bar component
│   ├── Sidebar.tsx       # Sidebar navigation
│   ├── ProjectCard.tsx   # Project card component
│   └── index.ts          # Component exports
└── styles/
    └── globals.css       # Global styles with Tailwind
```

## 🎨 Design to Code Workflow

### Step 1: Analyze Your Figma Design
1. **Identify Components**: Break down your design into reusable components
2. **Note Spacing**: Use Figma's spacing measurements for Tailwind classes
3. **Extract Colors**: Use Figma's color picker for exact color values
4. **Identify Typography**: Note font sizes, weights, and line heights

### Step 2: Choose the Right Ant Design Components
- **Layout**: `Layout`, `Header`, `Sider`, `Content`
- **Navigation**: `Menu`, `Breadcrumb`, `Pagination`
- **Data Display**: `Card`, `Table`, `List`, `Statistic`
- **Form Controls**: `Button`, `Input`, `Select`, `DatePicker`
- **Feedback**: `Modal`, `Notification`, `Alert`

### Step 3: Apply Tailwind CSS for Custom Styling
- **Spacing**: `p-4`, `m-2`, `space-x-4`
- **Colors**: `bg-blue-500`, `text-gray-700`
- **Layout**: `flex`, `grid`, `items-center`
- **Responsive**: `sm:`, `md:`, `lg:`, `xl:`

## 📝 Component Creation Pattern

### 1. Define TypeScript Interface
```typescript
interface ComponentProps {
  title: string;
  description?: string;
  onClick?: () => void;
  className?: string;
}
```

### 2. Create Functional Component
```typescript
const MyComponent: React.FC<ComponentProps> = ({ 
  title, 
  description, 
  onClick,
  className 
}) => {
  return (
    <Card className={`shadow-md hover:shadow-lg ${className}`}>
      {/* Component content */}
    </Card>
  );
};
```

### 3. Export Component
```typescript
export default MyComponent;
```

## 🎯 Best Practices

### Design System Integration
1. **Use Ant Design tokens** for consistent spacing and colors
2. **Combine with Tailwind** for custom styling needs
3. **Maintain responsive design** with Tailwind's breakpoint system
4. **Follow TypeScript** patterns for type safety

### Component Architecture
1. **Keep components small** and focused on single responsibility
2. **Use composition** over inheritance
3. **Pass props explicitly** rather than using global state
4. **Handle loading states** and error boundaries

### Styling Strategy
1. **Ant Design for structure** (layout, forms, navigation)
2. **Tailwind for customization** (spacing, colors, responsive)
3. **CSS modules for complex** custom styles if needed
4. **Design tokens** for consistent theming

## 🔧 Converting Common Figma Elements

### Cards
```typescript
// Figma: Rectangle with shadow + content
<Card 
  hoverable 
  className="shadow-lg rounded-lg p-6"
  cover={<img src="..." />}
>
  <Card.Meta title="Title" description="Description" />
</Card>
```

### Buttons
```typescript
// Figma: Rectangle with text + hover states
<Button 
  type="primary" 
  size="large"
  className="px-8 py-2 rounded-md"
  icon={<IconComponent />}
>
  Button Text
</Button>
```

### Navigation
```typescript
// Figma: Horizontal/vertical menu layout
<Menu 
  mode="horizontal" 
  theme="light"
  className="border-0 bg-transparent"
  items={menuItems}
/>
```

### Forms
```typescript
// Figma: Input fields with labels
<Form.Item label="Email" name="email">
  <Input 
    placeholder="Enter your email"
    className="rounded-md"
    size="large"
  />
</Form.Item>
```

## 🎨 Color and Typography Mapping

### Extract Colors from Figma
1. Copy hex values directly from Figma
2. Add to Tailwind config or use Ant Design theme
3. Use CSS variables for dynamic theming

### Typography Conversion
```typescript
// Figma font sizes to Tailwind classes
// 12px → text-xs
// 14px → text-sm  
// 16px → text-base
// 18px → text-lg
// 20px → text-xl
// 24px → text-2xl
```

## 📱 Responsive Design

### Breakpoint Strategy
```typescript
// Mobile First Approach
<div className="
  w-full               // Mobile: full width
  sm:w-1/2            // Small: half width
  md:w-1/3            // Medium: third width
  lg:w-1/4            // Large: quarter width
">
```

### Grid Systems
```typescript
// Ant Design Grid
<Row gutter={[16, 16]}>
  <Col xs={24} sm={12} md={8} lg={6}>
    <Card>Content</Card>
  </Col>
</Row>
```

## 🚀 Quick Start Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run linting
npm run lint
```

## 📚 Resources

- [Ant Design Components](https://ant.design/components/overview/)
- [Tailwind CSS Utilities](https://tailwindcss.com/docs)
- [Next.js App Router](https://nextjs.org/docs/app)
- [TypeScript React](https://react-typescript-cheatsheet.netlify.app/)

## 💡 Pro Tips

1. **Start with layout**: Use Ant Design's Layout components first
2. **Progressive enhancement**: Begin with basic functionality, add polish later
3. **Component composition**: Build complex UIs from simple components
4. **Performance**: Use Next.js Image component for optimized images
5. **Accessibility**: Ant Design components include ARIA attributes by default

Happy coding! 🎉