
/**
 * @metadata
 * {
 *   "project": "TAGS",
 *   "module": "Utility Functions",
 *   "phase": "Core Infrastructure",
 *   "tags": ["utilities", "classnames", "styling", "helper"],
 *   "version": "v1.0.2",
 *   "author": "Chad A. Reesey",
 *   "email": "developer@thenagrygamershow.com",
 *   "updated": "2025-06-19",
 *   "description": "Core utility functions for styling and class name management"
 * }
 */

import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
