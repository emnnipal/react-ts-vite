/// <reference types="vitest" />

import { defineConfig } from 'vite';
import { dependencies } from './package.json';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';
import viteCompression from 'vite-plugin-compression';
import dotenv from 'dotenv';

dotenv.config();

export default ({ mode }) => {
  return defineConfig({
    plugins: [
      react({
        fastRefresh: process.env.NODE_ENV !== 'test',
      }),
      tsconfigPaths(),
      svgr({
        svgrOptions: {
          icon: true,
        },
      }),
      viteCompression({
        verbose: false,
        algorithm: 'gzip',
        ext: '.gz',
      }),
      viteCompression({
        verbose: true,
        algorithm: 'brotliCompress',
        ext: '.br',
      }),
    ],
    base: '/',
    server: {
      port: Number(process.env.PORT || 3001),
    },
    preview: {
      port: 8080,
    },
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: 'src/setupTests.ts',
    },
    build: {
      outDir: 'build',
      reportCompressedSize: false,
      sourcemap: false,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-router-dom', 'react-dom'],
            ...renderChunks(dependencies),
          },
        },
      },
    },
    // NOTE: handle env variables here if you're using jest since import.meta conflicts with jest
    define: {
      'process.env.MODE': `"${mode}"`,
      // 'process.env.VITE_ENV': `"${process.env.VITE_ENV}"`,
      // 'process.env.VITE_API_URL': `"${process.env.VITE_API_URL}"`,
      // 'process.env.VITE_SECRET_KEY': `"${process.env.VITE_SECRET_KEY}"`,
    },
  });
};

function renderChunks(deps: Record<string, string>) {
  let chunks = {};
  for (const key in deps) {
    if (!['react', 'react-router-dom', 'react-dom'].includes(key)) {
      chunks[key] = [key];
    }
  }
  return chunks;
}
