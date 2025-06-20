
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useSession } from "@/hooks/useSession";
import { Permission, hasPermission, hasAnyPermission } from "@/lib/permissions";
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
  requirePermission?: Permission;
  requireAnyPermissions?: Permission[];
  fallbackPath?: string;
}

/**
 * Enhanced route guard with role and permission-based access control.
 */
const ProtectedRoute = ({
  requireAuthenticated = false,
  children,
  requireAdmin = false,
  requireVerified = false,
  requireRoleId,
  requirePermission,
  requireAnyPermissions,
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

  // Check admin requirement
  if (requireAdmin && !isAdmin) {
    if (import.meta.env.VITE_DEBUG === "true") {
      console.debug("[ProtectedRoute] Admin required (missing role).");
    }
    return <Navigate to={fallbackPath} replace />;
  }

  // Check verified requirement
  if (requireVerified && !isVerified) {
    if (import.meta.env.VITE_DEBUG === "true") {
      console.debug("[ProtectedRoute] Verified required (missing role).");
    }
    return <Navigate to={fallbackPath} replace />;
  }

  // Check specific role requirement
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

  // Check specific permission requirement
  if (requirePermission && !hasPermission(user, requirePermission)) {
    if (import.meta.env.VITE_DEBUG === "true") {
      console.debug("[ProtectedRoute] Required permission missing:", requirePermission);
    }
    return <Navigate to={fallbackPath} replace />;
  }

  // Check any permissions requirement
  if (requireAnyPermissions && !hasAnyPermission(user, requireAnyPermissions)) {
    if (import.meta.env.VITE_DEBUG === "true") {
      console.debug("[ProtectedRoute] None of required permissions found:", requireAnyPermissions);
    }
    return <Navigate to={fallbackPath} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
