import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Shield, Store } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState<"admin" | "entrepreneur" | null>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedRole === "admin") {
      navigate("/admin/overview");
    } else {
      navigate("/entrepreneur/overview");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-6">
      <div className="w-full max-w-5xl">
        <div className="text-center mb-8">
          <Link to="/">
            <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              CommerceHub
            </h1>
          </Link>
          <p className="text-muted-foreground">Choose your login type to continue</p>
        </div>

        {!selectedRole ? (
          <div className="grid md:grid-cols-2 gap-6">
            <Card
              className="p-8 shadow-elegant hover:shadow-elegant transition-all duration-300 hover:scale-105 cursor-pointer"
              onClick={() => setSelectedRole("admin")}
            >
              <div className="text-center">
                <div className="mb-6 p-6 bg-gradient-primary rounded-2xl w-fit mx-auto">
                  <Shield className="h-12 w-12 text-primary-foreground" />
                </div>
                <h2 className="text-2xl font-bold mb-3">Admin Login</h2>
                <p className="text-muted-foreground mb-6">
                  Platform owner and administrators
                </p>
                <ul className="text-left space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Manage all entrepreneurs
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Platform analytics & settings
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Financial management
                  </li>
                </ul>
                <Button className="w-full">Select Admin</Button>
              </div>
            </Card>

            <Card
              className="p-8 shadow-elegant hover:shadow-elegant transition-all duration-300 hover:scale-105 cursor-pointer"
              onClick={() => setSelectedRole("entrepreneur")}
            >
              <div className="text-center">
                <div className="mb-6 p-6 bg-gradient-primary rounded-2xl w-fit mx-auto">
                  <Store className="h-12 w-12 text-primary-foreground" />
                </div>
                <h2 className="text-2xl font-bold mb-3">Entrepreneur Login</h2>
                <p className="text-muted-foreground mb-6">
                  Business owners and merchants
                </p>
                <ul className="text-left space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Manage your products
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Track sales & orders
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Social media integration
                  </li>
                </ul>
                <Button className="w-full">Select Entrepreneur</Button>
              </div>
            </Card>
          </div>
        ) : (
          <Card className="max-w-md mx-auto p-8 shadow-elegant">
            <div className="text-center mb-6">
              <div className="mb-4 p-4 bg-gradient-primary rounded-2xl w-fit mx-auto">
                {selectedRole === "admin" ? (
                  <Shield className="h-8 w-8 text-primary-foreground" />
                ) : (
                  <Store className="h-8 w-8 text-primary-foreground" />
                )}
              </div>
              <h2 className="text-2xl font-bold mb-2">
                {selectedRole === "admin" ? "Admin Login" : "Entrepreneur Login"}
              </h2>
              <p className="text-sm text-muted-foreground">
                Enter your credentials to continue
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Sign In
              </Button>
              <Button
                type="button"
                variant="ghost"
                className="w-full"
                onClick={() => setSelectedRole(null)}
              >
                Back to selection
              </Button>
            </form>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Login;
