'use client'

import { useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'

interface FormState {
  name1: string
  name2: string
}

interface FormErrors {
  name1?: string
  name2?: string
}

export function useForm(initialState: FormState = { name1: '', name2: '' }) {
  const router = useRouter()
  const [values, setValues] = useState<FormState>(initialState)
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateName = (name: string): string | undefined => {
    if (!name) return '请输入姓名'
    if (name.length < 2) return '姓名至少2个字符'
    if (name.length > 10) return '姓名最多10个字符'
    if (!/^[\u4e00-\u9fa5a-zA-Z\s]+$/.test(name)) return '姓名只能包含中文或英文字母'
    return undefined
  }

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setValues(prev => ({ ...prev, [name]: value }))
    // 实时验证
    const error = validateName(value)
    setErrors(prev => ({ ...prev, [name]: error }))
  }, [])

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    // 验证所有字段
    const newErrors: FormErrors = {}
    Object.entries(values).forEach(([key, value]) => {
      const error = validateName(value)
      if (error) newErrors[key as keyof FormErrors] = error
    })

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsSubmitting(true)
    try {
      // 保存数据到localStorage
      localStorage.setItem('nameMatchData', JSON.stringify({
        names: values,
        timestamp: new Date().toISOString()
      }))
      
      // 跳转到结果页
      router.push('/result')
    } finally {
      setIsSubmitting(false)
    }
  }, [values, router])

  return {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit
  }
} 