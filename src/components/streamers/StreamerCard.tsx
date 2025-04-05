
import { TwitchIcon, YoutubeIcon, MonitorPlay, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface Platform {
  name: string;
  icon: React.ReactNode;
}

interface StreamerCardProps {
  streamer: {
    id: string;
    username: string;
    displayName: string;
    avatar: string;
    platforms: string[];
    liveStatus: boolean;
    game: string;
    followers: number;
    bio: string;
    featured?: boolean;
  };
  featured?: boolean;
}

// Helper for platform icons
const renderPlatformIcons = (platforms: string[]) => {
  return (
    <div className="flex gap-2">
      {platforms.includes("twitch") && (
        <TwitchIcon className="h-5 w-5 text-purple-600" />
      )}
      {platforms.includes("youtube") && (
        <YoutubeIcon className="h-5 w-5 text-red-600" />
      )}
      {platforms.includes("kick") && (
        <MonitorPlay className="h-5 w-5 text-green-600" />
      )}
    </div>
  );
};

export const StreamerCard = ({ streamer, featured = false }: StreamerCardProps) => {
  return (
    <Card className={cn(featured && "overflow-hidden")}>
      {featured && (
        <div className="w-full h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
      )}
      <CardHeader className={cn("flex flex-row items-center gap-3 pb-2", featured && "gap-4")}>
        <img 
          src={streamer.avatar} 
          alt={streamer.displayName} 
          className={cn(
            "rounded-full border-2",
            featured ? "w-16 h-16 border-primary" : "w-14 h-14 border-muted"
          )}
        />
        <div className="flex flex-col">
          <h3 className={cn("flex items-center", featured && "text-xl font-bold")}>
            {streamer.displayName}
            {streamer.liveStatus && (
              <Badge 
                variant="destructive" 
                className={cn(
                  featured ? "px-2 py-1 ml-2" : "ml-2 px-1.5 py-0.5 text-xs"
                )}
              >
                LIVE
              </Badge>
            )}
          </h3>
          <p className="text-muted-foreground text-sm">{streamer.game}</p>
          {renderPlatformIcons(streamer.platforms)}
        </div>
      </CardHeader>
      <CardContent className={cn("pt-2", !featured && "pt-0")}>
        <p className={cn(
          "line-clamp-2 text-sm",
          !featured && "text-muted-foreground"
        )}>
          {streamer.bio}
        </p>
        {featured && (
          <div className="flex items-center text-sm text-muted-foreground mt-2">
            <Users className="h-4 w-4 mr-1" /> {streamer.followers.toLocaleString()} followers
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button 
          variant={featured ? "outline" : "ghost"} 
          size={featured ? "default" : "sm"} 
          asChild 
          className="w-full"
        >
          <Link to={`/streamers/${streamer.id}`}>View Profile</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
