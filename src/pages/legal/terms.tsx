import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 animate-fade-in">
      <h1 className="text-h1 font-bold">Terms of Service</h1>
      <p className="mt-2 text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
      <div className="prose prose-slate mt-8 dark:prose-invert max-w-none">
        <p>
          By using Creator Ops Hub, you agree to these terms. Please read them
          carefully.
        </p>
        <h2 className="mt-8 text-h2">Acceptable Use</h2>
        <p>
          You agree to use the service in compliance with applicable laws and
          not to misuse AI research or publishing features.
        </p>
        <h2 className="mt-8 text-h2">Account & Billing</h2>
        <p>
          You are responsible for maintaining your account and paying for
          subscribed plans. Billing is handled via Stripe.
        </p>
        <h2 className="mt-8 text-h2">Intellectual Property</h2>
        <p>
          You retain ownership of your content. We require a license to
          operate the service and provide features like AI research.
        </p>
      </div>
      <Button asChild variant="outline" className="mt-8">
        <Link to="/">Back to home</Link>
      </Button>
    </div>
  )
}
