import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Products from "./pages/Products";
import Entrepreneurs from "./pages/Entrepreneurs";
import About from "./pages/About";
import AdminLayout from "./layouts/AdminLayout";
import EntrepreneurLayout from "./layouts/EntrepreneurLayout";
import AdminOverview from "./pages/admin/Overview";
import UserManagement from "./pages/admin/UserManagement";
import EntrepreneurAnalytics from "./pages/admin/EntrepreneurAnalytics";
import OrderManagement from "./pages/admin/OrderManagement";
import PlatformSettings from "./pages/admin/PlatformSettings";
import SalesMarketing from "./pages/admin/SalesMarketing";
import FinancialManagement from "./pages/admin/FinancialManagement";
import NotificationsData from "./pages/admin/NotificationsData";
import EntrepreneurOverview from "./pages/entrepreneur/Overview";
import ProductManagement from "./pages/entrepreneur/ProductManagement";
import EntrepreneurOrderManagement from "./pages/entrepreneur/OrderManagement";
import SalesAnalytics from "./pages/entrepreneur/SalesAnalytics";
import CustomerManagement from "./pages/entrepreneur/CustomerManagement";
import MarketingSocial from "./pages/entrepreneur/MarketingSocial";
import Payments from "./pages/entrepreneur/Payments";
import Profile from "./pages/entrepreneur/Profile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<Products />} />
          <Route path="/entrepreneurs" element={<Entrepreneurs />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="overview" element={<AdminOverview />} />
            <Route path="users" element={<UserManagement />} />
            <Route path="analytics" element={<EntrepreneurAnalytics />} />
            <Route path="orders" element={<OrderManagement />} />
            <Route path="settings" element={<PlatformSettings />} />
            <Route path="sales-marketing" element={<SalesMarketing />} />
            <Route path="financial" element={<FinancialManagement />} />
            <Route path="notifications" element={<NotificationsData />} />
          </Route>
          <Route path="/entrepreneur" element={<EntrepreneurLayout />}>
            <Route path="overview" element={<EntrepreneurOverview />} />
            <Route path="products" element={<ProductManagement />} />
            <Route path="orders" element={<EntrepreneurOrderManagement />} />
            <Route path="analytics" element={<SalesAnalytics />} />
            <Route path="customers" element={<CustomerManagement />} />
            <Route path="marketing" element={<MarketingSocial />} />
            <Route path="payments" element={<Payments />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
