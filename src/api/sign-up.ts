import { api } from '@/lib/axios'

export interface SignInBody {
  email: string
  senha: string
  nome: string
  tipo: string
  cpfCnpj: string
  telefone: string
  genero: string
}

export async function signUp({
  email,
  senha,
  nome,
  tipo,
  cpfCnpj,
  telefone,
  genero,
}: SignInBody) {
  return await api.post('/usuario', {
    email,
    senha,
    nome,
    tipo,
    cpf_cnpj: cpfCnpj,
    telefone,
    genero,
  })
}
