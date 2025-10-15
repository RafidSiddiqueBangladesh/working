import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Profile = () => {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Profile & Settings</h1>
        <p className="text-muted-foreground">Manage your business profile and account settings</p>
      </div>

      <div className="grid gap-6">
        <Card className="p-6 shadow-card">
          <h3 className="text-xl font-semibold mb-4">Business Profile</h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Business Name</Label>
              <Input defaultValue="My Amazing Store" />
            </div>
            <div className="space-y-2">
              <Label>Business Email</Label>
              <Input type="email" defaultValue="store@example.com" />
            </div>
            <div className="space-y-2">
              <Label>Business Description</Label>
              <Input defaultValue="We sell amazing products" />
            </div>
          </div>
        </Card>

        <Card className="p-6 shadow-card">
          <h3 className="text-xl font-semibold mb-4">Account Settings</h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Email</Label>
              <Input type="email" defaultValue="user@example.com" />
            </div>
            <div className="space-y-2">
              <Label>Password</Label>
              <Button variant="outline">Change Password</Button>
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

export default Profile;
