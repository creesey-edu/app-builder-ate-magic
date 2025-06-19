
/**
 * @metadata
 * {
 *   "project": "TAGS",
 *   "module": "User Provider",
 *   "phase": "State Management",
 *   "tags": ["provider", "user", "context", "authentication"],
 *   "version": "v1.0.2",
 *   "author": "Chad A. Reesey",
 *   "email": "developer@thenagrygamershow.com",
 *   "updated": "2025-06-19",
 *   "description": "React provider component for user state management"
 * }
 */

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
