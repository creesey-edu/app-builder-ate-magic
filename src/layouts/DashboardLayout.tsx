/**
 * @file src/layouts/DashboardLayout.tsx  
 * @version 0.0.7
 * @patch Enhanced structure with header, sidebar, and main content areas to support modular dashboard routing.
 * @date 2025-05-07
 */

import React from "react";
import { Outlet } from "react-router-dom";

const DashboardLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-xl font-bold">Dashboard</h1>
      </header>
      <div className="flex flex-1">
        <aside className="w-64 bg-gray-100 p-4">
          {/* Sidebar navigation items go here */}
        </aside>
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
