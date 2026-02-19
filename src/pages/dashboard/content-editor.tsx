import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Save, History, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'

export function ContentEditorPage() {
  const { id } = useParams()

  return (
    <div className="flex h-[calc(100vh-8rem)] gap-6 animate-fade-in">
      {/* Main editor area */}
      <div className="flex flex-1 flex-col min-w-0">
        <div className="flex items-center justify-between gap-4 pb-4">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" asChild>
              <Link to="/dashboard/studio">
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </Button>
            <div>
              <h1 className="text-h2 font-semibold">
                {id === 'new' ? 'New Content' : 'Edit Content'}
              </h1>
              <p className="text-small text-muted-foreground">
                Saved 2 minutes ago
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <History className="mr-2 h-4 w-4" />
              History
            </Button>
            <Button size="sm">
              <Save className="mr-2 h-4 w-4" />
              Save
            </Button>
          </div>
        </div>

        <Card className="flex flex-1 flex-col min-h-0">
          <CardContent className="flex flex-1 flex-col p-0">
            <div className="flex-1 overflow-auto p-6">
              <div className="mx-auto max-w-3xl space-y-6">
                <div className="space-y-2">
                  <Label>Title</Label>
                  <Input placeholder="Content title..." />
                </div>
                <Separator />
                <div className="space-y-2">
                  <Label>Content</Label>
                  <textarea
                    className="min-h-[300px] w-full rounded-lg border border-input bg-background px-3 py-2 text-body placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Write your content here... (Markdown supported)"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Right sidebar */}
      <aside className="hidden w-80 shrink-0 flex-col gap-4 lg:flex">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Brief</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-small text-muted-foreground">
              Link a brief or add context for this content.
            </p>
            <Button variant="outline" size="sm" className="w-full">
              Add brief
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Status</CardTitle>
          </CardHeader>
          <CardContent>
            <Badge variant="secondary">Draft</Badge>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Publish</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button size="sm" className="w-full">
              <Send className="mr-2 h-4 w-4" />
              Schedule
            </Button>
          </CardContent>
        </Card>
      </aside>
    </div>
  )
}
