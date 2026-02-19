import { cn } from '@/lib/utils'

export type AuthMode = 'login' | 'signup'

export interface LoginSignupToggleProps {
  mode: AuthMode
  onModeChange: (mode: AuthMode) => void
  className?: string
}

export function LoginSignupToggle({
  mode,
  onModeChange,
  className,
}: LoginSignupToggleProps) {
  return (
    <div
      role="tablist"
      aria-label="Authentication mode"
      className={cn(
        'inline-flex rounded-xl border border-input bg-muted/50 p-1 transition-all duration-200',
        className
      )}
    >
      <button
        type="button"
        role="tab"
        aria-selected={mode === 'login'}
        aria-controls="login-panel"
        id="login-tab"
        onClick={() => onModeChange('login')}
        className={cn(
          'rounded-lg px-6 py-2.5 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
          mode === 'login'
            ? 'bg-primary text-primary-foreground shadow-md'
            : 'text-muted-foreground hover:text-foreground hover:bg-background/50'
        )}
      >
        Sign in
      </button>
      <button
        type="button"
        role="tab"
        aria-selected={mode === 'signup'}
        aria-controls="signup-panel"
        id="signup-tab"
        onClick={() => onModeChange('signup')}
        className={cn(
          'rounded-lg px-6 py-2.5 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
          mode === 'signup'
            ? 'bg-primary text-primary-foreground shadow-md'
            : 'text-muted-foreground hover:text-foreground hover:bg-background/50'
        )}
      >
        Sign up
      </button>
    </div>
  )
}
