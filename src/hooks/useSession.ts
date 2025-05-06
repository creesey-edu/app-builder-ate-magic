// PATCHED v0.0.6 src/hooks/useSession.ts — Uses centralized SessionUser from types/session and syncs with backend fields

import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { VerificationType } from "@/types/discord";
import type { SessionUser } from "@/types/session";
import { toast } from "../hooks/use-toast";

export const useSession = () => {
  const [user, setUser] = useState<SessionUser | null>(null);
  const [token, setToken] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  if (import.meta.env.VITE_DEBUG === "true") {
    console.debug("🐛 useSession initialized");
  }

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
          console.debug("🔄 Session token set:", storedToken);
          console.debug("🔄 User session restored:", parsedUser);
        }
      }
    } catch (error) {
      console.error("❌ Failed to parse session data", error);
      toast({
        title: "Session Error",
        description: "Unable to restore previous session."
      });
    } finally {
      setIsLoading(false);
    }
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem("auth_token");
    localStorage.removeItem("user");
    setUser(null);
    setToken("");
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out."
    });
    navigate("/login");
  }, [navigate]);

  useEffect(() => {
    refreshSession();
    const interval = setInterval(refreshSession, parseInt(import.meta.env.VITE_SESSION_REFRESH_INTERVAL ?? "60000"));
    return () => clearInterval(interval);
  }, [refreshSession]);

  return {
    user,
    token,
    isLoading,
    isAuthenticated: !!user,
    isAdmin: user?.isAdmin ?? false,
    isVerified: user?.isVerified ?? false,
    isOwner: user?.isOwner ?? false, // ✅ PATCHED
    verificationType: user?.verificationType ?? null,
    refreshSession,
    logout // ✅ PATCHED
  };
};
