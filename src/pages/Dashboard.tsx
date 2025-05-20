
/**
 * @file src/pages/Dashboard.tsx
 * @version 0.0.1
 * @description Main dashboard page component
 * @date 2025-05-20
 */

import { useSession } from "@/hooks/useSession";
import { NavigationBar } from "@/components/NavigationBar";
import { Footer } from "@/components/Footer";
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
    <div>
      <main>
        <div className="container mx-auto p-4">
          {user ? (
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">Welcome to the Dashboard, {user.username}</h1>

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
          ) : (
            <p className="text-gray-600 dark:text-gray-400">No active session.</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
