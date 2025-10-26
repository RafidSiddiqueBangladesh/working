import { ReactNode } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useLocation } from "react-router-dom";
import { Mail, Settings } from "lucide-react";
import PublicHeader from "@/components/PublicHeader";

type SubPage = {
  slug: string;
  title: string;
};

type FeatureLayoutProps = {
  featureTitle: string;
  subPages: SubPage[];
  activeSub: string;
  children: ReactNode;
};

const getEmail = () => {
  try {
    const stored = localStorage.getItem("userEmail");
    if (stored && stored.length > 3) return stored;
  } catch {}
  return "user@example.com";
};

const FeatureLayout = ({ featureTitle, subPages, activeSub, children }: FeatureLayoutProps) => {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith("/admin/");
  const isEntrepreneur = location.pathname.startsWith("/entrepreneur/");

  const basePrefix = isAdmin
    ? "/admin/features"
    : isEntrepreneur
    ? "/entrepreneur/features"
    : "/features";

  const email = getEmail();
  // Always route Profile Settings to entrepreneur overview per request
  const profileHref = "/entrepreneur/overview";

  return (
    <div className="min-h-screen bg-gradient-hero">
      <PublicHeader />
      <div className="min-h-[calc(100vh-64px)] container mx-auto px-6 py-6">
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold">{featureTitle}</h1>
          <p className="text-muted-foreground">Navigate the tools using the right sidebar</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[240px,1fr,260px] gap-6">
          {/* Left sidebar: tools */}
          <div className="space-y-2">
            <Card className="p-4 shadow-card">
              <h3 className="text-sm font-semibold mb-3">Tools</h3>
              <div className="flex flex-col gap-2">
                {subPages.map((sp) => {
                  const parts = location.pathname.split("/").filter(Boolean);
                  const featuresIdx = parts.indexOf("features");
                  const featureSlug = featuresIdx >= 0 ? parts[featuresIdx + 1] : "";
                  const target = `${basePrefix}/${featureSlug}/${sp.slug}`;

                  return (
                    <Link key={sp.slug} to={target} className="block">
                      <Button
                        variant={activeSub === sp.slug ? "default" : "outline"}
                        className="w-full justify-start"
                      >
                        {sp.title}
                      </Button>
                    </Link>
                  );
                })}
              </div>
            </Card>
          </div>

          {/* Main content */}
          <Card className="p-6 shadow-card min-h-[420px]">{children}</Card>

          {/* Right sidebar: profile and email */}
          <div className="space-y-6">
            <Card className="p-5 shadow-card">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Signed in as</p>
                  <p className="font-semibold">{email}</p>
                </div>
              </div>
              <Link to={profileHref}>
                <Button variant="outline" className="w-full gap-2">
                  <Settings className="h-4 w-4" /> Profile Settings
                </Button>
              </Link>
            </Card>

            <Card className="p-5 shadow-card">
              <h3 className="text-sm font-semibold mb-3">Quick Search</h3>
              <Input placeholder="Search tools" />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureLayout;