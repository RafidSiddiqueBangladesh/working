import { Card } from "@/components/ui/card";
import { TrendingUp, DollarSign, ShoppingCart, Users } from "lucide-react";

const SalesAnalytics = () => {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Sales & Performance Analytics</h1>
        <p className="text-muted-foreground">Track your business performance and insights</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="p-6 bg-gradient-card border-0 shadow-card">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <DollarSign className="h-5 w-5 text-primary" />
            </div>
            <span className="text-sm text-muted-foreground">Total Revenue</span>
          </div>
          <p className="text-3xl font-bold mb-1">$12,345</p>
          <p className="text-sm text-green-600">+23% from last month</p>
        </Card>

        <Card className="p-6 bg-gradient-card border-0 shadow-card">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <ShoppingCart className="h-5 w-5 text-primary" />
            </div>
            <span className="text-sm text-muted-foreground">Items Sold</span>
          </div>
          <p className="text-3xl font-bold mb-1">234</p>
          <p className="text-sm text-green-600">+18 this week</p>
        </Card>

        <Card className="p-6 bg-gradient-card border-0 shadow-card">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Users className="h-5 w-5 text-primary" />
            </div>
            <span className="text-sm text-muted-foreground">New Customers</span>
          </div>
          <p className="text-3xl font-bold mb-1">45</p>
          <p className="text-sm text-green-600">+12% growth</p>
        </Card>

        <Card className="p-6 bg-gradient-card border-0 shadow-card">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <TrendingUp className="h-5 w-5 text-primary" />
            </div>
            <span className="text-sm text-muted-foreground">Avg Order Value</span>
          </div>
          <p className="text-3xl font-bold mb-1">$52.78</p>
          <p className="text-sm text-green-600">+8% increase</p>
        </Card>
      </div>

      <div className="grid gap-6">
        <Card className="p-6 shadow-card">
          <h3 className="text-xl font-semibold mb-4">Sales Insights</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-muted/50 rounded-lg">
              <span className="text-muted-foreground">Today's Sales</span>
              <span className="font-bold text-xl">$1,234</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-muted/50 rounded-lg">
              <span className="text-muted-foreground">This Week</span>
              <span className="font-bold text-xl">$5,678</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-muted/50 rounded-lg">
              <span className="text-muted-foreground">This Month</span>
              <span className="font-bold text-xl">$12,345</span>
            </div>
          </div>
        </Card>

        <Card className="p-6 shadow-card">
          <h3 className="text-xl font-semibold mb-4">Customer Demographics</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
              <span>Returning Customers</span>
              <span className="font-semibold">68%</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
              <span>Average Order Frequency</span>
              <span className="font-semibold">2.3x/month</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
              <span>Customer Lifetime Value</span>
              <span className="font-semibold">$345</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SalesAnalytics;
