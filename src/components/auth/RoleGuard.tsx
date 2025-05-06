// PATCHED v0.0.6 src/components/auth/RoleGuard.tsx — Adds support for allowOwner prop

import { ReactNode } from "react";
import { useSession } from "@/hooks/useSession";
import { hasRole } from "@/lib/roles";
import { Navigate } from "react-router-dom";

interface RoleGuardProps {
  children: ReactNode;
  roleId: string;
  allowOwner?: boolean; // ✅ PATCHED: new optional override
}

export const RoleGuard = ({ children, roleId, allowOwner = false }: RoleGuardProps) => {
  const { user, isAdmin, isOwner } = useSession();

  const isAllowed = isAdmin || hasRole(user, roleId) || (allowOwner && isOwner);

  if (!isAllowed) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <>{children}</>;
};
