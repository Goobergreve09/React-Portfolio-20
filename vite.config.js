import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8888, // Your custom server port
    open: true  // Opens browser automatically on server start
  },
  build: {
    sourcemap: false,  // Disable source maps for development to reduce memory usage
  }
})

