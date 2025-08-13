import Link from 'next/link'
import { ReactNode } from 'react'

export interface CTASectionProps {
  title: string
  subtitle: string
  buttonText: string
  buttonHref: string
  buttonIcon?: ReactNode
  secondaryButtonText?: string
  secondaryButtonHref?: string
  className?: string
}

const defaultIcon = (
  <svg
    className="w-5 h-5"
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
)

export default function CTASection({
  title,
  subtitle,
  buttonText,
  buttonHref,
  buttonIcon = defaultIcon,
  secondaryButtonText,
  secondaryButtonHref,
  className = '',
}: CTASectionProps) {
  return (
    <div
      className={`bg-brand-50 rounded-2xl p-8 pt-10 md:pt-12 md:p-10 shadow-soft border border-brand-100 text-center ${className}`}
    >
      <h3 className="heading-md text-text-primary mb-6">{title}</h3>
      <p className="text-lg text-text-secondary mb-10 max-w-2xl mx-auto leading-relaxed">
        {subtitle}
      </p>
      <div className="flex flex-col sm:flex-row gap-5 justify-center">
        <Link
          href={buttonHref}
          className="btn-primary group flex gap-x-2 justify-center items-center"
        >
          {buttonIcon}
          <span>{buttonText}</span>
        </Link>
        {secondaryButtonText && secondaryButtonHref && (
          <Link
            href={secondaryButtonHref}
            className="btn-secondary group flex gap-x-2 justify-center items-center"
          >
            <span>{secondaryButtonText}</span>
          </Link>
        )}
      </div>
    </div>
  )
}
