// PATCHED v0.0.6 src/components/DashboardNavBar.tsx — Adds navigation links and versioning information

/**
 * @file DashboardNavBar.tsx
 * @description This component renders the navigation bar for the dashboard.
 * It provides links to various sections like Dashboard, Profile, Settings, and Logout.
 * 
 * Version: 0.0.6
 * Patch: Adds versioning and patch alignment info to the file header
 * Last Updated: [Insert the date of your last modification]
 * 
 * Author: Mr. Potato
 * License: [LICENSE](license)
 * 
 * Dependencies:
 * - react-router-dom
 * 
 * Change Log:
 * - v0.0.6: Initial creation with routing links.
 */

import { Link } from "react-router-dom";
import React from "react";

const DashboardNavBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/settings">Settings</Link></li>
        <li><Link to="/notifications">Notifications</Link></li>
        <li><Link to="/logout">Logout</Link></li>
      </ul>
    </nav>
  );
};

export default DashboardNavBar;
