import { render } from 'preact'
import '@/styles/index.scss'
import { App } from '@/app-demo.tsx'

render(<App />, document.getElementById('app')!)
