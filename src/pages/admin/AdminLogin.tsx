import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Shield } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      // TODO: integrate real auth later
      await new Promise((res) => setTimeout(res, 600));
      navigate("/admin/overview");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/">
            <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Mindspring 30 Admin
            </h1>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <Card className="max-w-md mx-auto p-8 shadow-elegant">
          <div className="text-center mb-6">
            <div className="mb-4 p-4 bg-gradient-primary rounded-2xl w-fit mx-auto">
              <Shield className="h-8 w-8 text-primary-foreground" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Admin Login</h2>
            <p className="text-sm text-muted-foreground">
              Enter your credentials to continue
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="admin@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Signing in..." : "Login as Admin"}
            </Button>
          </form>

          <div className="mt-6 text-center text-sm">
            <Link to="/" className="text-primary hover:underline">
              Back to Home
            </Link>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default AdminLogin;