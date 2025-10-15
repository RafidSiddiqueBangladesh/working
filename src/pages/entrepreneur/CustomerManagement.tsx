import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MessageSquare, Star } from "lucide-react";

const CustomerManagement = () => {
  const customers = [
    { name: "John Doe", email: "john@example.com", orders: 12, lifetime: "$1,234", rating: 5 },
    { name: "Jane Smith", email: "jane@example.com", orders: 8, lifetime: "$876", rating: 4 },
    { name: "Mike Johnson", email: "mike@example.com", orders: 15, lifetime: "$2,345", rating: 5 },
    { name: "Sarah Williams", email: "sarah@example.com", orders: 6, lifetime: "$567", rating: 3 },
  ];

  const reviews = [
    { customer: "John Doe", product: "Product A", rating: 5, comment: "Excellent product!" },
    { customer: "Jane Smith", product: "Product B", rating: 4, comment: "Good quality, fast shipping" },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Customer Management</h1>
        <p className="text-muted-foreground">Manage customers, feedback, and support</p>
      </div>

      <Card className="p-6 mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search customers..." className="pl-10" />
        </div>
      </Card>

      <Card className="shadow-card mb-6">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b">
              <tr>
                <th className="text-left p-4 font-semibold">Customer</th>
                <th className="text-left p-4 font-semibold">Email</th>
                <th className="text-left p-4 font-semibold">Orders</th>
                <th className="text-left p-4 font-semibold">Lifetime Value</th>
                <th className="text-left p-4 font-semibold">Rating</th>
                <th className="text-left p-4 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer, i) => (
                <tr key={i} className="border-b last:border-0 hover:bg-muted/50">
                  <td className="p-4 font-medium">{customer.name}</td>
                  <td className="p-4 text-muted-foreground">{customer.email}</td>
                  <td className="p-4">{customer.orders}</td>
                  <td className="p-4 font-semibold">{customer.lifetime}</td>
                  <td className="p-4">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: customer.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </td>
                  <td className="p-4">
                    <Button variant="outline" size="sm" className="gap-2">
                      <MessageSquare className="h-4 w-4" />
                      Contact
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <Card className="p-6 shadow-card">
        <h3 className="text-xl font-semibold mb-4">Recent Reviews & Feedback</h3>
        <div className="space-y-4">
          {reviews.map((review, i) => (
            <div key={i} className="p-4 border rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <p className="font-semibold">{review.customer}</p>
                  <p className="text-sm text-muted-foreground">{review.product}</p>
                </div>
                <div className="flex items-center gap-1">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground">{review.comment}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default CustomerManagement;
