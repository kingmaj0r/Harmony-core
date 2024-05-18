import { defineConfig } from 'vite';
import path from 'path';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

export default defineConfig({
  plugins: [
    nodePolyfills(),
    {
      name: 'resolve-fs',
      resolveId(source, importer) {
        if (source === 'fs') {
          return path.resolve(__dirname, 'node_modules/browserify-fs/index.js');
        }
        return null;
      },
    },
  ],
  build: {
    outDir: 'dist',
    minify: true,
    emptyOutDir: false,
    sourcemap: true,
    lib: {
      entry: 'src/harmony.ts',
      formats: ['cjs', 'es'],
      fileName: (format) => `harmony.${format === 'es' ? 'mjs' : 'js'}`,
    },
  },
});