// src/components/auth/ProtectedRoute.tsx

import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useSession } from "../../hooks/useSession";

interface ProtectedRouteProps {
  children: React.ReactElement;
  requireAdmin?: boolean;
  requireVerified?: boolean;
  requireRoleId?: string;
  fallbackPath?: string;
}

const ProtectedRoute = ({
  children,
  requireAdmin = false,
  requireVerified = false,
  requireRoleId,
  fallbackPath = "/unauthorized",
}: ProtectedRouteProps) => {
  const { user, isAuthenticated, isLoading } = useSession();

  // ✅ Move inside the component to support runtime + test stubbing
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
    return <Navigate to="/signin" replace />;
  }

  const userGuild = user.guilds?.find((g) => g.id === ADMIN_SERVER_GUILD_ID);
  const userRoles = userGuild?.roles ?? [];

  if (requireAdmin && !userRoles.includes(ADMIN_ROLE_ID)) {
    return <Navigate to={fallbackPath} replace />;
  }

  if (requireVerified && !userRoles.includes(VERIFIED_USER_ROLE_ID)) {
    return <Navigate to={fallbackPath} replace />;
  }

  if (requireRoleId && !userRoles.includes(requireRoleId)) {
    return <Navigate to={fallbackPath} replace />;
  }

  return children;
};

export default ProtectedRoute;
