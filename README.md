# Preact Component Library

A comprehensive collection of reusable Preact components with SCSS styling, inspired by Ant Design and Material-UI. Built with TypeScript, responsive design, and full theme support.

## Features

- 🎨 **27+ Production-Ready Components** - Layout, Forms, Typography, Data Display, and Feedback components
- 🌓 **Advanced Theme System** - Light/Dark/System modes with 4 color variants (Base, Sepia, Forest, Ocean)
- 📱 **Mobile-First Responsive** - Complete responsive utilities and breakpoint system
- 🎯 **TypeScript First** - Full type safety with strict typing
- ♿ **WCAG AA Compliant** - Accessible color contrasts and semantic HTML
- 🎭 **Flexible Styling** - SCSS with variables, mixins, and utility classes
- 🔧 **Path Aliases** - Clean imports with `@/components` syntax

## Installation

```bash
npm install preact-components
```

## Quick Start

### Basic Usage

```tsx
import { Button, Card, Container } from 'preact-components'

function MyApp() {
  return (
    <Container maxWidth="lg">
      <Card title="Welcome" bordered hoverable>
        <Button variant="primary" onClick={() => alert('Hello!')}>
          Click me
        </Button>
      </Card>
    </Container>
  )
}
```

### With Theme Provider

```tsx
import { ThemeProvider, Button, Navbar, Sidebar } from 'preact-components'

function App() {
  return (
    <ThemeProvider defaultTheme="system" defaultVariant="base">
      <Navbar logo={<Logo />} />
      <Sidebar>
        {/* Navigation items */}
      </Sidebar>
      <main>
        <Button variant="primary">Themed Button</Button>
      </main>
    </ThemeProvider>
  )
}
```

### Styling Options

#### Option 1: Automatic Style Loading (Recommended)

Most bundlers (Vite, webpack) automatically load CSS thanks to the `"style"` field in `package.json`:

```tsx
import { Button } from 'preact-components'
// Styles are automatically loaded - no additional import needed
```

#### Option 2: Explicit CSS Import

If your bundler doesn't support automatic loading:

```tsx
import 'preact-components/dist/index.css'
import { Button } from 'preact-components'
```

#### Option 3: SCSS Customization

For advanced customization, import the SCSS source:

```scss
// In your SCSS file
@use 'preact-components/src/styles/index.scss'

// Override variables or add custom styles
.my-custom-button {
  background-color: #ff6b6b;
}
```

## Available Components

### Layout & Structure (11)

- **Container** - Responsive container with max-width options (sm/md/lg/xl/2xl)
- **Row** - Grid row with gutter spacing
- **Col** - Grid column with responsive props (xs/sm/md/lg/xl)
- **Flex** - Flexbox layout with direction, justify, align, gap
- **Space** - Spacing component for consistent gaps between elements
- **Divider** - Visual separator (horizontal/vertical, dashed, with text)
- **Section** - Semantic section wrapper
- **Main** - Semantic main content wrapper
- **Header** - Semantic header wrapper
- **Footer** - Semantic footer wrapper
- **Div** - Universal wrapper with basic props

### Forms & Inputs (6)

- **Button** - Button with variants (primary/secondary/outline/ghost/link), sizes, loading state
- **Input** - Text input with prefix/suffix, error states, sizes
- **Select** - Dropdown select with options, sizes, fullWidth
- **Checkbox** - Checkbox with label and states
- **Radio** - Radio button with label
- **Switch** - Toggle switch with sizes and label

### Typography (4)

- **Heading** - Semantic headings (h1-h6) with level prop
- **Paragraph** - Text paragraph with variants (muted, small)
- **Link** - Styled anchor link
- **Code** - Inline or block code display

### Data Display (2)

- **Card** - Content card with header, title, extra actions, hoverable
- **Badge** - Badge with count, dot indicator, or status (success/error/warning/info)

### Feedback (1)

- **Alert** - Alert messages with types (success/info/warning/error), closable, with icon

### Branding (1)

- **Logo** - Logo component with basic styling

### Theme System (1)

