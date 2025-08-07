import { ReactNode } from 'react'

export interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  colorScheme?: 'brand-primary' | 'brand-secondary' | 'success'
  className?: string
}

const colorSchemes = {
  'brand-primary': 'bg-brand-600',
  'brand-secondary': 'bg-brand-500',
  'success': 'bg-success-500'
}

export default function FeatureCard({
  icon,
  title,
  description,
  colorScheme = 'brand-primary',
  className = ''
}: FeatureCardProps) {
  return (
    <div className={`text-center group ${className}`}>
      <div className={`w-24 h-24 ${colorSchemes[colorScheme]} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform duration-300 shadow-medium`}>
        <div className="w-12 h-12 text-white">
          {icon}
        </div>
      </div>
      <h3 className="heading-sm text-text-primary mb-4">
        {title}
      </h3>
      <p className="text-body leading-relaxed">
        {description}
      </p>
    </div>
  )
}