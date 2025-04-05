
import { toast } from "@/hooks/use-toast";

// Discord application credentials
const DISCORD_CLIENT_ID = "YOUR_DISCORD_CLIENT_ID";
const REDIRECT_URI = `${window.location.origin}/auth/discord/callback`;
// Admin authorization constants
const ADMIN_SERVER_GUILD_ID = "997603496637513928";
const ADMIN_ROLE_ID = "1004399549051326525";

export const discordAuthUrl = `https://discord.com/api/oauth2/authorize?client_id=${DISCORD_CLIENT_ID}&redirect_uri=${encodeURIComponent(
  REDIRECT_URI
)}&response_type=code&scope=identify%20email%20guilds%20guilds.members.read`;

export const initiateDiscordAuth = () => {
  // Store the current URL to redirect back after authentication
  localStorage.setItem("authRedirect", window.location.pathname);
  
  // Redirect to Discord's OAuth page
  window.location.href = discordAuthUrl;
};

export const handleDiscordCallback = async (code: string) => {
  try {
    // In a real implementation, this would send the code to your backend
    // where the token exchange would happen securely
    console.log("Auth code from Discord:", code);
    
    // Mock successful authentication for demonstration
    // In a real implementation, you would make API calls to Discord to:
    // 1. Exchange code for access token
    // 2. Get user info
    // 3. Get user's guilds
    // 4. Get user's roles in the admin guild
    const mockUser = {
      id: "discord123456789",
      username: "DiscordUser",
      email: "discord-user@example.com",
      avatar: "https://cdn.discordapp.com/avatars/123456789/abcdef.png",
      isAdmin: false, // Default to false, will be updated below
      guilds: [
        {
          id: ADMIN_SERVER_GUILD_ID,
          name: "Angry Gamer Admin Server",
          roles: [ADMIN_ROLE_ID]
        }
      ]
    };
    
    // Check if user is in the admin server and has the admin role
    const isUserAdmin = checkUserAdminStatus(mockUser);
    mockUser.isAdmin = isUserAdmin;
    
    // Store user data in localStorage (in production, consider more secure options)
    localStorage.setItem("user", JSON.stringify(mockUser));
    
    // Show success toast
    toast({
      title: "Successfully authenticated with Discord!",
      description: `Welcome, ${mockUser.username}!${isUserAdmin ? " (Admin access granted)" : ""}`,
    });
    
    // Get the redirect URL or default to home
    const redirectUrl = localStorage.getItem("authRedirect") || "/";
    localStorage.removeItem("authRedirect");
    
    // Redirect user
    window.location.href = redirectUrl;
    
    return mockUser;
  } catch (error) {
    console.error("Discord authentication error:", error);
    toast({
      title: "Authentication failed",
      description: "Could not authenticate with Discord. Please try again.",
      variant: "destructive",
    });
    
    return null;
  }
};

// Check if the user is an admin based on server membership and role
export const checkUserAdminStatus = (user: any): boolean => {
  if (!user || !user.guilds) return false;
  
  // Check if user is in the admin server
  const adminGuild = user.guilds.find((guild: any) => guild.id === ADMIN_SERVER_GUILD_ID);
  if (!adminGuild) return false;
  
  // Check if user has the admin role
  return adminGuild.roles.includes(ADMIN_ROLE_ID);
};

// Function to verify admin status before accessing admin routes
export const verifyAdminAccess = (): boolean => {
  try {
    const userJson = localStorage.getItem("user");
    if (!userJson) return false;
    
    const user = JSON.parse(userJson);
    return !!user.isAdmin;
  } catch (error) {
    console.error("Error verifying admin access:", error);
    return false;
  }
};
