import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'
import type { AuthMode } from './LoginSignupToggle'

export interface ForgotPasswordTermsPrivacyProps {
  mode: AuthMode
  className?: string
}

export function ForgotPasswordTermsPrivacy({
  mode,
  className,
}: ForgotPasswordTermsPrivacyProps) {
  return (
    <div
      className={cn('space-y-3 text-center text-small text-muted-foreground', className)}
    >
      {mode === 'signup' && (
        <p>
          By signing up, you agree to our{' '}
          <Link
            to="/terms"
            className="text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
          >
            Terms of Service
          </Link>{' '}
          and{' '}
          <Link
            to="/privacy"
            className="text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
          >
            Privacy Policy
          </Link>
        </p>
      )}
    </div>
  )
}
