import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const PlatformSettings = () => {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Platform Settings</h1>
        <p className="text-muted-foreground">Configure global platform settings</p>
      </div>

      <div className="grid gap-6">
        <Card className="p-6 shadow-card">
          <h3 className="text-xl font-semibold mb-4">Branding & Appearance</h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="platform-name">Platform Name</Label>
              <Input id="platform-name" defaultValue="Mindspring 30" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="tagline">Tagline</Label>
              <Input id="tagline" defaultValue="Empower Your Business" />
            </div>
            <div className="space-y-2">
              <Label>Primary Color</Label>
              <div className="flex gap-2">
                <Input type="color" defaultValue="#8b5cf6" className="w-20" />
                <Input defaultValue="#8b5cf6" />
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6 shadow-card">
          <h3 className="text-xl font-semibold mb-4">Currency & Language</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label>Default Currency</Label>
                <p className="text-sm text-muted-foreground">USD ($)</p>
              </div>
              <Button variant="outline" size="sm">Change</Button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label>Supported Languages</Label>
                <p className="text-sm text-muted-foreground">English, Bangla</p>
              </div>
              <Button variant="outline" size="sm">Manage</Button>
            </div>
          </div>
        </Card>

        <Card className="p-6 shadow-card">
          <h3 className="text-xl font-semibold mb-4">SEO Settings</h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="meta-title">Meta Title</Label>
              <Input id="meta-title" defaultValue="Mindspring 30 - AI-Powered eCommerce" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="meta-desc">Meta Description</Label>
              <Input id="meta-desc" defaultValue="Empower your business with AI-driven tools" />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label>Sitemap Generation</Label>
                <p className="text-sm text-muted-foreground">Automatically generate sitemap</p>
              </div>
              <Switch defaultChecked />
            </div>
          </div>
        </Card>

        <div className="flex justify-end">
          <Button size="lg">Save Changes</Button>
        </div>
      </div>
    </div>
  );
};

export default PlatformSettings;
