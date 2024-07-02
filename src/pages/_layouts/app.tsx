import { Outlet } from 'react-router-dom'

export function AppLayout() {
  return (
    <div className="antialiased">
      <header>
        <h1>App Layout</h1>
      </header>
      <Outlet />
    </div>
  )
}
