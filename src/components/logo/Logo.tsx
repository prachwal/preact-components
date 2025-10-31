import preactLogo from '../../assets/preact.svg'
import viteLogo from '/vite.svg'
import { Link } from '../link'

export function Logo() {
  return (
    <div>
      <Link href="https://vite.dev" target="_blank" rel="noopener noreferrer">
        <img src={viteLogo} class="logo" alt="Vite logo" />
      </Link>
      <Link href="https://preactjs.com" target="_blank" rel="noopener noreferrer">
        <img src={preactLogo} class="logo preact" alt="Preact logo" />
      </Link>
    </div>
  )
}