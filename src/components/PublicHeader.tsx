import { Button } from "@/components/ui/button";
import TopControls from "@/components/TopControls";
import { Link, NavLink } from "react-router-dom";

const PublicHeader = () => {
  return (
    <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-10">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/">
          <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Mindspring 30
          </h1>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <NavLink to="/" className={({ isActive }) => (isActive ? "opacity-100" : "opacity-80 hover:opacity-100") }>
            <Button variant="ghost">Home</Button>
          </NavLink>
          <NavLink to="/products" className={({ isActive }) => (isActive ? "opacity-100" : "opacity-80 hover:opacity-100") }>
            <Button variant="ghost">Products</Button>
          </NavLink>
          <NavLink to="/entrepreneurs" className={({ isActive }) => (isActive ? "opacity-100" : "opacity-80 hover:opacity-100") }>
            <Button variant="ghost">Entrepreneurs</Button>
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "opacity-100" : "opacity-80 hover:opacity-100") }>
            <Button variant="ghost">About</Button>
          </NavLink>
          <NavLink to="/people" className={({ isActive }) => (isActive ? "opacity-100" : "opacity-80 hover:opacity-100") }>
            <Button variant="ghost">People</Button>
          </NavLink>
          <NavLink to="/advisor" className={({ isActive }) => (isActive ? "opacity-100" : "opacity-80 hover:opacity-100") }>
            <Button variant="ghost">Advisor</Button>
          </NavLink>
          <NavLink to="/login" className={({ isActive }) => (isActive ? "opacity-100" : "opacity-80 hover:opacity-100") }>
            <Button>Login</Button>
          </NavLink>
        </nav>

        <div className="flex md:ml-6">
          <TopControls />
        </div>
      </div>
    </header>
  );
};

export default PublicHeader;