// PATCHED v0.0.6 src/layouts/DashboardLayout.tsx — Basic layout structure
// Provides a wrapper for protected routes like Streamers, Tournaments, etc.
// Ensures modular routing structure for dashboard-related content.

 /**
  * @version 0.0.6
  * @patch Added basic structure for DashboardLayout to support modular routing configuration.
  * DashboardLayout serves as a wrapper for protected routes like Streamers, Tournaments, etc.
  * The layout includes placeholders for dashboard-specific navigation and sidebar components.
  * 
  * @date 2025-05-06
  * @author Scarab of the Spud Heap
  */

import React from "react";
import { Outlet } from "react-router-dom";  // Renders child routes

const DashboardLayout = () => {
  return (
    <div>
      {/* Placeholder for Dashboard-specific navigation */}
      <header>
        <h1>Dashboard Layout</h1>
      </header>
      <aside>
        {/* Placeholder for Sidebar or other dashboard components */}
      </aside>
      <main>
        <Outlet />  {/* This renders the nested protected routes */}
      </main>
    </div>
  );
};

export default DashboardLayout;
