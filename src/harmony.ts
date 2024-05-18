import { Plugin, UserConfig, ResolvedConfig, ViteDevServer } from 'vite';
import fs = require('fs');
import path = require('path');

export function harmonyCore(): Plugin {
  return {
    name: 'harmony-core',
    configResolved(resolvedConfig: ResolvedConfig): void {
      const updatedConfig: ResolvedConfig = {
        ...resolvedConfig,
        build: {
          outDir: './storage/dist',
          rollupOptions: {
            input: './src/index.tsx',
            output: {
              filename: 'vendor.[contenthash].js',
            },
          }
        }
      };

      Object.assign(resolvedConfig, updatedConfig);
    },
    configureServer(server: ViteDevServer) {
      return () => {
        const index = path.join(__dirname, '../dist/index.html');

        server.middlewares.use((req, res, next) => {
          if (req.url === '/index.html') {
            try {
              const indexContent = fs.readFileSync(index, 'utf-8');
              res.setHeader('Content-Type', 'text/html');
              res.end(indexContent);
            } catch (err) {
              console.error('Error reading index.html:', err);
              next(err);
            }
          } else {
            next();
          }
        });
      };
    },
  }
}