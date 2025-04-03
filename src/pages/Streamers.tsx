
import { useState } from "react";
import { PageLayout } from "@/components/PageLayout";
import { 
  TwitchIcon, 
  YoutubeIcon, 
  MonitorPlay, 
  Users, 
  Search, 
  Filter 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

// Mock data for streamers (in a real app, this would come from your backend)
const MOCK_STREAMERS = [
  {
    id: "streamer1",
    username: "AngryGamer42",
    displayName: "The Angry Gamer",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=AngryGamer",
    platforms: ["twitch", "youtube"],
    liveStatus: true,
    game: "Call of Duty: Warzone",
    followers: 15200,
    bio: "Pro FPS player specializing in battle royale games. I stream daily with viewer games on weekends!",
    discordName: "AngryGamer#1234",
    featured: true
  },
  {
    id: "streamer2",
    username: "NightOwlGaming",
    displayName: "Night Owl",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=NightOwl",
    platforms: ["twitch"],
    liveStatus: false,
    game: "Apex Legends",
    followers: 8750,
    bio: "Late night streams for the night owls out there. Casual gaming and chill vibes.",
    discordName: "NightOwl#5678",
    featured: true
  },
  {
    id: "streamer3",
    username: "StrategicMind",
    displayName: "Strategic Mind",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=StrategicMind",
    platforms: ["youtube"],
    liveStatus: true,
    game: "League of Legends",
    followers: 12300,
    bio: "MOBA specialist with educational content. Learn how to climb the ranked ladder!",
    discordName: "StrategicMind#9101",
    featured: false
  },
  {
    id: "streamer4",
    username: "RetroRevivalist",
    displayName: "Retro Revivalist",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=RetroRevivalist",
    platforms: ["twitch", "youtube"],
    liveStatus: false,
    game: "Final Fantasy VII",
    followers: 5400,
    bio: "Bringing classic games back to life with deep dives into retro gaming history.",
    discordName: "RetroRevivalist#2468",
    featured: false
  },
  {
    id: "streamer5",
    username: "SpeedRunner",
    displayName: "Speed Runner",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=SpeedRunner",
    platforms: ["twitch"],
    liveStatus: false,
    game: "Dark Souls",
    followers: 7200,
    bio: "Breaking records and taking names. Watch me speedrun your favorite games!",
    discordName: "SpeedRunner#1357",
    featured: true
  },
  {
    id: "streamer6",
    username: "CasualCrafter",
    displayName: "Casual Crafter",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=CasualCrafter",
    platforms: ["youtube", "kick"],
    liveStatus: true,
    game: "Minecraft",
    followers: 9900,
    bio: "Building amazing worlds one block at a time. Family-friendly content!",
    discordName: "CasualCrafter#2468",
    featured: false
  }
];

const Streamers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState<"all" | "live" | "featured">("all");
  
  // Filter streamers based on search term and filter
  const filteredStreamers = MOCK_STREAMERS.filter(streamer => {
    const matchesSearch = 
      streamer.displayName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      streamer.game.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (filter === "all") return matchesSearch;
    if (filter === "live") return matchesSearch && streamer.liveStatus;
    if (filter === "featured") return matchesSearch && streamer.featured;
    
    return matchesSearch;
  });
  
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

  return (
    <PageLayout
      title="Official Streamers"
      description="Meet our community of official streamers"
    >
      <div className="flex flex-col gap-8">
        {/* Featured streamers section */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Featured Streamers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {MOCK_STREAMERS.filter(s => s.featured).slice(0, 3).map(streamer => (
              <Card key={streamer.id} className="overflow-hidden">
                <div className="w-full h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <img 
                    src={streamer.avatar} 
                    alt={streamer.displayName} 
                    className="rounded-full w-16 h-16 border-2 border-primary" 
                  />
                  <div className="flex flex-col">
                    <h3 className="text-xl font-bold flex items-center gap-2">
                      {streamer.displayName}
                      {streamer.liveStatus && (
                        <Badge variant="destructive" className="px-2 py-1 ml-2">LIVE</Badge>
                      )}
                    </h3>
                    <p className="text-muted-foreground text-sm">{streamer.game}</p>
                    {renderPlatformIcons(streamer.platforms)}
                  </div>
                </CardHeader>
                <CardContent className="pt-2">
                  <p className="line-clamp-2 text-sm mb-2">{streamer.bio}</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="h-4 w-4 mr-1" /> {streamer.followers.toLocaleString()} followers
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" asChild className="w-full">
                    <Link to={`/streamers/${streamer.id}`}>View Profile</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
        
        {/* Search and filters */}
        <section className="my-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search streamers or games"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Button 
                variant={filter === "all" ? "default" : "outline"}
                onClick={() => setFilter("all")}
              >
                All
              </Button>
              <Button 
                variant={filter === "live" ? "default" : "outline"}
                onClick={() => setFilter("live")}
                className={filter === "live" ? "bg-destructive hover:bg-destructive/90" : ""}
              >
                Live Now
              </Button>
              <Button 
                variant={filter === "featured" ? "default" : "outline"}
                onClick={() => setFilter("featured")}
              >
                Featured
              </Button>
            </div>
          </div>
        </section>
        
        {/* All streamers section */}
        <section>
          <h2 className="text-2xl font-bold mb-6">All Streamers</h2>
          {filteredStreamers.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filteredStreamers.map(streamer => (
                <Card key={streamer.id}>
                  <CardHeader className="flex flex-row items-center gap-3 pb-2">
                    <img 
                      src={streamer.avatar} 
                      alt={streamer.displayName} 
                      className="rounded-full w-14 h-14 border-2 border-muted" 
                    />
                    <div>
                      <h3 className="font-semibold flex items-center">
                        {streamer.displayName}
                        {streamer.liveStatus && (
                          <Badge variant="destructive" className="ml-2 px-1.5 py-0.5 text-xs">LIVE</Badge>
                        )}
                      </h3>
                      <p className="text-muted-foreground text-sm">{streamer.game}</p>
                      {renderPlatformIcons(streamer.platforms)}
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="line-clamp-2 text-sm text-muted-foreground">{streamer.bio}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" size="sm" asChild className="w-full">
                      <Link to={`/streamers/${streamer.id}`}>View Profile</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-lg text-muted-foreground">No streamers found matching your criteria</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setSearchTerm("");
                  setFilter("all");
                }}
              >
                Clear filters
              </Button>
            </div>
          )}
        </section>
        
        {/* Call to action for new streamers */}
        <section className="mt-10 bg-primary/5 p-8 rounded-lg">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Want to become an official streamer?</h2>
            <p className="mb-6 max-w-2xl mx-auto">Join our Elite Streamer program to get featured on this page, receive special Discord roles, and gain more visibility in our community.</p>
            <Button size="lg" asChild className="bg-indigo-600 hover:bg-indigo-700">
              <Link to="/premium">Join Elite Streamer Program</Link>
            </Button>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default Streamers;
