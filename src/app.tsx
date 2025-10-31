import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <nav>
          <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
            <img src={viteLogo} class="logo" alt="Vite logo" />
          </a>
          <a href="https://preactjs.com" target="_blank" rel="noopener noreferrer">
            <img src={preactLogo} class="logo preact" alt="Preact logo" />
          </a>
        </nav>
      </header>
      <main>
        <h1>Vite + Preact</h1>
        <section class="card">
          <button type={'button'} onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/app.tsx</code> and save to test HMR
          </p>
        </section>
        <p>
          Check out{' '}
          <a
            href="https://preactjs.com/guide/v10/getting-started#create-a-vite-powered-preact-app"
            target="_blank" rel="noopener noreferrer"
          >
            create-preact
          </a>
          , the official Preact + Vite starter
        </p>
      </main>
      <footer>
        <p class="read-the-docs">
          Click on the Vite and Preact logos to learn more
        </p>
      </footer>
    </>
  )
}
