export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: '输入名字',
      description: '填写需要测试的两个名字'
    },
    {
      number: '02',
      title: '智能分析',
      description: 'AI系统进行深度解读'
    },
    {
      number: '03',
      title: '查看结果',
      description: '获取详细的缘分报告'
    }
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">使用流程</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="inline-block">
                <span className="text-4xl font-bold text-pink-500">{step.number}</span>
              </div>
              <h3 className="text-xl font-bold mt-4 mb-2">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 