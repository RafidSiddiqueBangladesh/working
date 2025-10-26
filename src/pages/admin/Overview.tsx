import { Card } from "@/components/ui/card";
import { Users, Package, DollarSign, TrendingUp, ShoppingBag, Megaphone, BarChart3, Sparkles, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const AdminOverview = () => {
  const stats = [
    { label: "Total Entrepreneurs", value: "1,234", icon: Users, change: "+12%" },
    { label: "Active Products", value: "5,678", icon: Package, change: "+8%" },
    { label: "Platform Revenue", value: "$123,456", icon: DollarSign, change: "+23%" },
    { label: "Growth Rate", value: "34%", icon: TrendingUp, change: "+5%" },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Platform Overview</h1>
        <p className="text-muted-foreground">Monitor and manage your eCommerce platform</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <Card
            key={stat.label}
            className="p-6 bg-gradient-card border-0 shadow-card hover:shadow-elegant transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <span className="text-sm font-medium text-green-600">{stat.change}</span>
            </div>
            <h3 className="text-2xl font-bold mb-1">{stat.value}</h3>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
          </Card>
        ))}
      </div>

      {/* Feature shortcuts */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Feature Segments</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: ShoppingBag, title: "Product Management", slug: "product" },
            { icon: Megaphone, title: "Social Media Integration", slug: "social" },
            { icon: BarChart3, title: "Advanced Analytics", slug: "analytics" },
            { icon: TrendingUp, title: "Growth Tools", slug: "growth" },
            { icon: Sparkles, title: "AI Assistant", slug: "ai" },
            { icon: Globe, title: "Multi-language", slug: "language" },
          ].map((f) => (
            <Link key={f.slug} to={`/admin/features/${f.slug}/home`} className="block">
              <Card className="p-6 bg-gradient-card border-0 shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105">
                <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                  <f.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="text-lg font-semibold">{f.title}</h4>
                <p className="text-sm text-muted-foreground">Explore tools and insights</p>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6 shadow-card">
          <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {[
              "New product listing approved",
              "Entrepreneur withdrawal processed",
              "Marketing campaign launched",
              "System update completed",
            ].map((activity, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                <div>
                  <p className="font-medium">{activity}</p>
                  <p className="text-sm text-muted-foreground">{i + 1} hour ago</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6 shadow-card">
          <h3 className="text-xl font-semibold mb-4">Quick Stats</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
              <span className="text-muted-foreground">Today's Sales</span>
              <span className="font-bold">$12,345</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
              <span className="text-muted-foreground">Active Users</span>
              <span className="font-bold">456</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
              <span className="text-muted-foreground">Pending Orders</span>
              <span className="font-bold">89</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AdminOverview;
