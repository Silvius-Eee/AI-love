import { ReactNode } from 'react'

interface ResultLayoutProps {
  children: ReactNode
}

export default function ResultLayout({ children }: ResultLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white dark:from-gray-900 dark:to-gray-800">
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  )
} 