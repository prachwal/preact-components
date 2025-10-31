import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import dts from 'vite-plugin-dts'

// https://vite.dev/config/
export default defineConfig({
  plugins: [preact(), dts({ include: ['src'], exclude: ['src/app.tsx'], tsconfigPath: './tsconfig.app.json' })],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'PreactComponents',
      fileName: 'index'
    },
    rollupOptions: {
      external: ['preact', 'preact/hooks'],
      output: {
        globals: {
          preact: 'preact',
          'preact/hooks': 'preact/hooks'
        }
      }
    }
  }
})
