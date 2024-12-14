'use client'

import Input from './Input'
import Button from './Button'
import { useForm } from '../../hooks/useForm'

export default function NameForm() {
  const { values, errors, isSubmitting, handleChange, handleSubmit } = useForm()

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto space-y-6">
      <Input
        name="name1"
        label="第一个名字"
        placeholder="请输入第一个名字"
        value={values.name1}
        onChange={handleChange}
        error={errors.name1}
      />
      <Input
        name="name2"
        label="第二个名字"
        placeholder="请输入第二个名字"
        value={values.name2}
        onChange={handleChange}
        error={errors.name2}
      />
      <Button
        type="submit"
        loading={isSubmitting}
        disabled={!!errors.name1 || !!errors.name2}
        className="w-full"
      >
        开始测试
      </Button>
    </form>
  )
} 