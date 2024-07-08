import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Outlet } from 'react-router-dom'

export function AppLayout() {
  return (
    <div className="flex min-h-[100vh] flex-col overflow-hidden antialiased">
      <Header />
      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-4 overflow-auto p-8 pt-28">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
