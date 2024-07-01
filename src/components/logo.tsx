import React from 'react'
import logo from '../assets/seu_role_logo_sem_fundo.png'

export function Logo({ ...props }: React.ComponentProps<'img'>) {
  return (
    <img width="60" height="60" src={logo} alt="Logo Seu Rolê" {...props} />
  )
}
