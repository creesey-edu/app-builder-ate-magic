
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, AlertTriangle } from "lucide-react";

// Mock data for communities
const COMMUNITIES = [
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
  },
  {
    id: "c4",
    name: "Indie Game Spotlight",
    description: "Discover and discuss amazing indie games",
    memberCount: 560,
    image: "https://api.dicebear.com/7.x/shapes/svg?seed=Indie",
    tags: ["Indie", "Game Dev", "Arts"]
  },
  {
    id: "c5",
    name: "Retro Gaming",
    description: "Celebrating classic games from the past",
    memberCount: 890,
    image: "https://api.dicebear.com/7.x/shapes/svg?seed=Retro",
    tags: ["Retro", "Classics", "Nostalgia"]
  },
  {
    id: "c6",
    name: "MOBA Strategies",
    description: "Get better at MOBAs with team strategies and tips",
    memberCount: 1100,
    image: "https://api.dicebear.com/7.x/shapes/svg?seed=MOBA",
    tags: ["MOBA", "Competitive", "Team Play"]
  }
];

type CommunityListProps = {
  searchQuery: string;
};

export const CommunityList = ({ searchQuery }: CommunityListProps) => {
  const filteredCommunities = COMMUNITIES.filter(
    community => 
      community.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      community.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      community.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  if (filteredCommunities.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center bg-muted/30 rounded-lg">
        <AlertTriangle className="h-8 w-8 text-muted-foreground mb-2" />
        <h3 className="text-lg font-medium">No communities found</h3>
        <p className="text-muted-foreground">Try a different search term or check back later</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredCommunities.map((community) => (
        <Card key={community.id} className="overflow-hidden group hover:shadow-md transition-all">
          <div 
            className="h-24 w-full bg-cover bg-center" 
            style={{ backgroundImage: `url(${community.image})` }}
          />
          <CardHeader className="p-4">
            <CardTitle className="text-lg">{community.name}</CardTitle>
            <CardDescription className="flex items-center gap-1">
              <Users className="h-3 w-3" /> 
              {community.memberCount.toLocaleString()} members
            </CardDescription>
          </CardHeader>
          <CardContent className="p-4 pt-0 space-y-4">
            <p className="text-sm text-muted-foreground line-clamp-2">{community.description}</p>
            
            <div className="flex flex-wrap gap-2">
              {community.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="bg-muted/50">{tag}</Badge>
              ))}
            </div>
            
            <div className="flex justify-between">
              <Button variant="outline" size="sm">View</Button>
              <Button size="sm">Join</Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};