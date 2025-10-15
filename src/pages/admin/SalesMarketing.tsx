import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Target, Users } from "lucide-react";

const SalesMarketing = () => {
  const campaigns = [
    { name: "Summer Sale", platform: "Facebook", reach: "12.5K", conversions: 234, status: "Active" },
    { name: "New Product Launch", platform: "Instagram", reach: "8.9K", conversions: 156, status: "Active" },
    { name: "Holiday Promo", platform: "Google Ads", reach: "15.2K", conversions: 289, status: "Completed" },
  ];

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Sales & Marketing Analytics</h1>
          <p className="text-muted-foreground">Track marketing performance and ROI</p>
        </div>
        <Button>Create Campaign</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="p-6 bg-gradient-card border-0 shadow-card">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <TrendingUp className="h-5 w-5 text-primary" />
            </div>
            <span className="text-sm text-muted-foreground">Total Revenue</span>
          </div>
          <p className="text-3xl font-bold mb-1">$123,456</p>
          <p className="text-sm text-green-600">+23% from last month</p>
        </Card>

        <Card className="p-6 bg-gradient-card border-0 shadow-card">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Target className="h-5 w-5 text-primary" />
            </div>
            <span className="text-sm text-muted-foreground">Active Campaigns</span>
          </div>
          <p className="text-3xl font-bold mb-1">12</p>
          <p className="text-sm text-muted-foreground">Across all platforms</p>
        </Card>

        <Card className="p-6 bg-gradient-card border-0 shadow-card">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Users className="h-5 w-5 text-primary" />
            </div>
            <span className="text-sm text-muted-foreground">Total Reach</span>
          </div>
          <p className="text-3xl font-bold mb-1">45.6K</p>
          <p className="text-sm text-green-600">+15% engagement</p>
        </Card>
      </div>

      <Card className="p-6 shadow-card">
        <h3 className="text-xl font-semibold mb-4">Marketing Campaigns</h3>
        <div className="space-y-4">
          {campaigns.map((campaign, i) => (
            <div key={i} className="p-4 border rounded-lg hover:bg-muted/50 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h4 className="font-semibold">{campaign.name}</h4>
                  <p className="text-sm text-muted-foreground">{campaign.platform}</p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    campaign.status === "Active" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {campaign.status}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold">{campaign.reach}</p>
                  <p className="text-sm text-muted-foreground">Reach</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">{campaign.conversions}</p>
                  <p className="text-sm text-muted-foreground">Conversions</p>
                </div>
                <div>
                  <Button variant="outline" size="sm" className="w-full">
                    View Report
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default SalesMarketing;
