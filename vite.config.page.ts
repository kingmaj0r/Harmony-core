import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    minify: true,
    emptyOutDir: false,
    sourcemap: true,
    lib: {
      entry: 'src/index.tsx',
      formats: ['cjs'],
      fileName: "index",
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
    },
  },
});