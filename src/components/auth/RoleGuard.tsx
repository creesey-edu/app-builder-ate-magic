import { ReactNode } from "react";
import { useUser } from "@/context/UserContext";
import { hasRole } from "@/utils/permissions";

interface RoleGuardProps {
  requiredRoleId: string;
  children: ReactNode;
  fallback?: ReactNode;
}

export const RoleGuard = ({ requiredRoleId, children, fallback = null }: RoleGuardProps) => {
  const { user } = useUser();

  return hasRole(user, requiredRoleId) ? <>{children}</> : <>{fallback}</>;
};
