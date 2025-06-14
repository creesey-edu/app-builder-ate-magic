
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useSession } from "@/hooks/useSession";
import {
  ADMIN_SERVER_GUILD_ID,
  ADMIN_OWNER_ROLE_ID,
  ADMIN_ADMINISTRATOR_ROLE_ID,
  VERIFIED_USER_ROLE_ID,
  STREAMER_ROLE_ID,
  STREAMER_VERIFICATION_ROLE_ID,
  VERIFIED_MEMBER_ROLE_ID,
} from "@/lib/auth/discord";

interface ProtectedRouteProps {
  /** if true, only authenticated users may access this route */
  requireAuthenticated?: boolean;
  children: ReactNode;
  requireAdmin?: boolean;
  requireVerified?: boolean;
  requireRoleId?: string;
  fallbackPath?: string;
}

/**
 * Guards routes based on Discord roles (uses new env mappings).
 */
const ProtectedRoute = ({
  requireAuthenticated = false,
  children,
  requireAdmin = false,
  requireVerified = false,
  requireRoleId,
  fallbackPath = "/unauthorized",
}: ProtectedRouteProps) => {
  const { user, isAuthenticated, isLoading, isAdmin, isVerified } = useSession();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-muted-foreground">
        Verifying session...
      </div>
    );
  }

  if (!isAuthenticated || !user) {
    if (!requireAuthenticated) {
      return <>{children}</>;
    }
    if (import.meta.env.VITE_DEBUG === "true") {
      console.debug("[ProtectedRoute] Not authenticated or user is missing.");
    }
    return <Navigate to="/signin" replace />;
  }

  // Use new flags for admin and verified
  if (requireAdmin && !isAdmin) {
    if (import.meta.env.VITE_DEBUG === "true") {
      console.debug("[ProtectedRoute] Admin required (missing role).");
    }
    return <Navigate to={fallbackPath} replace />;
  }

  if (requireVerified && !isVerified) {
    if (import.meta.env.VITE_DEBUG === "true") {
      console.debug("[ProtectedRoute] Verified required (missing role).");
    }
    return <Navigate to={fallbackPath} replace />;
  }

  // Optional: Also allow string roleId check, for custom role-based routes
  if (requireRoleId) {
    const userGuild = user.guilds?.find((g) => g.id === ADMIN_SERVER_GUILD_ID);
    const userRoles = userGuild?.roles ?? [];
    if (!userRoles.includes(requireRoleId)) {
      if (import.meta.env.VITE_DEBUG === "true") {
        console.debug("[ProtectedRoute] Custom required role missing:", requireRoleId);
      }
      return <Navigate to={fallbackPath} replace />;
    }
  }

  return <>{children}</>;
};

export default ProtectedRoute;
