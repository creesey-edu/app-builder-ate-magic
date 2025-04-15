//src/pages/Debug.tsx
import { useEffect, useState } from "react";
import api from "@/lib/axios";

const Debug = () => {
  const [userInfo, setUserInfo] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDebugUser = async () => {
      try {
        const res = await api.get("/api/debug/user");
        setUserInfo(res.data.user);
      } catch (err: any) {
        console.error("Error fetching debug user:", err);
        setError("Failed to fetch debug user info");
      }
    };

    fetchDebugUser();
  }, []);

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Debug User Info</h1>
      {error && <p className="text-red-500">{error}</p>}
      {userInfo ? (
        <pre className="bg-muted p-4 rounded-md text-sm overflow-x-auto">
          {JSON.stringify(userInfo, null, 2)}
        </pre>
      ) : (
        <p className="text-muted-foreground">Loading user info...</p>
      )}
    </div>
  );
};

export default Debug;
