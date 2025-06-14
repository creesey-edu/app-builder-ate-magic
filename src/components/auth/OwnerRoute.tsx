
import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useSession } from "@/hooks/useSession";

/**
 * Only allows users who are authenticated and have OWNER role (isOwner).
 */
interface OwnerRouteProps {
  children: ReactNode;
}

const OwnerRoute: React.FC<OwnerRouteProps> = ({ children }) => {
  const { user, isLoading, isOwner, isAuthenticated } = useSession();

  // Loading
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-muted-foreground">
        Verifying owner status...
      </div>
    );
  }

  // Must be logged in
  if (!isAuthenticated || !user) {
    return <Navigate to="/signin" replace />;
  }

  // Must be owner
  if (!isOwner) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <>{children}</>;
};

export default OwnerRoute;
