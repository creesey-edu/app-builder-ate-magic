// WebApp v0.0.4 Auth v1.1.2
// src/pages/Debug.tsx

import { useEffect, useState } from "react";
import { useSession } from "@/hooks/useSession";
import api from "@/lib/axios";

const ROLE_NAMES: Record<string, string> = {
  "1358962069369651210": "OWNER",
  "1362657572301308055": "ADMINISTRATOR",
  "1362164095134073044": "MODERATOR",
  "1358962492193247323": "VERIFIED_USER",
  "1362162321807507598": "VERIFIED_MEMBER",
  "1358961935583940659": "GOVERNMENT",
  "1358961996699009205": "MILITARY",
  "1358962034301079624": "EDUCATION",
  "1362653825210650815": "VERIFIED_GOVERNMENT",
  "1362162595955609680": "VERIFIED_MILITARY",
  "1362654034804084968": "VERIFIED_EDUCATION",
};

const ADMIN_GUILD_ID = import.meta.env.VITE_ADMIN_SERVER_GUILD_ID;

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

          <h3 className="text-lg font-semibold mt-4">Visible Guilds (Filtered)</h3>
          <div className="space-y-4">
            {user.guilds?.map((guild: any) => (
              <div key={guild.id} className="bg-muted p-3 rounded-md">
                <strong>{guild.name}</strong> ({guild.id}){" "}
                {guild.id === ADMIN_GUILD_ID && (
                  <span className="text-orange-500 font-semibold">(Admin Guild)</span>
                )}
                <br />
                <span className="text-xs">
                  Roles: {guild.roles.length > 0
                    ? guild.roles.map((r: string) => ROLE_NAMES[r] || r).join(", ")
                    : "None"}
                </span>
              </div>
            ))}
          </div>
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
