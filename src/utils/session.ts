
/**
 * @metadata
 * {
 *   "project": "TAGS",
 *   "module": "Session Utilities",
 *   "phase": "Authentication System",
 *   "tags": ["utility", "session", "authentication", "storage"],
 *   "version": "v1.0.2",
 *   "author": "Chad A. Reesey",
 *   "email": "developer@thenagrygamershow.com",
 *   "updated": "2025-06-19",
 *   "description": "Utility functions for session management and cleanup"
 * }
 */

// PATCHED v0.0.6 src/utils/session.ts — Implements session clearing utility function

export const clearSession = () => {
  localStorage.removeItem("auth_token"); // Clear the auth token
  sessionStorage.removeItem("user_data"); // Optionally clear session data
  // Additional cleanup can be done here if needed
};
