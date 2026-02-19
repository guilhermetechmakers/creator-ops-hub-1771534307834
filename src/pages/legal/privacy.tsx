import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 animate-fade-in">
      <h1 className="text-h1 font-bold">Privacy Policy</h1>
      <p className="mt-2 text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
      <div className="prose prose-slate mt-8 dark:prose-invert max-w-none">
        <p>
          Creator Ops Hub respects your privacy. This policy describes how we collect,
          use, and protect your information when you use our service.
        </p>
        <h2 className="mt-8 text-h2">Information We Collect</h2>
        <p>
          We collect information you provide directly (account details, content),
          usage data, and data from connected services (e.g., Gmail, Calendar)
          when you authorize integrations.
        </p>
        <h2 className="mt-8 text-h2">How We Use Your Data</h2>
        <p>
          We use your data to provide the service, improve our product, and
          communicate with you. We do not sell your personal information.
        </p>
        <h2 className="mt-8 text-h2">Data Retention</h2>
        <p>
          OpenClaw research snapshots are retained according to your workspace
          privacy settings. You can configure retention in Settings.
        </p>
      </div>
      <Button asChild variant="outline" className="mt-8">
        <Link to="/">Back to home</Link>
      </Button>
    </div>
  )
}
