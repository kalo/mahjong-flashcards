import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true,
  },
  base: "/mahjong-flashcards",
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({ registerType: 'autoUpdate' }),
  ],
})
