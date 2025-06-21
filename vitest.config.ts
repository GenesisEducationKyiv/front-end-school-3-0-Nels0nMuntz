import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    setupFiles: ['./test/integration/setup.ts'],
  },
  resolve: {
    alias: {
      '@': new URL('./src', import.meta.url).pathname
    }
  }
}) 