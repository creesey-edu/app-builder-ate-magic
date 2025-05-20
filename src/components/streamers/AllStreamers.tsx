
import { Button } from "@/components/ui/button";
import { StreamerCard } from "./StreamerCard";

interface AllStreamersProps {
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
  resetFilters: () => void;
}

export const AllStreamers = ({ streamers, resetFilters }: AllStreamersProps) => {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">All Streamers</h2>
      {streamers.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {streamers.map((streamer) => (
            <StreamerCard key={streamer.id} streamer={streamer} />
          ))}
        </div>
      ) : (
        <div className="text-center py-8">
          <p className="text-lg text-muted-foreground">No streamers found matching your criteria</p>
          <Button variant="outline" className="mt-4" onClick={resetFilters}>
            Clear filters
          </Button>
        </div>
      )}
    </section>
  );
};