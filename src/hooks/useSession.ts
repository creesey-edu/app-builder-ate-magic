
/**
 * @file src/hooks/useSession.ts
 * @version 0.0.8
 * @patch Reads all Discord role IDs from centralized envs, supports v1.1.5 contract
 * @date 2025-06-14
 */

import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";
import type { SessionUser } from "@/types/session";
import {
  ADMIN_SERVER_GUILD_ID,
  ADMIN_OWNER_ROLE_ID,
  ADMIN_ADMINISTRATOR_ROLE_ID,
  ADMIN_MODERATOR_ROLE_ID,
  VERIFIED_USER_ROLE_ID,
  VERIFIED_MEMBER_ROLE_ID,
  GOVERNMENT_ROLE_ID,
  MILITARY_ROLE_ID,
  EDUCATION_ROLE_ID,
  VERIFIED_GOVERNMENT_ROLE_ID,
  VERIFIED_MILITARY_ROLE_ID,
  VERIFIED_EDUCATION_ROLE_ID,
  STREAMER_ROLE_ID,
  STREAMER_VERIFICATION_ROLE_ID,
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

  // Find the user's membership in the Admin Guild, get all their roles
  const userGuild = user?.guilds?.find((g) => g.id === ADMIN_SERVER_GUILD_ID);
  const userRoles = userGuild?.roles ?? [];

  // Owner: Must have OWNER
  const isOwner = userRoles.includes(ADMIN_OWNER_ROLE_ID);

  // Admin: owner, administrator, or moderator
  const isAdmin = userRoles.some(
    (r) =>
      r === ADMIN_OWNER_ROLE_ID ||
      r === ADMIN_ADMINISTRATOR_ROLE_ID ||
      r === ADMIN_MODERATOR_ROLE_ID
  );

  // Verified: must have 'verified user' role
  const isVerified = userRoles.includes(VERIFIED_USER_ROLE_ID);

  // Expose all these for use throughout app
  return {
    user,
    token,
    isLoading,
    isAuthenticated: !!user,

    // convenience flags
    isAdmin,
    isOwner,
    isVerified,

    // granular legacy fields (for compatibility)
    isAdminGuildOwner: isOwner,
    verificationType: user?.verificationType ?? null,
    verificationStatus: user?.verificationStatus,

    refreshSession,
    logout,
  };
};

