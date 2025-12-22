import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true,
    allowedHosts: [
      'unhomologized-alludingly-malika.ngrok-free.dev',
      '.ngrok-free.dev',
      '.ngrok.io',
      '.ngrok-free.app'
    ]
  }
})
