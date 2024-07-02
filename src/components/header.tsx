import { CalendarPlus, UserPlus, LogIn, Home } from 'lucide-react'
import { Logo } from '@/components/logo'
import { Separator } from './ui/separator'
import { NavLink } from './nav-link'
import { Link } from 'react-router-dom'
import { ThemeToggle } from './theme/theme-toggle'

export function Header() {
  return (
    <header className="fixed left-0 w-full border-b bg-muted dark:border-none">
      <div className="mx-auto flex h-16 max-w-5xl items-center gap-4 px-6">
        <Link to="/">
          <Logo />
        </Link>
        <Separator orientation="vertical" className="h-8 bg-muted-foreground" />
        <nav className="flex items-center space-x-2 lg:space-x-4">
          <NavLink to="/">
            <Home size={20} /> Início
          </NavLink>
          <NavLink to="/create-manager" title="Crie já seu Evento">
            <CalendarPlus size={20} className="mr-2" />
            Criar Evento
          </NavLink>
          <NavLink to="/sign-up" title="Criar conta grátis">
            <UserPlus size={20} className="mr-2" />
            Cadastrar-se
          </NavLink>
          <NavLink to="/sign-in" title="Entre com sua conta">
            <LogIn size={20} className="mr-2" />
            Entrar
          </NavLink>
        </nav>
        <div className="ml-auto" title="Trocar tema para Claro ou Escuro">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
