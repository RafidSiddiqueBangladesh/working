import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  BarChart3,
  Users,
  Megaphone,
  Wallet,
  UserCircle,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const items = [
  { title: "Dashboard", url: "/entrepreneur/overview", icon: LayoutDashboard },
  { title: "Product Management", url: "/entrepreneur/products", icon: Package },
  { title: "Order Management", url: "/entrepreneur/orders", icon: ShoppingCart },
  { title: "Sales & Analytics", url: "/entrepreneur/analytics", icon: BarChart3 },
  { title: "Customer Management", url: "/entrepreneur/customers", icon: Users },
  { title: "Marketing & Social", url: "/entrepreneur/marketing", icon: Megaphone },
  { title: "Payments & Withdrawals", url: "/entrepreneur/payments", icon: Wallet },
  { title: "Profile & Settings", url: "/entrepreneur/profile", icon: UserCircle },
];

export function EntrepreneurSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";

  return (
    <Sidebar className={collapsed ? "w-14" : "w-64"} collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className={collapsed ? "justify-center" : ""}>
            {collapsed ? "E" : "Entrepreneur"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      className={({ isActive }) =>
                        isActive
                          ? "bg-primary text-primary-foreground font-medium"
                          : "hover:bg-muted/50"
                      }
                    >
                      <item.icon className="h-4 w-4" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
