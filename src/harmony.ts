import { Plugin, ResolvedConfig, ViteDevServer } from 'vite';
import consola from 'consola';
import express from 'express';
import path, { resolve } from 'path';
import fs from "fs";
import yaml from "js-yaml";

export function harmonyCore(): Plugin {
  return {
    name: 'harmony-core',
    configResolved(config: ResolvedConfig): void {
      config.build.outDir = './storage/dist';
      config.build.rollupOptions.input = './src/index.tsx';
      //config.build.rollupOptions.output.filename = 'vendor.[contenthash].js';
    },
    configureServer(server: ViteDevServer) {
      const app = express();

      console.clear();

      consola.start("Starting harmony frontend!")

      app.get('/config.yml', async (req, res) => {
        const configPath = path.resolve(__dirname, '../../../../../../config.yml');
        const config = yaml.load(await fs.promises.readFile(configPath, 'utf8'));
        res.send(config);
      })
      
      app.use(express.static(path.resolve(__dirname, '../../../public/')));
      app.use('/dist', express.static(path.resolve(__dirname, '../../')));

      app.get('*', (req, res) => {
        const indexFile = resolve(__dirname, '../../../public/index.html');
        res.sendFile(indexFile);
      });

      server.middlewares.use(app);

      return () => {
        consola.success('Harmony frontend started successfully!');
      };
    },
  }
}