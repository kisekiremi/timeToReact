import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    // todo
    react()
  ],
  server: {
    host: 'localhost',
    port: 5566
  },
  optimizeDeps: {
    // force: true,
    // exclude: ['react', 'react-dom']
  },
  resolve: {
    alias: {
      //
    }
  }
})
