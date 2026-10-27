import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import compression from 'vite-plugin-compression'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Generate gzip compressed assets (.gz) for servers that support it
    compression({ algorithm: 'gzip', ext: '.gz', threshold: 1024 }),
    // Generate brotli compressed assets (.br) — smaller than gzip
    compression({ algorithm: 'brotliCompress', ext: '.br', threshold: 1024 }),
  ],
  base: '/',
  build: {
    chunkSizeWarningLimit: 1000,
  },
})
