import * as React from 'react'
import type { UseFormRegister, FieldErrors } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { PasswordStrengthIndicator } from './PasswordStrengthIndicator'
import type { AuthMode } from './LoginSignupToggle'
import { cn } from '@/lib/utils'

export interface AuthFormValues {
  email: string
  password: string
  confirmPassword?: string
}

export interface EmailPasswordFormProps {
  mode: AuthMode
  register: UseFormRegister<AuthFormValues>
  errors: FieldErrors<AuthFormValues>
  isLoading: boolean
  submitLabel: string
  onSubmit: React.FormEventHandler<HTMLFormElement>
  className?: string
}

export function EmailPasswordForm({
  mode,
  register,
  errors,
  isLoading,
  submitLabel,
  onSubmit,
  className,
}: EmailPasswordFormProps) {
  const [passwordValue, setPasswordValue] = React.useState('')
  const showStrengthIndicator = mode === 'signup'

  return (
    <form onSubmit={onSubmit} className={cn('space-y-4', className)}>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="you@example.com"
          autoComplete="email"
          {...register('email')}
          className={cn(errors.email && 'border-error')}
        />
        {errors.email && (
          <p className="text-small text-error" role="alert">
            {errors.email.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="password">Password</Label>
          {mode === 'login' && (
            <Link
              to="/forgot-password"
              className="text-small text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
            >
              Forgot password?
            </Link>
          )}
        </div>
        <Input
          id="password"
          type="password"
          placeholder="••••••••"
          autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
          {...register('password', {
            onChange: (e) => setPasswordValue(e.target.value),
          })}
          className={cn(errors.password && 'border-error')}
        />
        {errors.password && (
          <p className="text-small text-error" role="alert">
            {errors.password.message}
          </p>
        )}
        {showStrengthIndicator && passwordValue && (
          <PasswordStrengthIndicator password={passwordValue} />
        )}
      </div>

      {mode === 'signup' && (
        <div className="space-y-2">
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input
            id="confirmPassword"
            type="password"
            placeholder="••••••••"
            autoComplete="new-password"
            {...register('confirmPassword')}
            className={cn(errors.confirmPassword && 'border-error')}
          />
          {errors.confirmPassword && (
            <p className="text-small text-error" role="alert">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>
      )}

      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? (
          <span className="flex items-center justify-center gap-2">
            <span
              className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent"
              aria-hidden
            />
            {mode === 'login' ? 'Signing in...' : 'Creating account...'}
          </span>
        ) : (
          submitLabel
        )}
      </Button>
    </form>
  )
}
