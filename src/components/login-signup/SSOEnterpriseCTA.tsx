import { Link } from 'react-router-dom'
import { Building2 } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface SSOEnterpriseCTAProps {
  className?: string
}

export function SSOEnterpriseCTA({ className }: SSOEnterpriseCTAProps) {
  return (
    <div
      className={cn(
        'rounded-lg border border-dashed border-border bg-muted/20 p-4 transition-all duration-200 hover:border-primary/30 hover:bg-muted/30',
        className
      )}
    >
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Building2 className="h-5 w-5" aria-hidden />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-small font-medium text-foreground">
            SSO / Enterprise Access
          </p>
          <p className="text-micro text-muted-foreground">
            Sign in with your organization&apos;s credentials
          </p>
        </div>
        <Link
          to="/help"
          className="shrink-0 text-small font-medium text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
        >
          Contact
        </Link>
      </div>
    </div>
  )
}
