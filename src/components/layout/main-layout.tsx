import { Outlet } from 'react-router-dom'
import { Toaster } from 'sonner'

export function MainLayout() {
  return (
    <div className="min-h-screen bg-background">
      <Outlet />
      <Toaster position="top-right" richColors closeButton />
    </div>
  )
}
