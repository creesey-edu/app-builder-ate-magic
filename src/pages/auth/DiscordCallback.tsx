
// PATCHED v0.0.7 src/auth/DiscordCallback.tsx — Aligns with backend v1.1.5 and session flow

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { handleDiscordCallback } from "@/lib/auth";
import { toast } from "@/hooks/use-toast";

const DiscordCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const url = new URL(window.location.href);
    const code = url.searchParams.get("code");

    if (!code) {
      console.warn("🔁 No code found in callback URL.");
      toast({
        title: "Authorization Failed",
        description: "No code was returned from Discord. Please try again.",
        variant: "destructive"
      });
      navigate("/login");
      return;
    }

    handleDiscordCallback(code)
      .then((user) => {
        if (user) {
          if (import.meta.env.VITE_DEBUG === "true") {
            console.debug("✅ Discord OAuth success:", user);
          }
          navigate("/dashboard");
        } else {
          console.error("❌ Auth failed. Redirecting.");
          toast({
            title: "Login Failed",
            description: "Something went wrong during authentication.",
            variant: "destructive"
          });
          navigate("/login");
        }
      })
      .catch((err) => {
        console.error("🚨 Error during Discord auth:", err);
        toast({
          title: "Error Logging In",
          description: "An unexpected error occurred. Please try again.",
          variant: "destructive"
        });
        navigate("/login");
      });
  }, [navigate]);

  return <div>Finishing up login...</div>;
};

export default DiscordCallback;
