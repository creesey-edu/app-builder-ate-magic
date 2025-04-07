
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";

type CommunityProps = {
  community: {
    id: string;
    name: string;
    description: string;
    memberCount: number;
    image: string;
    tags: string[];
  };
};

export const FeaturedCommunity = ({ community }: CommunityProps) => {
  return (
    <Card className="overflow-hidden group hover:shadow-md transition-all">
      <div 
        className="h-32 w-full bg-cover bg-center" 
        style={{ backgroundImage: `url(${community.image})` }}
      />
      <CardHeader className="p-4">
        <CardTitle className="text-xl">{community.name}</CardTitle>
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
  );
};
