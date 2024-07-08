import React from 'react'
import logo from '../assets/logo_seu_role.png'

export function Logo({ ...props }: React.ComponentProps<'img'>) {
  return <img src={logo} alt="Logo Seu Rolê" {...props} />
}
