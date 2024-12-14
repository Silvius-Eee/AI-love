'use client'

import { motion } from 'framer-motion'

interface DetailSection {
  title: string
  content: string
  icon: string
}

interface DetailedAnalysisProps {
  name1: string
  name2: string
  details: {
    type: DetailSection
    prediction: DetailSection
    personality: DetailSection
    advice: DetailSection
  }
}

export default function DetailedAnalysis({ name1, name2, details }: DetailedAnalysisProps) {
  const sections = [
    { key: 'type', ...details.type },
    { key: 'prediction', ...details.prediction },
    { key: 'personality', ...details.personality },
    { key: 'advice', ...details.advice }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6"
    >
      <h3 className="text-xl font-bold mb-6 text-center">详细解读</h3>
      <div className="space-y-6">
        {sections.map((section, index) => (
          <motion.div
            key={section.key}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
            className="border-b border-gray-200 dark:border-gray-700 last:border-0 pb-6 last:pb-0"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">{section.icon}</span>
              <h4 className="text-lg font-semibold">{section.title}</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {section.content.replace('{name1}', name1).replace('{name2}', name2)}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
} 