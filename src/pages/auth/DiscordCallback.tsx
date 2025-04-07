import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { handleDiscordCallback } from "@/utils/discordAuth";

const DiscordCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const url = new URL(window.location.href);
    const code = url.searchParams.get("code");

    if (!code) {
      console.warn("No code found in callback URL.");
      navigate("/login");
      return;
    }

    handleDiscordCallback(code)
      .then((user) => {
        if (user) {
          navigate("/dashboard"); // or wherever
        } else {
          console.error("Auth failed. Redirecting.");
          navigate("/login");
        }
      })
      .catch((err) => {
        console.error("Error during Discord auth:", err);
        navigate("/login");
      });
  }, [navigate]);

  return <div>Finishing up login...</div>;
};

export default DiscordCallback;
