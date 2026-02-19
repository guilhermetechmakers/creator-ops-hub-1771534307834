import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import { TrendingUp, Eye, Heart, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const mockData = [
  { name: 'Mon', impressions: 1200, engagement: 340 },
  { name: 'Tue', impressions: 1800, engagement: 520 },
  { name: 'Wed', impressions: 1500, engagement: 410 },
  { name: 'Thu', impressions: 2200, engagement: 680 },
  { name: 'Fri', impressions: 1900, engagement: 550 },
  { name: 'Sat', impressions: 2400, engagement: 720 },
  { name: 'Sun', impressions: 2100, engagement: 630 },
]

export function AnalyticsPage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-h1 font-bold">Analytics</h1>
          <p className="mt-1 text-muted-foreground">
            Performance insights across your content
          </p>
        </div>
        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Export CSV
        </Button>
      </div>

      {/* Overview widgets */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Impressions</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">13,100</p>
            <p className="text-small text-success">+12% from last week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Engagement</CardTitle>
            <Heart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">3,850</p>
            <p className="text-small text-success">+8% from last week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Posts</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">24</p>
            <p className="text-small text-muted-foreground">This month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Avg. Engagement</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">29.4%</p>
            <p className="text-small text-muted-foreground">Rate</p>
          </CardContent>
        </Card>
      </div>

      {/* Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Performance Over Time</CardTitle>
          <p className="text-small text-muted-foreground">
            Impressions and engagement for the past 7 days
          </p>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={mockData}>
                <defs>
                  <linearGradient id="colorImpressions" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="rgb(var(--primary))" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="rgb(var(--primary))" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                <XAxis dataKey="name" className="text-small" />
                <YAxis className="text-small" />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="impressions"
                  stroke="rgb(var(--primary))"
                  fillOpacity={1}
                  fill="url(#colorImpressions)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