- **ThemeProvider** - Theme management with light/dark/system modes and 4 color variants

## Component Examples

### Layout System

```tsx
import { Container, Row, Col, Flex, Space } from 'preact-components'

// Responsive Grid (24-column system)
<Container maxWidth="xl">
  <Row gutter={16}>
    <Col xs={24} sm={12} md={8}>Column 1</Col>
    <Col xs={24} sm={12} md={8}>Column 2</Col>
    <Col xs={24} sm={12} md={8}>Column 3</Col>
  </Row>
</Container>

// Flexbox Layout
<Flex direction="column" gap={16} className="flex-sm-row">
  <div>Item 1</div>
  <div>Item 2</div>
</Flex>

// Spacing
<Space size="large" direction="vertical">
  <Button>Button 1</Button>
  <Button>Button 2</Button>
</Space>
```

### Form Components

```tsx
import { Input, Select, Checkbox, Radio, Switch, Button } from 'preact-components'

<Input 
  placeholder="Enter text" 
  prefix="$" 
  suffix=".00"
  fullWidth 
/>

<Select 
  options={[
    { value: 'a', label: 'Option A' },
    { value: 'b', label: 'Option B' }
  ]}
  fullWidth
/>

<Checkbox label="Accept terms" checked onChange={...} />
<Radio label="Option 1" name="group" value="1" />
<Switch label="Enable feature" checked />

<Button variant="primary" size="lg" loading>
  Submit
</Button>
```

### Data Display

```tsx
import { Card, Badge, Alert } from 'preact-components'

<Card 
  title="Card Title" 
  extra={<Button variant="outline">More</Button>}
  bordered 
  hoverable
>
  Card content here
</Card>

<Badge count={5}>
  <Button>Notifications</Button>
</Badge>

<Badge status="success" text="Active" />

<Alert 
  type="success"
  message="Success!"
  description="Operation completed successfully"
  showIcon
  closable
/>
```

### Theme System

```tsx
import { ThemeProvider, useTheme } from 'preact-components'

// Wrap your app
<ThemeProvider 
  defaultTheme="system"  // 'light' | 'dark' | 'system'
  defaultVariant="base"  // 'base' | 'sepia' | 'forest' | 'ocean'
>
  <App />
</ThemeProvider>

// Use theme in components
function MyComponent() {
  const { theme, setTheme, variant, setVariant } = useTheme()
  
  return (
    <div>
      <button onClick={() => setTheme('dark')}>Dark Mode</button>
      <button onClick={() => setVariant('forest')}>Forest Theme</button>
    </div>
  )
}
```

### Responsive Utilities

```tsx
// Display utilities
<div className="d-none d-md-block">Visible on tablet+</div>
<div className="d-block d-lg-none">Visible on mobile/tablet only</div>

// Flexbox utilities
<div className="d-flex flex-column flex-md-row justify-between">
  <div>Left</div>
  <div>Right</div>
</div>

// Text alignment
<p className="text-center text-lg-left">Responsive text alignment</p>

// Spacing utilities
<div className="mb-2 mb-md-4 mb-lg-6">Responsive margins</div>
```

## Theme Variants

The library includes 4 beautiful color palettes:

- **Base (Okha)** - Warm ochre and terracotta tones
- **Sepia** - Vintage brown and cream colors
- **Forest** - Natural greens and bark browns
- **Ocean** - Cool blues and aquamarines

Each variant supports both light and dark modes with WCAG AA compliant color contrasts.

## Responsive Breakpoints

```scss
xs: 480px   // Extra small - mobile phones
sm: 640px   // Small - large phones
md: 768px   // Medium - tablets
lg: 1024px  // Large - desktops
xl: 1280px  // Extra large - large desktops
2xl: 1536px // 2X large - wide monitors
```

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- IE11+ with polyfills

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build library
npm run build

# Type checking
npm run type-check
```

## Requirements

- Preact >= 10.27.2
- A bundler that supports ES modules (Vite, webpack, etc.)

## License

MIT

## Contributing

Contributions are welcome! Please read the [component design documentation](./component-system-design.md) for guidelines on implementing new components.
