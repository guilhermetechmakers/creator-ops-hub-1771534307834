import { RefreshCw, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'

const mockJobs = [
  { id: 'job-1', content: 'Product Launch', platform: 'Instagram', status: 'Completed' },
  { id: 'job-2', content: 'News Thread', platform: 'X', status: 'Pending' },
  { id: 'job-3', content: 'Tutorial', platform: 'YouTube', status: 'Failed' },
]

const statusVariants = {
  Completed: 'success',
  Pending: 'warning',
  Failed: 'error',
} as const

export function PublishingQueuePage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-h1 font-bold">Publishing Queue & Logs</h1>
          <p className="mt-1 text-muted-foreground">
            Monitor publishing status and retry failed jobs
          </p>
        </div>
        <Button variant="outline">
          <RefreshCw className="mr-2 h-4 w-4" />
          Bulk retry
        </Button>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="flex gap-4 p-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search jobs..." className="pl-9" />
          </div>
          <Button variant="outline">Filter by status</Button>
        </CardContent>
      </Card>

      {/* Queue list */}
      <Card>
        <CardHeader>
          <CardTitle>Queue</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {mockJobs.map((job) => (
              <div
                key={job.id}
                className="flex items-center justify-between rounded-lg border border-border p-4"
              >
                <div>
                  <p className="font-medium">{job.content}</p>
                  <p className="text-small text-muted-foreground">
                    {job.id} · {job.platform}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge
                    variant={
                      statusVariants[job.status as keyof typeof statusVariants] ??
                      'secondary'
                    }
                  >
                    {job.status}
                  </Badge>
                  {job.status === 'Failed' && (
                    <Button size="sm" variant="outline">
                      <Play className="mr-1 h-4 w-4" />
                      Retry
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
