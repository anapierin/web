export interface StatCardProps {
  value: string | number
  label: string
  className?: string
}

export default function StatCard({ 
  value, 
  label, 
  className = '' 
}: StatCardProps) {
  return (
    <div className={`text-center ${className}`}>
      <div className="text-3xl lg:text-4xl font-bold text-brand-600 mb-3">
        {value}
      </div>
      <div className="text-sm lg:text-base text-text-muted font-medium leading-snug">
        {label}
      </div>
    </div>
  )
}