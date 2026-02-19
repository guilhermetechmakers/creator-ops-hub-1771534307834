import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { toast } from 'sonner'

export function EmailVerificationPage() {
  const [countdown, setCountdown] = useState(0)
  const [isLoading, setIsLoading] = useState(false)

  const handleResend = async () => {
    if (countdown > 0) return
    setIsLoading(true)
    try {
      // Mock API call
      await new Promise((r) => setTimeout(r, 500))
      setCountdown(60)
      toast.success('Verification email sent')
      const interval = setInterval(() => {
        setCountdown((c) => {
          if (c <= 1) return 0
          return c - 1
        })
      }, 1000)
      setTimeout(() => clearInterval(interval), 60000)
    } catch {
      toast.error('Failed to send. Try again later.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-primary/5 via-background to-accent/5 p-4">
      <Card className="w-full max-w-md animate-scale-in">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-h1">Verify your email</CardTitle>
          <CardDescription>
            We&apos;ve sent a verification link to your email address. Click the
            link to activate your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-center text-small text-muted-foreground">
            Didn&apos;t receive the email? Check your spam folder or resend.
          </p>
          <Button
            variant="outline"
            className="w-full"
            onClick={handleResend}
            disabled={isLoading || countdown > 0}
          >
            {countdown > 0
              ? `Resend in ${countdown}s`
              : isLoading
                ? 'Sending...'
                : 'Resend verification email'}
          </Button>
          {countdown > 0 && (
            <p className="text-center text-micro text-muted-foreground">
              Rate limited. Wait before requesting another email.
            </p>
          )}
          <Button asChild className="w-full">
            <Link to="/dashboard">Go to Dashboard</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
