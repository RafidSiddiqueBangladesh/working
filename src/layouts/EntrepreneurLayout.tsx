import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { EntrepreneurSidebar } from "@/components/EntrepreneurSidebar";
import { Outlet, Link } from "react-router-dom";
import TopControls from "@/components/TopControls";
import { useUI } from "@/context/UIContext";

const EntrepreneurLayout = () => {
  const { isDark, t } = useUI();
  return (
    <SidebarProvider>
      <div className={`min-h-screen flex w-full bg-gradient-hero ${isDark ? "panel-white-violet" : "panel-light-elegant"} text-foreground`}>
        <EntrepreneurSidebar />
        <div className="flex-1 flex flex-col">
          <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-10">
            <div className="px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <SidebarTrigger />
                <Link to="/">
                  <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    {t("CommerceHub")}
                  </h1>
                </Link>
              </div>
              <TopControls />
            </div>
          </header>
          <main className="flex-1 p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default EntrepreneurLayout;
