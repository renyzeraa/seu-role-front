import { Separator } from './ui/separator'
import { NavLink } from './nav-link'
import { Facebook, Instagram, Twitter } from 'lucide-react'
import { LogoBlack } from './logo-black'
import { Logo } from './logo'
import { useTheme } from './theme/theme-provider'

export function Footer() {
  const { theme } = useTheme()

  return (
    <footer className="w-full bg-muted">
      <div className="max-w-8xl mx-auto px-8">
        <div className="my-3 flex items-center justify-between">
          {theme === 'light' ? (
            <LogoBlack />
          ) : (
            <Logo className="h-[50px] w-[50px]" />
          )}
          <nav className="flex items-center gap-2">
            <NavLink to="" title="Instagram">
              <Instagram size={20} />
            </NavLink>
            <NavLink to="" title="Facebook">
              <Facebook size={20} />
            </NavLink>
            <NavLink to="" title="Twitter">
              <Twitter size={20} />
            </NavLink>
          </nav>
        </div>
        <Separator className="bg-muted-foreground" />
        <div className="m-4 flex items-start justify-center gap-8">
          <ul>
            <li>
              <NavLink to="/sobre">Sobre</NavLink>
            </li>
            <li>
              <NavLink to="/empresa">Empresa</NavLink>
            </li>
            <li>
              <NavLink to="/valores">Valores</NavLink>
            </li>
          </ul>
          <ul>
            <li>
              <NavLink to="/termos-servico">Termos de Serviço</NavLink>
            </li>
            <li>
              <NavLink to="/politicas-privacidade">
                Políticas de privacidade
              </NavLink>
            </li>
          </ul>
          <ul>
            <li>
              <NavLink data-current={false} to="/">
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink to="/rock">Rock</NavLink>
            </li>
            <li>
              <NavLink to="/eletronica">Pop</NavLink>
            </li>
            <li>
              <NavLink to="/sertanejo">Sertanejo</NavLink>
            </li>
            <li>
              <NavLink to="/pagode">Pagode</NavLink>
            </li>
          </ul>
        </div>
        <Separator className="bg-muted-foreground" />
        <span className="block w-[100%] py-1 text-center text-[0.8rem] font-semibold">
          &#169; Seu Role LTDA - Todos os direitos reservados
        </span>
      </div>
    </footer>
  )
}
