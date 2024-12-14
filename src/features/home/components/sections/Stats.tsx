export default function Stats() {
  const stats = [
    { number: '1000万+', label: '测试次数' },
    { number: '98%', label: '用户好评' },
    { number: '50万+', label: '成功配对' }
  ]

  return (
    <section className="py-16 bg-pink-500">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 text-center text-white">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-pink-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 