
import { BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { StreamerCard } from "./StreamerCard";

interface FeaturedStreamersProps {
  streamers: Array<{
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
  }>;
}

export const FeaturedStreamers = ({ streamers }: FeaturedStreamersProps) => {
  const featuredStreamers = streamers.filter((s) => s.featured).slice(0, 3);

  return (
    <section>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Featured Streamers</h2>
        <Button variant="outline" asChild>
          <Link to="/streamer-analytics" className="flex items-center gap-2">
            <BarChart className="h-4 w-4" />
            Analytics Dashboard
          </Link>
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featuredStreamers.map((streamer) => (
          <StreamerCard key={streamer.id} streamer={streamer} featured={true} />
        ))}
      </div>
    </section>
  );
};