import { useState } from 'react'
import { Search, Upload, Grid3X3, List, FolderOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

const mockAssets = [
  { id: '1', name: 'hero-banner.png', type: 'image', size: '2.4 MB', date: 'Today' },
  { id: '2', name: 'intro-video.mp4', type: 'video', size: '45 MB', date: 'Yesterday' },
  { id: '3', name: 'brand-guide.pdf', type: 'document', size: '1.2 MB', date: '2 days ago' },
  { id: '4', name: 'thumbnail-v2.png', type: 'image', size: '890 KB', date: '3 days ago' },
]

export function FileLibraryPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-h1 font-bold">File Library</h1>
          <p className="mt-1 text-muted-foreground">
            Manage and organize your assets
          </p>
        </div>
        <Button>
          <Upload className="mr-2 h-4 w-4" />
          Upload
        </Button>
      </div>

      {/* Search & filters */}
      <Card>
        <CardContent className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search assets..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
            />
          </div>
          <div className="flex gap-2">
            <Button
              variant={viewMode === 'grid' ? 'secondary' : 'ghost'}
              size="icon"
              onClick={() => setViewMode('grid')}
            >
              <Grid3X3 className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === 'list' ? 'secondary' : 'ghost'}
              size="icon"
              onClick={() => setViewMode('list')}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Upload area */}
      <div className="rounded-2xl border-2 border-dashed border-border bg-muted/30 p-12 text-center transition-colors hover:border-primary/50 hover:bg-muted/50">
        <Upload className="mx-auto h-12 w-12 text-muted-foreground" />
        <p className="mt-4 font-medium">Drag and drop files here</p>
        <p className="mt-1 text-small text-muted-foreground">
          or click to browse. Supports images, video, PDFs.
        </p>
      </div>

      {/* Asset grid/list */}
      <div
        className={cn(
          viewMode === 'grid'
            ? 'grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
            : 'space-y-2'
        )}
      >
        {mockAssets.map((asset) => (
          <Card
            key={asset.id}
            className={cn(
              'transition-all duration-200 hover:scale-[1.02] hover:shadow-card-hover',
              viewMode === 'list' && 'flex flex-row items-center'
            )}
          >
            <CardContent
              className={cn(
                'p-4',
                viewMode === 'list' && 'flex w-full items-center justify-between'
              )}
            >
              {viewMode === 'grid' ? (
                <>
                  <div className="flex aspect-square items-center justify-center rounded-lg bg-muted">
                    <FolderOpen className="h-16 w-16 text-muted-foreground" />
                  </div>
                  <div className="mt-3">
                    <p className="font-medium truncate">{asset.name}</p>
                    <div className="mt-1 flex items-center gap-2">
                      <Badge variant="secondary">{asset.type}</Badge>
                      <span className="text-micro text-muted-foreground">
                        {asset.size}
                      </span>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted">
                      <FolderOpen className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="font-medium">{asset.name}</p>
                      <p className="text-small text-muted-foreground">
                        {asset.size} · {asset.date}
                      </p>
                    </div>
                  </div>
                  <Badge variant="secondary">{asset.type}</Badge>
                </>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
