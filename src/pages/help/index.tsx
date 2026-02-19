import { Search, Book, MessageCircle, FileText } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export function HelpPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-8 px-4 py-12 animate-fade-in">
      <div className="text-center">
        <h1 className="text-h1 font-bold">Help & Support</h1>
        <p className="mt-2 text-muted-foreground">
          Search documentation, FAQs, and get in touch
        </p>
      </div>

      <div className="relative">
        <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search docs..."
          className="h-12 pl-12 text-base"
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Card className="transition-all hover:shadow-card-hover">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Book className="h-5 w-5" />
              Documentation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Guides for getting started, features, and workflows.
            </p>
            <Button variant="outline" className="mt-4">Browse docs</Button>
          </CardContent>
        </Card>
        <Card className="transition-all hover:shadow-card-hover">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              FAQ
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Common questions and answers.
            </p>
            <Button variant="outline" className="mt-4">View FAQ</Button>
          </CardContent>
        </Card>
        <Card className="sm:col-span-2 transition-all hover:shadow-card-hover">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              Contact Support
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Need help? Reach out to our support team.
            </p>
            <Button className="mt-4">Contact us</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
