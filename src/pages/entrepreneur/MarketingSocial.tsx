import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Youtube, Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import { Progress } from "@/components/ui/progress";

const MarketingSocial = () => {
  const youtubeVideos = [
    { title: "Product Review: Best Selling Item", views: "3,245", likes: "245", comments: 12, seed: "yt-1" },
    { title: "How to Use Our Latest Product", views: "5,678", likes: "432", comments: 28, seed: "yt-2" },
    { title: "Behind the Scenes: Product Creation", views: "2,134", likes: "187", comments: 15, seed: "yt-3" },
  ];

  const tools = [
    {
      slug: "video-ideas",
      title: "Social Video Ideas",
      description: "AI titles, hooks, and topics for YouTube",
      image: "https://picsum.photos/seed/video-ideas/800/450",
      to: "/features/social/video-ideas",
    },
    {
      slug: "thumbnail-generator",
      title: "Thumbnail Generator",
      description: "Generate eye-catching thumbnails in seconds",
      image: "https://picsum.photos/seed/thumbnail-generator/800/450",
      to: "/features/social/thumbnail-generator",
    },
    {
      slug: "reel-maker",
      title: "Reel Maker",
      description: "Create vertical reels with overlays and captions",
      image: "https://picsum.photos/seed/reel-maker/800/450",
      to: "/features/social/reel-maker",
    },
    {
      slug: "ctr-predictor",
      title: "CTR Predictor",
      description: "Predict click-through rates for content",
      image: "https://picsum.photos/seed/ctr-predictor/800/450",
      to: "/features/social/ctr-predictor",
    },
    {
      slug: "similar-channels",
      title: "Similar Channels",
      description: "Discover channels like yours for inspiration",
      image: "https://picsum.photos/seed/similar-channels/800/450",
      to: "/features/social/similar-channels",
    },
    {
      slug: "audio-generator",
      title: "Audio Generator",
      description: "Narrations, music beds, and sound logos",
      image: "https://picsum.photos/seed/audio-generator/800/450",
      to: "/features/social/audio-generator",
    },
  ];

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Marketing & Social Media</h1>
        <p className="text-muted-foreground">Manage your social media presence and campaigns</p>
      </div>

      {/* Connect Accounts */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <Card className="p-6 shadow-card">
          <div className="flex items-center gap-3 mb-4">
            <Facebook className="h-6 w-6 text-primary" />
            <h3 className="text-xl font-semibold">Facebook</h3>
          </div>
          <p className="text-muted-foreground mb-4">Connect your Facebook account to manage posts</p>
          <Button variant="outline">Connect Facebook</Button>
        </Card>

        <Card className="p-6 shadow-card">
          <div className="flex items-center gap-3 mb-4">
            <Instagram className="h-6 w-6 text-primary" />
            <h3 className="text-xl font-semibold">Instagram</h3>
          </div>
          <p className="text-muted-foreground mb-4">Manage Instagram posts and stories</p>
          <Button variant="outline">Connect Instagram</Button>
        </Card>

        <Card className="p-6 shadow-card">
          <div className="flex items-center gap-3 mb-4">
            <Twitter className="h-6 w-6 text-primary" />
            <h3 className="text-xl font-semibold">Twitter/X</h3>
          </div>
          <p className="text-muted-foreground mb-4">Schedule tweets and track engagement</p>
          <Button variant="outline">Connect Twitter</Button>
        </Card>
      </div>

      {/* Social Tools */}
      <div className="mb-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold">Social Tools</h2>
          <div className="flex gap-2">
            <Link to="/features/social/video-ideas"><Button variant="ghost">Video Ideas</Button></Link>
            <Link to="/features/social/thumbnail-generator"><Button variant="ghost">Thumbnails</Button></Link>
            <Link to="/features/social/reel-maker"><Button variant="ghost">Reels</Button></Link>
            <Link to="/features/social/ctr-predictor"><Button variant="ghost">CTR</Button></Link>
            <Link to="/features/social/similar-channels"><Button variant="ghost">Similar</Button></Link>
            <Link to="/features/social/audio-generator"><Button variant="ghost">Audio</Button></Link>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <Card key={tool.slug} className="overflow-hidden shadow-card">
              <div className="aspect-video w-full bg-muted">
                <img
                  src={tool.image}
                  alt={tool.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">{tool.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{tool.description}</p>
                <div className="flex justify-between items-center">
                  <Link to={tool.to}>
                    <Button size="sm">Open tool</Button>
                  </Link>
                  {tool.slug === "ctr-predictor" && (
                    <div className="w-40">
                      <Progress value={72} />
                      <p className="text-xs text-muted-foreground mt-1">Predicted CTR: 7.2%</p>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* YouTube Performance */}
      <Card className="p-6 shadow-card">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Youtube className="h-6 w-6 text-primary" />
            <div>
              <h3 className="text-xl font-semibold">YouTube Performance</h3>
              <p className="text-sm text-muted-foreground">Mock data — connect your YouTube API for real insights</p>
            </div>
          </div>
          <Button>Connect YouTube API</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {youtubeVideos.map((video, i) => (
            <div key={i} className="p-4 rounded-lg bg-muted/50">
              <div className="aspect-video rounded-lg mb-3 overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/${video.seed}/640/360`}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-medium mb-2 line-clamp-2">{video.title}</h4>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>{video.views} views</span>
                <span>{video.likes} likes</span>
                <span>{video.comments} comments</span>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default MarketingSocial;
