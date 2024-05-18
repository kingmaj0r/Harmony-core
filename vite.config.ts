import { defineConfig } from 'vite';
import path from 'path';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    nodePolyfills(),
    dts(),
  ],
  build: {
    outDir: 'dist',
    minify: true,
    emptyOutDir: false,
    sourcemap: true,
    lib: {
      entry: 'src/harmony.ts',
      name: 'harmony-core',
      formats: ['cjs', 'es'],
      fileName: (format) => `harmony.${format === 'es' ? 'mjs' : 'js'}`,
    },
  },
});