import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    exclude: ['scheduler'], // Виключити модуль scheduler
  },
  plugins: [react()]
})
