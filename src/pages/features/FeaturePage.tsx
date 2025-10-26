import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import ProductMediaFooter from "@/components/ProductMediaFooter";
import ProductMediaInline from "@/components/ProductMediaInline";
import FeatureLayout from "@/layouts/FeatureLayout";
import { useParams } from "react-router-dom";

const DEFAULT_SUB_PAGES = [
  { slug: "home", title: "Home" },
  { slug: "video-ideas", title: "Video Ideas" },
  { slug: "thumbnail-generator", title: "Thumbnail Generator" },
  { slug: "reel-maker", title: "Reel Maker" },
  { slug: "similar-channels", title: "Similar Channels" },
  { slug: "audio-generator", title: "Audio Generator" },
  { slug: "ctr-predictor", title: "CTR Predictor" },
  { slug: "recharge", title: "Recharge" },
];

const FEATURE_SUB_PAGES: Record<string, { slug: string; title: string }[]> = {
  social: DEFAULT_SUB_PAGES,
  product: [
    { slug: "home", title: "Home" },
    { slug: "catalog", title: "Catalog" },
    { slug: "media", title: "Media" },
    { slug: "inventory", title: "Inventory" },
    { slug: "variants", title: "Variants" },
    { slug: "shipping", title: "Shipping" },
  ],
  analytics: [
    { slug: "home", title: "Home" },
    { slug: "overview", title: "Overview" },
    { slug: "engagement", title: "Engagement" },
    { slug: "conversion", title: "Conversion" },
    { slug: "retention", title: "Retention" },
    { slug: "revenue", title: "Revenue" },
  ],
  growth: [
    { slug: "home", title: "Home" },
    { slug: "pricing", title: "Pricing" },
    { slug: "campaigns", title: "Campaigns" },
    { slug: "seo", title: "SEO" },
    { slug: "referrals", title: "Referrals" },
    { slug: "affiliates", title: "Affiliates" },
  ],
  ai: [
    { slug: "home", title: "Home" },
    { slug: "content", title: "Content" },
    { slug: "assistant", title: "Assistant" },
    { slug: "automation", title: "Automation" },
    { slug: "chatbot", title: "Chatbot" },
    { slug: "workflows", title: "Workflows" },
  ],
  language: [
    { slug: "home", title: "Home" },
    { slug: "translate", title: "Translate" },
    { slug: "localization", title: "Localization" },
    { slug: "rtl-support", title: "RTL Support" },
    { slug: "bangla", title: "Bangla" },
    { slug: "english", title: "English" },
  ],
};

const featureTitleMap: Record<string, string> = {
  product: "Product Management",
  social: "Social Media Integration",
  analytics: "Advanced Analytics",
  growth: "Growth Tools",
  ai: "AI Assistant",
  language: "Multi-language",
};

