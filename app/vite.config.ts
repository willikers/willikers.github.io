import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 4200,
  },
  resolve: {
    alias: [
      { find: '@ui', replacement: path.resolve(__dirname, 'ui') },
      { find: '@examples', replacement: path.resolve(__dirname, 'src/examples') },
      { find: 'prismjs', replacement: path.resolve(__dirname, '../node_modules/prismjs') },
    ],
  },
  build: {
    outDir: '../dist/app',
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom'],
          utils: ['rxjs', 'lodash'],
          components: ['react-markdown', 'react-syntax-highlighter'],
        },
      },
    },
  },
});
