# Testing Documentation

## Overview

This project uses [Vitest](https://vitest.dev/) as the testing framework with comprehensive test coverage for all components.

## Test Coverage

### Current Coverage: 98.42%

- **Statements**: 98.42%
- **Branches**: 98.05%
- **Functions**: 98.21%
- **Lines**: 98.36%

### Component Coverage

| Component | Coverage |
|-----------|----------|
| Alert | 100% |
| Badge | 100% |
| Button | 100% |
| Card | 100% |
| Checkbox | 100% |
| Code | 100% |
| Col | 100% |
| Container | 100% |
| Div | 100% |
| Divider | 100% |
| Flex | 100% |
| Footer | 100% |
| Header | 100% |
| Heading | 100% |
| Input | 100% |
| Link | 100% |
| Logo | 100% |
| Main | 100% |
| Navbar | 100% |
| Paragraph | 100% |
| Radio | 100% |
| Row | 100% |
| Section | 100% |
| Select | 100% |
| Sidebar | 92.3% |
| Space | 100% |
| Switch | 100% |
| ThemeProvider | 100% |
| theme-types | 100% |

**Note**: Sidebar component has 92.3% coverage due to 3 lines of code that are unreachable through standard component interactions (mobile menu toggle logic that cannot be triggered because the toggle button doesn't render on mobile viewports).

## Running Tests

### Run all tests
```bash
npm test
```

### Run tests in watch mode
```bash
npm test -- --watch
```

### Run tests with coverage
```bash
npm run test:coverage
```

### Run tests with UI
```bash
npm run test:ui
```

## Test Structure

Tests are located in `src/tests/` directory with the following naming convention:
- `ComponentName.test.tsx` for component tests

### Test Setup

The test setup file (`src/tests/setup.ts`) configures:
- Automatic cleanup after each test
- Global test utilities from `@testing-library/jest-dom`
- Global `expect` function from Vitest

## Testing Stack

- **Test Runner**: [Vitest](https://vitest.dev/) v4.0.6
- **Testing Library**: [@testing-library/preact](https://testing-library.com/docs/preact-testing-library/intro/) v3.2.4
- **DOM Assertions**: [@testing-library/jest-dom](https://github.com/testing-library/jest-dom) v6.9.1
- **Test Environment**: [jsdom](https://github.com/jsdom/jsdom) v27.1.0
- **Coverage**: [@vitest/coverage-v8](https://vitest.dev/guide/coverage.html) v4.0.6

## Configuration

The Vitest configuration is in `vitest.config.ts`:

```typescript
{
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/tests/setup.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html', 'lcov'],
      include: ['src/components/**/*.{ts,tsx}'],
      exclude: [
        'src/components/**/index.ts',
        'src/components/**/styles/**',
        '**/*.d.ts',
        '**/node_modules/**',
      ],
      all: true,
    },
  },
}
```

## Writing Tests

### Example Test

```typescript
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/preact'
import { Button } from '../components/button/Button'

describe('Button', () => {
  it('renders button with children', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button')).toHaveTextContent('Click me')
  })

  it('applies variant classes', () => {
    const { container } = render(<Button variant="primary">Click</Button>)
    expect(container.querySelector('.btn--primary')).toBeInTheDocument()
  })
})
```

### Best Practices

1. **Test user interactions**: Focus on how users interact with components
2. **Use semantic queries**: Prefer `getByRole`, `getByLabelText` over `getByTestId`
3. **Test accessibility**: Ensure ARIA attributes and labels are correct
4. **Test edge cases**: Cover different prop combinations and states
5. **Keep tests isolated**: Each test should be independent

## Coverage Reports

Coverage reports are generated in the following formats:
- **Text**: Console output
- **HTML**: `coverage/index.html` (open in browser for detailed view)
- **JSON**: `coverage/coverage.json`
- **LCOV**: `coverage/lcov.info` (for CI/CD integration)

Coverage files are gitignored and not committed to the repository.

## CI/CD Integration

The test suite is designed to work in CI/CD environments. Example GitHub Actions workflow:

```yaml
- name: Run tests
  run: npm test -- --run

- name: Generate coverage
  run: npm run test:coverage

- name: Upload coverage to Codecov
  uses: codecov/codecov-action@v3
  with:
    files: ./coverage/lcov.info
```
