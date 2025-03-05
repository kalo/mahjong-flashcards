import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'
import svgr from 'vite-plugin-svgr'


// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true,
  },
  base: "/mahjong-flashcards",
  plugins: [
    react(),
    svgr(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        "name": "Mahjong Tile Flashcards",
        "short_name": "MJ Tiles",
        "icons": [
          {
            "src": "/web-app-manifest-192x192.png",
            "sizes": "192x192",
            "type": "image/png",
            "purpose": "maskable"
          },
          {
            "src": "/web-app-manifest-512x512.png",
            "sizes": "512x512",
            "type": "image/png",
            "purpose": "maskable"
          }
        ],
        theme_color: "#ffffff",
        background_color: "#484848",
        start_url: `/mahjong-flashcards/?v=${Math.floor(Date.now() / 1000)}`,
        display: "standalone"
      }
    }),
  ],
})
