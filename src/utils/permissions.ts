// src/utils/permissions.ts

const rolePermissions = {
  admin: import.meta.env.VITE_ADMIN_ROLE_ID,
  contentManager: "123456789000000002",
  subscriber: "123456789000000003",
  // Add more as needed
};

export const hasRole = (user: any, roleId: string): boolean => {
  return user?.guilds?.some((guild: any) => guild.roles?.includes(roleId));
};

export { rolePermissions };
