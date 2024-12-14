'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import ResultLayout from '@/features/result/components/layout/ResultLayout'
import ScoreDisplay from '@/features/result/components/sections/ScoreDisplay'
import AnalysisChart from '@/features/result/components/sections/AnalysisChart'
import DetailedAnalysis from '@/features/result/components/sections/DetailedAnalysis'
import ActionButtons from '@/features/result/components/sections/ActionButtons'

interface Names {
  name1: string
  name2: string
}

export default function ResultPage() {
  const router = useRouter()
  const [names, setNames] = useState<Names>({ name1: '', name2: '' })

  useEffect(() => {
    // 从localStorage获取数据
    const storedData = localStorage.getItem('nameMatchData')
    if (!storedData) {
      // 如果没有数据,返回首页
      router.push('/')
      return
    }

    const { names } = JSON.parse(storedData)
    setNames(names)
  }, [router])

  const mockScore = 85
  
  const analysisData = [
    { dimension: '性格相容', score: 80, fullMark: 100 },
    { dimension: '兴趣爱好', score: 90, fullMark: 100 },
    { dimension: '价值观', score: 85, fullMark: 100 },
    { dimension: '生活方式', score: 75, fullMark: 100 },
    { dimension: '沟通方式', score: 88, fullMark: 100 },
  ]

  const detailsData = {
    type: {
      title: '缘分类型',
      icon: '🎯',
      content: '{name1}和{name2}的缘分属于"心灵相知型"。你们在精神层面有着深度的共鸣，能够理解彼此的想法和感受。'
    },
    prediction: {
      title: '发展预测',
      icon: '🔮',
      content: '你们的关系发展潜力很大。随着时间推移，彼此的理解会更加深入，感情也会更加稳固。'
    },
    personality: {
      title: '性格分析',
      icon: '🧩',
      content: '{name1}温和细腻，{name2}活泼开朗，性格互补，能够在交往中互相学习，共同成长。'
    },
    advice: {
      title: '相处建议',
      icon: '💡',
      content: '建议多创造共同话题，保持良好沟通。在遇到分歧时，要学会换位思考，互相包容。'
    }
  }

  const handleShare = () => {
    // TODO: 实现分享功能
    alert('分享功能开发中...')
  }

  const handleRetry = () => {
    // 清除存储的数据
    localStorage.removeItem('nameMatchData')
    router.push('/')
  }

  if (!names.name1 || !names.name2) {
    return null // 或者显示加载状态
  }

  return (
    <ResultLayout>
      <div className="max-w-4xl mx-auto space-y-8">
        <ScoreDisplay score={mockScore} />
        <AnalysisChart data={analysisData} />
        <DetailedAnalysis 
          name1={names.name1}
          name2={names.name2}
          details={detailsData} 
        />
        <ActionButtons 
          onShare={handleShare}
          onRetry={handleRetry}
        />
      </div>
    </ResultLayout>
  )
} 