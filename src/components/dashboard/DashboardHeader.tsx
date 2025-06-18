/**
 * @metadata
 * {
 *   "project": "TAGS",
 *   "module": "Dashboard Header",
 *   "phase": "Dashboard Components",
 *   "tags": ["component", "header", "navigation", "authentication"],
 *   "version": "v1.0.2",
 *   "author": "Chad A. Reesey",
 *   "email": "developer@thenagrygamershow.com",
 *   "updated": "2025-06-18",
 *   "description": "Dashboard header component with navigation and user controls"
 * }
 */

import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft, LogOut } from "lucide-react";

interface DashboardHeaderProps {
  username?: string;
  onLogout: () => void;
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({ username, onLogout }) => {
  return (
    <header className="bg-slate-900 dark:bg-slate-800 text-white border-b border-slate-700 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center space-x-2 text-white hover:text-slate-200 transition-colors">
            <ChevronLeft className="h-5 w-5" />
            <span className="text-sm font-medium">Back to Site</span>
          </Link>
        </div>
        <h1 className="text-2xl font-bold text-white">Dashboard</h1>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-slate-200">{username}</span>
          <Button 
            variant="outline" 
            size="sm" 
            className="bg-white/10 hover:bg-white/20 text-white border-white/30 hover:border-white/50 transition-all"
            onClick={onLogout}
          >
            <LogOut className="h-4 w-4 mr-1" />
            Logout
          </Button>
        </div>
      </div>
    </header>
  );
};
