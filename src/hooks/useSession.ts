// src/hooks/useSession.ts
import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { VerificationType } from "@/types/discord";
import { toast } from "../hooks/use-toast";

interface SessionUser {
  id: string;
  username: string;
  email?: string;
  avatar?: string;
  isAdmin: boolean;
  isVerified: boolean;
  verificationType: VerificationType | null;
  verificationStatus?: string;
  guilds?: Array<{
    id: string;
    name: string;
    roles: string[];
  }>;
}

export const useSession = () => {
  const [user, setUser] = useState<SessionUser | null>(null);
  const [token, setToken] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  const refreshSession = useCallback(() => {
    try {
      const storedUser = localStorage.getItem("user");
      const storedToken = localStorage.getItem("auth_token");

      if (storedUser && storedToken) {
        const parsedUser: SessionUser = JSON.parse(storedUser);
        setUser(parsedUser);
        setToken(storedToken);
      } else {
        setUser(null);
        setToken("");
      }
    } catch (error) {
      console.error("Error refreshing session:", error);
      logout({ showToast: true, message: "Session data corrupted. You've been logged out." });
    }
  }, []);

  useEffect(() => {
    refreshSession();
    setIsLoading(false);

    const interval = Number(import.meta.env.VITE_SESSION_REFRESH_INTERVAL || 900) * 1000;
    const intervalId = setInterval(() => {
      refreshSession();
    }, interval);

    return () => clearInterval(intervalId);
  }, [refreshSession]);

  const logout = ({
    showToast = true,
    message = "You have been logged out.",
    redirect = true,
  }: {
    showToast?: boolean;
    message?: string;
    redirect?: boolean;
  } = {}) => {
    localStorage.removeItem("auth_token");
    localStorage.removeItem("user");
    setUser(null);
    setToken("");

    if (showToast) {
      toast({
        title: "Session Ended",
        description: message,
        variant: "destructive",
        duration: 5000,
      });
    }

    if (redirect) {
      setTimeout(() => {
        navigate("/signin");
      }, 1500);
    }
  };

  const isAuthenticated = Boolean(user && token);
  const isAdmin = Boolean(user?.isAdmin);
  const isVerified = Boolean(user?.isVerified);
  const verificationType = user?.verificationType ?? null;

  return {
    user,
    token,
    isAuthenticated,
    isAdmin,
    isVerified,
    verificationType,
    isLoading,
    refreshSession,
    logout,
  };
};
