'use client'

import { useTheme } from 'next-themes'

export default function Header() {
  const { theme, setTheme } = useTheme()
  
  return (
    <header className="w-full py-4 px-6 flex justify-between items-center border-b">
      <div className="text-xl font-bold">AI姓名缘分测试</div>
      <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
      >
        {theme === 'dark' ? '🌞' : '🌙'}
      </button>
    </header>
  )
} 