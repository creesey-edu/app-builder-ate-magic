/**
 * @metadata
 * {
 *   "project": "TAGS",
 *   "module": "Dashboard Main Page",
 *   "phase": "Dashboard System",
 *   "tags": ["page", "dashboard", "authentication", "user-management"],
 *   "version": "v1.0.2",
 *   "author": "Chad A. Reesey",
 *   "email": "developer@thenagrygamershow.com",
 *   "updated": "2025-06-18",
 *   "description": "Main dashboard page displaying user information and access controls"
 * }
 */

/**
 * @file src/pages/Dashboard.tsx
 * @version 0.0.3
 * @description Main dashboard page component - removed Navigation and Footer
 * @date 2025-05-21
 */

import { useSession } from "@/hooks/useSession";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useEffect } from "react";

const Dashboard = () => {
  const {
    user,
    isLoading,
    logout,
    isAdmin,
    isAdminGuildOwner,
    isVerified,
    verificationType,
  } = useSession();

  useEffect(() => {
    if (import.meta.env.VITE_DEBUG === "true") {
      console.debug("📊 Dashboard loaded with session:", user);
    }
  }, [user]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Welcome to the Dashboard, {user?.username}</h1>

      <div className="flex space-x-2">
        {isAdmin && <Badge variant="outline">Admin</Badge>}
        {isAdminGuildOwner && <Badge variant="outline">Owner</Badge>}
        {isVerified && verificationType && (
          <Badge variant="outline">Verified: {verificationType}</Badge>
        )}
      </div>

      <div>
        <Button variant="destructive" onClick={logout}>
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;
