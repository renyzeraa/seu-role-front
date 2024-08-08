import { signIn } from '@/api/sign-in'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useUserStore } from '@/store'
import { Home, LogIn, UserCheck } from 'lucide-react'
import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

const signInForm = z.object({
  email: z.string().email(),
  senha: z.string().min(6),
})

type SignInForm = z.infer<typeof signInForm>

export function SignIn() {
  const navigate = useNavigate()
  const location = useLocation()
  const { email } = location.state || {}
  const [inputEmail] = useState(email ?? '')
  const { setUser } = useUserStore((store) => ({ setUser: store.setUser }))
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInForm>()

  async function handleSignIn(dados: SignInForm) {
    try {
      const { data } = await signIn(dados)
      if (data) {
        setUser({ ...data, token: undefined })
      }
      navigate('/')
    } catch {
      toast.error('Erro ao realizar seu login.')
    }
  }

  function getWarningEmailInvalid() {
    toast.warning('Seu e-mail está invalido!')
  }

  return (
    <>
      <Helmet title="Login" />
      <div className="p-8">
        <Button variant="comum" asChild className="absolute right-36 top-8">
          <Link to="/sign-up">
            <UserCheck size={20} className="mr-2" />
            Cadastrar-se
          </Link>
        </Button>
        <Button variant="comum" asChild className="absolute right-8 top-8">
          <Link to="/">
            <Home size={20} className="mr-2" />
            Início
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

          <form onSubmit={handleSubmit(handleSignIn)} className="space-y-4">
            <div className="mb-4 space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input
                type="email"
                id="email"
                defaultValue={inputEmail}
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
