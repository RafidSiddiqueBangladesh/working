import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Package, ShoppingCart, Users, TrendingUp, ShoppingBag, Megaphone, BarChart3, Sparkles, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const EntrepreneurOverview = () => {
  const stats = [
    { label: "Total Products", value: "45", icon: Package, change: "+3" },
    { label: "Total Orders", value: "234", icon: ShoppingCart, change: "+18" },
    { label: "Customers", value: "156", icon: Users, change: "+12" },
    { label: "Revenue", value: "$12,345", icon: TrendingUp, change: "+23%" },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Welcome Back!</h1>
        <p className="text-muted-foreground">Here's what's happening with your business</p>
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
              <span className="text-sm font-medium text-green-600">+{stat.change}</span>
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
            <Link key={f.slug} to={`/entrepreneur/features/${f.slug}/home`} className="block">
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
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold">Recent Orders</h3>
            <Button variant="outline" size="sm">View All</Button>
          </div>
          <div className="space-y-3">
            {[
              { order: "#1234", amount: "$234.56", status: "Completed" },
              { order: "#1235", amount: "$123.45", status: "Processing" },
              { order: "#1236", amount: "$456.78", status: "Pending" },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <div>
                  <p className="font-medium">Order {item.order}</p>
                  <p className="text-sm text-muted-foreground">{item.status}</p>
                </div>
                <p className="font-semibold">{item.amount}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6 shadow-card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold">Top Products</h3>
            <Button variant="outline" size="sm">View All</Button>
          </div>
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                <div className="w-12 h-12 rounded-lg bg-gradient-primary" />
                <div className="flex-1">
                  <p className="font-medium">Product {i}</p>
                  <p className="text-sm text-muted-foreground">{45 - i * 5} sales</p>
                </div>
                <p className="font-semibold">${(99 + i * 20).toFixed(2)}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default EntrepreneurOverview;
