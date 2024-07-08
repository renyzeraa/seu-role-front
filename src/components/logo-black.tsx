import React from 'react'
import logo from '../assets/logo_seu_role_black.svg'

export function LogoBlack({ ...props }: React.ComponentProps<'img'>) {
  return <img src={logo} alt="Logo Seu Rolê" {...props} />
}
