
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useSession } from "@/hooks/useSession";

interface ProtectedRouteProps {
  /** if true, only authenticated users may access this route */
  requireAuthenticated?: boolean;
  children: ReactNode;
  requireAdmin?: boolean;
  requireVerified?: boolean;
  requireRoleId?: string;
  fallbackPath?: string;
}

const ProtectedRoute = ({
  requireAuthenticated = false,
  children,
  requireAdmin = false,
  requireVerified = false,
  requireRoleId,
  fallbackPath = "/unauthorized",
}: ProtectedRouteProps) => {
  const { user, isAuthenticated, isLoading } = useSession();

  const ADMIN_SERVER_GUILD_ID = import.meta.env.VITE_ADMIN_SERVER_GUILD_ID;
  const ADMIN_ROLE_ID = import.meta.env.VITE_ADMIN_ROLE_ID;
  const VERIFIED_USER_ROLE_ID = import.meta.env.VITE_VERIFIED_USER_ROLE_ID;

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-muted-foreground">
        Verifying session...
      </div>
    );
  }

  if (!isAuthenticated || !user) {
    // If this route does not require auth, render children anyway
    if (!requireAuthenticated) {
      return <>{children}</>;
    }
    if (import.meta.env.VITE_DEBUG === "true") {
      console.debug("[ProtectedRoute] Not authenticated or user is missing.");
    }
    return <Navigate to="/signin" replace />;
  }

  const userGuild = user.guilds?.find((g) => g.id === ADMIN_SERVER_GUILD_ID);
  const userRoles = userGuild?.roles ?? [];

  if (import.meta.env.VITE_DEBUG === "true") {
    console.debug("[ProtectedRoute] Evaluating roles:", {
      requireAuthenticated,
      requireAdmin,
      requireVerified,
      requireRoleId,
      userRoles,
    });
  }

  if (requireAdmin && !userRoles.includes(ADMIN_ROLE_ID)) {
    if (import.meta.env.VITE_DEBUG === "true") {
      console.debug("[ProtectedRoute] Admin role required but not found.");
    }
    return <Navigate to={fallbackPath} replace />;
  }

  if (requireVerified && !userRoles.includes(VERIFIED_USER_ROLE_ID)) {
    if (import.meta.env.VITE_DEBUG === "true") {
      console.debug("[ProtectedRoute] Verified user role required but not found.");
    }
    return <Navigate to={fallbackPath} replace />;
  }

  if (requireRoleId && !userRoles.includes(requireRoleId)) {
    if (import.meta.env.VITE_DEBUG === "true") {
      console.debug("[ProtectedRoute] Custom required role missing:", requireRoleId);
    }
    return <Navigate to={fallbackPath} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
