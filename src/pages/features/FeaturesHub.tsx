import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ShoppingBag, Megaphone, BarChart3, TrendingUp, Sparkles, Globe } from "lucide-react";
import PublicHeader from "@/components/PublicHeader";

const features = [
  { icon: ShoppingBag, title: "Product Management", description: "Manage products and inventory", slug: "product" },
  { icon: Megaphone, title: "Social Media Integration", description: "Manage Facebook, Instagram & YouTube", slug: "social" },
  { icon: BarChart3, title: "Advanced Analytics", description: "Insights and performance tracking", slug: "analytics" },
  { icon: TrendingUp, title: "Growth Tools", description: "Pricing and marketing recommendations", slug: "growth" },
  { icon: Sparkles, title: "AI Assistant", description: "Automations and content generation", slug: "ai" },
  { icon: Globe, title: "Multi-language", description: "Bangla & English support", slug: "language" },
];

const FeaturesHub = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <PublicHeader />
      <div className="container mx-auto px-6 py-10">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold">Feature Segments</h1>
        <p className="text-muted-foreground">Pick a segment to explore its tools</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature) => (
          <Link key={feature.slug} to={`/features/${feature.slug}/home`} className="block">
            <Card className="p-6 bg-gradient-card border-0 shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105">
              <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          </Link>
        ))}
      </div>
      </div>
    </div>
  );
};

export default FeaturesHub;