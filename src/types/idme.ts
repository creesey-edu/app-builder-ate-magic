
import { VerificationType } from './discord';

export type IDMeVerificationResponse = {
  status: "verified" | "unverified" | "pending";
  category: VerificationType;
  idme_uuid: string;
  issued_at: string;
  expires_at: string;
};
