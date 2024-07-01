import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { LogIn, UserCheck } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

const signInForm = z.object({
  email: z.string().email(),
  senha: z.string().min(6),
})

type SignInForm = z.infer<typeof signInForm>

export function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInForm>()

  async function handleSignIn(data: SignInForm) {
    console.log(data)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    toast.success('Login realizado com sucesso!')
  }

  function getWarningEmailInvalid() {
    toast.warning('Seu e-mail está invalido!')
  }

  return (
    <>
      <Helmet title="Login" />
      <div className="p-8">
        <Button variant="comum" asChild className="absolute right-8 top-8">
          <Link to="/sign-up">
            <UserCheck size={20} className="mr-2" />
            Cadastrar-se
          </Link>
        </Button>
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
                {...register('email')}
                onInvalid={getWarningEmailInvalid}
              ></Input>
              <Label htmlFor="senha">Seu senha</Label>
              <Input
                type="password"
                id="senha"
                placeholder="Digite sua senha aqui"
                {...register('senha')}
              ></Input>
            </div>
            <Button
              variant="default"
              className="w-full border-none text-muted"
              type="submit"
              onSubmit={handleSubmit(handleSignIn)}
              disabled={isSubmitting}
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
