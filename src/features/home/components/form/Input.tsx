'use client'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

export default function Input({ label, error, className = '', ...props }: InputProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          {label}
        </label>
      )}
      <input
        className={`
          w-full px-4 py-2 rounded-lg border 
          focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent
          ${error ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'}
          ${error ? 'bg-red-50' : 'bg-white dark:bg-gray-800'}
          dark:text-white
          ${className}
        `}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  )
} 