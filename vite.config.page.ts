import { defineConfig } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
    nodePolyfills(),
  ],
  build: {
    outDir: 'public',
    minify: true,
    emptyOutDir: false,
    sourcemap: true,
    target: "esnext",
    lib: {
      entry: 'src/index.tsx',
      formats: ['es'],
      fileName: "assets/js/index",
    },
  },
  server: {
    fs: {
      strict: true,
    },
  },
});