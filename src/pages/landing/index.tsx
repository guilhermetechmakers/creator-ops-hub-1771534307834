import { Link } from 'react-router-dom'
import { FolderOpen, FileEdit, Calendar, Search, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const features = [
  {
    icon: FolderOpen,
    title: 'File Library',
    description: 'Tagged asset management with upload, versioning, and usage tracking.',
  },
  {
    icon: FileEdit,
    title: 'Content Studio',
    description: 'Drafting, templates, briefs, and channel-aware publishing metadata.',
  },
  {
    icon: Calendar,
    title: 'Editorial Calendar',
    description: 'Plan and schedule posts across Instagram, X, and YouTube with drag-and-drop.',
  },
  {
    icon: Search,
    title: 'OpenClaw Research',
    description: 'AI-powered research with citations, confidence scores, and traceability.',
  },
]

export function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero - Animated gradient background */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10 animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="max-w-3xl animate-fade-in-up">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Your single-pane{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                creator workspace
              </span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground sm:text-xl">
              Centralize assets, planning, research, and AI-driven execution. Move from idea to published content faster with full traceability.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg" className="group">
                <Link to="/signup">
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/login">Sign In</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights - Bento-style grid */}
      <section className="border-t border-border bg-muted/30 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-h1 font-bold text-foreground">
            Everything you need to create
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
            Strategy, research, files, and multi-platform execution in one place.
          </p>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map(({ icon: Icon, title, description }, i) => (
              <div
                key={title}
                className={cn(
                  'group rounded-2xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:scale-[1.02] hover:shadow-card-hover',
                  i === 0 && 'lg:col-span-2 lg:row-span-2 lg:flex lg:flex-col lg:justify-center'
                )}
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-h3 font-semibold">{title}</h3>
                <p className="mt-2 text-muted-foreground">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-h1 font-bold text-foreground">
            Ready to streamline your content workflow?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Join creators and teams who ship faster with Creator Ops Hub.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link to="/signup">Start Free Trial</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-small text-muted-foreground">
              © {new Date().getFullYear()} Creator Ops Hub. All rights reserved.
            </p>
            <nav className="flex gap-6">
              <Link to="/privacy" className="text-small text-muted-foreground hover:text-foreground">
                Privacy
              </Link>
              <Link to="/terms" className="text-small text-muted-foreground hover:text-foreground">
                Terms
              </Link>
              <Link to="/help" className="text-small text-muted-foreground hover:text-foreground">
                Help
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}
