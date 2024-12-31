import { defineConfig, mergeConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import configShared from '../../vitest.config'

export default mergeConfig(
  configShared,
  defineConfig({
    plugins: [react()],
    test: {
      globals: true,
      include: ['**/*.spec.tsx'],
      environment: 'jsdom',
      setupFiles: ['.vitest/setup.ts'],
    },
  })
);
