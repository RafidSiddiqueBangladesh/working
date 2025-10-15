import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sparkles, Users, Globe, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/">
            <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              CommerceHub
            </h1>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/">
              <Button variant="ghost">Home</Button>
            </Link>
            <Link to="/products">
              <Button variant="ghost">Products</Button>
            </Link>
            <Link to="/entrepreneurs">
              <Button variant="ghost">Entrepreneurs</Button>
            </Link>
            <Link to="/about">
              <Button variant="ghost">About</Button>
            </Link>
            <Link to="/login">
              <Button>Login</Button>
            </Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">About CommerceHub</h1>
          <p className="text-xl text-muted-foreground">
            Empowering entrepreneurs with cutting-edge AI technology to build, grow, and scale their eCommerce businesses
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="p-8 shadow-card">
            <Sparkles className="h-12 w-12 text-primary mb-4" />
            <h2 className="text-2xl font-bold mb-3">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              We're on a mission to democratize eCommerce by providing entrepreneurs with enterprise-level tools powered by artificial intelligence. Our platform removes technical barriers and enables anyone to start and scale their online business.
            </p>
          </Card>

          <Card className="p-8 shadow-card">
            <Users className="h-12 w-12 text-primary mb-4" />
            <h2 className="text-2xl font-bold mb-3">Our Vision</h2>
            <p className="text-muted-foreground leading-relaxed">
              To become the world's most trusted and innovative eCommerce platform, where entrepreneurs can leverage AI, social media, and advanced analytics to reach customers globally and build sustainable businesses.
            </p>
          </Card>
        </div>

        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose CommerceHub?</h2>
          <div className="space-y-6">
            <Card className="p-6 shadow-card">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-primary rounded-lg">
                  <Zap className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">AI-Powered Automation</h3>
                  <p className="text-muted-foreground">
                    Let AI handle product descriptions, pricing optimization, customer support, and content generation while you focus on growing your business.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-card">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-primary rounded-lg">
                  <Globe className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Multi-Platform Integration</h3>
                  <p className="text-muted-foreground">
                    Seamlessly manage your presence across Facebook, Instagram, YouTube, and your online store - all from one unified dashboard.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-card">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-primary rounded-lg">
                  <Users className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Built for Growth</h3>
                  <p className="text-muted-foreground">
                    Advanced analytics, inventory management, and marketing tools designed to help you scale from your first sale to thousands of customers.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div className="text-center">
          <Card className="max-w-2xl mx-auto p-8 shadow-elegant bg-gradient-card">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-6">
              Join thousands of entrepreneurs already growing their businesses on CommerceHub
            </p>
            <Link to="/login">
              <Button size="lg" className="gap-2">
                Start Your Journey
                <Sparkles className="h-4 w-4" />
              </Button>
            </Link>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default About;
