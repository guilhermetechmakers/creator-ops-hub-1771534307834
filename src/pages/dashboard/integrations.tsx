import { Plus, Trash2, Key } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const mockConnectors = [
  { id: '1', name: 'Google', type: 'Gmail + Calendar', connected: true },
  { id: '2', name: 'Instagram', type: 'Publishing', connected: false },
  { id: '3', name: 'X (Twitter)', type: 'Publishing', connected: false },
]

export function IntegrationsPage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-h1 font-bold">Integrations</h1>
        <p className="mt-1 text-muted-foreground">
          Manage connected services and API keys
        </p>
      </div>

      {/* Connected accounts */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Connected Accounts</CardTitle>
          <Button size="sm">
            <Plus className="mr-2 h-4 w-4" />
            Add connector
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockConnectors.map((conn) => (
              <div
                key={conn.id}
                className="flex items-center justify-between rounded-lg border border-border p-4"
              >
                <div>
                  <p className="font-medium">{conn.name}</p>
                  <p className="text-small text-muted-foreground">{conn.type}</p>
                </div>
                <div className="flex items-center gap-2">
                  {conn.connected ? (
                    <>
                      <Badge variant="success">Connected</Badge>
                      <Button variant="ghost" size="icon">
                        <Trash2 className="h-4 w-4 text-error" />
                      </Button>
                    </>
                  ) : (
                    <Button size="sm">Connect</Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* API keys */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Developer API Keys</CardTitle>
          <Button size="sm" variant="outline">
            <Key className="mr-2 h-4 w-4" />
            Create key
          </Button>
        </CardHeader>
        <CardContent>
          <p className="text-small text-muted-foreground">
            API keys for programmatic access. Keep them secure.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
