
import { Button } from "@/components/ui/button";
import DiscordLogo from "@/components/ui/icons/DiscordLogo";
import { initiateDiscordAuth } from "@/utils/discordAuth";

interface DiscordLoginButtonProps {
  className?: string;
  disabled?: boolean;
}

const DiscordLoginButton = ({ className, disabled }: DiscordLoginButtonProps) => {
  return (
    <Button
      type="button"
      variant="outline"
      className={`w-full flex items-center gap-2 bg-[#5865F2] hover:bg-[#4752c4] text-white border-none ${className}`}
      onClick={initiateDiscordAuth}
      disabled={disabled}
    >
      <DiscordLogo className="h-5 w-5" />
      <span>Sign in with Discord</span>
    </Button>
  );
};

export default DiscordLoginButton;
