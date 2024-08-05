import { signUp } from '@/api/sign-up'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import InputMask from 'react-input-mask'
import { Home, LogIn, UserPlus } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { Controller, useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

const signUpForm = z.object({
  email: z.string().email(),
  senha: z.string().min(6),
  nome: z.string(),
  cpfCnpj: z.string().regex(/^\d{11}$/),
  genero: z.string(),
  tipo: z.enum(['NORMAL']),
  // .refine((value) => validateCPF(value)), @TODO colocar validação depois
  telefone: z.string(),
})

type SignUpForm = z.infer<typeof signUpForm>

export function SignUp() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    setValue,
    formState: { isSubmitting },
    control,
  } = useForm<SignUpForm>()

  async function handleSignUp(data: SignUpForm) {
    data.tipo = 'NORMAL'
    try {
      await signUp(data)
      toast.success('Cadastro realizado com sucesso!')
      navigate('/sign-in', {
        state: {
          email: data.email,
        },
      })
    } catch {
      toast.error('Erro ao realizar seu cadastro.')
    }
  }

  function getWarningEmailInvalid() {
    toast.warning('Seu e-mail está invalido!')
  }

  return (
    <>
      <Helmet title="Cadastro" />
      <div className="p-8">
        <Button variant="comum" asChild className="absolute right-36 top-8">
          <Link to="/sign-in">
            <LogIn size={20} className="mr-2" />
            Realizar Login
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
              Criar conta grátis
            </h1>
            <p className="text-sm text-muted-foreground">
              Compre ingressos com a empresa mais rapida do Brasil !
            </p>
          </div>

          <form onSubmit={handleSubmit(handleSignUp)} className="space-y-4">
            <div className="mb-4 space-y-2">
              <Label htmlFor="nome">Nome completo</Label>
              <Input
                type="text"
                id="nome"
                placeholder="Digite seu nome completo"
                {...register('nome')}
                required
              ></Input>
              <Label htmlFor="cpfCnpj">CPF (sem pontuação)</Label>
              <Controller
                name="cpfCnpj"
                control={control}
                render={({ field }) => (
                  <InputMask
                    {...field}
                    mask="999.999.999-99"
                    id="cpfCnpj"
                    placeholder="123.000.123-00"
                    onChange={({ target }) =>
                      setValue('cpfCnpj', target.value.replace(/[.-]/g, ''))
                    }
                    className="flex h-12 w-full rounded-md border border-input bg-background px-2 py-4 font-sans text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    required
                  ></InputMask>
                )}
              />
              <Label htmlFor="email">E-mail</Label>
              <Input
                type="email"
                id="email"
                placeholder="email@dominio.com.br"
                {...register('email')}
                onInvalid={getWarningEmailInvalid}
                required
              ></Input>
              <Label htmlFor="genero">Genêro</Label>
              <Select onValueChange={(value) => setValue('genero', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="selecione..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="MASCULINO">Masculino</SelectItem>
                  <SelectItem value="FEMININO">Feminino</SelectItem>
                  <SelectItem value="NAO_BINARIO">Não Binário</SelectItem>
                  <SelectItem value="GENERO_FLUIDO">Genêro Fluído</SelectItem>
                  <SelectItem value="TRANSGENERO">Transgenêro</SelectItem>
                  <SelectItem value="AGENERO">Agenêro</SelectItem>
                  <SelectItem value="BIGENERO">Bigenêro</SelectItem>
                  <SelectItem value="PANGENERO">Pangenêro</SelectItem>
                  <SelectItem value="NEUTROIS">Neutróis</SelectItem>
                  <SelectItem value="TWO_SPIRIT">Two Spirit</SelectItem>
                  <SelectItem value="HIJRA">Hijra</SelectItem>
                  <SelectItem value="TRAVESTI">Travesti</SelectItem>
                  <SelectItem value="OUTRO">Outro</SelectItem>
                </SelectContent>
              </Select>
              <Label htmlFor="telefone">Telefone</Label>
              <Input
                type="text"
                id="telefone"
                placeholder="(99) 99999-9999"
                {...register('telefone')}
                required
              ></Input>
              <Label htmlFor="senha">Senha</Label>
              <Input
                type="password"
                id="senha"
                placeholder=""
                {...register('senha')}
                required
              ></Input>
            </div>
            <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
              {/* @TODO criar o link de termos de serviço e politicas de privacidade */}
              Ao continuar, você concorda com nossos{' '}
              <a className="underline underline-offset-4" href="">
                termos de serviço
              </a>{' '}
              e{' '}
              <a className="underline underline-offset-4" href="">
                políticas de privacidade
              </a>
              .
            </p>
            <Button
              variant="default"
              className="w-full border-none text-muted"
              type="submit"
              disabled={isSubmitting}
            >
              <UserPlus size={20} className="mr-2" />
              Finalizar Cadastro
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}
