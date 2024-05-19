import { defineConfig } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
    nodePolyfills(),
  ],
  build: {
    outDir: 'dist',
    minify: true,
    emptyOutDir: false,
    sourcemap: true,
    lib: {
      entry: 'src/index.tsx',
      formats: ['es'],
      fileName: "index",
    },
  },
});