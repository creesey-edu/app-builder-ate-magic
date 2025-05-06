// PATCHED v0.0.6 src/components/auth/RoleGuard.tsx — migrate to use new isAdminGuildOwner flag

import { ReactNode } from "react";
import { useSession } from "@/hooks/useSession";
import { hasRole } from "@/lib/roles";
import { Navigate } from "react-router-dom";

interface RoleGuardProps {
  children: ReactNode;
  roleId: string;
  allowOwner?: boolean; // optional override for guild owner
}

export const RoleGuard = ({ children, roleId, allowOwner = false }: RoleGuardProps) => {
  const { user, isAdmin, isAdminGuildOwner } = useSession();

  const isAllowed = isAdmin || hasRole(user, roleId) || (allowOwner && isAdminGuildOwner);

  if (!isAllowed) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <>{children}</>;
};
