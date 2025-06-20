
// PATCHED v0.0.7 src/components/auth/DiscordLoginButton.tsx — Uses proper auth flow

import { Button } from "@/components/ui/button";
import DiscordLogo from "@/components/ui/icons/DiscordLogo";
import { initiateDiscordAuth } from "@/lib/auth";
import { VerificationType } from "@/types/discord";
import { MouseEvent } from "react";

interface DiscordLoginButtonProps {
  className?: string;
  disabled?: boolean;
  verificationType?: VerificationType;
}

const DiscordLoginButton = ({ className, disabled, verificationType }: DiscordLoginButtonProps) => {
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (import.meta.env.VITE_DEBUG === "true") {
      console.debug("[DiscordLoginButton] Clicking login with verificationType:", verificationType);
    }
    initiateDiscordAuth(verificationType);
  };

  return (
    <Button
      type="button"
      variant="outline"
      className={`w-full flex items-center gap-2 bg-[#5865F2] hover:bg-[#4752c4] text-white border-none ${className}`}
      onClick={handleClick}
      disabled={disabled}
    >
      <DiscordLogo className="h-5 w-5" />
      <span>Sign in with Discord</span>
    </Button>
  );
};

export default DiscordLoginButton;
