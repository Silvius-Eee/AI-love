import Header from '@/features/home/components/layout/Header'
import Footer from '@/features/home/components/layout/Footer'
import MainContent from '@/features/home/components/layout/MainContent'
import NameForm from '@/features/home/components/form/NameForm'
import IntroSection from '@/features/home/components/sections/IntroSection'
import HowItWorks from '@/features/home/components/sections/HowItWorks'
import Stats from '@/features/home/components/sections/Stats'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <MainContent>
        <div className="text-center py-20">
          <h1 className="text-4xl font-bold mb-4">AI姓名缘分测试</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            输入两个名字,立即测试你们的缘分指数
          </p>
          <NameForm />
        </div>
        <IntroSection />
        <HowItWorks />
        <Stats />
      </MainContent>
      <Footer />
    </div>
  )
}
