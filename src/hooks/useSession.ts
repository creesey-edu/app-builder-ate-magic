/**
 * @file src/hooks/useSession.ts
 * @version 0.0.7
 * @patch Compute `isOwner` from guild roles rather than aliasing deprecated field
 * @date 2025-05-07
 */

import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";
import type { SessionUser } from "@/types/session";
import {
  ADMIN_SERVER_GUILD_ID,
  ADMIN_OWNER_ROLE_ID,
  ADMIN_ADMINISTRATOR_ROLE_ID,
  VERIFIED_USER_ROLE_ID,
} from "@/lib/auth/discord";

export const useSession = () => {
  const [user, setUser] = useState<SessionUser | null>(null);
  const [token, setToken] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  const refreshSession = useCallback(() => {
    setIsLoading(true);
    try {
      const storedUser = localStorage.getItem("user");
      const storedToken = localStorage.getItem("auth_token");
      if (storedUser && storedToken) {
        const parsedUser: SessionUser = JSON.parse(storedUser);
        setUser(parsedUser);
        setToken(storedToken);
        if (import.meta.env.VITE_DEBUG === "true") {
          console.debug("🔄 Session restored:", parsedUser, "token:", storedToken);
        }
      }
    } catch (error) {
      console.error("❌ Failed to parse session data", error);
      toast({
        title: "Session Error",
        description: "Unable to restore previous session.",
      });
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    refreshSession();
    const interval = setInterval(
      refreshSession,
      parseInt(import.meta.env.VITE_SESSION_REFRESH_INTERVAL ?? "60000")
    );
    return () => clearInterval(interval);
  }, [refreshSession]);

  const logout = useCallback(() => {
    localStorage.removeItem("auth_token");
    localStorage.removeItem("user");
    setUser(null);
    setToken("");
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    });
    navigate("/login");
  }, [navigate]);

  // super-admin if they own or administer the Admin Guild
  const userGuild = user?.guilds?.find((g) => g.id === ADMIN_SERVER_GUILD_ID);
  const userRoles = userGuild?.roles ?? [];

  const isAdmin = Boolean(
    userRoles.some(
      (r) => r === ADMIN_OWNER_ROLE_ID || r === ADMIN_ADMINISTRATOR_ROLE_ID
    )
  );

  // owner if they specifically have the OWNER role
  const isOwner = Boolean(userRoles.find((r) => r === ADMIN_OWNER_ROLE_ID));

  // compute verified status
  const isVerified = userRoles.includes(VERIFIED_USER_ROLE_ID);

  return {
    user,
    token,
    isLoading,
    isAuthenticated: !!user,

    // convenience flags
    isAdmin,
    isOwner,
    isVerified,

    // granular flags (legacy)
    isAdminGuildOwner: isOwner,
    verificationType: user?.verificationType ?? null,
    verificationStatus: user?.verificationStatus,

    refreshSession,
    logout,
  };
};
