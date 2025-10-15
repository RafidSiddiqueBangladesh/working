import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Plus, Package, TrendingUp, Eye, ShoppingCart, ExternalLink, Sparkles } from "lucide-react";

const ProductManagement = () => {
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
          <Button>
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
            <Button>Discover Trends</Button>
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
    </div>
  );
};

export default ProductManagement;
