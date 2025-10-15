import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DollarSign, TrendingUp, Wallet } from "lucide-react";

const FinancialManagement = () => {
  const withdrawals = [
    { entrepreneur: "John's Shop", amount: "$1,234.56", status: "Pending", date: "2025-01-10" },
    { entrepreneur: "Jane's Store", amount: "$890.00", status: "Approved", date: "2025-01-09" },
    { entrepreneur: "Mike's Market", amount: "$2,345.67", status: "Completed", date: "2025-01-08" },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Financial Management</h1>
        <p className="text-muted-foreground">Track earnings, commissions, and withdrawals</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="p-6 bg-gradient-card border-0 shadow-card">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <DollarSign className="h-5 w-5 text-primary" />
            </div>
            <span className="text-sm text-muted-foreground">Platform Earnings</span>
          </div>
          <p className="text-3xl font-bold mb-1">$45,678</p>
          <p className="text-sm text-green-600">+18% this month</p>
        </Card>

        <Card className="p-6 bg-gradient-card border-0 shadow-card">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <TrendingUp className="h-5 w-5 text-primary" />
            </div>
            <span className="text-sm text-muted-foreground">Total Commissions</span>
          </div>
          <p className="text-3xl font-bold mb-1">$12,345</p>
          <p className="text-sm text-muted-foreground">From 234 transactions</p>
        </Card>

        <Card className="p-6 bg-gradient-card border-0 shadow-card">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Wallet className="h-5 w-5 text-primary" />
            </div>
            <span className="text-sm text-muted-foreground">Pending Withdrawals</span>
          </div>
          <p className="text-3xl font-bold mb-1">$3,456</p>
          <p className="text-sm text-muted-foreground">4 requests</p>
        </Card>
      </div>

      <Card className="p-6 shadow-card mb-6">
        <h3 className="text-xl font-semibold mb-4">Withdrawal Requests</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b">
              <tr>
                <th className="text-left p-4 font-semibold">Entrepreneur</th>
                <th className="text-left p-4 font-semibold">Amount</th>
                <th className="text-left p-4 font-semibold">Date</th>
                <th className="text-left p-4 font-semibold">Status</th>
                <th className="text-left p-4 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {withdrawals.map((item, i) => (
                <tr key={i} className="border-b last:border-0 hover:bg-muted/50">
                  <td className="p-4 font-medium">{item.entrepreneur}</td>
                  <td className="p-4 font-semibold">{item.amount}</td>
                  <td className="p-4 text-muted-foreground">{item.date}</td>
                  <td className="p-4">
                    <Badge
                      variant={
                        item.status === "Completed"
                          ? "default"
                          : item.status === "Approved"
                          ? "secondary"
                          : "outline"
                      }
                    >
                      {item.status}
                    </Badge>
                  </td>
                  <td className="p-4">
                    {item.status === "Pending" && (
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Approve
                        </Button>
                        <Button variant="outline" size="sm">
                          Reject
                        </Button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <Card className="p-6 shadow-card">
        <h3 className="text-xl font-semibold mb-4">Transaction History</h3>
        <p className="text-muted-foreground">View and export all financial transactions</p>
        <div className="mt-4">
          <Button variant="outline">Export CSV</Button>
        </div>
      </Card>
    </div>
  );
};

export default FinancialManagement;
