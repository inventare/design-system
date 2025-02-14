import { defineConfig } from 'vite'
import { resolve } from 'path';
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      tsconfigPath: './tsconfig.app.json',
      include: ['./src'],
      exclude: ['**/*.spec.ts', '**/*.spec.tsx', '**/*.stories.tsx', 'src/.vitest'],
    }),
  ],
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['cjs'],
      fileName: 'index'
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime'],
    },
  }
})
