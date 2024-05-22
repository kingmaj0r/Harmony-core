import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import dts from 'vite-plugin-dts';
import commonjs from '@rollup/plugin-commonjs';

export default defineConfig({
  plugins: [
    react(),
    nodePolyfills(),
    dts(),
    commonjs({
      transformMixedEsModules: false,
    }),
  ],
  build: {
    outDir: 'dist',
    minify: true,
    emptyOutDir: false,
    sourcemap: true,
    lib: {
      entry: ['src/index.tsx', 'src/harmony.ts', 'src/app.tsx'],
      name: 'harmony-core',
      formats: ['es', 'cjs'],
      fileName: (format) => `assets/js/[name].${format === 'es' ? 'js' : 'cjs'}`,
    },
    rollupOptions: {
      external: ['express', 'fs', 'consola'],
      output: {
        globals: {
          react: 'react',
          'react-dom': 'react-dom',
          mysql2: 'mysql2',
          express: 'express',
          consola: 'consola',
        },
      },
    }
  },
  test: {
		globals: true,
		environment: "jsdom",
		setupFiles: "@testing-library/jest-dom",
	},
});
