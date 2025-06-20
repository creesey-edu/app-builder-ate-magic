
/**
 * @metadata
 * {
 *   "project": "TAGS",
 *   "module": "Role Badge Component",
 *   "phase": "UI Components",
 *   "tags": ["component", "ui", "badge", "roles"],
 *   "version": "v1.0.2",
 *   "author": "Chad A. Reesey",
 *   "email": "developer@thenagrygamershow.com",
 *   "updated": "2025-06-20",
 *   "description": "Badge component for displaying user roles and verification status"
 * }
 */

import { Badge } from "@/components/ui/badge";
import { useSession } from "@/hooks/useSession";
import { cn } from "@/lib/utils";

interface RoleBadgeProps {
  className?: string;
  showAll?: boolean; // If true, shows all applicable badges
}

/**
 * Component that displays role badges for the current user
 */
export const RoleBadge = ({ className, showAll = false }: RoleBadgeProps) => {
  const { user, isAdmin, isOwner, isVerified, verificationType } = useSession();

  if (!user) return null;

  const badges = [];

  // Owner badge (highest priority)
  if (isOwner) {
    badges.push(
      <Badge key="owner" variant="destructive" className={cn("bg-purple-600 hover:bg-purple-700", className)}>
        Owner
      </Badge>
    );
  }

  // Admin badge
  if (isAdmin && !isOwner) {
    badges.push(
      <Badge key="admin" variant="destructive" className={cn(className)}>
        Admin
      </Badge>
    );
  }

  // Verification badge
  if (isVerified && verificationType) {
    badges.push(
      <Badge key="verified" variant="outline" className={cn("border-green-500 text-green-700", className)}>
        Verified: {verificationType}
      </Badge>
    );
  }

  // If showAll is false, only show the first (highest priority) badge
  const badgesToShow = showAll ? badges : badges.slice(0, 1);

  return (
    <div className="flex gap-2 flex-wrap">
      {badgesToShow}
    </div>
  );
};
