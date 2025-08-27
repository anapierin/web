import './globals.css'

import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Dra. Ana Pierin - Ortopedista e Traumatologista',
    template: '%s | Dra. Ana Pierin',
  },
  description:
    'Especialista em Ortopedia e Traumatologia oferecendo tratamentos minimamente invasivos para tratamento da dor. Atendimento em Curitiba e Lapa.',
  keywords: [
    'ortopedista',
    'traumatologista',
    'curitiba',
    'lapa',
    'tratamento da dor',
    'infiltração articular',
    'terapia por ondas de choque',
  ],
  authors: [{ name: 'Dra. Ana Pierin' }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Dra. Ana Pierin - Ortopedista e Traumatologista',
    description:
      'Especialista em Ortopedia e Traumatologia oferecendo tratamentos minimamente invasivos para tratamento da dor.',
    type: 'website',
    locale: 'pt_BR',
    url: '/',
    siteName: 'Dra. Ana Pierin',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Dra. Ana Pierin - Ortopedista e Traumatologista',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dra. Ana Pierin - Ortopedista e Traumatologista',
    description:
      'Especialista em Ortopedia e Traumatologia oferecendo tratamentos minimamente invasivos para tratamento da dor.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-brand-50 text-text-primary`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
