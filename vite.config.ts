import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import define from  './vite.defs.js'
import svgr from 'vite-plugin-svgr'
import dts from 'vite-plugin-dts'

export default defineConfig(
  ({ command }) => ({
    plugins: [
      react(),
      svgr(),
      dts({
        exclude: [
          'test',
          'website'
        ],
      })
    ],
    publicDir: command === 'build' ? false : 'public',
    define,
    test: {
      environment: 'jsdom',
      globals: true,
      setupFiles: './test/setup.ts',
      include: ['test/**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
      exclude: ['test/setup.ts', 'test/lib' ]
    },
    build: {
      // minify: true,
      sourcemap: true,
      lib: {
        entry: 'lib/index.tsx',
        name: '@abw/react-one-louder',
        fileName: 'react-one-louder',
      },
      rollupOptions: {
        external: [
          'react',
          'react-dom',
          'react/jsx-runtime'
        ],
        output: {
          globals: {
            'react': 'react',
            'react-dom': 'ReactDOM',
            'react/jsx-runtime': 'react/jsx-runtime',
          },
        },
      },
    },
  })
)