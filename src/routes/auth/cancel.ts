// PATCHED v0.0.6 src/routes/auth/cancel.ts — Handles OAuth cancellation and redirects user

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CancelOAuth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Assuming the OAuth flow passes some kind of query param indicating cancelation
    const searchParams = new URLSearchParams(window.location.search);
    const cancelReason = searchParams.get("error_description") || "Unknown error";

    // Log the cancellation for debugging
    console.debug("[CancelOAuth] OAuth cancelled:", cancelReason);

    // Redirect to the login page or another safe page
    navigate("/login", { replace: true }); // or replace with another route if needed
  }, [navigate]);

  return null; // This component doesn't render anything
};

export default CancelOAuth;
