import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import define from  './vite.defs.js'

export default defineConfig({
  plugins: [react()],
  base: '/react-one-louder/',
  define
})
