import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import { Users, Megaphone, Wallet, Share2, Clock } from "lucide-react";
import PublicHeader from "@/components/PublicHeader";

type Member = { name: string; role: string };
type Post = {
  id: number;
  title: string;
  type: "Offer" | "Request";
  budget?: string;
  deadline?: string;
  description: string;
  author: string;
  avatar?: string;
};

const PeopleManagement = () => {
  const { toast } = useToast();

  const [members, setMembers] = useState<Member[]>([
    { name: "Ahsan", role: "Social Manager" },
    { name: "Rina", role: "Account Handler" },
  ]);
  const [name, setName] = useState("");
  const [role, setRole] = useState("Social Manager");

  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      title: "10k unit foreign buyer order — 7 days",
      type: "Offer",
      budget: "$8k total",
      deadline: "7 days",
      description: "Need collab: packaging, labeling, delivery logistics. Share work with partners.",
      author: "Mindspring Team",
      avatar: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=120&h=120&fit=crop",
    },
    {
      id: 2,
      title: "Looking for Social Manager (Reels + Posts)",
      type: "Request",
      budget: "$300 / week",
      deadline: "Ongoing",
      description: "Plan, post and manage comments across Instagram & YouTube Shorts.",
      author: "Rina",
      avatar: "https://images.unsplash.com/photo-1552055568-2015d2e8f26b?w=120&h=120&fit=crop",
    },
  ]);

  const [postTitle, setPostTitle] = useState("");
  const [postType, setPostType] = useState<Post["type"]>("Offer");
  const [postBudget, setPostBudget] = useState("");
  const [postDeadline, setPostDeadline] = useState("");
  const [postDesc, setPostDesc] = useState("");

  const addMember = () => {
    const n = name.trim();
    if (!n) return;
    setMembers((prev) => [...prev, { name: n, role }]);
    setName("");
    toast({ title: "Member Added", description: `${n} → ${role}` });
  };

  const addPost = () => {
    const t = postTitle.trim();
    if (!t || !postDesc.trim()) return;
    const newPost: Post = {
      id: posts.length + 1,
      title: t,
      type: postType,
      budget: postBudget || undefined,
      deadline: postDeadline || undefined,
      description: postDesc,
      author: "You",
    };
    setPosts((prev) => [newPost, ...prev]);
    setPostTitle("");
    setPostBudget("");
    setPostDeadline("");
    setPostDesc("");
    toast({ title: "Post Published", description: `${postType} — ${t}` });
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      <PublicHeader />
      <section className="container mx-auto px-6 py-10">
        <div className="flex justify-end mb-4">
          <Link to="/">
            <Button variant="outline">Back to Main</Button>
          </Link>
        </div>
        <div className="mb-8">
          <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium inline-flex items-center gap-2">
            <Users className="h-4 w-4" /> People & Collaboration
          </span>
          <h1 className="text-3xl md:text-4xl font-bold mt-3">People Management</h1>
          <p className="text-muted-foreground">Assign roles, share work, and collaborate like a social feed</p>
        </div>

        <Tabs defaultValue="roles" className="w-full">
          <TabsList className="w-full grid grid-cols-2 mb-4">
            <TabsTrigger value="roles">Roles</TabsTrigger>
            <TabsTrigger value="board">Collaboration Board</TabsTrigger>
          </TabsList>

          {/* Roles Tab */}
          <TabsContent value="roles">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Assign Roles</CardTitle>
                  <CardDescription>Give roles like Social Manager or Account Handler</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Name</Label>
                    <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter member name" />
                  </div>
                  <div className="space-y-2">
                    <Label>Role</Label>
                    <Select value={role} onValueChange={(v) => setRole(v)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Social Manager">Social Manager</SelectItem>
                        <SelectItem value="Account Handler">Account Handler</SelectItem>
                        <SelectItem value="Collaboration Manager">Collaboration Manager</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button onClick={addMember}>Add Member</Button>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Team</CardTitle>
                  <CardDescription>Current members and roles</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {members.map((m, i) => (
                      <div key={`m-${i}`} className="flex items-center gap-3 p-3 rounded-md border">
                        <Avatar className="h-9 w-9">
                          <AvatarImage src={`https://api.dicebear.com/8.x/initials/svg?seed=${encodeURIComponent(m.name)}`} />
                          <AvatarFallback>{m.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium line-clamp-1">{m.name}</div>
                          <div className="text-xs text-muted-foreground">{m.role}</div>
                        </div>
                        <Badge variant="secondary">Assigned</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Collaboration Board */}
          <TabsContent value="board">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Create Post</CardTitle>
                  <CardDescription>Share what work you have or what you want</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Title</Label>
                    <Input value={postTitle} onChange={(e) => setPostTitle(e.target.value)} placeholder="e.g., Need packaging partners for 10k unit order" />
                  </div>
                  <div className="space-y-2">
                    <Label>Type</Label>
                    <Select value={postType} onValueChange={(v) => setPostType(v as Post["type"]) }>
                      <SelectTrigger>
                        <SelectValue placeholder="Post type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Offer">Offer</SelectItem>
                        <SelectItem value="Request">Request</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Budget</Label>
                      <Input value={postBudget} onChange={(e) => setPostBudget(e.target.value)} placeholder="$500, negotiable" />
                    </div>
                    <div className="space-y-2">
                      <Label>Deadline</Label>
                      <Input value={postDeadline} onChange={(e) => setPostDeadline(e.target.value)} placeholder="e.g., 7 days" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Description</Label>
                    <Textarea value={postDesc} onChange={(e) => setPostDesc(e.target.value)} rows={6} placeholder="Details, requirements, and how to collaborate. Example: Foreign buyer order 10k units in 7 days — share work across partners for packaging and labeling." />
                  </div>
                  <Button onClick={addPost} className="w-full">Publish</Button>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Feed</CardTitle>
                  <CardDescription>Posts by you and others (public)</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {posts.map((p) => (
                      <div key={p.id} className="p-4 rounded-md border">
                        <div className="flex items-start gap-3">
                          <Avatar className="h-10 w-10">
                            {p.avatar ? <AvatarImage src={p.avatar} /> : null}
                            <AvatarFallback>{p.author.slice(0,2).toUpperCase()}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <Badge variant={p.type === "Offer" ? "default" : "secondary"}>{p.type}</Badge>
                              {p.budget ? (
                                <span className="text-xs text-muted-foreground inline-flex items-center gap-1"><Wallet className="h-3 w-3" /> {p.budget}</span>
                              ) : null}
                              {p.deadline ? (
                                <span className="text-xs text-muted-foreground inline-flex items-center gap-1"><Clock className="h-3 w-3" /> {p.deadline}</span>
                              ) : null}
                            </div>
                            <div className="text-sm font-medium mt-1">{p.title}</div>
                            <p className="text-xs text-muted-foreground mt-1">{p.description}</p>
                            <div className="mt-3 flex gap-2">
                              <Button size="sm" variant="outline"><Share2 className="h-3 w-3 mr-1" /> Share Work</Button>
                              <Button size="sm" variant="ghost"><Megaphone className="h-3 w-3 mr-1" /> Contact</Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
};

export default PeopleManagement;