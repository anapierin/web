import { ReactNode } from 'react'

export interface ConditionCardProps {
  icon: ReactNode
  title: string
  colorClass?: string
  className?: string
}

export default function ConditionCard({ 
  icon, 
  title, 
  colorClass = 'bg-brand-600',
  className = '' 
}: ConditionCardProps) {
  return (
    <div className={`group bg-white rounded-2xl p-8 shadow-medium border border-brand-100/50 hover:shadow-large hover:border-brand-200 transition-all duration-300 hover:scale-[1.02] justify-center items-center ${className}`}>
      <div className="flex items-center space-x-6 justify-center">
        <div className={`w-14 h-14 ${colorClass} rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 flex-shrink-0 shadow-medium`}>
          <div className="w-6 h-6">
            {icon}
          </div>
        </div>
        <div className="flex flex-1 text-center text-gray-700">
          <h4 className="text-lg font-semibold text-text-primary group-hover:text-brand-600 transition-colors duration-300 leading-tight">
            {title}
          </h4>
        </div>
      </div>
    </div>
  )
}