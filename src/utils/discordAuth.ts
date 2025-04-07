
import { toast } from "@/hooks/use-toast";

// Discord application credentials
const DISCORD_CLIENT_ID = "YOUR_DISCORD_CLIENT_ID";
const REDIRECT_URI = `${window.location.origin}/auth/discord/callback`;

// Admin and verification constants
const ADMIN_SERVER_GUILD_ID = "997603496637513928";
const ADMIN_ROLE_ID = "1004399549051326525";
const VERIFIED_ROLE_ID = "1150725589123456789"; // Example verified role ID
const GOVERNMENT_ROLE_ID = "1150725589123498765"; // Example government role ID
const MILITARY_ROLE_ID = "1150725589123412345"; // Example military role ID
const EDUCATION_ROLE_ID = "1150725589123433221"; // Example education role ID

// Available verification types
export enum VerificationType {
  GOVERNMENT = "government",
  MILITARY = "military",
  EDUCATION = "education"
}

export const discordAuthUrl = `https://discord.com/api/oauth2/authorize?client_id=${DISCORD_CLIENT_ID}&redirect_uri=${encodeURIComponent(
  REDIRECT_URI
)}&response_type=code&scope=identify%20email%20guilds%20guilds.members.read`;

export const initiateDiscordAuth = (verificationType?: VerificationType) => {
  // Store the current URL and verification type to redirect back after authentication
  localStorage.setItem("authRedirect", window.location.pathname);
  if (verificationType) {
    localStorage.setItem("verificationType", verificationType);
  }
  
  // Redirect to Discord's OAuth page
  window.location.href = discordAuthUrl;
};

export const handleDiscordCallback = async (code: string) => {
  try {
    // In a real implementation, this would send the code to your backend
    // where the token exchange would happen securely
    console.log("Auth code from Discord:", code);
    
    // Check if verification was requested
    const verificationType = localStorage.getItem("verificationType");
    
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
      isVerified: false, // Default to false, will be updated if verification is present
      verificationType: verificationType as VerificationType | null,
      verificationStatus: "pending", // Default status for new verification requests
      guilds: [
        {
          id: ADMIN_SERVER_GUILD_ID,
          name: "Angry Gamer Admin Server",
          roles: [ADMIN_ROLE_ID]
        }
      ]
    };
    
    // Check user status
    const isUserAdmin = checkUserAdminStatus(mockUser);
    mockUser.isAdmin = isUserAdmin;
    
    // If this is a verification flow, update the user data accordingly
    if (verificationType) {
      // In a real implementation, this would trigger the actual verification process
      // based on the verification type requested
      mockUser.verificationStatus = "pending";
      
      // Show verification-specific toast
      toast({
        title: "Verification request initiated",
        description: `Your ${verificationType} verification request has been submitted and is pending review.`,
      });
      
      // Clear the verification type from localStorage
      localStorage.removeItem("verificationType");
    }
    
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

// Check user verification status
export const checkUserVerificationStatus = (user: any): { isVerified: boolean, type: VerificationType | null } => {
  if (!user || !user.guilds) return { isVerified: false, type: null };
  
  // Check if user is in the admin server
  const adminGuild = user.guilds.find((guild: any) => guild.id === ADMIN_SERVER_GUILD_ID);
  if (!adminGuild) return { isVerified: false, type: null };
  
  // Check for verification roles
  if (adminGuild.roles.includes(VERIFIED_ROLE_ID)) {
    // Determine verification type based on specific role
    if (adminGuild.roles.includes(GOVERNMENT_ROLE_ID)) {
      return { isVerified: true, type: VerificationType.GOVERNMENT };
    }
    if (adminGuild.roles.includes(MILITARY_ROLE_ID)) {
      return { isVerified: true, type: VerificationType.MILITARY };
    }
    if (adminGuild.roles.includes(EDUCATION_ROLE_ID)) {
      return { isVerified: true, type: VerificationType.EDUCATION };
    }
    
    // Generic verified with no specific type
    return { isVerified: true, type: null };
  }
  
  return { isVerified: false, type: null };
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

// Initiate a verification request for a specific type
export const initiateVerification = (type: VerificationType) => {
  // Store the verification type and initiate Discord auth
  initiateDiscordAuth(type);
};

// Mock function to simulate an API call that would check verification status
export const checkVerificationStatus = async (userId: string): Promise<string> => {
  // This would normally be an API call to your backend service
  // For demo purposes, returning a random status
  const statuses = ["pending", "approved", "rejected"];
  const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
  
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(randomStatus);
    }, 500);
  });
};
