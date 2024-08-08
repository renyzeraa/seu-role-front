import { UUID } from 'crypto'
import { create } from 'zustand'

export interface UserProps {
  email: string
  nome: string
  tipo: string
  genero: string
  id: UUID
}

interface UserStoreProps {
  user: UserProps | null
  setUser: (data: UserProps) => void
  logout: () => void
}

export const useUserStore = create<UserStoreProps>((set, get) => {
  return {
    user: null,
    setUser: (user: UserProps) => set({ user }),
    logout: () => set({ user: null }),
  }
})
