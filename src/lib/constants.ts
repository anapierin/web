export const DOMAIN = 'https://www.draanapierin.com.br'

// Personal information
export const NAME = 'Dra. Ana Pierin'
export const SPECIALTY = 'Médica Ortopedista'
export const FOCUS =
  'Ortopedia Esportiva e dor e prescritora de Cannabis Medicinal'

// Professional registration numbers
export const CRM_PR_NUMBER = '40.412' // Conselho Regional de Medicina do Paraná
export const RQE_NUMBER = '34117' // Registro de Qualificação de Especialista

// Professional titles and descriptions
export const ORTHOPEDIST_TITLE = 'Ortopedista e Traumatologista'
export const SPECIALIST_DESCRIPTION =
  'Especialista em Ortopedia e Traumatologia'
export const PROFESSIONAL_DESCRIPTION =
  'Ortopedista e Traumatologista especializada em tratamentos minimamente invasivos para tratamento da dor.'

// Social media links
export const EMAIL_URL = 'mailto:ana.pierin@gmail.com'
export const LINKEDIN_URL = 'https://www.linkedin.com/in/ana-pierin/'
export const INSTAGRAM_URL = 'https://www.instagram.com/anapierin.ortopedia/'
export const FACEBOOK_URL =
  'https://www.facebook.com/people/Ana-Pierin-Ortopedia-e-Traumatologia/61557170002194/'

const WHATSAPP_MESSAGE = encodeURIComponent(
  `Olá! Vim pelo site da ${NAME} e gostaria de agendar uma consulta.`
)

const buildWhatsAppUrl = (phone: string) =>
  `https://wa.me/${phone}?text=${WHATSAPP_MESSAGE}`

// WhatsApp links
export const WHATSAPP_DOCTOR_URL =
  buildWhatsAppUrl('5541991001372') // Doctor's WhatsApp
export const WHATSAPP_ORTOHAUER_URL =
  buildWhatsAppUrl('5541984881372') // OrtoHauer Clinic
export const WHATSAPP_DAGOSTINI_URL =
  buildWhatsAppUrl('5541996767400') // Dagostini Clinic
export const WHATSAPP_EUROLUX_URL =
  buildWhatsAppUrl('554137730373') // Eurolux Clinic

// Legacy WhatsApp links (keeping for backward compatibility)
export const WHATSAPP_CANNABIS_URL = 'http://wa.link/5mklj4' // Teleconsulta Cannabis Medicinal
export const WHATSAPP_CURITIBA_ORTOHAUER_URL = 'http://wa.link/lur15p' // Curitiba – OrtoHauer
export const WHATSAPP_LAPA_DAGOSTINI_URL = 'https://wa.link/biipul' // Lapa – Clínica Dagostini

// Site & Contact Info

export const SITE_NAME = 'Dra. Ana Pierin'

// Secretary phone number (we are not going to expose doctor phone number)
export const SECRETARY_PHONE_DISPLAY = '(41) 98488-1372'
export const SECRETARY_PHONE_NUMBER = '+5541984881372'

// Clinic addresses and contact information
export const ORTOHAUER_NAME = 'OrtoHauer - Curitiba'
export const ORTOHAUER_ADDRESS =
  'Rua Alcino Guanabara, 945 - Hauer, Curitiba PR'
export const ORTOHAUER_DIRECT_PHONE = '(41) 98861-5954'

export const EUROLUX_PHONE = '(41) 3773-0373'
export const EUROLUX_PHONE_NUMBER = '+554137730373'
export const ORTOHAUER_PHONE = SECRETARY_PHONE_DISPLAY
export const ORTOHAUER_PHONE_NUMBER = SECRETARY_PHONE_NUMBER

export const DAGOSTINI_NAME = "Clínica D'Agostini - Lapa"
export const DAGOSTINI_ADDRESS =
  'Rua Tenente Henrique dos Santos, 360 - Centro, Lapa PR'
export const DAGOSTINI_PHONE = '(41) 99676-7400'
export const DAGOSTINI_PHONE_NUMBER = '+5541996767400'

// Statistics
export const EXPERIENCE_YEARS = '7+'
export const PATIENTS_TREATED = '2000+'
export const LOCATIONS_COUNT = '2'

// Navigation links
export const NAV_LINKS = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#tratamentos', label: 'Tratamentos' },
  { href: '#contato', label: 'Contato' },
]
