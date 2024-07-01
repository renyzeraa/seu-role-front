import { Outlet } from 'react-router-dom'
import { Toaster } from 'sonner'
import { Beer } from 'lucide-react'

export function AuthLayout() {
  return (
    <div className="grid min-h-screen grid-cols-2">
      <Toaster />
      <div className="flex h-full flex-col justify-between border-r border-foreground/5 bg-primary/10 p-10 text-muted-foreground">
        <div className="flex items-center gap-3 text-lg text-foreground">
          <Beer size={30} />
          <span className="font-bold">seu.role</span>
        </div>
        <footer className="text-sm">
          Acesso ao site &copy; Seu Rolê - {new Date().getFullYear()}
        </footer>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Outlet />
      </div>
    </div>
  )
}
