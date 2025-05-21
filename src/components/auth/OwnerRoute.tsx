// src/components/auth/OwnerRoute.tsx

import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useSession } from "@/hooks/useSession";

interface OwnerRouteProps {
  children: ReactNode;
}

const OwnerRoute: React.FC<OwnerRouteProps> = ({ children }) => {
  const { user, isLoading, isAdmin, isAdminGuildOwner } = useSession();

  // Show loading state while session is being checked
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-muted-foreground">
        Verifying owner status...
      </div>
    );
  }

  // Redirect to signin if not authenticated
  if (!user) {
    return <Navigate to="/signin" replace />;
  }

  // Redirect to unauthorized if not an owner
  if (!isAdminGuildOwner) {
    return <Navigate to="/unauthorized" replace />;
  }

  // Render children if user is an owner
  return <>{children}</>;
};

export default OwnerRoute;
