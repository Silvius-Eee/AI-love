'use client'

import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar } from 'recharts'
import { motion } from 'framer-motion'

interface AnalysisData {
  dimension: string
  score: number
  fullMark: number
}

interface AnalysisChartProps {
  data: AnalysisData[]
}

export default function AnalysisChart({ data }: AnalysisChartProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="w-full h-[400px] bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6"
    >
      <h3 className="text-xl font-bold mb-4 text-center">多维度分析</h3>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="dimension" />
          <Radar
            name="匹配度"
            dataKey="score"
            stroke="#ec4899"
            fill="#ec4899"
            fillOpacity={0.5}
          />
        </RadarChart>
      </ResponsiveContainer>
    </motion.div>
  )
} 