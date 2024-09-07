import react from '@vitejs/plugin-react';
import glob from 'fast-glob';
import fs from 'fs/promises';
import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { viteStaticCopy } from 'vite-plugin-static-copy';

const cfg = defineConfig({
  plugins: [
    react(),
    dts({
      outDir: '../dist/libs',
    }),
    viteStaticCopy({
      targets: [
        {
          src: '*/package.json',
          rename: (_name, _ext, srcPath) => {
            const dirName = path.dirname(srcPath).split(path.sep).pop();
            return `${dirName}/package.json`;
          },
          dest: '.',
        },
      ],
    }),
  ],
  build: {
    sourcemap: true,
    outDir: '../dist/libs',
    emptyOutDir: true,
    lib: {
      entry: {},
      formats: ['cjs'],
    },
    rollupOptions: {
      external: [/^react.*/, /^rxjs.*/, /^lodash.*/, /^@willikers.*/],
      output: {
        preserveModules: true,
      },
    },
  },
});

// #region Create the entry points for the libraries based on the package.json files' exports
const files = await glob('./*/package.json', { cwd: __dirname });
const entries = {};
for (const file of files) {
  const content = JSON.parse((await fs.readFile(file)).toString());
  const exports = content.exports;
  const folder = content.name.split('/')[1];

  for (const key in exports) {
    if (exports[key].default) {
      const newKey = key.replace(/^\.\//, '').replace(/\./, 'index');
      const filePath = path.resolve(__dirname, `${folder}/${exports[key].default}`.replace(/\.js$/, '.ts'));
      entries[`${folder}/src/${newKey}`] = filePath;
    }
  }
}
// @ts-ignore
cfg.build.lib.entry = entries;
// #endregion Create the entry points for the libraries based on the package.json files' exports

export default cfg;
