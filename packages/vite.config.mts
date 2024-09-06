import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    react(),
    dts({
      outDir: '../dist/libs',
    }),
    viteStaticCopy({
      targets: [
        {
          src: '*/package.json',
          dest: './*',
        },
      ],
    }),
  ],
  build: {
    sourcemap: true,
    outDir: '../dist/libs',
    emptyOutDir: true,
    lib: {
      entry: {
        'dom/src/dom': path.resolve(__dirname, 'dom/src/class-list.ts'),
        'forms/src/index': path.resolve(__dirname, 'forms/package.json'),
        'rxjs/src/rxjs': path.resolve(__dirname, 'rxjs/package.json'),
        'state/src/state': path.resolve(__dirname, 'state/package.json'),
        'storage/src/storage': path.resolve(__dirname, 'storage/package.json'),
        'url/src/url': path.resolve(__dirname, 'url/package.json'),
        'utils/src/utils': path.resolve(__dirname, 'utils/package.json'),
      },
      // entry: {
      //   'dom/select-node': path.resolve(__dirname, 'src/dom/select-node.ts'),
      //   'dom/select-nodes': path.resolve(__dirname, 'src/dom/select-nodes.ts'),
      //   'dom/class-list': path.resolve(__dirname, 'src/dom/class-list.ts'),
      //   'storage/cookies': path.resolve(__dirname, 'src/storage/cookies.ts'),
      //   'storage/local-storage': path.resolve(__dirname, 'src/storage/local-storage.ts'),
      //   'storage/session-storage': path.resolve(__dirname, 'src/storage/session-storage.ts'),
      //   'url/hash': path.resolve(__dirname, 'src/url/hash.ts'),
      //   'url/history': path.resolve(__dirname, 'src/url/history.ts'),
      //   'url/pathname': path.resolve(__dirname, 'src/url/pathname.ts'),
      //   'url/search-params': path.resolve(__dirname, 'src/url/search-params.ts'),
      //   'rxjs/debounce-time': path.resolve(__dirname, 'src/rxjs/debounce-time.ts'),
      //   'rxjs/audit-time': path.resolve(__dirname, 'src/rxjs/audit-time.ts'),
      //   'rxjs/throttle-time': path.resolve(__dirname, 'src/rxjs/throttle-time.ts'),
      //   'state/root-state': path.resolve(__dirname, 'src/state/root-state.ts'),
      //   'state/index': path.resolve(__dirname, 'src/state/index.ts'),
      //   'forms/index': path.resolve(__dirname, 'src/forms/index.ts'),
      // },
      formats: ['cjs'],
    },
    rollupOptions: {
      external: [/^react.*/, /^rxjs.*/, /^lodash.*/],
      output: {
        preserveModules: true,
      },
    },
  },
});
