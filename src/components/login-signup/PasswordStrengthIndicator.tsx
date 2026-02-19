import { cn } from '@/lib/utils'

export type PasswordStrength = 'weak' | 'fair' | 'good' | 'strong'

export function getPasswordStrength(password: string): PasswordStrength {
  if (!password) return 'weak'
  let score = 0
  if (password.length >= 8) score++
  if (password.length >= 12) score++
  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) score++
  if (/\d/.test(password)) score++
  if (/[^a-zA-Z0-9]/.test(password)) score++
  if (score <= 1) return 'weak'
  if (score <= 2) return 'fair'
  if (score <= 4) return 'good'
  return 'strong'
}

const strengthConfig: Record<
  PasswordStrength,
  { label: string; bars: number; color: string }
> = {
  weak: { label: 'Weak', bars: 1, color: 'bg-error' },
  fair: { label: 'Fair', bars: 2, color: 'bg-warning' },
  good: { label: 'Good', bars: 3, color: 'bg-primary/80' },
  strong: { label: 'Strong', bars: 4, color: 'bg-success' },
}

export interface PasswordStrengthIndicatorProps {
  password: string
  className?: string
}

export function PasswordStrengthIndicator({
  password,
  className,
}: PasswordStrengthIndicatorProps) {
  const strength = getPasswordStrength(password)
  const config = strengthConfig[strength]

  return (
    <div className={cn('space-y-1.5', className)}>
      <div className="flex gap-1" role="progressbar" aria-valuenow={config.bars} aria-valuemin={0} aria-valuemax={4} aria-label={`Password strength: ${config.label}`}>
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className={cn(
              'h-1 flex-1 rounded-full transition-all duration-300',
              i <= config.bars ? config.color : 'bg-muted'
            )}
          />
        ))}
      </div>
      <p className="text-micro text-muted-foreground">{config.label}</p>
    </div>
  )
}
