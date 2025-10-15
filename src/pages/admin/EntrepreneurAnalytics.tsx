import { Card } from "@/components/ui/card";
import { TrendingUp, Package, DollarSign } from "lucide-react";

const EntrepreneurAnalytics = () => {
  const entrepreneurs = [
    { name: "Entrepreneur A", sales: 234, revenue: "$12,345", products: 45 },
    { name: "Entrepreneur B", sales: 189, revenue: "$9,876", products: 32 },
    { name: "Entrepreneur C", sales: 156, revenue: "$8,234", products: 28 },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Entrepreneur Analytics</h1>
        <p className="text-muted-foreground">Track performance across all entrepreneurs</p>
      </div>

      <div className="grid gap-6">
        {entrepreneurs.map((entrepreneur, i) => (
          <Card key={i} className="p-6 shadow-card">
            <h3 className="text-xl font-semibold mb-4">{entrepreneur.name}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-muted/50 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground">Total Sales</span>
                </div>
                <p className="text-2xl font-bold">{entrepreneur.sales}</p>
              </div>
              <div className="p-4 bg-muted/50 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <DollarSign className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground">Revenue</span>
                </div>
                <p className="text-2xl font-bold">{entrepreneur.revenue}</p>
              </div>
              <div className="p-4 bg-muted/50 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <Package className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground">Products</span>
                </div>
                <p className="text-2xl font-bold">{entrepreneur.products}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default EntrepreneurAnalytics;
