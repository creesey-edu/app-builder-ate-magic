
/**
 * @file src/layouts/DashboardLayout.tsx  
 * @version 0.0.8
 * @patch Enhanced structure with comprehensive navigation and sidebar
 * @date 2025-05-21
 */

import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { NotificationProvider } from "@/providers/NotificationProvider";
import { useSession } from "@/hooks/useSession";
import { Button } from "@/components/ui/button";
import { 
  LayoutDashboard, 
  Video, 
  CheckCircle, 
  BarChart2, 
  Store, 
  Trophy, 
  ChevronLeft,
  LogOut
} from "lucide-react";

const DashboardLayout: React.FC = () => {
  const location = useLocation();
  const { user, logout } = useSession();

  const navItems = [
    { 
      name: "Dashboard", 
      path: "/dashboard", 
      icon: <LayoutDashboard className="h-5 w-5" /> 
    },
    { 
      name: "Streamers", 
      path: "/dashboard/streamers", 
      icon: <Video className="h-5 w-5" /> 
    },
    { 
      name: "Verification", 
      path: "/dashboard/streamer-verification", 
      icon: <CheckCircle className="h-5 w-5" /> 
    },
    { 
      name: "Analytics", 
      path: "/dashboard/streamer-analytics", 
      icon: <BarChart2 className="h-5 w-5" /> 
    },
    { 
      name: "Community Store", 
      path: "/dashboard/community-store", 
      icon: <Store className="h-5 w-5" /> 
    },
    { 
      name: "Tournaments", 
      path: "/dashboard/tournaments", 
      icon: <Trophy className="h-5 w-5" /> 
    }
  ];

  return (
    <NotificationProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <div className="min-h-screen flex flex-col">
          <header className="bg-primary text-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <Link to="/" className="flex items-center space-x-2 text-white">
                  <ChevronLeft className="h-5 w-5" />
                  <span>Back to Site</span>
                </Link>
              </div>
              <h1 className="text-2xl font-bold">Dashboard</h1>
              <div className="flex items-center space-x-4">
                <span className="text-sm">{user?.username}</span>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="bg-white/10 hover:bg-white/20 text-white border-white/20"
                  onClick={logout}
                >
                  <LogOut className="h-4 w-4 mr-1" />
                  Logout
                </Button>
              </div>
            </div>
          </header>
          <div className="flex flex-1">
            <aside className="w-64 bg-muted/30 p-4 hidden md:block">
              <nav className="space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center space-x-3 px-4 py-2 rounded-md transition-colors ${
                      location.pathname === item.path
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-muted"
                    }`}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>
                ))}
              </nav>
            </aside>
            <main className="flex-1 p-6">
              <Outlet />
            </main>
          </div>
        </div>
      </TooltipProvider>
    </NotificationProvider>
  );
};

export default DashboardLayout;
