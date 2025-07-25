import React from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  Video, 
  CheckCircle, 
  BarChart2, 
  Store, 
  Trophy,
  Bug
} from "lucide-react";
import { useSession } from "@/hooks/useSession";

/**
 * @metadata
 * {
 *   "project": "TAGS",
 *   "module": "Dashboard Sidebar",
 *   "phase": "Dashboard Components",
 *   "tags": ["component", "sidebar", "navigation", "menu"],
 *   "version": "v1.0.2",
 *   "author": "Chad A. Reesey",
 *   "email": "developer@thenagrygamershow.com",
 *   "updated": "2025-06-18",
 *   "description": "Dashboard sidebar navigation component with menu items"
 * }
 */

export const DashboardSidebar: React.FC = () => {
  const location = useLocation();
  const { isAdmin } = useSession();

  // Create dynamic nav items based on user permissions
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
    },
    ...(isAdmin ? [{ 
      name: "Debug", 
      path: "/dashboard/debug", 
      icon: <Bug className="h-5 w-5" /> 
    }] : [])
  ];

  return (
    <aside className="w-64 bg-slate-50 dark:bg-slate-900 border-r border-slate-200 dark:border-slate-700 p-4 hidden md:block">
      <nav className="space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center space-x-3 px-4 py-2 rounded-md transition-colors ${
              location.pathname === item.path
                ? "bg-slate-900 text-white dark:bg-slate-700 dark:text-white"
                : "text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800"
            }`}
          >
            {item.icon}
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
};
