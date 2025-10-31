import { useState } from 'preact/hooks'
import { Button, Logo, Link, Code, Paragraph, Heading, Header, Main, Section, Footer } from './components'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header>
        <Logo />
      </Header>
      <Main>
        <Heading level={1}>Vite + Preact</Heading>
        <Section class="card">
          <Button type={'button'} onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </Button>
          <Paragraph>
            Edit <Code>src/app.tsx</Code> and save to test HMR
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
    </>
  )
}
