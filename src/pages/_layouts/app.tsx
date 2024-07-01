import { Outlet } from 'react-router-dom'
import { Toaster } from 'sonner'

export function AppLayout() {
  return (
    <>
      <Toaster richColors />
      <Outlet />
    </>
  )
}
