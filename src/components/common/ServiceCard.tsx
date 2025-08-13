export interface ServiceCardProps {
  title: string
  description: string
  className?: string
}

export default function ServiceCard({
  title,
  description,
  className = '',
}: ServiceCardProps) {
  return (
    <div className={`card fade-in group ${className}`}>
      <div className="flex flex-col items-center justify-items-stretch flex-1 space-y-4 size-full">
        <h3 className="heading-sm text-text-primary group-hover:text-brand-600 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-body leading-relaxed mb-0">{description}</p>
      </div>
    </div>
  )
}
