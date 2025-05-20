
import { useState } from "react";
import { FeaturedStreamers } from "./FeaturedStreamers";
import { StreamerFilters } from "./StreamerFilters";
import { AllStreamers } from "./AllStreamers";
import { StreamerCTA } from "./StreamerCTA";

// Mock data for streamers
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

export const StreamersTab = () => {
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

  const resetFilters = () => {
    setSearchTerm("");
    setFilter("all");
  };

  return (
    <div className="flex flex-col gap-8">
      <FeaturedStreamers streamers={MOCK_STREAMERS} />
      
      <StreamerFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filter={filter}
        setFilter={setFilter}
      />
      
      <AllStreamers
        streamers={filteredStreamers}
        resetFilters={resetFilters}
      />
      
      <StreamerCTA />
    </div>
  );
};