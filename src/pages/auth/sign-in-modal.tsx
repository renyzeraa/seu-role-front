import { Button } from "@/components/ui/button";
import * as  Dialog from "@radix-ui/react-dialog";
import { Frown, LogIn, User, X } from "lucide-react";
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input";

export function SignInModal() {

  // @TODO fazer tratamento para login e chamar api
  // @TODO melhorar animação e cores
  // @TODO fazer tratamento de erros e feedback para o usuário quanto a email
  // @TODO fazer metodo para conferir email de usuario
  // @TODO fazer tratamento para senha 6 digitos minimo

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button variant="default" className="bg-teal-900 border-none text-muted hover:bg-teal-800">
          <User size={20} className="mr-2" />
          Entrar
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className='fixed inset-0 bg-black/70'>
          <Dialog.Content className='fixed right-0 bottom-0 top-0 h-screen min-w-[400px] bg-muted-foreground border-l border-muted-foreground p-10 space-y-10'>
            <div className='space-y-3'>
              <Dialog.Title className='text-xl font-bold text-zinc-50 flex justify-between'>
                Realizar Login
                <Dialog.Close title="Fechar" ><X /></Dialog.Close>
              </Dialog.Title>
            </div>
            <div className='space-y-10 pt-8'>
              <form className="flex flex-col gap-4" action="">
                <Label></Label>
                <Input type="email" placeholder="Digite seu email" required />
                <Input type="password" placeholder="Digite sua senha" required />
                <a className="cursor-pointer text-muted text-sm flex items-center gap-1">
                  Esqueci minha senha
                  <Frown size={18} />
                </a>
                <Button variant="comum" className="mt-10">
                  Entrar
                  <LogIn size={20} className="ml-2" />
                </Button>
              </form>
            </div>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  )
};
