import { Heart, Sparkles, Shield } from '@/components/icons'

export default function IntroSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-pink-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">探索你们的缘分密码</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            通过先进的AI算法,从姓名中解读你们的缘分指数。每个名字都蕴含独特的能量,让我们帮你发现最真实的契合度。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
            <div className="text-pink-500 mb-4">
              <Heart className="w-8 h-8" />
            </div>
            <h3 className="font-bold mb-2">科学解读</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              基于大数据分析和AI算法,提供准确的姓名契合度评估
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
            <div className="text-pink-500 mb-4">
              <Sparkles className="w-8 h-8" />
            </div>
            <h3 className="font-bold mb-2">趣味测试</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              简单有趣的方式探索两个名字之间的潜在联系
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
            <div className="text-pink-500 mb-4">
              <Shield className="w-8 h-8" />
            </div>
            <h3 className="font-bold mb-2">隐私保护</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              所有测试数据严格保密,保护您的个人信息安全
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 