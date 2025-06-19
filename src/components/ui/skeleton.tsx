
/**
 * @metadata
 * {
 *   "project": "TAGS",
 *   "module": "Skeleton Component",
 *   "phase": "UI Components",
 *   "tags": ["component", "ui", "skeleton", "loading"],
 *   "version": "v1.0.2",
 *   "author": "Chad A. Reesey",
 *   "email": "developer@thenagrygamershow.com",
 *   "updated": "2025-06-19",
 *   "description": "Skeleton loading component for UI placeholder states"
 * }
 */

import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...props}
    />
  )
}

export { Skeleton }
