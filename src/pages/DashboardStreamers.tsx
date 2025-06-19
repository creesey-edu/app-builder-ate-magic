
/**
 * @metadata
 * {
 *   "project": "TAGS",
 *   "module": "Dashboard Streamers Page",
 *   "phase": "Dashboard System",
 *   "tags": ["page", "dashboard", "streamers", "management"],
 *   "version": "v1.0.2",
 *   "author": "Chad A. Reesey",
 *   "email": "developer@thenagrygamershow.com",
 *   "updated": "2025-06-19",
 *   "description": "Dashboard page for managing and viewing streamer profiles"
 * }
 */

import { StreamersTab } from "@/components/streamers/StreamersTab";

const DashboardStreamers = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Streamers Management</h1>
        <p className="text-muted-foreground">
          Manage and view streamer profiles in your dashboard
        </p>
      </div>
      <StreamersTab />
    </div>
  );
};

export default DashboardStreamers;
