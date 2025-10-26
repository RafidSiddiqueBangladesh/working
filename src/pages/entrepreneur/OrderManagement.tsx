import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useUI } from "@/context/UIContext";

const EntrepreneurOrderManagement = () => {
  const orders = {
    pending: [
      { id: "#1234", customer: "John Doe", items: 3, total: "$234.56", date: "2025-01-10" },
      { id: "#1235", customer: "Jane Smith", items: 1, total: "$99.99", date: "2025-01-10" },
    ],
    processing: [
      { id: "#1236", customer: "Mike Johnson", items: 2, total: "$189.98", date: "2025-01-09" },
    ],
    completed: [
      { id: "#1237", customer: "Sarah Williams", items: 4, total: "$456.78", date: "2025-01-08" },
      { id: "#1238", customer: "Tom Brown", items: 1, total: "$129.99", date: "2025-01-07" },
    ],
  };

  const { t } = useUI();
  const renderOrders = (orderList: typeof orders.pending) => (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="border-b">
          <tr>
            <th className="text-left p-4 font-semibold">{t("Order ID")}</th>
            <th className="text-left p-4 font-semibold">{t("Customer")}</th>
            <th className="text-left p-4 font-semibold">{t("Items")}</th>
            <th className="text-left p-4 font-semibold">{t("Total")}</th>
            <th className="text-left p-4 font-semibold">{t("Date")}</th>
            <th className="text-left p-4 font-semibold">{t("Actions")}</th>
          </tr>
        </thead>
        <tbody>
          {orderList.map((order) => (
            <tr key={order.id} className="border-b last:border-0 hover:bg-muted/50">
              <td className="p-4 font-medium">{order.id}</td>
              <td className="p-4">{order.customer}</td>
              <td className="p-4 text-muted-foreground">{order.items}</td>
              <td className="p-4 font-semibold">{order.total}</td>
              <td className="p-4 text-muted-foreground">{order.date}</td>
              <td className="p-4">
                <Button variant="outline" size="sm">{t("View")}</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{t("Order Management")}</h1>
        <p className="text-muted-foreground">{t("Track and fulfill your customer orders")}</p>
      </div>

      <Card className="shadow-card">
        <Tabs defaultValue="pending" className="w-full">
          <TabsList className="w-full justify-start border-b rounded-none">
            <TabsTrigger value="pending">{t("Pending")} ({orders.pending.length})</TabsTrigger>
            <TabsTrigger value="processing">{t("Processing")} ({orders.processing.length})</TabsTrigger>
            <TabsTrigger value="completed">{t("Completed")} ({orders.completed.length})</TabsTrigger>
          </TabsList>
          <TabsContent value="pending" className="p-0">
            {renderOrders(orders.pending)}
          </TabsContent>
          <TabsContent value="processing" className="p-0">
            {renderOrders(orders.processing)}
          </TabsContent>
          <TabsContent value="completed" className="p-0">
            {renderOrders(orders.completed)}
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
};

export default EntrepreneurOrderManagement;
