// -----------------------------------------------------------------------------
// Project: TAGS
// Module: WebApp Frontend
// Phase: Production Build
// File: src/components/auth/DiscordCallback.tsx
// Tags: ["discord", "oauth", "auth", "callback", "jwt"]
// Updated: 16 June 2025 21:36 (EST)
// Version: v0.0.7
// Author: Chad Reesey
// Email: contact@thenagrygamershow.com
// Description: Handles Discord OAuth2 redirect, exchanges code for JWT via backend.
// -----------------------------------------------------------------------------

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleDiscordCallback } from "@/lib/auth";
import { Loader2 } from "lucide-react";

const DiscordCallback = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const processAuth = async () => {
      try {
        const params = new URLSearchParams(window.location.search);
        const code = params.get("code");

        if (import.meta.env.VITE_DEBUG === "true") {
          console.debug("[DiscordCallback] URL code:", code);
        }

        if (!code) {
          setError("No authorization code received from Discord.");
          setIsLoading(false);
          return;
        }

        const user = await handleDiscordCallback(code);

        if (import.meta.env.VITE_DEBUG === "true") {
          console.debug("[DiscordCallback] handleDiscordCallback result:", user);
        }

        if (!user) {
          setError("Failed to authenticate with Discord.");
          setIsLoading(false);
          return;
        }

        // Auth successful — redirect to dashboard
        navigate("/dashboard");
      } catch (error) {
        console.error("Error during Discord callback:", error);
        setError("An unexpected error occurred during authentication.");
        setIsLoading(false);
      }
    };

    processAuth();
  }, [navigate]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <Loader2 className="h-12 w-12 animate-spin text-primary mb-4" />
        <h2 className="text-2xl font-semibold">Authenticating with Discord...</h2>
        <p className="text-muted-foreground mt-2">Please wait while we log you in.</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <div className="bg-destructive/10 p-4 rounded-lg mb-4">
          <p className="text-destructive font-medium">Authentication Error</p>
        </div>
        <h2 className="text-2xl font-semibold">Unable to authenticate</h2>
        <p className="text-muted-foreground mt-2 mb-6">{error}</p>
        <button 
          onClick={() => navigate("/signin")}
          className="bg-primary text-primary-foreground px-4 py-2 rounded hover:bg-primary/90"
        >
          Return to Sign In
        </button>
      </div>
    );
  }

  return null;
};

export default DiscordCallback;
