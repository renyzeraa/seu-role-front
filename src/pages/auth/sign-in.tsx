import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { LogIn } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

export function SignIn() {
  return (
    <>
      <Helmet title="Login" />
      <div className="p-8">
        <div className="flex w-[360px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Realizar Login
            </h1>
            <p className="text-sm text-muted-foreground">
              Acompanhe seus ingressos comprados !
            </p>
          </div>

          <form className="space-y-4">
            <div className="mb-4 space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input
                type="email"
                id="email"
                placeholder="Digite seu e-mail aqui"
              ></Input>
              <Label htmlFor="senha">Seu senha</Label>
              <Input
                type="password"
                id="senha"
                placeholder="Digite sua senha aqui"
              ></Input>
            </div>
            <Button
              variant="default"
              className="w-full border-none text-muted"
              type="submit"
            >
              <LogIn size={20} className="mr-2" />
              Entrar
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}
