import { Link } from 'react-router-dom'

export function NotFound() {
  // @TODO melhorar estilos e colocar logo
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <h1 className="text-4xl font-bold">Página não encontrada !</h1>
      <p className="text-accent-foreground">
        Voltar para o{' '}
        <Link className="text-primary" to="/">
          Início
        </Link>
        .
      </p>
    </div>
  )
}
