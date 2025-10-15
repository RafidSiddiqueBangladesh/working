import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DollarSign, Wallet } from "lucide-react";

const Payments = () => {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Payments & Withdrawals</h1>
        <p className="text-muted-foreground">Manage your earnings and withdrawals</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <Card className="p-6 bg-gradient-card border-0 shadow-card">
          <div className="flex items-center gap-3 mb-3">
            <DollarSign className="h-6 w-6 text-primary" />
            <span className="text-muted-foreground">Total Earnings</span>
          </div>
          <p className="text-4xl font-bold mb-2">$12,345.67</p>
          <p className="text-sm text-green-600">+23% this month</p>
        </Card>

        <Card className="p-6 bg-gradient-card border-0 shadow-card">
          <div className="flex items-center gap-3 mb-3">
            <Wallet className="h-6 w-6 text-primary" />
            <span className="text-muted-foreground">Available Balance</span>
          </div>
          <p className="text-4xl font-bold mb-2">$8,234.56</p>
          <Button className="mt-2">Request Withdrawal</Button>
        </Card>
      </div>

      <Card className="p-6 shadow-card">
        <h3 className="text-xl font-semibold mb-4">Transaction History</h3>
        <div className="space-y-3">
          {[
            { type: "Sale", amount: "+$234.56", date: "2025-01-10" },
            { type: "Withdrawal", amount: "-$1,000.00", date: "2025-01-08" },
            { type: "Sale", amount: "+$123.45", date: "2025-01-07" },
          ].map((tx, i) => (
            <div key={i} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
              <div>
                <p className="font-medium">{tx.type}</p>
                <p className="text-sm text-muted-foreground">{tx.date}</p>
              </div>
              <p className={`font-semibold ${tx.amount.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                {tx.amount}
              </p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Payments;
