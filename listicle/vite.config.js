import { defineConfig } from 'vite'

export default defineConfig({
  root: 'public',
  build: {
    outDir: '../../server/public',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: 'index.html',
        pattern: 'pattern.html',
        notfound: '404.html'
      }
    }
  },
  server: {
    proxy: {
      '/patterns': {
        target: 'http://localhost:3001',
        changeOrigin: true
      }
    }
  }
})