import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Dra. Ana Pierin - Ortopedista e Traumatologista',
    short_name: 'Dra. Ana Pierin',
    description:
      'Especialista em Ortopedia e Traumatologia oferecendo tratamentos minimamente invasivos para tratamento da dor.',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    background_color: '#F7F5F2',
    theme_color: '#113652',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/assets/logo.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
    ],
  }
}
