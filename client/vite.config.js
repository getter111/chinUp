import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: '../server/public',
    emptyOutDir: true
  },
  server: {
    proxy: {
      '/gifts': {
        target: 'http://localhost:3001'
        //useful for avoiding CORS issues when frontend need to communicate 
        //with backend running on a different port.
      }
    }
  }
})
