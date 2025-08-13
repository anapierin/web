export interface ConditionCardProps {
  title: string
  className?: string
}

export default function ConditionCard({
  title,
  className = '',
}: ConditionCardProps) {
  return (
    <div
      className={`group bg-white rounded-2xl p-8 shadow-medium border border-brand-100/50 hover:shadow-large hover:border-brand-200 transition-all duration-300 hover:scale-[1.02] justify-center items-center ${className}`}
    >
      <div className="flex items-center space-x-6 justify-center size-full">
        <div className="flex flex-1 text-center text-gray-700 items-center justify-center size-full">
          <h4 className="text-lg font-semibold text-center mx-auto items-center justify-center group-hover:text-brand-600 transition-colors duration-300 leading-tight">
            {title}
          </h4>
        </div>
      </div>
    </div>
  )
}
