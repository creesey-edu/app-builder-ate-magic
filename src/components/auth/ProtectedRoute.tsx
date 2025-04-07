import { Navigate } from "react-router-dom";
import { useUser } from "@/context/UserContext";
import { hasRole } from "@/utils/permissions";

interface ProtectedRouteProps {
  children: JSX.Element;
  requiredRoleId?: string;
  fallbackPath?: string;
}

const ProtectedRoute = ({ children, requiredRoleId, fallbackPath = "/unauthorized" }: ProtectedRouteProps) => {
  const { user, isAuthenticated } = useUser();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (requiredRoleId && !hasRole(user, requiredRoleId)) {
    return <Navigate to={fallbackPath} replace />;
  }

  return children;
};

export default ProtectedRoute;
