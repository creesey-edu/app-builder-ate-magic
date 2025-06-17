// -----------------------------------------------------------------------------
// Project: TAGS
// Module: WebApp Frontend
// Phase: Production Build
// File: src/pages/Debug.tsx
// Tags: ["debug", "session", "auth", "jwt", "api"]
// Updated: 16 June 2025 20:36 (EST)
// Version: v0.0.6
// Author: Chad Reesey
// Email: contact@thenagrygamershow.com
// Description: Debug page to display session state and fetch server user info.
// -----------------------------------------------------------------------------

import React, { useCallback, useEffect, useState } from "react";
import { useSession } from "@/hooks/useSession";

type DebugUserPayload = {
  id: string;
  username: string;
  email?: string;
  avatar?: string;
  isAdminGuildOwner?: boolean;
  isAdminGuildAdministrator?: boolean;
  isAdminGuildModerator?: boolean;
  isAdminGuildVerifiedMember?: boolean;
  isAdminGuildMember?: boolean;
  isCommunityGuild?: boolean;
  isCommunityGuildOwner?: boolean;
  isCommunityGuildManager?: boolean;
  isCommunityGuildAdministrator?: boolean;
  isCommunityGuildModerator?: boolean;
  isCommunityGuildVerifiedMember?: boolean;
  isCommunityGuildMember?: boolean;
  verificationType?: string | null;
  verificationStatus?: string;
  guilds?: Array<{
    id: string;
    name: string;
    roles: string[];
  }>;
  [key: string]: unknown;
};

export const Debug: React.FC = () => {
  const { user, token, isAuthenticated } = useSession();
  const [debugUser, setDebugUser] = useState<DebugUserPayload | null>(null);
  const [debugUserLoading, setDebugUserLoading] = useState(false);
  const [debugUserError, setDebugUserError] = useState<string | null>(null);

  // Fetch server-side decoded user info
  const fetchDebugUserInfo = useCallback(async () => {
    setDebugUserLoading(true);
    setDebugUserError(null);

    if (!token) {
      setDebugUserError("Missing session token.");
      setDebugUserLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/debug/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(
          errorData?.error || "Failed to fetch debug user info"
        );
      }
      const data = await res.json();
      setDebugUser(data.user);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setDebugUserError(err.message || "Error fetching debug user info");
      } else {
        setDebugUserError("Error fetching debug user info");
      }
    }
    setDebugUserLoading(false);
  }, [token]);

  useEffect(() => {
    if (isAuthenticated && token) {
      fetchDebugUserInfo();
    }
  }, [isAuthenticated, token, fetchDebugUserInfo]);

  return (
    <div className="prose dark:prose-invert max-w-2xl mx-auto mt-8 p-4 rounded-xl bg-neutral-900 shadow-lg">
      <h1>Debug User Info</h1>
      <ul>
        <li>
          <b>Authenticated:</b> {isAuthenticated ? "✅ Yes" : "❌ No"}
        </li>
        <li>
          <b>Admin:</b>{" "}
          {user?.isAdminGuildOwner || user?.isAdminGuildAdministrator
            ? "✅ Yes"
            : "❌ No"}
        </li>
        <li>
          <b>Verified:</b> {user?.isAdminGuildVerifiedMember ? "✅ Yes" : "❌ No"}
        </li>
        <li>
          <b>Verification Type:</b>{" "}
          {user?.verificationType ? user.verificationType : "None"}
        </li>
      </ul>
      <h2>Session Hook Payload</h2>
      <pre>
        {JSON.stringify(user, null, 2)}
      </pre>
      <h2>/api/debug/user Payload</h2>
      {debugUserLoading ? (
        <div>Loading user info from backend...</div>
      ) : debugUserError ? (
        <div className="text-red-500">Failed to fetch debug user info: {debugUserError}</div>
      ) : (
        <pre>
          {debugUser ? JSON.stringify(debugUser, null, 2) : "No server user info"}
        </pre>
      )}
    </div>
  );
};

export default Debug;
