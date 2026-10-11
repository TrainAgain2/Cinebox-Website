import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Cinebox-Website/',
  plugins: [react()],
  server: {
    allowedHosts: ['5173-iakn8vaqvge245zncm7ks-fb5ac805.us1.manus.computer'],
  },
})
