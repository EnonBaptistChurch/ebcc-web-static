import { defineConfig } from 'vitest/config'
import { resolve } from 'path'

export default defineConfig({
  test: {
    environment: 'node',
    testTimeout: 60000,
    hookTimeout: 60000,
    teardownTimeout: 10000,
    reporters: ['verbose'],
  },
  resolve: {
    alias: {
      '~': resolve(__dirname, './'),
      '@': resolve(__dirname, './'),
    }
  }
})

