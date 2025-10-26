import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import PublicHeader from "@/components/PublicHeader";
import ProductMediaFooter from "@/components/ProductMediaFooter";
import ProductMediaInline from "@/components/ProductMediaInline";

const Products = () => {
  const products = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    price: (99 + i * 10).toFixed(2),
    rating: (4 + Math.random()).toFixed(1),
    image: `https://picsum.photos/seed/product-${i + 1}/600/600`,
  }));

  return (
    <div className="min-h-screen bg-gradient-hero">
      <PublicHeader />

      <main className="container mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Browse Products</h1>
          <p className="text-muted-foreground mb-6">
            Explore curated items and discover new favorites from our entrepreneurs.
          </p>
          <div className="relative max-w-xl">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search products..." className="pl-10" />
          </div>
        </div>

        {/* Featured product with media tabs */}
        <Card className="p-6 mb-10 shadow-card">
          <h2 className="text-2xl font-semibold mb-3">Featured Product</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Explore product media: Picture, 3D, AR, and VR. When VR isn’t available,
            it falls back to the 3D viewer.
          </p>
          <ProductMediaFooter
            title="Demo Product"
            description="Use the controls to switch between media types."
          />
        </Card>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card
              key={product.id}
              className="overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105"
            >
              <ProductMediaInline imageSrc={product.image} heightClass="h-40 sm:h-48 md:h-56" />
              <div className="p-4">
                <h3 className="font-semibold mb-2">{product.name}</h3>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl font-bold">${product.price}</span>
                  <span className="text-sm text-muted-foreground">
                    ⭐ {product.rating}
                  </span>
                </div>
                <Button className="w-full gap-2">
                  <ShoppingCart className="h-4 w-4" />
                  Add to Cart
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Products;
