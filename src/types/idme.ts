
/**
 * @metadata
 * {
 *   "project": "TAGS",
 *   "module": "ID.me Types",
 *   "phase": "Type Definitions",
 *   "tags": ["types", "verification", "idme", "authentication"],
 *   "version": "v1.0.2",
 *   "author": "Chad A. Reesey",
 *   "email": "developer@thenagrygamershow.com",
 *   "updated": "2025-06-19",
 *   "description": "Type definitions for ID.me verification integration"
 * }
 */

import { VerificationType } from './discord';

export type IDMeVerificationResponse = {
  status: "verified" | "unverified" | "pending";
  category: VerificationType;
  idme_uuid: string;
  issued_at: string;
  expires_at: string;
};
