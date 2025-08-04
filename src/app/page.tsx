import { Metadata } from 'next'

import {
  Header,
  Footer,
  Animations,
  Hero,
  About,
  Services,
  Testimonials,
  Contact,
} from '../components'

import {
  NAME,
  ORTHOPEDIST_TITLE,
  SPECIALIST_DESCRIPTION,
  CRM_PR_NUMBER,
  RQE_NUMBER,
  ORTOHAUER_NAME,
  DAGOSTINI_NAME,
  PHONE_DISPLAY,
  EMAIL_URL,
  INSTAGRAM_URL,
  FACEBOOK_URL,
} from '@/lib/constants'

export const metadata: Metadata = {
  title: `${NAME} - ${ORTHOPEDIST_TITLE}`,
  description: `${SPECIALIST_DESCRIPTION} oferecendo tratamentos minimamente invasivos para tratamento da dor. CRM/PR ${CRM_PR_NUMBER}, RQE ${RQE_NUMBER}. Atendimento em ${ORTOHAUER_NAME} e ${DAGOSTINI_NAME}.`,
  keywords: [
    'ortopedista',
    'traumatologista',
    'curitiba',
    'lapa',
    'tratamento da dor',
    'infiltração articular',
    'terapia por ondas de choque',
    'bloqueio anestésico',
    'cirurgia ortopédica',
    'medicina esportiva',
    'cannabis medicinal',
    'ortopedia esportiva',
    'dor crônica',
    'lesões musculares',
    'artrose',
    'artrite',
    'CRM PR',
    'RQE',
    'ortopedista curitiba',
    'ortopedista lapa',
    'doutor ana pierin',
    'dra ana pierin',
  ].join(', '),
  authors: [{ name: NAME }],
  creator: NAME,
  publisher: NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://draanapierin.com.br'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: `${NAME} - ${ORTHOPEDIST_TITLE}`,
    description: `${SPECIALIST_DESCRIPTION} oferecendo tratamentos minimamente invasivos para tratamento da dor. Atendimento em Curitiba e Lapa.`,
    url: 'https://draanapierin.com.br',
    siteName: NAME,
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/shared/hero.JPEG',
        width: 1200,
        height: 630,
        alt: `${NAME} - ${ORTHOPEDIST_TITLE}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${NAME} - ${ORTHOPEDIST_TITLE}`,
    description: `${SPECIALIST_DESCRIPTION} oferecendo tratamentos minimamente invasivos para tratamento da dor.`,
    images: ['/shared/hero.JPEG'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // TODO: Replace with actual verification code
  },
  other: {
    'contact:phone': PHONE_DISPLAY,
    'contact:email': EMAIL_URL.replace('mailto:', ''),
    'contact:instagram': INSTAGRAM_URL,
    'contact:facebook': FACEBOOK_URL,
    'medical:specialty': ORTHOPEDIST_TITLE,
    'medical:crm': `CRM/PR ${CRM_PR_NUMBER}`,
    'medical:rqe': `RQE ${RQE_NUMBER}`,
    'medical:locations': `${ORTOHAUER_NAME}, ${DAGOSTINI_NAME}`,
  },
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
      <Animations />
    </>
  )
}
