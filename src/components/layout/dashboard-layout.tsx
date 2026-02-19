import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Link, useLocation } from 'react-router-dom'
import {
  Home,
  FolderOpen,
  FileEdit,
  Search,
  Calendar,
  Plug,
  BarChart3,
  Settings,
  ChevronLeft,
  ChevronRight,
  Bell,
  Search as SearchIcon,
  Menu,
  Shield,
  FileInput,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Toaster } from 'sonner'
import { ScrollArea } from '@/components/ui/scroll-area'

const navItems = [
  { to: '/dashboard', icon: Home, label: 'Home' },
  { to: '/dashboard/library', icon: FolderOpen, label: 'Library' },
  { to: '/dashboard/studio', icon: FileEdit, label: 'Studio' },
  { to: '/dashboard/research', icon: Search, label: 'Research' },
  { to: '/dashboard/calendar', icon: Calendar, label: 'Calendar' },
  { to: '/dashboard/integrations', icon: Plug, label: 'Integrations' },
  { to: '/dashboard/analytics', icon: BarChart3, label: 'Analytics' },
  { to: '/dashboard/settings', icon: Settings, label: 'Settings' },
  { to: '/dashboard/admin', icon: Shield, label: 'Admin' },
  { to: '/dashboard/import-export', icon: FileInput, label: 'Import/Export' },
]

export function DashboardLayout() {
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar - Desktop */}
      <aside
        className={cn(
          'hidden lg:flex flex-col border-r border-border bg-card transition-all duration-300',
          collapsed ? 'w-[72px]' : 'w-64'
        )}
      >
        <div className="flex h-16 items-center justify-between border-b border-border px-4">
          {!collapsed && (
            <Link to="/dashboard" className="font-semibold text-primary">
              Creator Ops Hub
            </Link>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setCollapsed(!collapsed)}
            className="shrink-0"
          >
            {collapsed ? (
              <ChevronRight className="h-5 w-5" />
            ) : (
              <ChevronLeft className="h-5 w-5" />
            )}
          </Button>
        </div>
        <ScrollArea className="flex-1 py-4">
          <nav className="space-y-1 px-2">
            {navItems.map(({ to, icon: Icon, label }) => {
              const isActive = location.pathname === to || (to !== '/dashboard' && location.pathname.startsWith(to))
              return (
                <Link
                  key={to}
                  to={to}
                  className={cn(
                    'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200',
                    isActive
                      ? 'bg-primary/10 text-primary'
                      : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                  )}
                >
                  <Icon className="h-5 w-5 shrink-0" />
                  {!collapsed && <span>{label}</span>}
                </Link>
              )
            })}
          </nav>
        </ScrollArea>
      </aside>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setMobileOpen(false)}
          aria-hidden
        />
      )}

      {/* Sidebar - Mobile */}
      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-border bg-card transition-transform duration-300 lg:hidden',
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex h-16 items-center justify-between border-b border-border px-4">
          <Link to="/dashboard" className="font-semibold text-primary">
            Creator Ops Hub
          </Link>
        </div>
        <ScrollArea className="flex-1 py-4">
          <nav className="space-y-1 px-2">
            {navItems.map(({ to, icon: Icon, label }) => {
              const isActive = location.pathname === to || (to !== '/dashboard' && location.pathname.startsWith(to))
              return (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all',
                    isActive
                      ? 'bg-primary/10 text-primary'
                      : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                  )}
                >
                  <Icon className="h-5 w-5 shrink-0" />
                  <span>{label}</span>
                </Link>
              )
            })}
          </nav>
        </ScrollArea>
      </aside>

      {/* Main content */}
      <div className="flex flex-1 flex-col min-w-0">
        {/* Topbar */}
        <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b border-border bg-background/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/60 lg:px-6">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </Button>
          <div className="flex flex-1 items-center gap-4">
            <div className="relative flex-1 max-w-md">
              <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search..."
                className="h-10 w-full rounded-lg border border-input bg-background pl-9 pr-4 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
          </div>
        </header>

        <main className="flex-1 p-4 lg:p-6">
          <Outlet />
        </main>
      </div>
      <Toaster position="top-right" richColors closeButton />
    </div>
  )
}
