import { describe, it, expect } from 'vitest';
import { harmonyCore } from '../harmony';

describe('harmony-core plugin', () => {
  it('should configure the Vite build correctly', async () => {
    const plugin = harmonyCore();
    const config = {
      build: {
        outDir: '',
        rollupOptions: {
          input: '',
          output: {
            filename: '',
          },
        },
      },
    };

    plugin.configResolved(config as any);

    expect(config.build.outDir).toBe('./storage/dist');
    expect(config.build.rollupOptions.input).toBe('./src/index.tsx');
    // expect(config.build.rollupOptions.output.filename).toBe('vendor.[contenthash].js');
  });
});