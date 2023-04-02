import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './test/setup.js',
    include: ['test/**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    exclude: ['test/setup.js']
  },
  build: {
    minify: true,
    sourcemap: false,
    lib: {
      entry: 'lib/index.jsx',
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
