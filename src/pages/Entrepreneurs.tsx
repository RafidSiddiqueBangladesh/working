import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Sparkles, TrendingUp, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import PublicHeader from "@/components/PublicHeader";

const Entrepreneurs = () => {
  const benefits = [
    "AI-powered product descriptions",
    "Multi-platform social media management",
    "Advanced sales analytics",
    "Automated customer support",
    "YouTube integration & insights",
    "Secure payment processing",
    "Inventory management tools",
    "Marketing campaign tracking",
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <PublicHeader />

      <main className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Join Our Platform
            </span>
          </div>
          <h1 className="text-5xl font-bold mb-6">
            Start Your eCommerce Journey Today
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Empower your business with cutting-edge AI tools and reach customers worldwide
          </p>
          <Link to="/login">
            <Button size="lg" className="gap-2">
              Get Started Free
              <Sparkles className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="p-6 text-center shadow-card">
            <div className="mb-4 p-4 bg-gradient-primary rounded-2xl w-fit mx-auto">
              <TrendingUp className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold mb-2">Grow Your Sales</h3>
            <p className="text-muted-foreground">
              Access powerful analytics and AI insights to boost your revenue
            </p>
          </Card>

          <Card className="p-6 text-center shadow-card">
            <div className="mb-4 p-4 bg-gradient-primary rounded-2xl w-fit mx-auto">
              <Globe className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold mb-2">Reach Global Markets</h3>
            <p className="text-muted-foreground">
              Multi-language support and international payment processing
            </p>
          </Card>

          <Card className="p-6 text-center shadow-card">
            <div className="mb-4 p-4 bg-gradient-primary rounded-2xl w-fit mx-auto">
              <Sparkles className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold mb-2">AI-Powered Tools</h3>
            <p className="text-muted-foreground">
              Automate tasks with cutting-edge AI technology
            </p>
          </Card>
        </div>

        <Card className="max-w-3xl mx-auto p-8 shadow-elegant">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Everything You Need to Succeed
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-3">
                <div className="p-1 bg-primary/10 rounded-full">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <span>{benefit}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/login">
              <Button size="lg" className="w-full md:w-auto">
                Join as Entrepreneur
              </Button>
            </Link>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default Entrepreneurs;
