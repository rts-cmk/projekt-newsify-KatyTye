import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr"
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr()
  ],
  build: {
    outDir: 'docs',
  },
  base: './',
  server: {
    proxy: {
      '/nyt': {
        target: 'https://api.nytimes.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/nyt/, ''),
      },
    },
  },
})
