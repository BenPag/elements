import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    react(), // in case of error use { jsxRuntime: 'classic' }
    viteStaticCopy({
      targets: [
        {
          src: 'src/patterns/**/**/*.html',
          dest: '../../landingpage/public/patterns-html',
        },
      ],
    }),
    dts({
      outDir: 'dist/types',
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es'],
    },
    /* TODO: optimize bundle by externalizing react
    rollupOptions: {
      external: ['react', 'react-dom', '@inovex.de/elements-react', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          '@inovex.de/elements-react': '@inovex.de/elements-react' ,
          'react/jsx-runtime': 'react/jsx-runtime'
        },
      },
    },
     */
  },
});