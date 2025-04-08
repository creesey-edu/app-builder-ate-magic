
// Role permissions mapping
export const rolePermissions = {
  admin: "admin",
  moderator: "moderator",
  user: "user"
};

// Check if a user has a specific role
export const hasRole = (user: any, requiredRoleId: string): boolean => {
  // Check if user has the role property
  if (!user || !user.role) {
    return false;
  }

  // Check if the user's role matches the required role
  return user.role === requiredRoleId;
};
