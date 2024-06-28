import { Outlet } from "react-router-dom";
import logo from "../../assets/seu_role_logo_sem_fundo.png"

export function AuthLayout() {
  return (
    <div className="min-h-screen grid grid-cols-2">
      <div className="h-full border-r border-foreground/5 bg-muted "><img src={logo} alt="Logo seu Role" /></div>
      <h1>Autenticação</h1>
      <div>
        <Outlet />
      </div>
    </div>
  )
}