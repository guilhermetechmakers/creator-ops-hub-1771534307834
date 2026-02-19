import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Mail, Calendar } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface ContinueWithGoogleProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onConsent: () => void
  isLoading?: boolean
  className?: string
}

const GMAIL_SCOPES = [
  'Read and send emails',
  'Manage labels and filters',
  'Access email metadata',
]

const CALENDAR_SCOPES = [
  'View calendar events',
  'Create and edit events',
  'Manage availability',
]

export function ContinueWithGoogle({
  open,
  onOpenChange,
  onConsent,
  isLoading = false,
  className,
}: ContinueWithGoogleProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={cn('sm:max-w-md', className)}
        aria-describedby="gmail-calendar-consent-description"
      >
        <DialogHeader>
          <DialogTitle>Connect Google Account</DialogTitle>
          <DialogDescription id="gmail-calendar-consent-description">
            To provide the best experience, Creator Ops Hub needs access to your
            Gmail and Google Calendar. We use this to:
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="rounded-lg border border-border bg-muted/30 p-4">
            <div className="flex items-center gap-2 text-small font-medium">
              <Mail className="h-4 w-4 text-primary" aria-hidden />
              Gmail access
            </div>
            <ul className="mt-2 space-y-1 pl-6 text-small text-muted-foreground list-disc">
              {GMAIL_SCOPES.map((scope) => (
                <li key={scope}>{scope}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-border bg-muted/30 p-4">
            <div className="flex items-center gap-2 text-small font-medium">
              <Calendar className="h-4 w-4 text-primary" aria-hidden />
              Google Calendar access
            </div>
            <ul className="mt-2 space-y-1 pl-6 text-small text-muted-foreground list-disc">
              {CALENDAR_SCOPES.map((scope) => (
                <li key={scope}>{scope}</li>
              ))}
            </ul>
          </div>
        </div>
        <DialogFooter className="gap-2 sm:gap-0">
          <Button
            type="button"
            variant="outline"
            onClick={() => onOpenChange(false)}
            disabled={isLoading}
          >
            Cancel
          </Button>
          <Button
            type="button"
            onClick={onConsent}
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <span
                  className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent"
                  aria-hidden
                />
                Connecting...
              </span>
            ) : (
              'Continue with Google'
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
