'use client'

import { motion } from 'framer-motion'

interface ScoreDisplayProps {
  score: number
}

export default function ScoreDisplay({ score }: ScoreDisplayProps) {
  const getScoreLevel = (score: number) => {
    if (score >= 90) return { text: '天生一对', emoji: '💑', color: 'text-pink-500' }
    if (score >= 80) return { text: '非常般配', emoji: '💖', color: 'text-pink-400' }
    if (score >= 70) return { text: '较为般配', emoji: '💕', color: 'text-pink-300' }
    if (score >= 60) return { text: '一般般配', emoji: '💫', color: 'text-yellow-500' }
    return { text: '缘分尚浅', emoji: '🌱', color: 'text-gray-500' }
  }

  const { text, emoji, color } = getScoreLevel(score)

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg"
    >
      <motion.div 
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-4xl mb-4"
      >
        {emoji}
      </motion.div>
      <motion.div 
        className={`text-8xl font-bold mb-4 ${color}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Counter from={0} to={score} duration={1.5} />
      </motion.div>
      <motion.div 
        className="text-2xl font-medium text-gray-600 dark:text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        {text}
      </motion.div>
    </motion.div>
  )
}

function Counter({ from, to, duration }: { from: number; to: number; duration: number }) {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.span
        animate={{ x: [from, to] }}
        transition={{ duration, ease: "easeOut" }}
      >
        {to}
      </motion.span>
    </motion.span>
  )
} 