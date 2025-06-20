
/**
 * @metadata
 * {
 *   "project": "TAGS",
 *   "module": "Permissions Hook",
 *   "phase": "Access Control",
 *   "tags": ["hook", "permissions", "rbac", "authorization"],
 *   "version": "v1.0.2",
 *   "author": "Chad A. Reesey",
 *   "email": "developer@thenagrygamershow.com",
 *   "updated": "2025-06-20",
 *   "description": "Custom hook for accessing user permissions and role checks"
 * }
 */

import { useMemo } from "react";
import { useSession } from "@/hooks/useSession";
import {
  Permission,
  hasPermission,
  hasAnyPermission,
  hasAllPermissions,
  getUserPermissions,
  canAccessAdmin,
  canModerate,
  canManageUsers,
} from "@/lib/permissions";

/**
 * Custom hook that provides permission checking utilities
 */
export const usePermissions = () => {
  const { user } = useSession();

  const permissions = useMemo(() => getUserPermissions(user), [user]);

  const checkPermission = useMemo(
    () => (permission: Permission) => hasPermission(user, permission),
    [user]
  );

  const checkAnyPermission = useMemo(
    () => (perms: Permission[]) => hasAnyPermission(user, perms),
    [user]
  );

  const checkAllPermissions = useMemo(
    () => (perms: Permission[]) => hasAllPermissions(user, perms),
    [user]
  );

  // Convenience flags for common checks
  const flags = useMemo(() => ({
    canAccessAdmin: canAccessAdmin(user),
    canModerate: canModerate(user),
    canManageUsers: canManageUsers(user),
  }), [user]);

  return {
    permissions,
    hasPermission: checkPermission,
    hasAnyPermission: checkAnyPermission,
    hasAllPermissions: checkAllPermissions,
    ...flags,
  };
};
