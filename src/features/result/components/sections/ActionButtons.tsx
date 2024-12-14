'use client'

import { motion } from 'framer-motion'
import { ShareIcon, ArrowPathIcon } from '@heroicons/react/24/outline'

interface ActionButtonsProps {
  onShare: () => void
  onRetry: () => void
}

export default function ActionButtons({ onShare, onRetry }: ActionButtonsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1.2 }}
      className="flex flex-col sm:flex-row gap-4 justify-center"
    >
      <button
        onClick={onShare}
        className="flex items-center justify-center gap-2 px-6 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors"
      >
        <ShareIcon className="w-5 h-5" />
        分享结果
      </button>
      <button
        onClick={onRetry}
        className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
      >
        <ArrowPathIcon className="w-5 h-5" />
        重新测试
      </button>
    </motion.div>
  )
} 