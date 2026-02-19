import { User, Building2, Shield, Bell } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'

export function SettingsPage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-h1 font-bold">Settings</h1>
        <p className="mt-1 text-muted-foreground">
          Manage account, workspace, and security
        </p>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              Account
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Email</Label>
              <Input type="email" defaultValue="user@example.com" />
            </div>
            <div className="space-y-2">
              <Label>Display name</Label>
              <Input defaultValue="Creator" />
            </div>
            <Button>Save changes</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building2 className="h-5 w-5" />
              Workspace
            </CardTitle>
            <p className="text-small text-muted-foreground">
              Billing, plan, and team
            </p>
          </CardHeader>
          <CardContent>
            <Button variant="outline">Manage workspace</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Security
            </CardTitle>
            <p className="text-small text-muted-foreground">
              2FA, sessions, API keys
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button variant="outline">Enable 2FA</Button>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Active sessions</p>
                <p className="text-small text-muted-foreground">
                  Manage your logged-in devices
                </p>
              </div>
              <Button variant="ghost" size="sm">View</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              Notifications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-small text-muted-foreground">
              Configure email and in-app notifications
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
