import Link from 'next/link'
import { ReactNode } from 'react'

export interface LocationCardProps {
  icon?: ReactNode
  name: string
  address: string
  phoneDisplay: string
  phoneNumber: string
  whatsappUrl?: string
  scheduleHref?: string
  scheduleText?: string
  colorScheme?: 'brand' | 'brand-secondary'
  className?: string
}

const locationIcon = (
  <svg
    className="w-12 h-12"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
)

export default function LocationCard({
  icon = locationIcon,
  name,
  address,
  phoneDisplay,
  phoneNumber,
  whatsappUrl,
  scheduleHref = '#contact',
  scheduleText = 'Agendar',
  colorScheme = 'brand',
  className = '',
}: LocationCardProps) {
  const colors = {
    brand: 'bg-brand-600',
    'brand-secondary': 'bg-brand-500',
  }

  return (
    <div className={`card space-y-8 p-8 ${className}`}>
      <div className="flex items-center space-x-6">
        <div
          className={`w-24 h-24 ${colors[colorScheme]} rounded-3xl flex items-center justify-center text-white flex-shrink-0 shadow-large`}
        >
          {icon}
        </div>
        <div className="flex-1 space-y-4">
          <h3 className="heading-sm text-text-primary">{name}</h3>
          <p className="text-text-secondary leading-relaxed">{address}</p>
          <p className="text-lg font-semibold text-brand-600">{phoneDisplay}</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href={whatsappUrl || `tel:${phoneNumber}`}
          target={whatsappUrl ? '_blank' : undefined}
          rel={whatsappUrl ? 'noopener noreferrer' : undefined}
          className="btn-primary flex items-center justify-center gap-2 flex-1 text-sm"
        >
          {whatsappUrl ? (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
            </svg>
          ) : (
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
          )}
          {whatsappUrl ? 'WhatsApp' : phoneDisplay}
        </Link>
        <Link
          href={scheduleHref}
          className="btn-secondary flex items-center justify-center gap-2 flex-1 text-sm"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          {scheduleText}
        </Link>
      </div>
    </div>
  )
}
