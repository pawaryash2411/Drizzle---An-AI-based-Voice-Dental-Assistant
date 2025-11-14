import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Drizzle AI Voice Dental Assistant',
    short_name: 'Drizzle AI',
    description: 'AI-powered voice dental assistant for modern dental practices',
    start_url: '/',
    display: 'standalone',
    background_color: '#06060e',
    theme_color: '#06060e',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      // Add more icon sizes as needed
      // {
      //   src: '/icon-192.png',
      //   sizes: '192x192',
      //   type: 'image/png',
      // },
      // {
      //   src: '/icon-512.png',
      //   sizes: '512x512',
      //   type: 'image/png',
      // },
    ],
  }
}

