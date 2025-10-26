import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ShoppingBag,
  TrendingUp,
  Sparkles,
  Globe,
  BarChart3,
  Megaphone,
  ArrowRight,
  Check,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useUI } from "@/context/UIContext";
import PublicHeader from "@/components/PublicHeader";

const Index = () => {
  const { language } = useUI();

  const content = {
    en: {
      hero: {
        title: "Empower Your Business with AI-Driven eCommerce",
        subtitle:
          "The ultimate platform for entrepreneurs to manage products, social media, and grow their business with cutting-edge technology",
        cta: "Get Started",
        ctaSecondary: "Learn More",
      },
      features: {
        title: "Everything You Need to Succeed",
        subtitle: "Powerful tools to scale your online business",
      },
      dashboards: {
        title: "Choose Your Dashboard",
        admin: "Admin Panel",
        adminDesc: "Platform management and analytics",
        entrepreneur: "Entrepreneur Dashboard",
        entrepreneurDesc: "Manage your products and sales",
      },
    },
    bn: {
      hero: {
        title: "এআই-চালিত ইকমার্স দিয়ে আপনার ব্যবসা ক্ষমতায়ন করুন",
        subtitle:
          "উদ্যোক্তাদের জন্য পণ্য, সোশ্যাল মিডিয়া পরিচালনা এবং অত্যাধুনিক প্রযুক্তি দিয়ে ব্যবসা বৃদ্ধির চূড়ান্ত প্ল্যাটফর্ম",
        cta: "শুরু করুন",
        ctaSecondary: "আরও জানুন",
      },
      features: {
        title: "সফল হওয়ার জন্য সবকিছু",
        subtitle: "আপনার অনলাইন ব্যবসা বৃদ্ধির শক্তিশালী টুল",
      },
      dashboards: {
        title: "আপনার ড্যাশবোর্ড নির্বাচন করুন",
        admin: "অ্যাডমিন প্যানেল",
        adminDesc: "প্ল্যাটফর্ম ব্যবস্থাপনা এবং বিশ্লেষণ",
        entrepreneur: "উদ্যোক্তা ড্যাশবোর্ড",
        entrepreneurDesc: "আপনার পণ্য এবং বিক্রয় পরিচালনা করুন",
      },
    },
  };

  const t = content[language];

  const features = [
    {
      icon: ShoppingBag,
      title: "Product Management",
      description: "AI-powered product descriptions and inventory tracking",
      slug: "product",
      image: "https://picsum.photos/seed/feature-product/800/400",
    },
    {
      icon: Megaphone,
      title: "Social Media Integration",
      description: "Manage Facebook, Instagram, and YouTube from one place",
      slug: "social",
      image: "https://picsum.photos/seed/feature-social/800/400",
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Track sales, engagement, and customer insights",
      slug: "analytics",
      image: "https://picsum.photos/seed/feature-analytics/800/400",
    },
    {
      icon: TrendingUp,
      title: "Growth Tools",
      description: "AI recommendations for pricing and marketing",
      slug: "growth",
      image: "https://picsum.photos/seed/feature-growth/800/400",
    },
    {
      icon: Sparkles,
      title: "AI Assistant",
      description: "Automated customer support and content generation",
      slug: "ai",
      image: "https://picsum.photos/seed/feature-ai/800/400",
    },
    {
      icon: Globe,
      title: "Multi-language",
      description: "Full support for Bangla and English",
      slug: "language",
      image: "https://picsum.photos/seed/feature-language/800/400",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <PublicHeader />

      <section className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Next-Gen eCommerce Platform
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            {t.hero.title}
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2 shadow-elegant">
              {t.hero.cta}
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              {t.hero.ctaSecondary}
            </Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">{t.features.title}</h2>
          <p className="text-xl text-muted-foreground">{t.features.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Link key={index} to={`/features/${feature.slug}/home`} className="block">
              <Card
                className="p-6 bg-gradient-card border-0 shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105"
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="mb-4 w-full h-28 object-cover rounded-md"
                />
                <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">{t.dashboards.title}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="p-8 shadow-elegant hover:shadow-elegant transition-all duration-300 hover:scale-105">
            <div className="mb-4 p-4 bg-gradient-primary rounded-lg w-fit">
              <BarChart3 className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-bold mb-2">{t.dashboards.admin}</h3>
            <p className="text-muted-foreground mb-6">
              {t.dashboards.adminDesc}
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "User Management",
                "Platform Analytics",
                "Financial Overview",
                "System Settings",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex gap-3">
              <Link to="/admin/overview">
                <Button>Go to Admin</Button>
              </Link>
              <Link to="/admin/login">
                <Button variant="outline">Admin Login</Button>
              </Link>
            </div>
          </Card>

          <Card className="p-8 shadow-elegant hover:shadow-elegant transition-all duration-300 hover:scale-105">
            <div className="mb-4 p-4 bg-gradient-primary rounded-lg w-fit">
              <ShoppingBag className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-bold mb-2">
              {t.dashboards.entrepreneur}
            </h3>
            <p className="text-muted-foreground mb-6">
              {t.dashboards.entrepreneurDesc}
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "Product Listings",
                "Sales Analytics",
                "YouTube Integration",
                "AI-Powered Tools",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex gap-3">
              <Link to="/entrepreneur/overview">
                <Button>Go to Entrepreneur</Button>
              </Link>
              <Link to="/login">
                <Button variant="outline">Entrepreneur Login</Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>

      {/* Global Footer is rendered via App.tsx */}
    </div>
  );
};

export default Index;
