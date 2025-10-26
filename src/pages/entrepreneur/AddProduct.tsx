import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/hooks/use-toast";
import { MessageSquare, Package, ShoppingCart, Eye, TrendingUp } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AddProduct = () => {
  const { toast } = useToast();
  const [productName, setProductName] = useState("");
  const [productDesc, setProductDesc] = useState("");
  const [selectedMarkets, setSelectedMarkets] = useState<string[]>(["Amazon", "Alibaba", "Daraz"]);

  const marketplaces = ["Amazon", "Alibaba", "Daraz", "Taobao", "YouTube"] as const;

  const toggleMarket = (m: string) => {
    setSelectedMarkets((prev) => (prev.includes(m) ? prev.filter((x) => x !== m) : [...prev, m]));
  };

  const handlePostEverywhere = () => {
    const name = productName.trim() || "New Product";
    toast({ title: "Posting Initiated", description: `“${name}” queued for ${selectedMarkets.join(", ")}.` });
    setTimeout(() => {
      toast({ title: "Posted Successfully", description: `Published to ${selectedMarkets.join(", ")}.` });
    }, 800);
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Add New Product</h1>
        <p className="text-muted-foreground">Full page editor for product details and marketplace posting</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Left: Form */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-primary" /> Product Details
            </CardTitle>
            <CardDescription>Title, description, and selected marketplaces</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Product Name</Label>
              <Input value={productName} onChange={(e) => setProductName(e.target.value)} placeholder="e.g., Premium Wireless Headphones" />
            </div>
            <div className="space-y-2">
              <Label>Product Description</Label>
              <Textarea value={productDesc} onChange={(e) => setProductDesc(e.target.value)} placeholder="Short description, key specs, highlights" rows={6} />
            </div>
            <div className="space-y-2">
              <Label>Marketplaces</Label>
              <div className="grid grid-cols-2 gap-2">
                {marketplaces.map((m) => (
                  <label key={m} className="flex items-center gap-2 rounded border p-2">
                    <Checkbox checked={selectedMarkets.includes(m)} onCheckedChange={() => toggleMarket(m)} />
                    <span className="text-sm">{m}</span>
                  </label>
                ))}
              </div>
            </div>
            <Button className="w-full" onClick={handlePostEverywhere}>Post to Selected Marketplaces</Button>
          </CardContent>
        </Card>

        {/* Right: Assistant */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>AI Assistant</CardTitle>
            <CardDescription>Chat-style guidance for perfect listing content</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <ScrollArea className="h-72 p-4">
                <div className="space-y-3 text-sm">
                  <div className="p-3 rounded-lg bg-muted/50">
                    AI: I can help refine your title, write SEO-friendly copy, and suggest tags.
                  </div>
                  <div className="p-3 rounded-lg bg-primary/10">
                    You: {productDesc ? productDesc : "(Type your product details to get suggestions)"}
                  </div>
                  <div className="p-3 rounded-lg bg-muted/50">
                    AI: Great. Ready to publish to {selectedMarkets.join(", ")}? You can edit anytime.
                  </div>
                </div>
              </ScrollArea>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Suggested showcase section */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Preview Popular Items</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              name: "Premium Wireless Headphones",
              sales: "1.2K",
              views: "15.3K",
              image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=160&h=160&fit=crop",
            },
            {
              name: "Smart Watch Series X",
              sales: "856",
              views: "8.9K",
              image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=160&h=160&fit=crop",
            },
            {
              name: "Ultra HD 4K Monitor",
              sales: "2.5K",
              views: "45K",
              image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=160&h=160&fit=crop",
            },
          ].map((p, i) => (
            <Card key={`sugg-${i}`} className="shadow-card">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <Avatar className="h-12 w-12 rounded-lg">
                    <AvatarImage src={p.image} alt={p.name} />
                    <AvatarFallback className="rounded-lg bg-gradient-primary">
                      <Package className="h-6 w-6 text-white" />
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <CardTitle className="text-sm line-clamp-1">{p.name}</CardTitle>
                    <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><ShoppingCart className="h-3 w-3" /> {p.sales}</span>
                      <span className="flex items-center gap-1"><Eye className="h-3 w-3" /> {p.views}</span>
                      <span className="flex items-center gap-1"><TrendingUp className="h-3 w-3" /> Trending</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddProduct;