
import { TwitchIcon, YoutubeIcon, MonitorPlay } from "lucide-react";
import { PlatformField } from "./PlatformField";
import { Control } from "react-hook-form";
import { StreamerProfileFormValues } from "@/types/streamer";

interface PlatformsSectionProps {
  control: Control<StreamerProfileFormValues>;
  disabled?: boolean;
}

export const PlatformsSection = ({ control, disabled }: PlatformsSectionProps) => {
  return (
    <div className="space-y-4 md:col-span-2">
      <h3 className="text-lg font-medium">Streaming Platforms</h3>
      <p className="text-sm text-muted-foreground">Link at least one streaming platform where you create content</p>
      
      <div className="space-y-4">
        {/* Twitch */}
        <div className="flex flex-col md:flex-row gap-3">
          <PlatformField
            control={control}
            name="twitchUsername"
            label="Twitch Username"
            icon={<TwitchIcon className="h-4 w-4 text-purple-600" />}
            placeholder="yourusername"
            disabled={disabled}
          />
        </div>
        
        {/* YouTube */}
        <div className="flex flex-col md:flex-row gap-3">
          <PlatformField
            control={control}
            name="youtubeChannelId"
            label="YouTube Channel ID"
            icon={<YoutubeIcon className="h-4 w-4 text-red-600" />}
            placeholder="Your channel ID"
            description="Found in your YouTube channel URL"
            disabled={disabled}
          />
        </div>

        {/* Kick */}
        <div className="flex flex-col md:flex-row gap-3">
          <PlatformField
            control={control}
            name="kickUsername"
            label="Kick Username"
            icon={<MonitorPlay className="h-4 w-4 text-green-600" />}
            placeholder="yourusername"
            disabled={disabled}
          />
        </div>
      </div>
    </div>
  );
};
