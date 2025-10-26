import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
// Drawer removed: refactored Add New Product to use Dialog for consistency
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Plus, Package, TrendingUp, Eye, ShoppingCart, ExternalLink, Sparkles, MessageSquare } from "lucide-react";
import ProductMediaFooter from "@/components/ProductMediaFooter";

const ProductManagement = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const [addOpen, setAddOpen] = useState(false);
  const [trendsOpen, setTrendsOpen] = useState(false);
  const [productName, setProductName] = useState("");
  const [productDesc, setProductDesc] = useState("");
  const [selectedMarkets, setSelectedMarkets] = useState<string[]>(["Amazon", "Alibaba", "Daraz"]);

  const marketplaces = ["Amazon", "Alibaba", "Daraz", "Taobao", "YouTube"] as const;

  const toggleMarket = (m: string) => {
    setSelectedMarkets((prev) => (prev.includes(m) ? prev.filter((x) => x !== m) : [...prev, m]));
  };

  const handlePostEverywhere = () => {
    const name = productName.trim() || "New Product";
    toast({
      title: "Posting Initiated",
      description: `“${name}” queued for ${selectedMarkets.join(", ")}.`,
    });
    // Simulate success feedback and close drawer
    setTimeout(() => {
      toast({ title: "Posted Successfully", description: `Published to ${selectedMarkets.join(", ")}.` });
      setAddOpen(false);
    }, 800);
  };
  const featuredProducts = [
    { 
      id: 1, 
      name: "Premium Wireless Headphones", 
      sales: "1.2K", 
      views: "15.3K",
      stock: 45,
      status: "active",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop"
    },
    { 
      id: 2, 
      name: "Smart Watch Series X", 
      sales: "856", 
      views: "8.9K",
      stock: 23,
      status: "active",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100&h=100&fit=crop"
    },
  ];

  const allProducts = [
    { 
      id: 3,
      name: "Ultra HD 4K Monitor", 
      description: "Professional grade monitor with HDR support and ergonomic stand for extended work sessions",
      sales: "2.5K", 
      views: "45K", 
      stock: 12,
      revenue: "$45.2K",
      image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=100&h=100&fit=crop"
    },
    { 
      id: 4,
      name: "Mechanical Gaming Keyboard", 
      description: "RGB backlit mechanical keyboard with custom switches and programmable macros",
      sales: "1.8K", 
      views: "32K", 
      stock: 34,
      revenue: "$28.9K",
      image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=100&h=100&fit=crop"
    },
    { 
      id: 5,
      name: "Wireless Mouse Pro", 
      description: "Ergonomic wireless mouse with precision tracking and long battery life for productivity",
      sales: "3.2K", 
      views: "67K", 
      stock: 89,
      revenue: "$67.4K",
      image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=100&h=100&fit=crop"
    },
    { 
      id: 6,
      name: "USB-C Hub Adapter", 
      description: "Multi-port USB-C hub with HDMI, USB 3.0, and SD card reader for seamless connectivity",
      sales: "4.1K", 
      views: "89K", 
      stock: 156,
      revenue: "$89.3K",
      image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=100&h=100&fit=crop"
    },
    { 
      id: 7,
      name: "Portable Power Bank", 
      description: "High capacity power bank with fast charging support and multiple device compatibility",
      sales: "5.6K", 
      views: "123K", 
      stock: 234,
      revenue: "$112.8K",
      image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=100&h=100&fit=crop"
    },
    { 
      id: 8,
      name: "Bluetooth Speaker", 
      description: "Premium portable speaker with 360-degree sound and waterproof design for outdoor use",
      sales: "2.9K", 
      views: "56K", 
      stock: 67,
      revenue: "$58.3K",
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=100&h=100&fit=crop"
    },
  ];

  // Trending data with images for Discover Trends dialog
  const trendingData = {
    amazon: [
      {
        name: "Noise-Canceling Headphones",
        desc: "High search volume · Rising conversion",
        image: "https://images.unsplash.com/photo-1518443892831-4e1b1b3b5a23?w=120&h=120&fit=crop",
      },
      {
        name: "Smart Fitness Band",
        desc: "Strong engagement · Health category growth",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=120&h=120&fit=crop",
      },
      {
        name: "Ergonomic Office Chair",
        desc: "Work-from-home demand · Stable margin",
        image: "https://images.unsplash.com/photo-1503387762-597a7c1e27d3?w=120&h=120&fit=crop",
      },
      {
        name: "USB-C Dock",
        desc: "Laptop accessory trend · High attach rate",
        image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=120&h=120&fit=crop",
      },
    ],
    alibaba: [
      {
        name: "Wholesale Power Banks",
        desc: "Strong supplier activity · Stable margin",
        image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=120&h=120&fit=crop",
      },
      {
        name: "Bluetooth Speakers",
        desc: "Bulk orders · Good export volume",
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=120&h=120&fit=crop",
      },
      {
        name: "LED Desk Lamps",
        desc: "Energy-saving models · Competitive pricing",
        image: "https://images.unsplash.com/photo-1516450360452-9312f7e86fc7?w=120&h=120&fit=crop",
      },
      {
        name: "Mini Projectors",
        desc: "Popular for home theaters · Growing exports",
        image: "https://images.unsplash.com/photo-1581338834647-bb7e2f76bc25?w=120&h=120&fit=crop",
      },
    ],
    taobao: [
      {
        name: "Portable Fans",
        desc: "Seasonal demand · Viral content potential",
        image: "https://images.unsplash.com/photo-1596496050224-7f0b7c6f5c7b?w=120&h=120&fit=crop",
      },
      {
        name: "Desk Organizers",
        desc: "Home office trend · High repeat purchases",
        image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=120&h=120&fit=crop",
      },
      {
        name: "RGB Light Strips",
        desc: "Aesthetic setups · Influencer-driven",
        image: "https://images.unsplash.com/photo-1601331733581-a2d1c82d99b3?w=120&h=120&fit=crop",
      },
      {
        name: "Wireless Keyboards",
        desc: "Desk setups · Moderate margin",
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=120&h=120&fit=crop",
      },
    ],
    youtube: [
      {
        name: "Desk Setup Accessories",
        desc: "Content-driven spikes · Influencer-led trends",
        image: "https://images.unsplash.com/photo-1517059224940-d4af9eec41e5?w=120&h=120&fit=crop",
      },
      {
        name: "Travel Tech Gadgets",
        desc: "Portable gear · High CTR on reviews",
        image: "https://images.unsplash.com/photo-1548611716-b1c6b58b1bdc?w=120&h=120&fit=crop",
      },
      {
        name: "Creator Microphones",
        desc: "Streamer demand · Strong affiliate sales",
        image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=120&h=120&fit=crop",
      },
      {
        name: "USB Hubs",
        desc: "Utility products · High attach rate",
        image: "https://images.unsplash.com/photo-1596495577886-d3941a6cf0f3?w=120&h=120&fit=crop",
      },
    ],
  } as const;

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Product Management</h1>
        <p className="text-muted-foreground">Manage your product listings and inventory</p>
      </div>

      {/* AI Features */}
      <Card className="p-6 bg-gradient-card border-0 shadow-card mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Sparkles className="h-5 w-5 text-primary" />
          <h3 className="font-semibold">AI-Assisted Features</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          <Button variant="outline" className="justify-start">
            Generate Product Description
          </Button>
          <Button variant="outline" className="justify-start">
            Optimize Pricing
          </Button>
          <Button variant="outline" className="justify-start">
            SEO Recommendations
          </Button>
        </div>
      </Card>

      {/* Featured Products Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-semibold">Your Top Products</h2>
            <p className="text-sm text-muted-foreground">Best performing items in your store</p>
          </div>
          <Button onClick={() => setAddOpen(true)}>
            <Plus className="mr-2 h-4 w-4" />
            Add New Product
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="shadow-card border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Avatar className="h-16 w-16 rounded-lg">
                    <AvatarImage src={product.image} alt={product.name} />
                    <AvatarFallback className="rounded-lg bg-gradient-primary">
                      <Package className="h-8 w-8 text-white" />
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-lg">{product.name}</h3>
                      <Badge variant="secondary" className="bg-primary/10 text-primary">
                        {product.status}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <ShoppingCart className="h-4 w-4" />
                        {product.sales}
                      </span>
                      <span className="flex items-center gap-1">
                        <Eye className="h-4 w-4" />
                        {product.views}
                      </span>
                      <span className="flex items-center gap-1">
                        <Package className="h-4 w-4" />
                        {product.stock} in stock
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* All Products Section */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-semibold">All Products</h2>
            <p className="text-sm text-muted-foreground">Complete inventory of your product catalog</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">Find Gaps</Button>
            <Button onClick={() => setTrendsOpen(true)}>Discover Trends</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allProducts.map((product) => (
            <Card key={product.id} className="shadow-card hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start gap-4 mb-3">
                  <Avatar className="h-12 w-12 rounded-lg">
                    <AvatarImage src={product.image} alt={product.name} />
                    <AvatarFallback className="rounded-lg bg-gradient-primary">
                      <Package className="h-6 w-6 text-white" />
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <CardTitle className="text-base line-clamp-1">{product.name}</CardTitle>
                    <CardDescription className="line-clamp-2 text-xs mt-1">
                      {product.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-2 text-sm mb-4">
                  <div className="flex flex-col">
                    <span className="text-muted-foreground text-xs flex items-center gap-1">
                      <ShoppingCart className="h-3 w-3" />
                      Sales
                    </span>
                    <span className="font-semibold">{product.sales}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-muted-foreground text-xs flex items-center gap-1">
                      <Eye className="h-3 w-3" />
                      Views
                    </span>
                    <span className="font-semibold">{product.views}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-muted-foreground text-xs flex items-center gap-1">
                      <TrendingUp className="h-3 w-3" />
                      Revenue
                    </span>
                    <span className="font-semibold">{product.revenue}</span>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="w-full">
                  <ExternalLink className="mr-2 h-3 w-3" />
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Media Footer: Pic / 3D / VR / AR */}
      <ProductMediaFooter
        title="Demo Product"
        description="Use Pic, 3D, AR, and VR (falls back to 3D if VR isn’t available) to preview your product media."
      />

      {/* Add New Product - Dialog (Discover-style) */}
      <Dialog open={addOpen} onOpenChange={setAddOpen}>
        <DialogContent className="sm:max-w-3xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-primary" /> Add New Product
            </DialogTitle>
            <DialogDescription>
              Describe your product and select marketplaces for one-click posting.
            </DialogDescription>
          </DialogHeader>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
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
            </div>
            <div className="space-y-2">
              <Label>AI Assistant</Label>
              <div className="rounded-md border">
                <ScrollArea className="h-56 p-4">
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
            </div>
          </div>
          <DialogFooter className="flex flex-col gap-2">
            <Button className="w-full" onClick={handlePostEverywhere}>Post to Selected Marketplaces</Button>
            <div className="grid grid-cols-2 gap-2 w-full">
              <DialogClose asChild>
                <Button variant="outline" className="w-full">Back to Product Management</Button>
              </DialogClose>
              <Button variant="ghost" className="w-full" onClick={() => navigate('/entrepreneur/products/add')}>Open Full Page</Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Trends Dialog */}
      <Dialog open={trendsOpen} onOpenChange={setTrendsOpen}>
        <DialogContent className="sm:max-w-3xl">
          <DialogHeader>
            <DialogTitle>Marketplace Trends</DialogTitle>
            <DialogDescription>
              See what’s trending on Alibaba, Amazon, Taobao, and YouTube.
            </DialogDescription>
          </DialogHeader>
          <Tabs defaultValue="amazon" className="w-full">
            <TabsList className="grid grid-cols-4 w-full">
              <TabsTrigger value="amazon">Amazon</TabsTrigger>
              <TabsTrigger value="alibaba">Alibaba</TabsTrigger>
              <TabsTrigger value="taobao">Taobao</TabsTrigger>
              <TabsTrigger value="youtube">YouTube</TabsTrigger>
            </TabsList>
            <TabsContent value="amazon" className="space-y-3 pt-3">
              <div className="grid md:grid-cols-2 gap-3">
                {trendingData.amazon.map((item, i) => (
                  <Card key={`am-${i}`} className="p-4">
                    <div className="flex items-start gap-3">
                      <Avatar className="h-10 w-10 rounded-md">
                        <AvatarImage src={item.image} alt={item.name} />
                        <AvatarFallback className="rounded-md bg-gradient-primary">
                          <TrendingUp className="h-5 w-5 text-white" />
                        </AvatarFallback>
                      </Avatar>
                      <div className="min-w-0">
                        <CardTitle className="text-sm line-clamp-1">{item.name}</CardTitle>
                        <CardDescription className="text-xs line-clamp-2">{item.desc}</CardDescription>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="alibaba" className="space-y-3 pt-3">
              <div className="grid md:grid-cols-2 gap-3">
                {trendingData.alibaba.map((item, i) => (
                  <Card key={`ali-${i}`} className="p-4">
                    <div className="flex items-start gap-3">
                      <Avatar className="h-10 w-10 rounded-md">
                        <AvatarImage src={item.image} alt={item.name} />
                        <AvatarFallback className="rounded-md bg-gradient-primary">
                          <TrendingUp className="h-5 w-5 text-white" />
                        </AvatarFallback>
                      </Avatar>
                      <div className="min-w-0">
                        <CardTitle className="text-sm line-clamp-1">{item.name}</CardTitle>
                        <CardDescription className="text-xs line-clamp-2">{item.desc}</CardDescription>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="taobao" className="space-y-3 pt-3">
              <div className="grid md:grid-cols-2 gap-3">
                {trendingData.taobao.map((item, i) => (
                  <Card key={`tb-${i}`} className="p-4">
                    <div className="flex items-start gap-3">
                      <Avatar className="h-10 w-10 rounded-md">
                        <AvatarImage src={item.image} alt={item.name} />
                        <AvatarFallback className="rounded-md bg-gradient-primary">
                          <TrendingUp className="h-5 w-5 text-white" />
                        </AvatarFallback>
                      </Avatar>
                      <div className="min-w-0">
                        <CardTitle className="text-sm line-clamp-1">{item.name}</CardTitle>
                        <CardDescription className="text-xs line-clamp-2">{item.desc}</CardDescription>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="youtube" className="space-y-3 pt-3">
              <div className="grid md:grid-cols-2 gap-3">
                {trendingData.youtube.map((item, i) => (
                  <Card key={`yt-${i}`} className="p-4">
                    <div className="flex items-start gap-3">
                      <Avatar className="h-10 w-10 rounded-md">
                        <AvatarImage src={item.image} alt={item.name} />
                        <AvatarFallback className="rounded-md bg-gradient-primary">
                          <TrendingUp className="h-5 w-5 text-white" />
                        </AvatarFallback>
                      </Avatar>
                      <div className="min-w-0">
                        <CardTitle className="text-sm line-clamp-1">{item.name}</CardTitle>
                        <CardDescription className="text-xs line-clamp-2">{item.desc}</CardDescription>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Back to Product Management</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProductManagement;
