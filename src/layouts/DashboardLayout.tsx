/**
 * @metadata
 * {
 *   "project": "TAGS",
 *   "module": "Dashboard Layout",
 *   "phase": "Dashboard Infrastructure",
 *   "tags": ["layout", "dashboard", "routing", "providers"],
 *   "version": "v1.0.2",
 *   "author": "Chad A. Reesey",
 *   "email": "developer@thenagrygamershow.com",
 *   "updated": "2025-06-18",
 *   "description": "Main dashboard layout component with navigation, sidebar, and content area"
 * }
 */

/**
 * @file src/layouts/DashboardLayout.tsx  
 * @version 0.0.10
 * @patch Refactored into smaller components for better maintainability
 * @date 2025-06-18
 */

import React from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { NotificationProvider } from "@/providers/NotificationProvider";
import { useSession } from "@/hooks/useSession";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";

const DashboardLayout: React.FC = () => {
  const { user, logout } = useSession();

  return (
    <NotificationProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <div className="min-h-screen flex flex-col">
          <DashboardHeader username={user?.username} onLogout={logout} />
          <div className="flex flex-1">
            <DashboardSidebar />
            <main className="flex-1 p-6 bg-white dark:bg-slate-950">
              <Outlet />
            </main>
          </div>
        </div>
      </TooltipProvider>
    </NotificationProvider>
  );
};

export default DashboardLayout;
