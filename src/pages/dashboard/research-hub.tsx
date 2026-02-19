import { Plus, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const mockResearch = [
  { id: '1', query: 'AI content trends 2025', confidence: 0.92, sources: 12, date: '2 hours ago' },
  { id: '2', query: 'Creator economy statistics', confidence: 0.88, sources: 8, date: '1 day ago' },
  { id: '3', query: 'Instagram algorithm updates', confidence: 0.95, sources: 15, date: '2 days ago' },
]

export function ResearchHubPage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-h1 font-bold">Research Hub</h1>
          <p className="mt-1 text-muted-foreground">
            OpenClaw research outputs with citations and traceability
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Research
        </Button>
      </div>

      {/* Trigger OpenClaw form */}
      <Card>
        <CardHeader>
          <CardTitle>Run OpenClaw Research</CardTitle>
          <p className="text-small text-muted-foreground">
            Enter a query to research live web sources with citations
          </p>
        </CardHeader>
        <CardContent className="flex gap-4">
          <Input placeholder="Research query..." className="flex-1" />
          <Button>Run Research</Button>
        </CardContent>
      </Card>

      {/* Research list */}
      <div className="space-y-4">
        <h2 className="text-h3 font-semibold">Recent Research</h2>
        {mockResearch.map((item) => (
          <Card key={item.id} className="transition-all hover:shadow-card-hover">
            <CardContent className="p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-medium">{item.query}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <Badge variant={item.confidence >= 0.9 ? 'success' : 'secondary'}>
                      {Math.round(item.confidence * 100)}% confidence
                    </Badge>
                    <Badge variant="outline">{item.sources} sources</Badge>
                  </div>
                  <p className="mt-1 text-small text-muted-foreground">{item.date}</p>
                </div>
                <Button variant="outline" size="sm">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View details
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
