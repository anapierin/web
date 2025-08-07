import { ReactNode } from 'react'

export interface ServiceCardProps {
  icon?: ReactNode
  title: string
  description: string
  className?: string
}

export default function ServiceCard({
  icon,
  title,
  description,
  className = '',
}: ServiceCardProps) {
  return (
    <div className={`card fade-in group ${className}`}>
      <div className="flex items-center space-x-6 justify-center">
        {icon && (
          <div className="w-20 h-20 bg-brand-600 rounded-2xl flex items-center justify-center text-white group-hover:bg-brand-500 transition-colors duration-300 flex-shrink-0 shadow-medium">
            <div className="w-10 h-10 text-white">{icon}</div>
          </div>
        )}
      </div>
      <div className="flex-1 space-y-4">
        <h3 className="heading-sm text-text-primary group-hover:text-brand-600 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-body leading-relaxed">{description}</p>
      </div>
    </div>
  )
}
