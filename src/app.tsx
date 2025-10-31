import { useState, useEffect } from 'preact/hooks'
import {
  Button, Logo, Link, Code, Paragraph, Heading,
  Header, Main, Section, Footer, ThemeProvider, useTheme,
  Div, type ThemeVariant
} from '@/components'

function ThemeSwitcher() {
  const { theme, setTheme, variant, setVariant } = useTheme();

  const handleThemeChange = (newTheme: 'light' | 'dark' | 'system') => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const handleVariantChange = (newVariant: ThemeVariant) => {
    setVariant(newVariant);
    localStorage.setItem('variant', newVariant);
  };

  return (
    <Div className="mb-3">
      <Heading level={3}>Theme Mode</Heading>
      <Div className="flex gap-2 justify-center mb-3">
        <Button 
          size="sm" 
          variant={theme === 'light' ? 'primary' : undefined}
          onClick={() => handleThemeChange('light')}
        >
          ☀️ Light
        </Button>
        <Button 
          size="sm" 
          variant={theme === 'dark' ? 'primary' : undefined}
          onClick={() => handleThemeChange('dark')}
        >
          🌙 Dark
        </Button>
        <Button 
          size="sm" 
          variant={theme === 'system' ? 'primary' : undefined}
          onClick={() => handleThemeChange('system')}
        >
          💻 System
        </Button>
      </Div>

      <Heading level={3}>Color Variant</Heading>
      <Div className="flex gap-2 justify-center mb-2">
        <Button 
          size="sm" 
          variant={variant === 'base' ? 'secondary' : undefined}
          onClick={() => handleVariantChange('base')}
        >
          🎨 Base
        </Button>
        <Button 
          size="sm" 
          variant={variant === 'sepia' ? 'secondary' : undefined}
          onClick={() => handleVariantChange('sepia')}
        >
          📜 Sepia
        </Button>
        <Button 
          size="sm" 
          variant={variant === 'forest' ? 'secondary' : undefined}
          onClick={() => handleVariantChange('forest')}
        >
          🌲 Forest
        </Button>
        <Button 
          size="sm" 
          variant={variant === 'ocean' ? 'secondary' : undefined}
          onClick={() => handleVariantChange('ocean')}
        >
          🌊 Ocean
        </Button>
      </Div>
      <Paragraph className="p-small p-muted">
        Current: {theme} mode, {variant} variant
      </Paragraph>
    </Div>
  );
}

export function App() {
  const [count, setCount] = useState(0);
  const [defaultTheme, setDefaultTheme] = useState<'light' | 'dark' | 'system'>('system');
  const [defaultVariant, setDefaultVariant] = useState<ThemeVariant>('base');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | 'system' | null;
    const savedVariant = localStorage.getItem('variant') as ThemeVariant | null;
    
    if (savedTheme) {
      setDefaultTheme(savedTheme);
    }
    if (savedVariant) {
      setDefaultVariant(savedVariant);
    }
  }, []);

  return (
    <ThemeProvider defaultTheme={defaultTheme} defaultVariant={defaultVariant}>
      <Header>
        <Logo />
      </Header>
      <Main>
        <Heading level={1}>Vite + Preact</Heading>
        <Section class="card">
          <ThemeSwitcher />
          <Button type="button" variant="primary" onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </Button>
          <Paragraph>
            Edit <Code inline={true}>src/app.tsx</Code> and save to test HMR
          </Paragraph>
        </Section>
        <Paragraph>
          Check out{' '}
          <Link
            href="https://preactjs.com/guide/v10/getting-started#create-a-vite-powered-preact-app"
            target="_blank" rel="noopener noreferrer"
          >
            create-preact
          </Link>
          , the official Preact + Vite starter
        </Paragraph>
      </Main>
      <Footer>
        <Paragraph class="read-the-docs">
          Click on the Vite and Preact logos to learn more
        </Paragraph>
      </Footer>
    </ThemeProvider>
  )
}
