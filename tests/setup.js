export default {
  testEnvironment: 'node',
  setupFiles: ['./tests/setup.js'],
  testMatch: ['**/tests/**/*.test.{js,ts}'],
}

// package.json scripts addition
/*
Add these scripts to your package.json:
{
  "scripts": {
    "test:seo": "vitest run tests/seo-meta.test.js",
    "test:seo:watch": "vitest watch tests/seo-meta.test.js",
    "test:seo:ui": "vitest --ui tests/seo-meta.test.js"
  }
}
*/