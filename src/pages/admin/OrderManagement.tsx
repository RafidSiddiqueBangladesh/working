import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const OrderManagement = () => {
  const orders = [
    { id: "#1234", customer: "John Doe", entrepreneur: "Shop A", amount: "$234.56", status: "Completed" },
    { id: "#1235", customer: "Jane Smith", entrepreneur: "Shop B", amount: "$123.45", status: "Processing" },
    { id: "#1236", customer: "Mike Johnson", entrepreneur: "Shop C", amount: "$456.78", status: "Pending" },
    { id: "#1237", customer: "Sarah Williams", entrepreneur: "Shop A", amount: "$89.90", status: "Canceled" },
  ];

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "Completed":
        return "default";
      case "Processing":
        return "secondary";
      case "Pending":
        return "outline";
      case "Canceled":
        return "destructive";
      default:
        return "outline";
    }
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Order Management</h1>
        <p className="text-muted-foreground">Track and manage all platform orders</p>
      </div>

      <Card className="shadow-card">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b">
              <tr>
                <th className="text-left p-4 font-semibold">Order ID</th>
                <th className="text-left p-4 font-semibold">Customer</th>
                <th className="text-left p-4 font-semibold">Entrepreneur</th>
                <th className="text-left p-4 font-semibold">Amount</th>
                <th className="text-left p-4 font-semibold">Status</th>
                <th className="text-left p-4 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b last:border-0 hover:bg-muted/50">
                  <td className="p-4 font-medium">{order.id}</td>
                  <td className="p-4">{order.customer}</td>
                  <td className="p-4 text-muted-foreground">{order.entrepreneur}</td>
                  <td className="p-4 font-semibold">{order.amount}</td>
                  <td className="p-4">
                    <Badge variant={getStatusVariant(order.status)}>{order.status}</Badge>
                  </td>
                  <td className="p-4">
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default OrderManagement;
