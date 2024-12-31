import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import define from  './vite.defs.js'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [react(), svgr()],
  base: '/react-one-louder',
  define,
  root: 'src',
  envDir: '../',
  build: {
    emptyOutDir: true,
    outDir: '../docs'
  },
})
