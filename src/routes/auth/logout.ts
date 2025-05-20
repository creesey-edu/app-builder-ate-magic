// PATCHED v0.0.6 src/routes/auth/logout.ts — Implements client-side logout and session clearing

import api from "@/lib/axios"; // Ensure axios is set up for making API calls
import { clearSession } from "@/utils/session"; // Utility function to clear session data

export const logout = async () => {
  try {
    // Clear local/session storage or cookies to log the user out
    clearSession();

    // Optionally, call the backend logout route to inform it of the logout
    await api.post("/auth/logout");

    // Redirect the user to login page or any other page
    window.location.href = "/login"; // Or redirect to the home page / unauthorized page
  } catch (error) {
    console.error("Logout failed:", error);
  }
};
