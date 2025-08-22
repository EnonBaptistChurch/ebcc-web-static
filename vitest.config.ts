import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
  // Nuxt 4 automatically handles module resolution and aliases
  test: {
    environment: 'nuxt',
    // your other test configuration
  }
})