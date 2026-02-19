import { Upload, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function ContentImportExportPage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-h1 font-bold">Import / Export</h1>
        <p className="mt-1 text-muted-foreground">
          Migrate content and create backups
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="h-5 w-5" />
              Import
            </CardTitle>
            <p className="text-small text-muted-foreground">
              Import content from CSV or other formats. Map fields to your schema.
            </p>
          </CardHeader>
          <CardContent>
            <div className="rounded-lg border-2 border-dashed border-border p-8 text-center">
              <Upload className="mx-auto h-12 w-12 text-muted-foreground" />
              <p className="mt-4 font-medium">Upload file to import</p>
              <Button className="mt-4">Start import wizard</Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Download className="h-5 w-5" />
              Export
            </CardTitle>
            <p className="text-small text-muted-foreground">
              Export content, assets, and research with manifest.
            </p>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full">
              <Download className="mr-2 h-4 w-4" />
              Export selected items
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
