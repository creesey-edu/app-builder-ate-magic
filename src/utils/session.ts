// PATCHED v0.0.6 src/utils/session.ts — Implements session clearing utility function

export const clearSession = () => {
  localStorage.removeItem("auth_token"); // Clear the auth token
  sessionStorage.removeItem("user_data"); // Optionally clear session data
  // Additional cleanup can be done here if needed
};
