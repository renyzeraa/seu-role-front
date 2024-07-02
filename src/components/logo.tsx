import React from 'react'
import logo from '../assets/logo_seu_role.png'

export function Logo({ ...props }: React.ComponentProps<'img'>) {
  return (
    <img width="100" height="100" src={logo} alt="Logo Seu Rolê" {...props} />
  )
}
