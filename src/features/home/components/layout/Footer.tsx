export default function Footer() {
  return (
    <footer className="w-full py-6 px-6 border-t">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="text-sm text-gray-600 dark:text-gray-400">
          © 2024 AI姓名缘分测试. All rights reserved.
        </div>
        <div className="flex gap-4 mt-4 sm:mt-0">
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">
            使用条款
          </a>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">
            隐私政策
          </a>
        </div>
      </div>
    </footer>
  )
} 