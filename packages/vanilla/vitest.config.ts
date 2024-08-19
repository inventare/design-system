import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    include: ['**/*.test.ts'],
    environment: 'jsdom',
    coverage: {
      provider: 'istanbul',
      exclude: [
        "**/*.stories.ts",
      ]
    },
    setupFiles: ['.vitest/setup.ts'],
  },
});
