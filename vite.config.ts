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
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: "Mahjong Tile Flashcards",
        short_name: "Tiles",
        description: "An app for learning mahjong tiles",
        display: "standalone",
        start_url: "/?v=342025",
      }
    }),
  ],
})
