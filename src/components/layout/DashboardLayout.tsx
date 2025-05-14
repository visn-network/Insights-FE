
import { ReactNode } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Top Navigation */}
      <header className="border-b bg-card">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-semibold text-insights-orange flex items-center">
              <img
                src="/lovable-uploads/1d6b0202-b171-4af5-b1cc-4557bd3d5738.png"
                alt="Insights Logo"
                className="h-8 w-8 mr-2"
              />
              Eye Console
            </div>
          </div>

          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[240px] sm:w-[300px] border-r">
              <div className="flex flex-col h-full py-4">
                <SidebarContent />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex">
        {/* Side Navigation - desktop only */}
        <aside className="hidden md:flex w-64 border-r bg-card flex-shrink-0 flex-col">
          <div className="p-4 h-full">
            <SidebarContent />
          </div>
        </aside>

        {/* Main content area */}
        <main className="flex-1 overflow-auto p-4 md:p-6 bg-insights-cream/10">
          {children}
        </main>
      </div>
    </div>
  );
};

const SidebarContent = () => {
  const navItems = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "My Cameras", href: "/dashboard/cameras" },
    { label: "Upload Footage", href: "/dashboard/upload" },
    { label: "Rewards", href: "/dashboard/rewards" },
    { label: "Settings", href: "/dashboard/settings" },
  ];

  return (
    <div className="flex flex-col h-full">
      <div className="space-y-1 py-2">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="flex items-center py-2 px-3 text-sm rounded-md hover:bg-accent transition-colors"
          >
            {item.label}
          </a>
        ))}
      </div>
      <div className="mt-auto pt-4 border-t">
        <div className="px-3 py-2">
          <div className="text-sm font-medium">Connected Wallet</div>
          <div className="text-xs text-muted-foreground truncate">
            F3gz7...8Kj2
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
