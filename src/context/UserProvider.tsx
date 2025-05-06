// PATCHED v0.0.6 src/context/UserProvider.tsx — Separated UserProvider component for Fast Refresh compatibility

import { useState, useEffect, ReactNode } from "react";
import type { SessionUser } from "@/types/session";
import { useSession } from "@/hooks/useSession";
import { UserContext } from "@/context/UserContext";

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const { user } = useSession();
  const [contextUser, setContextUser] = useState<SessionUser | null>(null);

  useEffect(() => {
    setContextUser(user ?? null);
  }, [user]);

  return (
    <UserContext.Provider value={{ user: contextUser }}>
      {children}
    </UserContext.Provider>
  );
};
