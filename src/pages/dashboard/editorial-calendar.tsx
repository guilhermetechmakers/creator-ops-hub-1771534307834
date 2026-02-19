import { ChevronLeft, ChevronRight, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

export function EditorialCalendarPage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-h1 font-bold">Editorial Calendar</h1>
          <p className="mt-1 text-muted-foreground">
            Plan and schedule posts across channels
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="icon">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <ChevronRight className="h-4 w-4" />
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Schedule
          </Button>
        </div>
      </div>

      {/* View toggles */}
      <div className="flex gap-2">
        <Button variant="secondary" size="sm">Month</Button>
        <Button variant="ghost" size="sm">Week</Button>
        <Button variant="ghost" size="sm">Day</Button>
      </div>

      {/* Calendar grid */}
      <Card>
        <CardHeader>
          <CardTitle>February 2025</CardTitle>
          <div className="flex gap-2">
            <Badge variant="secondary" className="bg-blue-500/20 text-blue-700">Instagram</Badge>
            <Badge variant="secondary" className="bg-black/20">X</Badge>
            <Badge variant="secondary" className="bg-red-500/20 text-red-700">YouTube</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-7 gap-2">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d) => (
              <div key={d} className="text-center text-small font-medium text-muted-foreground">
                {d}
              </div>
            ))}
            {Array.from({ length: 35 }, (_, i) => (
              <div
                key={i}
                className={cn(
                  'min-h-[100px] rounded-lg border border-border p-2',
                  i >= 28 && 'opacity-50'
                )}
              >
                <span className="text-small">{i < 28 ? i + 1 : ''}</span>
                {i === 18 && (
                  <div className="mt-2 rounded bg-primary/20 p-2 text-small">
                    Product Launch
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
