import '@testing-library/jest-dom'
import { expect, afterEach } from 'vitest'
import { cleanup } from '@testing-library/preact'

// Cleanup after each test
afterEach(() => {
  cleanup()
})

// Make expect available globally
globalThis.expect = expect
