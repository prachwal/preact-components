# preact-components

A collection of reusable Preact components with SCSS styling.

## Installation

```bash
npm install preact-components
```

## Usage

### Basic Component Usage

```tsx
import { Button } from 'preact-components'

function MyApp() {
  return (
    <div>
      <h1>My App</h1>
      <Button onClick={() => alert('Hello!')}>Click me</Button>
    </div>
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

```tsx
import './styles/main.scss' // Includes package styles
import { Button } from 'preact-components'

function MyApp() {
  return <Button className="my-custom-button">Custom Button</Button>
}
```

## Available Components

- `Button` - A styled button component

## Requirements

- Preact >= 10.27.2
- A bundler that supports ES modules (Vite, webpack, etc.)

## License

MIT
