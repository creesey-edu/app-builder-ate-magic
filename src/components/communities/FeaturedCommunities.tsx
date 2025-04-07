
import { Card, CardContent } from "@/components/ui/card";
import { FeaturedCommunity } from "@/components/communities/FeaturedCommunity";

// Mock data for featured communities
const FEATURED_COMMUNITIES = [
  {
    id: "c1",
    name: "FPS Legends",
    description: "Community for FPS game enthusiasts",
    memberCount: 1250,
    image: "https://api.dicebear.com/7.x/shapes/svg?seed=FPS",
    tags: ["FPS", "Competitive", "Tournaments"]
  },
  {
    id: "c2",
    name: "RPG Adventurers",
    description: "For fans of role-playing games and epic adventures",
    memberCount: 980,
    image: "https://api.dicebear.com/7.x/shapes/svg?seed=RPG",
    tags: ["RPG", "Story", "Co-op"]
  },
  {
    id: "c3",
    name: "Strategy Masters",
    description: "Discussions about strategy games and tactics",
    memberCount: 765,
    image: "https://api.dicebear.com/7.x/shapes/svg?seed=Strategy",
    tags: ["Strategy", "Turn-based", "RTS"]
  }
];

export const FeaturedCommunities = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Featured Communities</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {FEATURED_COMMUNITIES.map((community) => (
          <FeaturedCommunity key={community.id} community={community} />
        ))}
      </div>
    </div>
  );
};
