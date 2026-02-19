import { Link } from 'react-router-dom'
import { AlertTriangle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function ServerErrorPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <div className="text-center animate-fade-in-up">
        <AlertTriangle className="mx-auto h-24 w-24 text-warning" />
        <h1 className="mt-6 text-4xl font-bold">500</h1>
        <p className="mt-2 text-muted-foreground">
          Something went wrong on our end. We&apos;re working on it.
        </p>
        <Button asChild className="mt-8">
          <Link to="/">Go home</Link>
        </Button>
      </div>
    </div>
  )
}
