// src/pages/Debug.tsx
import { useEffect, useState } from "react";
import { useSession } from "@/hooks/useSession";
import api from "@/lib/axios";

const Debug = () => {
  const [userInfo, setUserInfo] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const { user, token, isAuthenticated, isAdmin, isVerified, verificationType } = useSession();

  useEffect(() => {
    const fetchDebugUser = async () => {
      try {
        const res = await api.get("/debug/user");
        setUserInfo(res.data.user);
      } catch (err: any) {
        console.error("Error fetching debug user:", err);
        setError("Failed to fetch debug user info");
      }
    };

    fetchDebugUser();
  }, []);

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">Debug User Info</h1>

      <section className="bg-muted p-4 rounded-md text-sm space-y-2">
        <p><strong>Authenticated:</strong> {isAuthenticated ? "✅ Yes" : "❌ No"}</p>
        <p><strong>Admin:</strong> {isAdmin ? "✅ Yes" : "❌ No"}</p>
        <p><strong>Verified:</strong> {isVerified ? "✅ Yes" : "❌ No"}</p>
        <p><strong>Verification Type:</strong> {verificationType || "None"}</p>
      </section>

      {user && (
        <section>
          <h2 className="text-lg font-semibold mt-4">Session Hook Payload</h2>
          <pre className="bg-background p-4 rounded-md text-sm overflow-x-auto">
            {JSON.stringify(user, null, 2)}
          </pre>
        </section>
      )}

      <section>
        <h2 className="text-lg font-semibold mt-4">/api/debug/user Payload</h2>
        {error && <p className="text-red-500">{error}</p>}
        {userInfo ? (
          <pre className="bg-muted p-4 rounded-md text-sm overflow-x-auto">
            {JSON.stringify(userInfo, null, 2)}
          </pre>
        ) : (
          <p className="text-muted-foreground">Loading user info from backend...</p>
        )}
      </section>
    </div>
  );
};

export default Debug;
