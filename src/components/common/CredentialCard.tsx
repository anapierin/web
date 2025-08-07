import { ReactNode } from 'react'

export interface CredentialCardProps {
  icon: ReactNode
  title: string
  description?: string
  specialContent?: ReactNode
  colorScheme?: 'brand' | 'success'
  variant?: 'primary' | 'secondary' | 'tertiary'
}

const colorSchemes = {
  brand: {
    primary: {
      background: 'bg-brand-600',
      gradient: 'from-white to-brand-50/30',
      border: 'border-brand-100/50'
    },
    secondary: {
      background: 'bg-brand-500',
      gradient: 'from-white to-brand-50/30',
      border: 'border-brand-100/50'
    },
    tertiary: {
      background: 'bg-brand-700',
      gradient: 'from-white to-brand-50/30',
      border: 'border-brand-100/50'
    }
  },
  success: {
    primary: {
      background: 'bg-success-500',
      gradient: 'from-white to-success-50/30',
      border: 'border-success-100/50'
    },
    secondary: {
      background: 'bg-success-600',
      gradient: 'from-white to-success-50/30',
      border: 'border-success-100/50'
    },
    tertiary: {
      background: 'bg-success-700',
      gradient: 'from-white to-success-50/30',
      border: 'border-success-100/50'
    }
  }
}

export default function CredentialCard({
  icon,
  title,
  description,
  specialContent,
  colorScheme = 'brand',
  variant = 'primary'
}: CredentialCardProps) {
  const colors = colorSchemes[colorScheme][variant]

  return (
    <div className={`group bg-gradient-to-br ${colors.gradient} rounded-3xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-[1.02] border ${colors.border}`}>
      <div className="flex items-center gap-4 mb-4">
        <div className={`w-12 h-12 rounded-2xl ${colors.background} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
          <div className="w-6 h-6 text-white">
            {icon}
          </div>
        </div>
        <h3 className="heading-sm text-text-primary">
          {title}
        </h3>
      </div>
      
      {description && (
        <p className="text-lg text-brand-700 font-medium ml-14">
          {description}
        </p>
      )}
      
      {specialContent && (
        <div className="ml-14">
          {specialContent}
        </div>
      )}
    </div>
  )
}