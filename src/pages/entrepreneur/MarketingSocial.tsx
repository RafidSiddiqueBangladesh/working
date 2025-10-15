import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Youtube, Facebook, Instagram, Twitter } from "lucide-react";

const MarketingSocial = () => {
  const youtubeVideos = [
    { title: "Product Review: Best Selling Item", views: "3,245", likes: "245", comments: 12 },
    { title: "How to Use Our Latest Product", views: "5,678", likes: "432", comments: 28 },
    { title: "Behind the Scenes: Product Creation", views: "2,134", likes: "187", comments: 15 },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Marketing & Social Media</h1>
        <p className="text-muted-foreground">Manage your social media presence and campaigns</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
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
      </div>

      <Card className="p-6 shadow-card">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Youtube className="h-6 w-6 text-primary" />
            <div>
              <h3 className="text-xl font-semibold">YouTube Performance</h3>
              <p className="text-sm text-muted-foreground">Mock data - Connect your YouTube API for real insights</p>
            </div>
          </div>
          <Button>Connect YouTube API</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {youtubeVideos.map((video, i) => (
            <div key={i} className="p-4 rounded-lg bg-muted/50">
              <div className="aspect-video bg-gradient-primary rounded-lg mb-3" />
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
