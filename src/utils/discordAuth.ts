
import { toast } from "@/hooks/use-toast";

// These values should be replaced with your actual Discord application credentials
const DISCORD_CLIENT_ID = "YOUR_DISCORD_CLIENT_ID";
const REDIRECT_URI = `${window.location.origin}/auth/discord/callback`;

export const discordAuthUrl = `https://discord.com/api/oauth2/authorize?client_id=${DISCORD_CLIENT_ID}&redirect_uri=${encodeURIComponent(
  REDIRECT_URI
)}&response_type=code&scope=identify%20email`;

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
    const mockUser = {
      id: "discord123456789",
      username: "DiscordUser",
      email: "discord-user@example.com",
      avatar: "https://cdn.discordapp.com/avatars/123456789/abcdef.png"
    };
    
    // Store user data in localStorage (in production, consider more secure options)
    localStorage.setItem("user", JSON.stringify(mockUser));
    
    // Show success toast
    toast({
      title: "Successfully authenticated with Discord!",
      description: `Welcome, ${mockUser.username}!`,
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
