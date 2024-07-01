import { CalendarPlus, UserPlus } from 'lucide-react'
import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { SignInModal } from '@/pages/auth/sign-in-modal'

export function Header() {
  return (
    <header className="fixed left-0 w-full bg-teal-500">
      <div className="mx-auto flex max-w-5xl items-center py-1">
        <Logo className="mr-3" />
        <Input
          name="search"
          title="Área de Pesquisa"
          placeholder="Pesquise aqui pelo nome ou cidade do Evento"
          className="max-w-96 font-semibold"
        />
        <div className="ml-auto flex items-center gap-3">
          <Button
            variant="outline"
            className="border-none bg-teal-900 text-muted"
          >
            <UserPlus size={20} className="mr-2" />
            Cadastrar-se
          </Button>
          <Button
            variant="outline"
            className="border-none bg-teal-900 text-muted"
          >
            <CalendarPlus size={20} className="mr-2" />
            Criar Evento
          </Button>
          <SignInModal />
        </div>
      </div>
    </header>
  )
}
