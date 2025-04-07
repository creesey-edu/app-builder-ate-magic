
import { Badge } from "@/components/ui/badge";
import { VerificationStatus } from "@/types/streamer";
import { CheckCircle, AlertCircle, Clock } from "lucide-react";

interface VerificationBadgeProps {
  status: VerificationStatus;
  className?: string;
}

export const VerificationBadge = ({ status, className }: VerificationBadgeProps) => {
  switch (status) {
    case VerificationStatus.VERIFIED:
      return (
        <Badge variant="secondary" className={`bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 ${className}`}>
          <CheckCircle className="h-3 w-3 mr-1" />
          Verified
        </Badge>
      );
    case VerificationStatus.REJECTED:
      return (
        <Badge variant="secondary" className={`bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100 ${className}`}>
          <AlertCircle className="h-3 w-3 mr-1" />
          Rejected
        </Badge>
      );
    case VerificationStatus.PENDING:
    default:
      return (
        <Badge variant="secondary" className={`bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100 ${className}`}>
          <Clock className="h-3 w-3 mr-1" />
          Pending
        </Badge>
      );
  }
};