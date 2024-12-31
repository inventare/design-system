import { defineConfig, mergeConfig } from 'vitest/config'
import configShared from '../../vitest.config'

export default mergeConfig(configShared, defineConfig({
  test: {
    globals: true,
    include: ['**/*.test.ts'],
    environment: 'jsdom',
    setupFiles: ['.vitest/setup.ts'],
  },
}));
