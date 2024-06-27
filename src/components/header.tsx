import { CalendarPlus, User, UserPlus } from "lucide-react"
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Header() {
  return (
    <header className="bg-teal-500 w-full fixed left-0">
      <div className="max-w-5xl mx-auto py-1 flex items-center">
        <Logo className="mr-3" />
        <Input
          name="search"
          title="Área de Pesquisa"
          placeholder="Pesquise aqui pelo nome ou cidade do Evento"
          className="max-w-96 font-semibold"
        />
        <div className="flex items-center ml-auto gap-3">
          <Button variant="outline" className="bg-teal-900 border-none text-muted">
            <UserPlus size={20} className="mr-2" />
            Cadastrar-se
          </Button>
          <Button variant="outline" className="bg-teal-900 border-none text-muted">
            <CalendarPlus size={20} className="mr-2" />
            Criar Evento
          </Button>
          <Button variant="outline" className="bg-teal-900 border-none text-muted">
            <User size={20} className="mr-2" />
            Entrar
          </Button>
        </div>
      </div>
    </header>
  )
}