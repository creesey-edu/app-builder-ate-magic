// PATCHED v0.0.6 src/hooks/useSession.ts — sync SessionUser with backend v1.1.5 fields, alias isOwner, compute convenience flags

import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";
import type { SessionUser } from "@/types/session";

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
        // alias deprecated field for backward compatibility
        parsedUser.isOwner = parsedUser.isAdminGuildOwner;
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

  // compute convenience flags
  const isAdmin =
    !!user?.isAdminGuildOwner ||
    !!user?.isAdminGuildAdministrator ||
    !!user?.isAdminGuildModerator;
  const isVerified =
    !!user?.isAdminGuildVerifiedMember ||
    !!user?.isCommunityGuildVerifiedMember;

  return {
    user,
    token,
    isLoading,
    isAuthenticated: !!user,

    // convenience flags
    isAdmin,
    isVerified,

    // granular flags
    isAdminGuildOwner: user?.isAdminGuildOwner ?? false,
    isOwner: user?.isOwner ?? false, // alias for isAdminGuildOwner
    verificationType: user?.verificationType ?? null,
    verificationStatus: user?.verificationStatus,

    refreshSession,
    logout,
  };
};