const FeaturePage = () => {
  const { feature = "social", subpage = "home" } = useParams();
  const featureTitle = featureTitleMap[feature] || feature;
  const subPages = FEATURE_SUB_PAGES[feature] || DEFAULT_SUB_PAGES;

  return (
    <FeatureLayout featureTitle={featureTitle} subPages={subPages} activeSub={subpage}>
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">
          {featureTitle} · {subPages.find((s) => s.slug === subpage)?.title || subpage}
        </h2>

        {feature === "social" ? (
          <div className="space-y-6">
            {subpage === "home" && (
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "Social Media Content",
                    img: "https://picsum.photos/seed/social-home-1/600/400",
                    desc: "Create posts like 'Share Info' across platforms",
                  },
                  {
                    title: "Video Ideas",
                    img: "https://picsum.photos/seed/social-home-2/600/400",
                    desc: "Generate video topics with mock previews",
                  },
                  {
                    title: "Thumbnail Generator",
                    img: "https://picsum.photos/seed/social-home-3/600/400",
                    desc: "Craft thumbnails with names and styles",
                  },
                  {
                    title: "Reel Maker",
                    img: "https://picsum.photos/seed/social-home-4/600/400",
                    desc: "Build vertical reels with captions",
                  },
                  {
                    title: "CTR Predictor",
                    img: "https://picsum.photos/seed/social-home-5/600/400",
                    desc: "Visualize performance with rich metrics",
                  },
                  {
                    title: "Similar Channels",
                    img: "https://picsum.photos/seed/social-home-6/600/400",
                    desc: "Discover peers and competitor content",
                  },
                ].map((it, i) => (
                  <Card key={i} className="p-4 bg-muted/40">
                    <img
                      src={it.img}
                      alt={it.title}
                      className="w-full h-36 object-cover rounded-md mb-3"
                    />
                    <p className="font-medium">{it.title}</p>
                    <p className="text-sm text-muted-foreground">{it.desc}</p>
                  </Card>
                ))}
              </div>
            )}

            {subpage === "video-ideas" && (
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {[
                  { title: "Share Info", img: "https://picsum.photos/seed/video-ideas-1/600/800" },
                  { title: "Scale Your Shop", img: "https://picsum.photos/seed/video-ideas-2/600/800" },
                  { title: "Top 5 Mistakes", img: "https://picsum.photos/seed/video-ideas-3/600/800" },
                  { title: "Customer Stories", img: "https://picsum.photos/seed/video-ideas-4/600/800" },
                  { title: "Behind the Scenes", img: "https://picsum.photos/seed/video-ideas-5/600/800" },
                  { title: "Weekly Wrap", img: "https://picsum.photos/seed/video-ideas-6/600/800" },
                ].map((it, i) => (
                  <Card key={i} className="p-4 bg-muted/40">
                    <img
                      src={it.img}
                      alt={it.title}
                      className="w-full aspect-[4/5] object-cover rounded-md mb-3"
                    />
                    <p className="font-medium">{it.title}</p>
                    <p className="text-sm text-muted-foreground">Sample preview frames</p>
                  </Card>
                ))}
              </div>
            )}

            {subpage === "similar-channels" && (
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "Tech Sprout",
                    img: "https://picsum.photos/seed/similar-1/600/400",
                    subscribers: "120K",
                    videos: "340",
                    views: "12M",
                  },
                  {
                    title: "Shop Masters",
                    img: "https://picsum.photos/seed/similar-2/600/400",
                    subscribers: "89K",
                    videos: "210",
                    views: "7.5M",
                  },
                  {
                    title: "Creative Commerce",
                    img: "https://picsum.photos/seed/similar-3/600/400",
                    subscribers: "56K",
                    videos: "180",
                    views: "4.2M",
                  },
                  {
                    title: "Growth Channel",
                    img: "https://picsum.photos/seed/similar-4/600/400",
                    subscribers: "150K",
                    videos: "520",
                    views: "22M",
                  },
                  {
                    title: "Analytics Hub",
                    img: "https://picsum.photos/seed/similar-5/600/400",
                    subscribers: "33K",
                    videos: "90",
                    views: "2.1M",
                  },
                  {
                    title: "AI Assist",
                    img: "https://picsum.photos/seed/similar-6/600/400",
                    subscribers: "62K",
                    videos: "140",
                    views: "3.7M",
                  },
                ].map((ch, i) => (
                  <Card key={i} className="p-4 bg-muted/40">
                    <img
                      src={ch.img}
                      alt={ch.title}
                      className="w-full h-36 object-cover rounded-md mb-3"
                    />
                    <p className="font-medium">{ch.title}</p>
                    <div className="text-xs text-muted-foreground mt-1">
                      <span className="mr-3">Subscribers: {ch.subscribers}</span>
                      <span className="mr-3">Videos: {ch.videos}</span>
                      <span>Views: {ch.views}</span>
                    </div>
                  </Card>
                ))}
              </div>
            )}

            {subpage === "audio-generator" && (
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "Promo Voiceover",
                    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                    status: "COMPLETED",
                  },
                  {
                    title: "Product Spotlight",
                    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
                    status: "COMPLETED",
                  },
                  {
                    title: "Customer Story",
                    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
                    status: "PROCESSING",
                  },
                  {
                    title: "Quick Tip",
                    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
                    status: "COMPLETED",
                  },
                  {
                    title: "Weekly Update",
                    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
                    status: "FAILED",
                  },
                  {
                    title: "Behind the Scenes",
                    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
                    status: "COMPLETED",
                  },
                ].map((a, i) => (
                  <Card key={i} className="p-4 bg-muted/40">
                    <p className="font-medium mb-2">{a.title}</p>
                    <audio controls src={a.url} className="w-full" />
                    <p className="text-xs text-muted-foreground mt-2">Status: {a.status}</p>
                  </Card>
                ))}
              </div>
            )}

            {subpage === "thumbnail-generator" && (
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {[
                  { name: "Viral Intro", img: "https://picsum.photos/seed/thumb-1/600/400" },
                  { name: "Shop Secrets", img: "https://picsum.photos/seed/thumb-2/600/400" },
                  { name: "How-To Guide", img: "https://picsum.photos/seed/thumb-3/600/400" },
                  { name: "Best Deals", img: "https://picsum.photos/seed/thumb-4/600/400" },
                  { name: "Quick Tips", img: "https://picsum.photos/seed/thumb-5/600/400" },
                  { name: "Deep Dive", img: "https://picsum.photos/seed/thumb-6/600/400" },
                ].map((it, i) => (
                  <Card key={i} className="p-4 bg-muted/40">
                    <img
                      src={it.img}
                      alt={it.name}
                      className="w-full h-36 object-cover rounded-md mb-3"
                    />
                    <p className="font-medium">{it.name}</p>
                    <p className="text-sm text-muted-foreground">Thumbnail example with name</p>
                  </Card>
                ))}
              </div>
            )}

            {subpage === "reel-maker" && (
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {[
                  { title: "New Launch Reel", img: "https://picsum.photos/seed/reel-1/600/1000" },
                  { title: "How We Pack", img: "https://picsum.photos/seed/reel-2/600/1000" },
                  { title: "Customer Love", img: "https://picsum.photos/seed/reel-3/600/1000" },
                  { title: "Quick Tip", img: "https://picsum.photos/seed/reel-4/600/1000" },
                  { title: "Trending Sound", img: "https://picsum.photos/seed/reel-5/600/1000" },
                  { title: "Behind Scenes", img: "https://picsum.photos/seed/reel-6/600/1000" },
                ].map((it, i) => (
                  <Card key={i} className="p-4 bg-muted/40">
                    <img
                      src={it.img}
                      alt={it.title}
                      className="w-full aspect-[9/16] object-cover rounded-md mb-3"
                    />
                    <p className="font-medium">{it.title}</p>
                    <p className="text-sm text-muted-foreground">Vertical reel preview</p>
                  </Card>
                ))}
              </div>
            )}

            {subpage === "ctr-predictor" && (
              <div className="space-y-6">
                <Card className="p-6 bg-muted/40">
                  <p className="text-sm text-muted-foreground">Predicted Click-Through Rate</p>
                  <div className="text-5xl font-bold">7.8%</div>
                </Card>

                <div className="grid gap-6 md:grid-cols-2">
                  {[
                    { label: "Visual Appeal", value: 82 },
                    { label: "Emotional Impact", value: 68 },
                    { label: "Title-Thumbnail Alignment", value: 74 },
                    { label: "Curiosity Factor", value: 63 },
                    { label: "Text Readability", value: 90 },
                    { label: "Face Expression Quality", value: 71 },
                    { label: "Contrast Visibility", value: 85 },
                    { label: "Trending Elements", value: 58 },
                  ].map((m, i) => (
                    <Card key={i} className="p-4 bg-muted/40">
                      <p className="font-medium mb-2">{m.label}</p>
                      <Progress value={m.value} />
                      <p className="text-xs text-muted-foreground mt-2">Score: {m.value}/100</p>
                    </Card>
                  ))}
                </div>

                <Card className="p-4 bg-muted/40">
                  <p className="font-medium mb-2">Recommendations</p>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                    <li>Increase brightness and contrast for better visibility</li>
                    <li>Align title keywords with thumbnail text</li>
                    <li>Use a clear face shot to boost emotional impact</li>
                    <li>Add trending icons subtly to increase curiosity</li>
                  </ul>
                </Card>
              </div>
            )}

            {subpage === "recharge" && (
              <div className="space-y-6">
                <Card className="p-6 bg-muted/40">
                  <p className="text-sm text-muted-foreground">Recharge your social campaigns</p>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-4">
                    {[
                      { title: "Facebook Boost", reach: "+25k", cost: "$40", status: "READY" },
                      { title: "Instagram Promotion", reach: "+18k", cost: "$32", status: "READY" },
                      { title: "YouTube Discovery", reach: "+12k", cost: "$45", status: "SCHEDULED" },
                      { title: "Cross-Platform", reach: "+50k", cost: "$95", status: "READY" },
                      { title: "Retargeting", reach: "+30k", cost: "$60", status: "DRAFT" },
                      { title: "Lookalike Audience", reach: "+22k", cost: "$48", status: "READY" },
                    ].map((c, i) => (
                      <Card key={i} className="p-4 bg-muted/40">
                        <p className="font-medium mb-1">{c.title}</p>
                        <p className="text-xs text-muted-foreground mb-2">Estimated reach {c.reach}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-semibold">{c.cost}</span>
                          <span className="text-xs text-muted-foreground">{c.status}</span>
                        </div>
                        <Button className="mt-3 w-full">Recharge</Button>
                      </Card>
                    ))}
                  </div>
                </Card>

                <div className="grid gap-6 md:grid-cols-2">
                  {[
                    { label: "Budget Utilization", value: 72 },
                    { label: "Audience Saturation", value: 64 },
                    { label: "Creative Fatigue", value: 41 },
                    { label: "Expected Lift", value: 55 },
                  ].map((m, i) => (
                    <Card key={i} className="p-4 bg-muted/40">
                      <p className="font-medium mb-2">{m.label}</p>
                      <Progress value={m.value} />
                      <p className="text-xs text-muted-foreground mt-2">Score: {m.value}/100</p>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {subpage !== "home" &&
              subpage !== "video-ideas" &&
              subpage !== "thumbnail-generator" &&
              subpage !== "reel-maker" &&
              subpage !== "ctr-predictor" && (
                <div className="grid gap-4 md:grid-cols-2">
                  {[...Array(6)].map((_, i) => (
                    <Card key={i} className="p-4 bg-muted/40">
                      <p className="font-medium">Sample Item {i + 1}</p>
                      <p className="text-sm text-muted-foreground">Content for social / {subpage}</p>
                    </Card>
                  ))}
                </div>
              )}
          </div>
        ) : feature === "product" ? (
          <div className="space-y-6">
            {subpage === "home" && (
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {[
                  { title: "Catalog Overview", desc: "Browse and manage products" },
                  { title: "Inventory Health", desc: "Track stock and low inventory" },
                  { title: "Shipping Profiles", desc: "Configure delivery options" },
                ].map((it, i) => (
                  <Card key={i} className="p-4 bg-muted/40">
                    <p className="font-medium">{it.title}</p>
                    <p className="text-sm text-muted-foreground">{it.desc}</p>
                  </Card>
                ))}
              </div>
            )}

            {subpage === "catalog" && (
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {[...Array(6)].map((_, i) => (
                  <Card key={i} className="p-4 bg-muted/40">
                    <p className="font-medium mb-2">Product {i + 1}</p>
                    <ProductMediaInline seed={`product-${i + 1}`} />
                    <p className="text-xs text-muted-foreground mt-2">SKU: SKU-{i + 1001}</p>
                  </Card>
                ))}
              </div>
            )}

            {subpage === "media" && (
              <ProductMediaFooter
                title="Featured Product Media"
                description="Switch between Pic / 3D / AR / VR to preview media."
              />
            )}

            {subpage === "inventory" && (
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {[
                  { name: "Classic Tee", stock: 82 },
                  { name: "Denim Jacket", stock: 24 },
                  { name: "Sneakers", stock: 56 },
                  { name: "Leather Bag", stock: 15 },
                  { name: "Cap", stock: 98 },
                  { name: "Sunglasses", stock: 34 },
                ].map((p, i) => (
                  <Card key={i} className="p-4 bg-muted/40">
                    <p className="font-medium mb-2">{p.name}</p>
                    <Progress value={p.stock} />
                    <p className="text-xs text-muted-foreground mt-2">Stock: {p.stock}</p>
                  </Card>
                ))}
              </div>
            )}

            {subpage === "variants" && (
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {[
                  { name: "Classic Tee", variants: ["S", "M", "L", "XL"] },
                  { name: "Sneakers", variants: ["38", "39", "40", "41", "42"] },
                  { name: "Cap", variants: ["Black", "Blue", "Red"] },
                ].map((p, i) => (
                  <Card key={i} className="p-4 bg-muted/40">
                    <p className="font-medium mb-2">{p.name}</p>
                    <p className="text-xs text-muted-foreground">Variants: {p.variants.join(", ")}</p>
                  </Card>
                ))}
              </div>
            )}

            {subpage === "shipping" && (
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {[
                  { provider: "DHL", eta: "3-5 days", cost: "$12" },
                  { provider: "FedEx", eta: "2-4 days", cost: "$15" },
                  { provider: "UPS", eta: "4-6 days", cost: "$10" },
                ].map((s, i) => (
                  <Card key={i} className="p-4 bg-muted/40">
                    <p className="font-medium mb-1">{s.provider}</p>
                    <p className="text-xs text-muted-foreground">ETA: {s.eta}</p>
                    <p className="text-xs text-muted-foreground">Cost: {s.cost}</p>
                  </Card>
                ))}
              </div>
            )}
          </div>
        ) : feature === "analytics" ? (
          <div className="space-y-6">
            {subpage === "home" && (
              <div className="grid gap-6 md:grid-cols-2">
                {[
                  { label: "Sessions", value: 78 },
                  { label: "Conversions", value: 22 },
                  { label: "Avg. Order Value", value: 64 },
                  { label: "Bounce Rate", value: 35 },
                ].map((m, i) => (
                  <Card key={i} className="p-4 bg-muted/40">
                    <p className="font-medium mb-2">{m.label}</p>
                    <Progress value={m.value} />
                    <p className="text-xs text-muted-foreground mt-2">Score: {m.value}/100</p>
                  </Card>
                ))}
              </div>
            )}
            {subpage === "overview" && (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  { label: "Traffic", value: 72 },
                  { label: "CTR", value: 48 },
                  { label: "Conversion", value: 29 },
                  { label: "Retention", value: 61 },
                  { label: "Revenue Growth", value: 54 },
                  { label: "CAC", value: 38 },
                ].map((m, i) => (
                  <Card key={i} className="p-4 bg-muted/40">
                    <p className="font-medium mb-2">{m.label}</p>
                    <Progress value={m.value} />
                    <p className="text-xs text-muted-foreground mt-2">Score: {m.value}/100</p>
                  </Card>
                ))}
              </div>
            )}
            {subpage === "engagement" && (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  { label: "Likes", value: 66 },
                  { label: "Comments", value: 44 },
                  { label: "Shares", value: 35 },
                ].map((m, i) => (
                  <Card key={i} className="p-4 bg-muted/40">
                    <p className="font-medium mb-2">{m.label}</p>
                    <Progress value={m.value} />
                    <p className="text-xs text-muted-foreground mt-2">Score: {m.value}/100</p>
                  </Card>
                ))}
              </div>
            )}
            {subpage === "conversion" && (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  { label: "Checkout Completion", value: 31 },
                  { label: "Cart Adds", value: 58 },
                  { label: "Product Views", value: 83 },
                ].map((m, i) => (
                  <Card key={i} className="p-4 bg-muted/40">
                    <p className="font-medium mb-2">{m.label}</p>
                    <Progress value={m.value} />
                    <p className="text-xs text-muted-foreground mt-2">Score: {m.value}/100</p>
                  </Card>
                ))}
              </div>
            )}
            {subpage === "retention" && (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  { label: "Repeat Purchase", value: 47 },
                  { label: "Email Opens", value: 63 },
                  { label: "Churn", value: 21 },
                ].map((m, i) => (
                  <Card key={i} className="p-4 bg-muted/40">
                    <p className="font-medium mb-2">{m.label}</p>
                    <Progress value={m.value} />
                    <p className="text-xs text-muted-foreground mt-2">Score: {m.value}/100</p>
                  </Card>
                ))}
              </div>
            )}
            {subpage === "revenue" && (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  { label: "MRR", value: 52 },
                  { label: "ARPU", value: 46 },
                  { label: "Gross Margin", value: 68 },
                ].map((m, i) => (
                  <Card key={i} className="p-4 bg-muted/40">
                    <p className="font-medium mb-2">{m.label}</p>
                    <Progress value={m.value} />
                    <p className="text-xs text-muted-foreground mt-2">Score: {m.value}/100</p>
                  </Card>
                ))}
              </div>
            )}
          </div>
        ) : feature === "growth" ? (
          <div className="space-y-6">
            {subpage === "home" && (
              <Card className="p-6 bg-muted/40">
                <p className="font-medium mb-2">Recommendations</p>
                <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                  <li>Run a 10% off weekend campaign</li>
                  <li>Bundle slow-moving items to increase AOV</li>
                  <li>Improve product descriptions with keywords</li>
                </ul>
              </Card>
            )}
            {subpage === "pricing" && (
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {[
                  { name: "Classic Tee", old: "$20", new: "$18", confidence: 82 },
                  { name: "Sneakers", old: "$60", new: "$58", confidence: 68 },
                  { name: "Denim Jacket", old: "$80", new: "$75", confidence: 74 },
                ].map((p, i) => (
                  <Card key={i} className="p-4 bg-muted/40">
                    <p className="font-medium mb-1">{p.name}</p>
                    <p className="text-xs text-muted-foreground">Suggested: {p.old} → {p.new}</p>
                    <Progress value={p.confidence} />
                    <p className="text-xs text-muted-foreground mt-2">Confidence: {p.confidence}%</p>
                  </Card>
                ))}
              </div>
            )}
            {subpage === "campaigns" && (
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {[
                  { title: "Holiday Sale", status: "PLANNED" },
                  { title: "Back to School", status: "ACTIVE" },
                  { title: "Summer Clearance", status: "COMPLETED" },
                ].map((c, i) => (
                  <Card key={i} className="p-4 bg-muted/40">
                    <p className="font-medium">{c.title}</p>
                    <p className="text-xs text-muted-foreground">Status: {c.status}</p>
                  </Card>
                ))}
              </div>
            )}
            {subpage === "seo" && (
              <Card className="p-6 bg-muted/40">
                <p className="font-medium mb-2">SEO Suggestions</p>
                <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                  <li>Add alt text to product images</li>
                  <li>Use structured data for products</li>
                  <li>Improve page speed for mobile</li>
                </ul>
              </Card>
            )}
            {subpage === "referrals" && (
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {[
                  { partner: "Influencer A", signups: 120 },
                  { partner: "Blog B", signups: 75 },
                  { partner: "Community C", signups: 42 },
                ].map((r, i) => (
                  <Card key={i} className="p-4 bg-muted/40">
                    <p className="font-medium mb-1">{r.partner}</p>
                    <p className="text-xs text-muted-foreground">Signups: {r.signups}</p>
                  </Card>
                ))}
              </div>
            )}
            {subpage === "affiliates" && (
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {[
                  { name: "Partner X", revenue: "$1,200" },
                  { name: "Partner Y", revenue: "$980" },
                  { name: "Partner Z", revenue: "$640" },
                ].map((a, i) => (
                  <Card key={i} className="p-4 bg-muted/40">
                    <p className="font-medium mb-1">{a.name}</p>
                    <p className="text-xs text-muted-foreground">Revenue: {a.revenue}</p>
                  </Card>
                ))}
              </div>
            )}
          </div>
        ) : feature === "ai" ? (
          <div className="space-y-6">
            {subpage === "home" && (
              <Card className="p-6 bg-muted/40">
                <p className="font-medium mb-2">Assistant Overview</p>
                <p className="text-sm text-muted-foreground">Automations and content generation preview</p>
              </Card>
            )}
            {subpage === "content" && (
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {[
                  { title: "Promo Post", img: "https://picsum.photos/seed/ai-content-1/600/400" },
                  { title: "Launch Email", img: "https://picsum.photos/seed/ai-content-2/600/400" },
                  { title: "Blog Intro", img: "https://picsum.photos/seed/ai-content-3/600/400" },
                ].map((c, i) => (
                  <Card key={i} className="p-4 bg-muted/40">
                    <img src={c.img} alt={c.title} className="w-full h-36 object-cover rounded-md mb-3" />
                    <p className="font-medium">{c.title}</p>
                  </Card>
                ))}
              </div>
            )}
            {subpage === "assistant" && (
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {[
                  { task: "Summarize analytics", status: "COMPLETED" },
                  { task: "Draft product copy", status: "IN PROGRESS" },
                  { task: "Reply to comments", status: "QUEUED" },
                ].map((t, i) => (
                  <Card key={i} className="p-4 bg-muted/40">
                    <p className="font-medium">{t.task}</p>
                    <p className="text-xs text-muted-foreground">Status: {t.status}</p>
                  </Card>
                ))}
              </div>
            )}
            {subpage === "automation" && (
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {[
                  { flow: "Welcome Email", status: "ACTIVE" },
                  { flow: "Abandoned Cart", status: "PAUSED" },
                  { flow: "Back-in-Stock", status: "DRAFT" },
                ].map((f, i) => (
                  <Card key={i} className="p-4 bg-muted/40">
                    <p className="font-medium">{f.flow}</p>
                    <p className="text-xs text-muted-foreground">Status: {f.status}</p>
                  </Card>
                ))}
              </div>
            )}
            {subpage === "chatbot" && (
              <Card className="p-6 bg-muted/40">
                <p className="font-medium mb-2">Chat Transcript</p>
                <p className="text-sm text-muted-foreground">User: Do you have size M?<br/>Bot: Yes, it’s in stock.</p>
              </Card>
            )}
            {subpage === "workflows" && (
              <Card className="p-6 bg-muted/40">
                <p className="font-medium mb-2">Workflow Triggers</p>
                <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                  <li>Order Created → Send Confirmation</li>
                  <li>Low Stock → Notify Admin</li>
                  <li>New Subscriber → Welcome Series</li>
                </ul>
              </Card>
            )}
          </div>
        ) : feature === "language" ? (
          <div className="space-y-6">
            {subpage === "home" && (
              <Card className="p-6 bg-muted/40">
                <p className="font-medium mb-2">Bangla & English support</p>
                <p className="text-sm text-muted-foreground">Switch languages and preview localized content</p>
              </Card>
            )}
            {subpage === "translate" && (
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {[
                  { en: "Hello", bn: "হ্যালো" },
                  { en: "Product", bn: "পণ্য" },
                  { en: "Checkout", bn: "চেকআউট" },
                ].map((t, i) => (
                  <Card key={i} className="p-4 bg-muted/40">
                    <p className="font-medium">{t.en}</p>
                    <p className="text-xs text-muted-foreground">{t.bn}</p>
                  </Card>
                ))}
              </div>
            )}
            {subpage === "localization" && (
              <Card className="p-6 bg-muted/40">
                <p className="font-medium mb-2">Localization Examples</p>
                <p className="text-sm text-muted-foreground">Date, currency, and address formats per locale</p>
              </Card>
            )}
            {subpage === "rtl-support" && (
              <Card className="p-6 bg-muted/40">
                <p className="font-medium mb-2">RTL Layout Preview</p>
                <p className="text-sm text-muted-foreground">Demonstrates right-to-left text support</p>
              </Card>
            )}
            {subpage === "bangla" && (
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {[
                  { title: "নতুন পণ্য", desc: "উচ্চ মানের আরামদায়ক টি-শার্ট" },
                  { title: "সেরা অফার", desc: "এই সপ্তাহে বিশেষ মূল্য" },
                ].map((c, i) => (
                  <Card key={i} className="p-4 bg-muted/40">
                    <p className="font-medium">{c.title}</p>
                    <p className="text-xs text-muted-foreground">{c.desc}</p>
                  </Card>
                ))}
              </div>
            )}
            {subpage === "english" && (
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {[
                  { title: "New Arrival", desc: "Premium comfy T-shirt" },
                  { title: "Best Deal", desc: "Special price this week" },
                ].map((c, i) => (
                  <Card key={i} className="p-4 bg-muted/40">
                    <p className="font-medium">{c.title}</p>
                    <p className="text-xs text-muted-foreground">{c.desc}</p>
                  </Card>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Quick Overview", desc: "High-level summary of this feature" },
              { title: "Getting Started", desc: "Step-by-step guide to begin" },
              { title: "Best Practices", desc: "Tips to make the most of it" },
              { title: "Example Workflows", desc: "Common use-cases you can try" },
              { title: "Integration Notes", desc: "How this connects to other tools" },
              { title: "Next Steps", desc: "Where to go from here" },
            ].map((it, i) => (
              <Card key={i} className="p-4 bg-muted/40">
                <p className="font-medium">{it.title}</p>
                <p className="text-sm text-muted-foreground">{it.desc}</p>
              </Card>
            ))}
          </div>
        )}
      </div>
    </FeatureLayout>
  );
};

export default FeaturePage;