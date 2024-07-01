import './global.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Toaster } from 'sonner'

export function App() {
  return (
    <HelmetProvider>
      <Toaster richColors closeButton />
      <Helmet titleTemplate="%s | seu.role" />
      <RouterProvider router={router}></RouterProvider>
    </HelmetProvider>
  )
}
