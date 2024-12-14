interface MainContentProps {
  children: React.ReactNode
}

export default function MainContent({ children }: MainContentProps) {
  return (
    <main className="flex-1 container mx-auto px-6 py-8">
      {children}
    </main>
  )
} 