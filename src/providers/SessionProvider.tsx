
/**
 * @metadata
 * {
 *   "project": "TAGS",
 *   "module": "Session Provider",
 *   "phase": "Authentication Infrastructure",
 *   "tags": ["provider", "session", "authentication", "context"],
 *   "version": "v1.0.2",
 *   "author": "Chad A. Reesey",
 *   "email": "developer@thenagrygamershow.com",
 *   "updated": "2025-06-19",
 *   "description": "Session provider component for managing authentication state"
 * }
 */

import React, { ReactNode } from 'react';

interface SessionProviderProps {
  children: ReactNode;
}

export const SessionProvider: React.FC<SessionProviderProps> = ({ children }) => {
  // For now, this is a simple wrapper that just passes through children
  // The actual session logic is handled by useSession hook
  return <>{children}</>;
};
