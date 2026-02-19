import { Link } from 'react-router-dom'
import {
  Calendar,
  FileEdit,
  FolderOpen,
  Search,
  Plus,
  TrendingUp,
  ArrowUpRight,
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const mockScheduled = [
  { id: '1', title: 'Instagram Reel - Product Launch', platform: 'Instagram', time: 'Today, 2:00 PM' },
  { id: '2', title: 'X Thread - Industry News', platform: 'X', time: 'Today, 4:00 PM' },
]

const mockResearch = [
  { id: '1', query: 'AI content trends 2025', confidence: 0.92, date: '2 hours ago' },
  { id: '2', query: 'Creator economy statistics', confidence: 0.88, date: '1 day ago' },
]

const mockAssets = [
  { id: '1', name: 'hero-banner.png', type: 'image' },
  { id: '2', name: 'intro-video.mp4', type: 'video' },
]

export function DashboardPage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-h1 font-bold">Dashboard</h1>
        <p className="mt-1 text-muted-foreground">
          Your single-pane operational view
        </p>
      </div>

      {/* Upgrade CTA */}
      <Card className="border-primary/30 bg-gradient-to-r from-primary/5 to-accent/5">
        <CardContent className="flex flex-col items-center justify-between gap-4 p-6 sm:flex-row">
          <div>
            <h3 className="font-semibold">Upgrade to Pro</h3>
            <p className="text-small text-muted-foreground">
              Unlock unlimited research credits and team collaboration
            </p>
          </div>
          <Button>Upgrade</Button>
        </CardContent>
      </Card>

      {/* Main widgets grid */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Today & Scheduled */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Today & Scheduled
            </CardTitle>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/dashboard/calendar">
                View all
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {mockScheduled.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between rounded-lg border border-border p-3 transition-colors hover:bg-muted/50"
                >
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p className="text-small text-muted-foreground">
                      {item.platform} · {item.time}
                    </p>
                  </div>
                  <Badge variant="secondary">{item.platform}</Badge>
                </div>
              ))}
              {mockScheduled.length === 0 && (
                <p className="py-8 text-center text-muted-foreground">
                  No posts scheduled for today
                </p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Recent Research */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5" />
              Recent Research
            </CardTitle>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/dashboard/research">
                View all
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {mockResearch.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between rounded-lg border border-border p-3 transition-colors hover:bg-muted/50"
                >
                  <div>
                    <p className="font-medium">{item.query}</p>
                    <p className="text-small text-muted-foreground">{item.date}</p>
                  </div>
                  <Badge
                    variant={item.confidence >= 0.9 ? 'success' : 'secondary'}
                  >
                    {Math.round(item.confidence * 100)}%
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Create */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Plus className="h-5 w-5" />
              Quick Create
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 sm:grid-cols-2">
              <Button asChild variant="outline" className="h-auto flex-col gap-2 py-4">
                <Link to="/dashboard/studio">
                  <FileEdit className="h-6 w-6" />
                  New Content
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-auto flex-col gap-2 py-4">
                <Link to="/dashboard/calendar">
                  <Calendar className="h-6 w-6" />
                  Schedule Post
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Recent Assets */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <FolderOpen className="h-5 w-5" />
              Recent Assets
            </CardTitle>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/dashboard/library">
                View all
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {mockAssets.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-3 rounded-lg border border-border p-2 transition-colors hover:bg-muted/50"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-muted">
                    <FolderOpen className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-micro text-muted-foreground">{item.type}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Activity feed placeholder */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Activity Feed
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <p className="text-muted-foreground">
              Recent activity from your team will appear here
            </p>
            <Button variant="link" className="mt-2 text-primary">
              View full activity
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
