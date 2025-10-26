import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import PublicHeader from "@/components/PublicHeader";
import {
  Megaphone,
  Wallet,
  HeartPulse,
  Stethoscope,
  ArrowRight,
  Check,
} from "lucide-react";

const Advisor = () => {
  const marketingTips = [
    "Optimize product titles with high-intent keywords",
    "Run Instagram Reels weekly to boost engagement",
    "Cross-post YouTube Shorts with product links",
    "Schedule posts for peak hours (7–9 PM)",
  ];

  const accountInsights = [
    "Track weekly revenue and refunds",
    "Automate invoice generation",
    "Monitor payout status and fees",
    "Flag unusual order spikes",
  ];

  const mentalChecklist = [
    "Energy levels today",
    "Stress score (1–10)",
    "Hours of sleep",
    "Take a short mindful break",
  ];

  const counselingResources = [
    { name: "Dr. A. Rahman", specialty: "Business Psychologist", availability: "Wed & Fri" },
    { name: "Dr. S. Akter", specialty: "Stress & Burnout", availability: "Mon & Thu" },
    { name: "Dr. M. Hossain", specialty: "General Counseling", availability: "Daily (Tele)" },
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <PublicHeader />

      {/* Hero */}
      <section className="container mx-auto px-6 py-16 text-center">
        <div className="inline-block mb-4">
          <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            Your Growth & Wellness Hub
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Advisor Center</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Explore tailored guidance for marketing, accounts, mental wellness, and counseling — all in one beautiful, easy-to-use page.
        </p>
      </section>

      {/* Segments */}
      <section className="container mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <a href="#marketing" className="block">
            <Card className="p-6 shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105">
              <div className="mb-4 p-3 bg-gradient-primary rounded-lg w-fit">
                <Megaphone className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Marketing Advisor</h3>
              <p className="text-muted-foreground">Campaign ideas, social strategy, and growth tactics</p>
              <Button className="mt-4 gap-2" variant="outline">
                Explore <ArrowRight className="h-4 w-4" />
              </Button>
            </Card>
          </a>

          <a href="#accounts" className="block">
            <Card className="p-6 shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105">
              <div className="mb-4 p-3 bg-gradient-primary rounded-lg w-fit">
                <Wallet className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Account Advisor</h3>
              <p className="text-muted-foreground">Revenue tracking, payouts, invoicing, and alerts</p>
              <Button className="mt-4 gap-2" variant="outline">
                Explore <ArrowRight className="h-4 w-4" />
              </Button>
            </Card>
          </a>

          <a href="#mental" className="block">
            <Card className="p-6 shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105">
              <div className="mb-4 p-3 bg-gradient-primary rounded-lg w-fit">
                <HeartPulse className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Mental Health Checker</h3>
              <p className="text-muted-foreground">Quick self-check to balance stress and focus</p>
              <Button className="mt-4 gap-2" variant="outline">
                Explore <ArrowRight className="h-4 w-4" />
              </Button>
            </Card>
          </a>

          <a href="#counseling" className="block">
            <Card className="p-6 shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105">
              <div className="mb-4 p-3 bg-gradient-primary rounded-lg w-fit">
                <Stethoscope className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Counseling to Doctor</h3>
              <p className="text-muted-foreground">Find specialists for focused, confidential support</p>
              <Button className="mt-4 gap-2" variant="outline">
                Explore <ArrowRight className="h-4 w-4" />
              </Button>
            </Card>
          </a>
        </div>

        {/* Marketing Advisor */}
        <div id="marketing" className="scroll-mt-28 mb-16">
          <Card className="p-8 shadow-elegant">
            <h2 className="text-2xl font-bold mb-4">Marketing Advisor</h2>
            <p className="text-muted-foreground mb-6">Actionable ideas to grow awareness and sales</p>
            <ul className="space-y-3">
              {marketingTips.map((tip) => (
                <li key={tip} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* Account Advisor */}
        <div id="accounts" className="scroll-mt-28 mb-16">
          <Card className="p-8 shadow-elegant">
            <h2 className="text-2xl font-bold mb-4">Account Advisor</h2>
            <p className="text-muted-foreground mb-6">Financial insights and quick actions</p>
            <div className="grid md:grid-cols-2 gap-4">
              {accountInsights.map((line) => (
                <div key={line} className="flex items-center gap-2">
                  <div className="p-1 bg-primary/10 rounded-full">
                    <Wallet className="h-4 w-4 text-primary" />
                  </div>
                  <span>{line}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Mental Health Checker */}
        <div id="mental" className="scroll-mt-28 mb-16">
          <Card className="p-8 shadow-elegant">
            <h2 className="text-2xl font-bold mb-4">Mental Health Checker</h2>
            <p className="text-muted-foreground mb-6">Simple self-check form (mock)</p>
            <form className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="energy">Energy (1–10)</Label>
                <Input id="energy" type="number" min={1} max={10} placeholder="7" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="stress">Stress (1–10)</Label>
                <Input id="stress" type="number" min={1} max={10} placeholder="4" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="sleep">Hours of sleep</Label>
                <Input id="sleep" type="number" min={0} max={24} placeholder="8" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="notes">Notes</Label>
                <Input id="notes" placeholder="Any thoughts or feelings" />
              </div>
            </form>
            <div className="mt-6">
              <Button className="gap-2">Generate Suggestions <ArrowRight className="h-4 w-4" /></Button>
              <div className="mt-4 text-sm text-muted-foreground">
                <p>Checklist:</p>
                <ul className="list-disc ml-6">
                  {mentalChecklist.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        </div>

        {/* Counseling to Doctor */}
        <div id="counseling" className="scroll-mt-28 mb-8">
          <Card className="p-8 shadow-elegant">
            <h2 className="text-2xl font-bold mb-4">Counseling to Doctor</h2>
            <p className="text-muted-foreground mb-6">Mock directory of specialists</p>
            <div className="grid md:grid-cols-3 gap-4">
              {counselingResources.map((doc) => (
                <Card key={doc.name} className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Stethoscope className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">{doc.name}</p>
                      <p className="text-sm text-muted-foreground">{doc.specialty}</p>
                      <p className="text-xs text-muted-foreground">Availability: {doc.availability}</p>
                    </div>
                  </div>
                  <Button className="mt-4 w-full" variant="outline">Book mock slot</Button>
                </Card>
              ))}
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Advisor;