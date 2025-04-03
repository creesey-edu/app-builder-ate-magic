
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control } from "react-hook-form";
import DiscordLogo from "@/components/ui/icons/DiscordLogo";
import { StreamerProfileFormValues } from "@/types/streamer";

interface DiscordSectionProps {
  control: Control<StreamerProfileFormValues>;
}

export const DiscordSection = ({ control }: DiscordSectionProps) => {
  return (
    <div className="space-y-4 md:col-span-2">
      <h3 className="text-lg font-medium">Discord Integration</h3>
      
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
              <Input placeholder="username (e.g. username#1234)" {...field} />
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
