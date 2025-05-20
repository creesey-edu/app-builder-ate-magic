
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control } from "react-hook-form";
import DiscordLogo from "@/components/ui/icons/DiscordLogo";
import { StreamerProfileFormValues } from "@/types/streamer";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Info } from "lucide-react";

interface DiscordSectionProps {
  control: Control<StreamerProfileFormValues>;
  disabled?: boolean;
}

export const DiscordSection = ({ control, disabled }: DiscordSectionProps) => {
  return (
    <div className="space-y-4 md:col-span-2">
      <h3 className="text-lg font-medium">Discord Integration</h3>
      
      <Alert variant="default" className="bg-indigo-50 border-indigo-200">
        <Info className="h-4 w-4 text-indigo-500" />
        <AlertDescription className="text-indigo-700 text-sm">
          Your Discord username is required for verification. Once approved, you'll automatically receive the "Verified Streamer" role in our Discord server.
        </AlertDescription>
      </Alert>
      
      <FormField
        control={control}
        name="discordUsername"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="flex items-center gap-2">
              <DiscordLogo className="h-4 w-4 text-indigo-400" />
              Discord Username
            </FormLabel>
            <FormControl>
              <Input placeholder="username (e.g. username#1234)" {...field} disabled={disabled} />
            </FormControl>
            <FormDescription>
              Required to assign your Discord Streamer role
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};