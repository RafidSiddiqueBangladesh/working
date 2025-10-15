import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Bell, Download, Shield } from "lucide-react";

const NotificationsData = () => {
  const notifications = [
    { type: "Security", message: "New login detected from unknown device", time: "2 hours ago" },
    { type: "User", message: "New entrepreneur application pending", time: "5 hours ago" },
    { type: "System", message: "Database backup completed successfully", time: "1 day ago" },
    { type: "Payment", message: "Withdrawal request from John's Shop", time: "2 days ago" },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Notifications & Data</h1>
        <p className="text-muted-foreground">Manage alerts, notifications, and data exports</p>
      </div>

      <div className="grid gap-6">
        <Card className="p-6 shadow-card">
          <div className="flex items-center gap-3 mb-4">
            <Bell className="h-5 w-5 text-primary" />
            <h3 className="text-xl font-semibold">Recent Notifications</h3>
          </div>
          <div className="space-y-3">
            {notifications.map((notif, i) => (
              <div key={i} className="p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold">{notif.type}</span>
                      <span className="text-sm text-muted-foreground">{notif.time}</span>
                    </div>
                    <p className="text-muted-foreground">{notif.message}</p>
                  </div>
                  <Button variant="ghost" size="sm">
                    View
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6 shadow-card">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="h-5 w-5 text-primary" />
            <h3 className="text-xl font-semibold">Notification Settings</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label>Email Notifications</Label>
                <p className="text-sm text-muted-foreground">Receive important alerts via email</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label>Security Alerts</Label>
                <p className="text-sm text-muted-foreground">Get notified of security events</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label>User Activity</Label>
                <p className="text-sm text-muted-foreground">Track new applications and requests</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label>System Updates</Label>
                <p className="text-sm text-muted-foreground">Stay informed about platform updates</p>
              </div>
              <Switch />
            </div>
          </div>
        </Card>

        <Card className="p-6 shadow-card">
          <div className="flex items-center gap-3 mb-4">
            <Download className="h-5 w-5 text-primary" />
            <h3 className="text-xl font-semibold">Data Management</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
              <div>
                <Label>Export User Data</Label>
                <p className="text-sm text-muted-foreground">Download all user information</p>
              </div>
              <Button variant="outline">Export CSV</Button>
            </div>
            <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
              <div>
                <Label>Export Sales Data</Label>
                <p className="text-sm text-muted-foreground">Download transaction history</p>
              </div>
              <Button variant="outline">Export CSV</Button>
            </div>
            <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
              <div>
                <Label>Backup Database</Label>
                <p className="text-sm text-muted-foreground">Create a full platform backup</p>
              </div>
              <Button variant="outline">Create Backup</Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default NotificationsData;
