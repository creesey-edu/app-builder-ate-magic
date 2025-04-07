
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Crown, Lock, AlertTriangle } from "lucide-react";

// Mock data for premium communities
const PREMIUM_COMMUNITIES = [
  {
    id: "pc1",
    name: "Pro Gamers League",
    description: "Community for professional gamers and esports enthusiasts",
    memberCount: 1500,
    image: "https://api.dicebear.com/7.x/shapes/svg?seed=ProGamers",
    tags: ["Pro Gaming", "Esports", "Tournaments"],
    isPremium: true
  },
  {
    id: "pc2",
    name: "Exclusive Beta Access",
    description: "Get access to beta games and exclusive testing opportunities",
    memberCount: 720,
    image: "https://api.dicebear.com/7.x/shapes/svg?seed=Beta",
    tags: ["Beta Testing", "Early Access", "Feedback"],
    isPremium: true
  },
  {
    id: "pc3",
    name: "Developer Insights",
    description: "Connect with game developers and get behind-the-scenes insights",
    memberCount: 950,
    image: "https://api.dicebear.com/7.x/shapes/svg?seed=Devs",
    tags: ["Development", "Game Design", "Industry"],
    isPremium: true
  },
  {
    id: "pc4",
    name: "Content Creator Hub",
    description: "Community for streamers, YouTubers and content creators",
    memberCount: 830,
    image: "https://api.dicebear.com/7.x/shapes/svg?seed=Content",
    tags: ["Streaming", "Content Creation", "Collaboration"],
    isPremium: true
  }
];

type PremiumCommunitiesProps = {
  onUpgradeToPremium: () => void;
};

export const PremiumCommunities = ({ onUpgradeToPremium }: PremiumCommunitiesProps) => {
  // In a real app, you would check user's subscription status
  const [isSubscribed, setIsSubscribed] = useState(false);

  if (!isSubscribed) {
    return (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-lg p-6 text-center space-y-4">
          <Crown className="h-12 w-12 mx-auto text-indigo-500" />
          <h3 className="text-xl font-bold">Premium Communities Require a Subscription</h3>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Join our premium communities to connect with professional gamers, 
            get early access to betas, and participate in exclusive tournaments.
          </p>
          <Button onClick={onUpgradeToPremium} className="bg-indigo-600 hover:bg-indigo-700">
            <Crown className="mr-2 h-4 w-4" />
            Upgrade to Premium
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PREMIUM_COMMUNITIES.slice(0, 2).map((community) => (
            <Card key={community.id} className="overflow-hidden group relative">
              <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex flex-col items-center justify-center z-10 space-y-4">
                <Lock className="h-8 w-8 text-muted-foreground" />
                <p className="font-medium">Premium Community</p>
                <Button onClick={onUpgradeToPremium} size="sm" className="bg-indigo-600 hover:bg-indigo-700">
                  Unlock with Premium
                </Button>
              </div>
              <div 
                className="h-24 w-full bg-cover bg-center blur-sm" 
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
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {PREMIUM_COMMUNITIES.map((community) => (
        <Card key={community.id} className="overflow-hidden group hover:shadow-md transition-all">
          <div className="relative">
            <div 
              className="h-24 w-full bg-cover bg-center" 
              style={{ backgroundImage: `url(${community.image})` }}
            />
            <Badge className="absolute top-2 right-2 bg-indigo-600">
              <Crown className="h-3 w-3 mr-1" /> Premium
            </Badge>
          </div>
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
