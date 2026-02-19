import { Link } from 'react-router-dom'
import { Plus, Search, Filter, FileEdit } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const mockContent = [
  { id: '1', title: 'Product Launch Announcement', status: 'Draft', channel: 'Instagram', updated: '2 hours ago' },
  { id: '2', title: 'Industry News Thread', status: 'Scheduled', channel: 'X', updated: '1 day ago' },
  { id: '3', title: 'Tutorial Script - Part 1', status: 'Review', channel: 'YouTube', updated: '2 days ago' },
]

const statusVariants = {
  Draft: 'secondary',
  Review: 'warning',
  Scheduled: 'default',
  Published: 'success',
} as const

export function ContentStudioPage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-h1 font-bold">Content Studio</h1>
          <p className="mt-1 text-muted-foreground">
            Manage content items and briefs
          </p>
        </div>
        <Button asChild>
          <Link to="/dashboard/studio/new">
            <Plus className="mr-2 h-4 w-4" />
            New Content
          </Link>
        </Button>
      </div>

      {/* Toolbar */}
      <Card>
        <CardContent className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search content..." className="pl-9" />
          </div>
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filters
          </Button>
        </CardContent>
      </Card>

      {/* Content table/cards */}
      <div className="space-y-2">
        {mockContent.map((item) => (
          <Card
            key={item.id}
            className="transition-all duration-200 hover:shadow-card-hover"
          >
            <CardContent className="p-4">
              <Link
                to={`/dashboard/studio/${item.id}`}
                className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <FileEdit className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p className="text-small text-muted-foreground">
                      {item.channel} · Updated {item.updated}
                    </p>
                  </div>
                </div>
                <Badge
                  variant={
                    statusVariants[item.status as keyof typeof statusVariants] ??
                    'secondary'
                  }
                >
                  {item.status}
                </Badge>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
