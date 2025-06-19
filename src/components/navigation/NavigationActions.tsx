
/**
 * @metadata
 * {
 *   "project": "TAGS",
 *   "module": "Navigation Actions",
 *   "phase": "Navigation Components",
 *   "tags": ["component", "navigation", "actions", "theme", "notifications"],
 *   "version": "v1.0.2",
 *   "author": "Chad A. Reesey",
 *   "email": "developer@thenagrygamershow.com",
 *   "updated": "2025-06-19",
 *   "description": "Navigation action components including theme toggle and notifications"
 * }
 */

import { ThemeToggle } from "../ThemeToggle";
import { NotificationBell } from "../NotificationBell";

export const NavigationActions = () => {
  return (
    <>
      <NotificationBell />
      <ThemeToggle />
    </>
  );
};
