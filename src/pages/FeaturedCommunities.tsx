
import { PageLayout } from "@/components/PageLayout";
import { FeaturedCommunity } from "@/components/communities/FeaturedCommunity";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Star, Users } from "lucide-react";

// Extended mock data for featured communities with more details
const FEATURED_COMMUNITIES = [
  {
    id: "c1",
    name: "FPS Legends",
    description: "Community for FPS game enthusiasts with weekly tournaments, coaching sessions, and exclusive game-night events. Join our competitive ladders and improve your skills!",
    memberCount: 1250,
    image: "https://api.dicebear.com/7.x/shapes/svg?seed=FPS",
    tags: ["FPS", "Competitive", "Tournaments", "Coaching"],
    featured: true,
    activityLevel: "Very Active",
    foundedDate: "Jan 2023"
  },
  {
    id: "c2",
    name: "RPG Adventurers",
    description: "For fans of role-playing games and epic adventures. We organize regular campaign nights, character building workshops, and discussions about game lore and storytelling techniques.",
    memberCount: 980,
    image: "https://api.dicebear.com/7.x/shapes/svg?seed=RPG",
    tags: ["RPG", "Story", "Co-op", "Campaigns"],
    featured: true,
    activityLevel: "Active",
    foundedDate: "Mar 2023"
  },
  {
    id: "c3",
    name: "Strategy Masters",
    description: "Discussions about strategy games and tactics, from city builders to grand strategy. Regular tournaments for popular strategy titles and deep-dive analysis of game mechanics and strategies.",
    memberCount: 765,
    image: "https://api.dicebear.com/7.x/shapes/svg?seed=Strategy",
    tags: ["Strategy", "Turn-based", "RTS", "Analysis"],
    featured: true,
    activityLevel: "Moderate",
    foundedDate: "Apr 2023"
  },
  {
    id: "c4",
    name: "Indie Spotlight",
    description: "Discover hidden gems in the indie game scene. We feature weekly spotlights on new indie releases, developer interviews, and gameplay sessions with the community.",
    memberCount: 630,
    image: "https://api.dicebear.com/7.x/shapes/svg?seed=Indie",
    tags: ["Indie", "Game Dev", "Reviews", "Showcases"],
    featured: true,
    activityLevel: "Very Active",
    foundedDate: "Feb 2023"
  },
  {
    id: "c5",
    name: "Retro Gaming Classics",
    description: "Celebrating the golden age of gaming. Share your favorite retro gaming memories, participate in speedrun challenges, and join our monthly retro game nights.",
    memberCount: 890,
    image: "https://api.dicebear.com/7.x/shapes/svg?seed=Retro",
    tags: ["Retro", "Classics", "Nostalgia", "Speedruns"],
    featured: true,
    activityLevel: "Active",
    foundedDate: "Nov 2022"
  }
];

const FeaturedCommunitiesPage = () => {
  const navigate = useNavigate();

  return (
    <PageLayout
      title="Featured Communities"
      description="Explore our handpicked collection of the most engaging gaming communities"
    >
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex items-center gap-2">
            <Star className="h-6 w-6 text-amber-500" />
            <h1 className="text-3xl font-bold">Featured Communities</h1>
          </div>
          
          <div className="flex gap-2 w-full md:w-auto justify-end">
            <Button 
              variant="outline" 
              onClick={() => navigate("/communities")}
              className="flex items-center gap-2"
            >
              <Users className="h-4 w-4" />
              All Communities
            </Button>
            <Button onClick={() => navigate("/community-store")}>
              Create Community
            </Button>
          </div>
        </div>
        
        <p className="text-lg text-muted-foreground">
          Join our most active and engaging communities, hand-selected by our moderation team 
          for their quality content, active discussions, and welcoming atmosphere.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FEATURED_COMMUNITIES.map((community) => (
            <div key={community.id} className="flex flex-col">
              <FeaturedCommunity community={community} />
              <div className="mt-4 px-4 space-y-2">
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Activity: {community.activityLevel}</span>
                  <span>Founded: {community.foundedDate}</span>
                </div>
                <p className="text-sm">{community.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default FeaturedCommunitiesPage;
