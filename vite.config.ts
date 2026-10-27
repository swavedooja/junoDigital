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
    // Raise warning threshold to reduce noise (we're splitting properly)
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        // Manual chunk splitting: vendor libs separate from app code
        manualChunks: (id) => {
          // MUI icons are large — split into their own chunk
          if (id.includes('@mui/icons-material')) {
            return 'mui-icons';
          }
          // MUI core + emotion
          if (id.includes('@mui/material') || id.includes('@emotion')) {
            return 'mui-core';
          }
          // React runtime
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'react-vendor';
          }
        },
      },
    },
  },
})
