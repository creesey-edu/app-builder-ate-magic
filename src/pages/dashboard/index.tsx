// PATCHED v0.0.6 src/pages/dashboard/index.tsx — Minimal functional dashboard with session data

import { useSession } from "@/hooks/useSession";
import { NavigationBar } from "@/components/NavigationBar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useEffect } from "react";

const Dashboard = () => {
  const { user, isLoading, logout, isAdmin, isOwner, isVerified, verificationType } = useSession();

  useEffect(() => {
    if (import.meta.env.VITE_DEBUG === "true") {
      console.debug("📊 Dashboard loaded with session:", user);
    }
  }, [user]);

  return (
    <div className="min-h-screen flex flex-col">
      <NavigationBar />

      <main className="flex-grow py-20 px-4 md:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Your Dashboard</h1>

          {isLoading ? (
            <p className="text-gray-600 dark:text-gray-400">Loading session...</p>
          ) : user ? (
            <div className="space-y-6">
              <div>
                <p className="text-xl font-semibold">
                  Hello, {user.username}!
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">ID: {user.id}</p>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                {isAdmin && <Badge variant="outline">Admin</Badge>}
                {isOwner && <Badge variant="outline">Owner</Badge>}
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

      <Footer />
    </div>
  );
};

export default Dashboard;
